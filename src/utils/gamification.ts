/*!
 * @author TRACTION (iamtraction)
 * @copyright 2022
 */
import * as numbers from "./numbers";
import {Message, ChatInputCommandInteraction, GuildTextBasedChannel, APIEmbed} from "discord.js";
import { Guild as GuildDocument } from "../models/Guild";
import { Member } from "../models/Member";
import { Document } from "mongoose";
import RoleModel from "../models/Role";
import { updateBalance } from "./members";
import { Logger } from "@bastion/tesseract";
import {COLORS} from "./constants";

const DEFAUL_LEVELUP_MULTIPLIER = 0.42;
const DEFAUL_CURRENCY_REWARD_MULTIPLIER = 42;
const MAX_LEVEL = 1e10;

const computeLevel = (experience: number, multiplier?: number): number => {
    if (!multiplier) multiplier = DEFAUL_LEVELUP_MULTIPLIER;
    return numbers.clamp(Math.floor(multiplier * Math.sqrt(experience)), MAX_LEVEL);
};

const computeExperience = (level: number, multiplier?: number): number => {
    if (!multiplier) multiplier = DEFAUL_LEVELUP_MULTIPLIER;
    return Math.floor((level / multiplier) * (level / multiplier));
};

const MAX_EXPERIENCE = (multiplier?: number): number => {
    if (!multiplier) multiplier = DEFAUL_LEVELUP_MULTIPLIER;
    return computeExperience(MAX_LEVEL, multiplier);
};

async function handleLevelRoles (message: Message<true> | ChatInputCommandInteraction<"cached">, level: number): Promise<void> {
    const roles = await RoleModel.find({
        guild: message.guild.id,
        level: { $exists: true, $ne: null },
    });

    // check whether there are any level up roles
    if (!roles?.length) return;

    // get the nearest level for which roles are available
    const nearestLevel = numbers.smallestNeighbor(level, roles.map(r => r.level));

    // identify valid roles
    const levelRoles = roles.filter(r => r.level === nearestLevel && message.guild.roles.cache.has(r._id));
    const extraRoles = roles.filter(r => r.level !== nearestLevel && message.guild.roles.cache.has(r._id));

    // update member roles
    if (levelRoles.length) {
        const memberRoles = message.member.roles.cache
            .filter(r => !extraRoles.some(doc => doc.id === r.id))   // remove roles from any other level
            .map(r => r.id)
            .concat(levelRoles.map(doc => doc.id)); // add roles in the current level

        // update member roles
        message.member.roles.set(memberRoles).catch(Logger.error);
    }
}

async function checkLevelUp(message: Message<true> | ChatInputCommandInteraction<"cached">, memberDocument: Member & Document, guildDocument: GuildDocument) {
    const user = message instanceof Message ? message.author : message.user;

    // compute current level from new experience
    const computedLevel: number = computeLevel(memberDocument.experience, guildDocument.gamificationMultiplier);

    // level up
    if (computedLevel > memberDocument.level) {
        // credit reward amount into member's account
        await updateBalance(memberDocument, computedLevel * DEFAUL_CURRENCY_REWARD_MULTIPLIER);

        // achievement message
        if (guildDocument.gamificationMessages) {
            const embed: APIEmbed = {
                color: COLORS.GREEN,
                author: {
                    name: user.tag,
                    icon_url: user.displayAvatarURL(),
                },
                title: "Level Up",
                description: `You are now level **${computedLevel}**!`,
            };
            if (guildDocument.gamificationChannel && message.guild.channels.cache.has(guildDocument.gamificationChannel)) {
                (message.guild.channels.cache.get(guildDocument.gamificationChannel) as GuildTextBasedChannel)
                    .send({
                        embeds: [{
                            ...embed,
                            description: `${user} ${embed.description}`,
                        },],
                    })
                    .catch(Logger.ignore);
            } else if (message instanceof ChatInputCommandInteraction) {
                message.channel
                    .send({
                        embeds: [{
                            ...embed,
                            description: `${user} ${embed.description}`,
                        },],
                    })
                    .catch(Logger.ignore);
            } else {
                message
                    .reply({ embeds: [ embed, ], })
                    .catch(Logger.ignore);
            }
        }

        // reward level roles, if available
        handleLevelRoles(message, computedLevel)
            .catch(Logger.error);
    }

    return computedLevel;
}

export {
    DEFAUL_CURRENCY_REWARD_MULTIPLIER,
    DEFAUL_LEVELUP_MULTIPLIER,
    MAX_LEVEL,
    MAX_EXPERIENCE,
    computeLevel,
    computeExperience,
    checkLevelUp,
    handleLevelRoles
};

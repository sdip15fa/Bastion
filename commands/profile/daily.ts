/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import { Command, Constants } from "tesseract";
import { Message } from "discord.js";

import BastionGuildMember = require("../../structures/GuildMember");

import * as numbers from "../../utils/numbers";

export = class ClaimCommand extends Command {
    constructor() {
        super("claim", {
            description: "It allows you to claim Bastion Coins, that every member receives as a reward for being in the server. You can claim your rewards once every 24 hours.",
            triggers: [ "daily" ],
            arguments: {},
            scope: "guild",
            owner: false,
            typing: true,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [],
            userPermissions: [],
            syntax: [],
        });
    }

    getClaimMessageKey = (streak: number): string => {
        switch (streak) {
        case 1: return "claimStreakFirst";
        case 6: return "claimStreakLast";
        case 7: return "claimStreakClaimed";
        default: return "claimStreak";
        }
    }

    exec = async (message: Message): Promise<void> => {
        const member = message.member as BastionGuildMember;

        // check whether already claimed today
        if (new Date().toDateString() === new Date(member.document.lastClaimed).toDateString()) throw new Error(this.client.locale.getString("en_us", "errors", "alreadyClaimed", message.author.tag));
        // otherwise, update last claim date to today
        member.document.lastClaimed = Date.now();

        // generate the base reward
        let rewardAmount = numbers.getRandomInt(42, 128);

        // reduce the reward into half if the user has been a member for less than 3 days
        if (Date.now() - message.member.joinedTimestamp < 2592e5) {
            rewardAmount /= 2;
        }

        // increment claim streak
        member.document.claimStreak += 1;

        // get claim message for the current streak
        const claimStreakMessage = this.client.locale.getString("en_us", "info", this.getClaimMessageKey(member.document.claimStreak), 7 - member.document.claimStreak);

        // check whether member has completed the streak
        if (member.document.claimStreak === 7) {
            // reset claim streak
            member.document.claimStreak = 0;
            // bonus reward
            rewardAmount += numbers.getRandomInt(512, 1024);
        }

        // double the reward for server boosters
        if (message.member.premiumSinceTimestamp) {
            rewardAmount *= 2;
        }

        // update member's balance
        member.document.balance += rewardAmount;

        // save document
        await member.document.save();

        // acknowledge
        message.channel.send({
            embed: {
                color: Constants.COLORS.IRIS,
                description: this.client.locale.getString("en_us", "info", "claim", message.author.tag) + "\n\n" + claimStreakMessage,
                footer: {
                    text: message.member.premiumSinceTimestamp ? this.client.locale.getString("en_us", "info", "claimRewardBooster") : "",
                },
            },
        }).catch(() => {
            // this error can be ignored
        });
    }
}
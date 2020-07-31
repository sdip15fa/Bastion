/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import { Command, Constants } from "@bastion/tesseract";
import { Message } from "discord.js";

import * as constants from "../../utils/constants";

import BastionGuild = require("../../structures/Guild");
import BastionGuildMember = require("../../structures/GuildMember");


export = class Resume extends Command {
    constructor() {
        super("resume", {
            description: "It allows you to resume the music track that was paused in the server.",
            triggers: [],
            arguments: {},
            scope: "guild",
            owner: false,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [],
            userPermissions: [],
        });
    }

    exec = async (message: Message): Promise<unknown> => {
        const guild = (message.guild as BastionGuild);

        // Check whether music is enabled in the guild
        if (!guild.document.music || !guild.document.music.enabled) {
            return await message.channel.send({
                embed: {
                    color: Constants.COLORS.RED,
                    description: this.client.locale.getString((message.guild as BastionGuild).document.language, "errors", constants.isPublicBastion(message.author) ? "musicDisabledPublic" : "musicDisabled"),
                },
            }).catch(() => {
                // This error can be ignored.
            });
        }

        // Check whether the command user is a Music Master
        if (!(message.member as BastionGuildMember).isMusicMaster()) return;

        if (guild.music.playing && guild.voice && guild.voice.connection.dispatcher && guild.voice.connection.dispatcher.paused) {
            // Resume the dispatcher
            guild.voice.connection.dispatcher.resume();

            const song = guild.music.queue[0];

            const streamTime = guild.voice.connection.dispatcher.streamTime - guild.voice.connection.dispatcher.pausedTime;

            // Acknowledge
            guild.music.textChannel.send({
                embed: {
                    color: Constants.COLORS.PINK,
                    title: "Resumed Playback",
                    description: this.client.locale.getString((message.guild as BastionGuild).document.language, "info", "playbackResume", message.author.tag, song.track),
                    footer: {
                        text: `${Math.floor(streamTime / 6e4)}:${Math.floor((streamTime % 6e4) / 1e3)} / ${song.duration} • ${guild.voice.connection.channel.name}`
                    },
                },
            }).catch(() => {
                // This error can be ignored.
            });
        }
    }
}

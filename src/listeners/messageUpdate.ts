/*!
 * @author TRACTION (iamtraction)
 * @copyright 2022
 */
import { Message, MessageType, PartialMessage, time } from "discord.js";
import { Listener } from "@bastion/tesseract";

import GuildModel from "../models/Guild";
import { logGuildEvent } from "../utils/guilds";
import gitDiff from "git-diff";

class MessageUpdateListener extends Listener<"messageUpdate"> {
    constructor() {
        super("messageUpdate");
    }

    public async exec(oldMessage: Message<boolean> | PartialMessage, newMessage: Message<boolean> | PartialMessage): Promise<void> {
        if (!newMessage.inGuild()) return;
        if (![ MessageType.Default, MessageType.Reply ].includes(newMessage.type)) return;
        if (oldMessage.content === newMessage.content) return;

        const guildDocument = await GuildModel.findById(newMessage.guild.id);

        await logGuildEvent(newMessage.guild, {
            title: "Message Updated",
            url: newMessage.url,
            fields: [
                {
                    name: "ID",
                    value: newMessage.id,
                    inline: true,
                },
                {
                    name: "Author",
                    value: newMessage.author.tag,
                    inline: true,
                },
                {
                    name: "Author ID",
                    value: newMessage.author.id,
                    inline: true,
                },
                {
                    name: "Channel",
                    value: newMessage.channel.name,
                    inline: true,
                },
                {
                    name: "Channel ID",
                    value: newMessage.channelId,
                    inline: true,
                },
                {
                    name: "Sent",
                    value: time(newMessage.createdAt),
                    inline: true,
                },
                guildDocument.logContent && oldMessage.content && newMessage.content && {
                    name: "Diff",
                    value: gitDiff(oldMessage.content, newMessage.content, {
                        noHeaders: true,
                        wordDiff: true
                    })
                        .split("\n")
                        .join("\n"),
                    inline: false,
                },
            ].filter(x => x),
            timestamp: new Date().toISOString(),
        });
    }
}

export = MessageUpdateListener;

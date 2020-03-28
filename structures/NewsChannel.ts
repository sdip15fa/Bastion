/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import { Guild, NewsChannel } from "discord.js";

import TextChannelModel from "../models/TextChannel";

export = class BastionNewsChannel extends NewsChannel {
    constructor(guild: Guild, data: object) {
        super(guild, data);
    }

    public async getDocument() {
        return await TextChannelModel.findById(this.id);
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
const discord_js_1 = require("discord.js");
const ping = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('upload')
        .setDescription('画像のアップロード')
        .addAttachmentOption((option) => option.setName('attachment').setDescription('画像のアップロード').setRequired(true)),
    async execute(interaction) {
        const proxyUrl = interaction.options.get('attachment')?.attachment?.proxyURL;
        await interaction.reply(`${proxyUrl}`);
        console.log(proxyUrl);
        if (typeof proxyUrl === 'undefined')
            return;
        const data = await fetch(proxyUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'image/png',
            },
        });
        console.log(data.body);
    },
};
exports.ping = ping;

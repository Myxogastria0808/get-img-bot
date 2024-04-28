"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.embedMessage = void 0;
const discord_js_1 = require("discord.js");
const embedMessage = new discord_js_1.EmbedBuilder()
    .setColor('#2ad3d0')
    .setTitle('Sample Embed Message')
    .setURL('http://yukiosada.work')
    .setDescription('This is a sample embed message.')
    .setTimestamp();
exports.embedMessage = embedMessage;

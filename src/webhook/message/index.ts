import { EmbedBuilder } from 'discord.js';

const embedMessage: EmbedBuilder = new EmbedBuilder()
    .setColor('#2ad3d0')
    .setTitle('Sample Embed Message')
    .setURL('http://yukiosada.work')
    .setDescription('This is a sample embed message.')
    .setTimestamp();

export { embedMessage };

import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

const ping = {
    data: new SlashCommandBuilder()
        .setName('upload')
        .setDescription('画像のアップロード')
        .addAttachmentOption((option) =>
            option.setName('attachment').setDescription('画像のアップロード').setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        const proxyUrl = interaction.options.get('attachment')?.attachment?.proxyURL;
        await interaction.reply(`${proxyUrl}`);
        console.log(proxyUrl);
        if (typeof proxyUrl === 'undefined') return;
        const data: Response = await fetch(proxyUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'image/png',
            },
        });
        const binary: ReadableStream<Uint8Array> | null = data.body;
    },
};

export { ping };

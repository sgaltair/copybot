const {
	SlashCommandBuilder,
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Returns my button!'),
	async execute(interaction) {
		const button = new ButtonBuilder()
			.setCustomId('sub-yt')
			.setLabel('Click me!')
			.setStyle(ButtonStyle.Primary);

		await interaction.reply({
			components: [new ActionRowBuilder().addComponents(button)],
		});
	},
};

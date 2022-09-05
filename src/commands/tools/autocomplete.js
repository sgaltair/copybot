const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('autocomplete')
		.setDescription('Returns autcomplete')
		.addStringOption((option) =>
			option
				.setName('color')
				.setDescription('A color based on autocomplete.')
				.setAutocomplete(true)
				.setRequired(true),
		),
	async autocomplete(interaction) {
		const focusedValue = interaction.options.getFocused();
		const choices = ['red', 'blue', 'yellow', 'green', 'purple', 'pink'];
		const filtered = choices.filter((choice) =>
			choice.startsWith(focusedValue),
		);
		await interaction.respond(
			filtered.map((choice) => ({ name: choice, value: choice })),
		);
	},
	async execute(interaction) {
		const option = interaction.options.getString('color');
		await interaction.reply({ content: `You told me, "${option}"` });
	},
};

const Suggestion = require('../../schemas/suggestions');
const { SlashCommandBuilder } = require('discord.js');
const mongoose = require('mongoose');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggestion')
		.setDescription('Submit a suggestion for the office/Discord/et cetera')
		.addStringOption((option) =>
			option
				.setName('description')
				.setDescription('Description of your suggestion')
				.setRequired(true),
		),

	async execute(interaction) {
		const scribeDiscord = `${interaction.member.user.username}#${interaction.member.user.discriminator}`;
		const scribeEmail = `${interaction.member.user.email}`;
		const suggestionDescription = interaction.option.getString('description');

		const newSuggestion = new Suggestion({
			_id: mongoose.Types.ObjectId(),
			discordId: `${scribeDiscord}`,
			email: `${scribeEmail}`,
			description: `${suggestionDescription}`,
		});

		await newSuggestion.save().catch(new Date(), console.error);
		await interaction.reply('Thanks for your suggestion!');

	},
};

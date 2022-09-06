// Port the database command to something that can be used for events. For now only worry about one document.
const Preference = require('../../schemas/preferredInfo');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('preferences')
		.setDescription('Edits your preferences in our database')
		.addStringOption((option) =>
			option
				.setName('legalname')
				.setDescription('The name we have for you on record')
				.setRequired(true),
		)
		.addStringOption((option) =>
			option
				.setName('preferredname')
				.setDescription(
					'The name you prefer to go by (first, last, nickname, any combination',
				)
				.setRequired(true),
		)
		.addStringOption((option) =>
			option.setName('pronouns').setDescription('The pronouns you prefer'),
		)
		.addStringOption((option) =>
			option
				.setName('aboutme')
				.setDescription(
					'Any additional notes about yourself you\'d like us to know? Please keep it brief.',
				),
		)
		.addStringOption((option) =>
			option
				.setName('fandoms')
				.setDescription(
					'Any fandoms you\'d like people to know you\'re apart of?',
				),
		),

	async execute(interaction) {
		const scribeDiscord = `${interaction.member.user.username}#${interaction.member.user.discriminator}`;
		const legalName = interaction.options.getString('legalname');
		const preferredName = interaction.options.getString('preferredname');
		const preferredPronouns = interaction.options.getString('pronouns');
		const fandoms = interaction.options.getString('fandoms');
		const aboutMe = interaction.options.getString('aboutme');
		const filter = { scribeDiscord: `${scribeDiscord}` };
		const update = {
			scribe: `${scribeDiscord}`,
			legalName: `${legalName}`,
			preferredName: `${preferredName}`,
			preferredPronouns: `${preferredPronouns}`,
			fandoms: `${fandoms}`,
			aboutMe: `${aboutMe}`,
		};
		const scribeProfile = await Preference.findOneAndUpdate(filter, update, {
			new: true,
			upsert: true,
		});
		await interaction.reply({
			content: 'Profile updated!',
		});
		console.log(new Date(), scribeProfile);
	},
};

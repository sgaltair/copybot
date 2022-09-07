const Preference = require('../../schemas/preferredInfo');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getpreference')
		.setDescription('Returns profile information from the database')
		.addUserOption((option) =>
			option
				.setName('target')
				.setDescription('The Discord user whose profile you\'d like to see')
				.setRequired(true),
		),
	async execute(interaction, client) {
		const user = interaction.options.getUser('target');
		const scribeProfile = await Preference.findOne({
			scribeDiscord: `${user.tag}`,
		});
		if (!scribeProfile) {
			console.log(new Date(), `There is no existing profile for ${user.tag}`);
			await interaction.reply({
				content: `There is no existing profile for ${user.tag}. If that's you, use /preferences to set it up!`,
			});
		}
		else {
			const embed = new EmbedBuilder()
				.setTitle('Profile')
				.setDescription(
					`**Discord ID:** ${scribeProfile.scribeDiscord}\n**Preferred Name:** ${scribeProfile.preferredName}\n**Preferred Pronouns:** ${scribeProfile.preferredPronouns}\n**Fandoms:** ${scribeProfile.fandoms}\n**About Me:** ${scribeProfile.aboutMe}`,
				)
				.setColor(client.color)
				.setThumbnail(user.displayAvatarURL());
			await interaction.reply({
				embeds: [embed],
			});
			console.log(new Date(), scribeProfile);
		}
	},
};

const Event = require('../../schemas/event');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('events')
		.setDescription('Returns the next office event'),
	async execute(interaction, client) {
		const eventProfile = await Event.findOne({ eventId: '0' });
		const embed = new EmbedBuilder()
			.setTitle('Events')
			.setDescription(
				`**Event Name:** ${eventProfile.eventName}\n**Event Date:** ${eventProfile.eventDate}\n**Event Time:** ${eventProfile.eventTime}\n**Event Description:** ${eventProfile.eventDescription}`,
			)
			.setColor(client.color)
			.setThumbnail(client.displayAvatarURL);
		await interaction.reply({
			embeds: [embed],
		});
		console.log(new Date(), eventProfile);
	},
};

// Port the database command to something that can be used for events. For now only worry about one document.
const Event = require('../../schemas/event');
const { SlashCommandBuilder } = require('discord.js');
// const mongoose = require('mongoose');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('events')
		.setDescription('Returns the next office event'),
	async execute(interaction) {
		const eventProfile = await Event.findOne({ eventId: '0' });
		await interaction.reply({
			content: `**Event Name:** ${eventProfile.eventName}\n**Event Date:** ${eventProfile.eventDate}\n**Event Time:** ${eventProfile.eventTime}\n**Event Description:** ${eventProfile.eventDescription}`,
		});
		console.log(new Date(), eventProfile);
	},
};

// Port the database command to something that can be used for events. For now only worry about one document.

const { SlashCommandBuilder } = require('discord.js');
const mongoose = require('mongoose');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('events')
		.setDescription('Returns the next office event'),
	async execute(interaction) {},
};

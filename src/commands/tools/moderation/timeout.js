const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('timeout')
		.setDescription('Time out the member provided')
		.addUserOption((option) =>
			option
				.setName('target')
				.setDescription('The member you\'d like to time out')
				.setRequired(true),
		)
		.addIntegerOption((option) =>
			option
				.setName('time')
				.setDescription('The amount of minutes to time out a member for.'),
		)
		.addStringOption((option) =>
			option
				.setName('reason')
				.setDescription('The reason for timing out the member provided'),
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		let reason = interaction.options.getString('reason');
		let time = interaction.options.getInteger('time');
		const member = await interaction.guild.members
			.fetch(user.id)
			.catch(new Date(), console.error);

		if (!reason) reason = 'No reason provided.';
		if (!time) time = null;
		await member
			.timeout(time == null ? null : time * 60 * 1000, reason)
			.catch(new Date(), console.error);

		await interaction.reply({
			content: `Timed out ${user.tag} succesfully!`,
		});
	},
};

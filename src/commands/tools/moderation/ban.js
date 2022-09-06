const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans the member provided')
		.addUserOption((option) =>
			option
				.setName('target')
				.setDescription('The member you\'d like to ban')
				.setRequired(true),
		)
		.addStringOption((option) =>
			option
				.setName('reason')
				.setDescription('The reason for banning the member provided'),
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const user = interaction.options.getuser('target');
		let reason = interaction.options.getString('reason');
		const member = await interaction.guild.members
			.fetch(user.id)
			.catch(new Date(), console.error);

		if (!reason) reason = 'No reason provided.';

		await member
			.ban({
				deleteMessageDays: 1,
				reason: reason,
			})
			.catch(new Date(), console.error);
		await interaction.reply({
			content: `Banned ${user.tag} succesfully!`,
		});
	},
};

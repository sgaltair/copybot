const {
	SlashCommandBuilder,
	PermissionFlagsBits,
	PermissionsBitField,
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('permission')
		.setDescription('This command requires permission')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const { roles } = interaction.member;
		const role = await interaction.guild.roles
			.fetch('1016088854836560043')
			.catch(console.error);

		const testRole = await interaction.guild.roles
			.create({
				name: 'Test',
				permissions: [PermissionsBitField.Flags.KickMembers],
			})
			.catch(new Date(), console.error);

		// has role
		if (roles.cache.has('1016088854836560043')) {
			await interaction.deferReply({
				fetchReply: true,
			});

			await roles.remove(role).catch(new Date(), console.error);
			await interaction.editReply({
				content: `Removed ${role.name} from you`,
			});
		}
		else {
			await interaction.reply({
				content: `You do not have the ${role.name} role`,
			});
		}

		await roles.add(testRole).catch(new Date(), console.error);

		await testRole
			.setPermissions([PermissionsBitField.Flags.BanMembers])
			.catch(new Date(), console.error);

		const channel = await interaction.guild.channels.create({
			name: 'test',
			permissionOverwrites: [
				{
					id: interaction.guild.id,
					deny: [PermissionsBitField.Flags.ViewChannel],
				},
				{
					id: testRole.id,
					allow: [PermissionsBitField.Flags.ViewChannel],
				},
			],
		});

		await channel.permissionOverwrites
			.edit(testRole.id, {
				SendMessages: false,
			})
			.catch(new Date(), console.error);
	},
};

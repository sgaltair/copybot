const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wiki')
		.setDescription('Displays a link to the wiki'),
	async execute(interaction, client) {
		const embed = new EmbedBuilder()
			.setTitle('CBS Wiki')
			.setColor(client.color)
			.setDescription(
				`Hi, ${interaction.user.tag}! Here's that link: https://cbswiki.com`,
			)
			.setTimestamp();
		await interaction.reply({
			embeds: [embed],
		});
	},
};

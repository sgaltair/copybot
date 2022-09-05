const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const noCache = Math.round(new Date().getTime() / 1000).toString();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('q')
		.setDescription('What da q doin\'?'),
	async execute(interaction, client) {
		const embed = new EmbedBuilder()
			.setTitle('QLIS Tool')
			.setDescription('Fetches the current QLIS image')
			.setColor(client.color)
			.setImage(`https://isame-lab.com/admin/q.png?=${noCache}`)
			.setThumbnail(interaction.user.displayAvatarURL())
			.setDescription(
				`Hi, ${interaction.user.tag}, here's the status of the queue:`,
			)
			.setTimestamp();
		await interaction.reply({
			embeds: [embed],
		});
	},
};

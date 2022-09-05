const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reactor')
		.setDescription('Returns reactions.'),
	async execute(interaction) {
		const message = await interaction.reply({
			content: 'React here',
			fetchReply: true,
		});

		const filter = (reaction, user) => {
			return reaction.emoji.name === '👍' && user.id == interaction.user.id;
		};
		message
			.awaitReactions({ filter, max: 4, time: 10000, errors: ['time'] })
			.then((collected) => console.log(collected.size))
			.catch((collected) => {
				console.log(
					`After 10 seconds, only ${collected.size} out of 4 reacted.`,
				);
			});
	},
};

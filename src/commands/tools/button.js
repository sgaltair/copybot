const {
	SlashCommandBuilder,
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
} = require('discord.js');
const count = require('../../components/buttons/counter.js').data.currentCount;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Number go up!'),
	async execute(interaction) {
		const button = new ButtonBuilder()
			.setCustomId('counter')
			.setLabel('+1')
			.setStyle(ButtonStyle.Primary)
			.setCustomId('countstuff');

		await interaction.reply({
			content: `${count}`,
			components: [new ActionRowBuilder().addComponents(button)],
		});
		// await interaction.update({
		// 	content: `${count}`,
		// });
	},
};

// const msg = await message.channel.send("Beep");
// msg.edit("Boop");

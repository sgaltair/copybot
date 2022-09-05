module.exports = {
	data: {
		name: 'fav-color',
	},
	async execute(interaction) {
		await interaction.reply({
			content: `You said your favorite color is: ${interaction.fields.getTextInputValue(
				'favColorInput',
			)}`,
		});
	},
};

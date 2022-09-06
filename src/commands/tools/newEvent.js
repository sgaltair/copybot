// Port the database command to something that can be used for events. For now only worry about one document.
const Event = require('../../schemas/event');
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('editevent')
		.setDescription('Edits the current office event')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.addStringOption((option) =>
			option
				.setName('name')
				.setDescription('The name of the event')
				.setRequired(true),
		)
		.addStringOption((option) =>
			option.setName('date').setDescription('The event date'),
		)
		.addStringOption((option) =>
			option.setName('time').setDescription('The event time'),
		)
		.addStringOption((option) =>
			option
				.setName('description')
				.setDescription('The description of the event'),
		),

	async execute(interaction) {
		const name = interaction.options.getString('name');
		const date = interaction.options.getString('date');
		const time = interaction.options.getString('time');
		const description = interaction.options.getString('description');
		const filter = { evendId: '0' };
		const update = {
			eventName: `${name}`,
			eventDate: `${date}`,
			eventTime: `${time}`,
			eventDescription: `${description}`,
		};
		const eventProfile = await Event.findOneAndUpdate(filter, update, {
			new: true,
		});
		await interaction.reply({
			content: 'Event updated!',
		});
		console.log(new Date(), eventProfile);
	},
};

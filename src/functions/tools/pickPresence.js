const { ActivityType } = require('discord.js');

module.exports = (client) => {
	client.pickPresence = async () => {
		const options = [
			{
				type: ActivityType.Watching,
				text: 'scary movies',
				status: 'online',
			},
			{
				type: ActivityType.Watching,
				text: 'the downfall of civilization',
				status: 'online',
			},
			{
				type: ActivityType.Listening,
				text: 'to dictations 🤫💩😴',
				status: 'idle',
			},
			{
				type: ActivityType.Playing,
				text: 'with Discord.js',
				status: 'dnd',
			},
		];
		const option = Math.floor(Math.random() * options.length);

		client.user.setPresence({
			activities: [
				{
					name: options[option].text,
					type: options[option].type,
				},
			],
			status: options[option].status,
		});
	};
};

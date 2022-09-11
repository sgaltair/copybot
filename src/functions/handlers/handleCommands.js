const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const fs = require('fs');

module.exports = (client) => {
	client.handleCommands = async () => {
		const commandFolders = fs.readdirSync('./src/commands');
		for (const folder of commandFolders) {
			const commandFiles = fs
				.readdirSync(`./src/commands/${folder}`)
				.filter((file) => file.endsWith('.js'));
			const { commands, commandArray } = client;
			for (const file of commandFiles) {
				const command = require(`../../commands/${folder}/${file}`);
				commands.set(command.data.name, command);
				commandArray.push(command.data.toJSON());
				console.log(
					`Command: ${command.data.name} has been passed through the handler`,
				);
			}
		}

		const clientId = '1016177799263948860';
		const guildId = '753701392639721522';
<<<<<<< HEAD
		const rest = new REST({ version: '9' }).setToken(process.env.token);
=======
>>>>>>> 8cd9d6f86233f62f945405b58adeca92d739655a
		try {
			console.log(`${new Date()}: Started refreshing application (/) commands.`);

			await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
				body: client.commandArray,
			});

			console.log(`${new Date()}: Successfully reloaded application (/) commands.`);
		}
		catch (error) {
			console.error(new Date(), error);
		}
	};
};

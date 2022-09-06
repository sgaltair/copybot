const chalk = require('chalk');

module.exports = {
	name: 'connecting',
	execute() {
		console.log(chalk.cyan(`${new Date()}: [Database Status]: Connecting.`));
	},
};

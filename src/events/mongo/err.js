const chalk = require('chalk');

module.exports = {
	name: 'err',
	execute(err) {
		console.log(
			chalk.red(`${new Date()}: An error occured with the database connection:\n${err}`),
		);
	},
};

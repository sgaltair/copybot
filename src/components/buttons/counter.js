let count = 0;
module.exports = {
	data: {
		name: 'counter',
		currentCount: `${count}`,
	},
	async execute() {
		count++;
	},
};

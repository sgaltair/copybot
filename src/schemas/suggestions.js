const { Schema, model } = require('mongoose');
const eventSchema = new Schema({
	_id: Schema.Types.ObjectId,
	scribeDiscord: String,
	scribeEmail: String,
	suggestionDescription: String,
});

module.exports = model('Suggestion', eventSchema, 'events');

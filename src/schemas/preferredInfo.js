const { Schema, model } = require('mongoose');
const preferredSchema = new Schema({
	_id: Schema.Types.ObjectId,
	scribeDiscord: String,
	legalName: String,
	preferredName: String,
	preferredPronouns: String,
	notes: String,
});

module.exports = model('Preference', preferredSchema, 'preferences');

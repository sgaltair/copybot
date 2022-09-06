const { Schema, model } = require('mongoose');
const eventSchema = new Schema({
	_id: Schema.Types.ObjectId,
	eventId: String,
	eventName: String,
	eventDate: String,
	eventTime: String,
	eventDescription: String,
});

module.exports = model('Event', eventSchema, 'events');

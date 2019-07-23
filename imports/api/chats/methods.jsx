import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Chats } from '../chats/chats';

Meteor.methods({
	insertchat({ name, messages }) {
		new SimpleSchema({
			name: { type: String },
			messages: { type: String }
		}).validate({ name, messages });

		Chats.insert({
			name: name,
			messages: messages
		});
	}
});

import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Chats } from '../chats/chats';

Meteor.methods({
	insertchat({ name, message, createAt }) {
		new SimpleSchema({
			name: { type: String },
			message: { type: String }
		});

		Chats.insert({
			userId: this.userId,
			name: name,
			message: message
		});
	}
});

import { Meteor } from 'meteor/meteor';

import { Chats } from '../chats/chats';

Meteor.methods({
	insertchat({ name, message, createAt }) {
		Chats.insert({
			userId: this.userId,
			name: name,
			message: message,
			createAt: createAt
		});
	}
});

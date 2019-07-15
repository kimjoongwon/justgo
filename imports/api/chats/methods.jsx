import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Chats } from '../chats/chats';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Posts } from '../chats/posts';
import { Logs } from './logs';
import { Accounts } from 'meteor/accounts-base';

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
	},
	insertpost({ title, description, content, identity }) {
		Posts.insert({
			title: title,
			description: description,
			content: content,
			identity: identity
		});

		const userId = Meteor.userId();

		Meteor.users.update(userId, {
			$set: { profile: { postidthatwrote: [ identity ] } }
		});
	},

	editpost({ title, description, content, id }) {
		Posts.update(
			{ id },
			{
				$set: {
					title: title,
					description: description,
					content: content
				}
			}
		);
	},

	removepost({ identity }) {
		Posts.remove({ identity: identity });
	},

	insertlog({ name, log }) {
		new SimpleSchema({
			name: { type: String },
			log: { type: String }
		}).validate({ name, log });

		Logs.insert({
			name: name,
			log: log
		});
	}
});

import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Chats } from '../chats/chats';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Posts } from '../chats/posts';
import { Logs } from './logs';

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
	insertpost({ title, description, content }) {
		new SimpleSchema({
			title: { type: String },
			description: { type: String },
			content: { type: String }
		}).validate({ title, description, content });

		Posts.insert({
			title: title,
			description: description,
			content: content
		});
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

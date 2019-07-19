import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Chats } from '../chats/chats';
import { Posts } from '../chats/posts';




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
	// insertpost({ title, description, content, identity, useridthatwrote }) {
	// 	Posts.insert({
	// 		title: title,
	// 		description: description,
	// 		content: content,
	// 		identity: identity,
	// 		useridthatwrote: useridthatwrote
	// 	});

	// 	Meteor.users.update(useridthatwrote, {
	// 		$set: { profile: { postidthatwrote: [ identity ] } }
	// 	});
	// },
	insertpost({ title, description, content, identity, useridwhowrotehtepost, useridwhogaveheart }) {
		Posts.insert({
			title: title,
			description: description,
			content: content,
			identity: identity,
			useridwhowrotehtepost: useridwhowrotehtepost,
			useridwhogaveheart: useridwhogaveheart
		});

		Meteor.users.update(useridwhowrotehtepost, {
			$set: { profile: { postidthatwrote: [ identity ] } }
		});
	},
	updatecomment({ postid, username, comment, date }) {
		Posts.update(
			{ _id: postid },
			{
				$addToSet: {
					comments: [{
						username: username,
						comment: comment,
						date: date
					}]
				}
			}
		);
	},

	editpost({ title, description, content, id }) {
		console.log('editpost method called');
		Posts.update(
			{ _id: id },
			{
				$set: {
					title: title,
					description: description,
					content: content
				}
			}
		);
	},
	likeuseridinsert({ useridwhogaveheart }) {
		console.log('likeuseridinsert method called');
		Posts.update(
			{},
			{
				$addToSet: {
					useridwhogaveheart: useridwhogaveheart
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

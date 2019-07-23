import { Meteor } from 'meteor/meteor';
import { Posts } from './posts';

Meteor.methods({
	insertpost({ author, postAuthorId, title, description, content }) {
		Posts.insert({
			author: author,
			postAuthorId: postAuthorId,
			title: title,
			description: description,
			content: content,
			comments: [
				{
					username: null,
					message: null
				}
			]
		});

		// Meteor.users.update(postAuthorId, {
		// 	$set: { profile: { myPosts: [ postAuthorId ] } }
		// });
		Meteor.users.update(postAuthorId, {
			$addToSet: { myPosts: postAuthorId }
		});
	},
	updatecomment({ postid, username, comment, date }) {
		Posts.update(
			{ _id: postid },
			{
				$addToSet: {
					comments: {
						username: username,
						comment: comment,
						date: date
					}
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
	}
});

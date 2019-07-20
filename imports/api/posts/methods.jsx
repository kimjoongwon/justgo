import { Meteor } from 'meteor/meteor';
import { Posts } from './posts';

Meteor.methods({
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
					comments: [
						{
							username: username,
							comment: comment,
							date: date
						}
					]
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

import { Meteor } from 'meteor/meteor';
import { Posts } from '../posts';

Meteor.publish('post', function(id) {
	return Posts.find({ _id: id });
});

Meteor.publish('posts', function() {
	return Posts.find();
});

Meteor.publish('posts.favorites', function post() {
	return Posts.find({ hearts: this.userId });
});

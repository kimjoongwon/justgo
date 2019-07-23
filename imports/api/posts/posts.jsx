import { Mongo } from 'meteor/mongo';

class PostsCollection extends Mongo.Collection {}

export const Posts = new PostsCollection('Posts'); 

Posts.allow({
	update() {
		return true;
	}
});

Posts.allow({
	remove() {
		return true;
	}
});

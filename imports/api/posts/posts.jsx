import { Mongo } from 'meteor/mongo';

class PostsCollection extends Mongo.Collection {}

export const Posts = new PostsCollection('Posts');

// Posts.schema = new SimpleScheme({
// 	author: { type: String },
// 	postAuthorId: { type: String },
// 	title: { type: String },
// 	description: { type: String },
// 	content: { type: String },
// 	comments: [ { username: { type: String }, comment: { type: String } } ],
// 	hearts: { type: [ String ] }
// 3
// Posts.attachSchema(Posts.schema);
Posts.allow({
	insert() {
		return true;
	},
	update() {
		return true;
	},
	remove() {
		return true;
	}
});

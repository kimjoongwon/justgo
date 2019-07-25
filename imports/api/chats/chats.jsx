import { Mongo } from 'meteor/mongo';

class ChatsCollection extends Mongo.Collection {}

export const Chats = new ChatsCollection('Chats');

Chats.schema = new SimpleSchema({
	userId: { type: String },
	name: { type: String },
	message: { type: String }
});

Chats.attachSchema(Chats.schema);

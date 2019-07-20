import { Mongo } from 'meteor/mongo';

class ChatsCollection extends Mongo.Collection {}

export const Chats = new ChatsCollection('Chats');

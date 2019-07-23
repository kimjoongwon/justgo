import { withTracker } from 'meteor/react-meteor-data';
import { Chats } from '../api/chats/chats';
import { Posts } from '../api/posts/posts';
import { Meteor } from 'meteor/meteor';
import ChatWindow from '../ui/pages/chat/ChatWindow';

const ChatsContainer = withTracker(() => {
	Meteor.subscribe('chats').ready();
	Meteor.subscribe('users').ready();

	return {
		chats: Chats.find({}).fetch() || {},
		user: Meteor.userId() || {},
		users: Meteor.users.find().fetch() || {}
	};
})(ChatWindow);

export default ChatsContainer;

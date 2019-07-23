import { withTracker } from 'meteor/react-meteor-data';
import { Chats } from '../api/chats/chats';
import { Posts } from '../api/posts/posts';
import { Meteor } from 'meteor/meteor';
import App from '../ui/App';

const AppContainer = withTracker(() => {
	Meteor.subscribe('users').ready();

	return {
		user: Meteor.userId() || {},
		users: Meteor.users.find().fetch() || {}
	};
})(App);

export default AppContainer;

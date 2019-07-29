import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import App from '../ui/App';

const AppContainer = withTracker(() => {
	Meteor.subscribe('users').ready();
	Meteor.subscribe('currentuser');

	return {
		user: Meteor.userId() || {},
		users: Meteor.users.find().fetch() || {},
		currentUser: Meteor.user()
	};
})(App);

export default AppContainer;

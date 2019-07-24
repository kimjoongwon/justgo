import { withTracker } from 'meteor/react-meteor-data';
import { Chats } from '../api/chats/chats';
import { Posts } from '../api/posts/posts';
import { Meteor } from 'meteor/meteor';
import App from '../ui/App';
import ModifyUserPw from '../ui/pages/modifyUserPw';

const UserInfoContainer = withTracker(() => {
	Meteor.subscribe('users').ready();

	return {
		currentUser: Meteor.user() || {}
	};
})(ModifyUserPw);

export default UserInfoContainer;

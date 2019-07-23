import { withTracker } from 'meteor/react-meteor-data';
import { Chats } from '../api/chats/chats';
import { Posts } from '../api/posts/posts';
import { Meteor } from 'meteor/meteor';
import MemberStatusInfo from '../ui/pages/member/MemberStatusInfo';

const MemberContainer = withTracker(() => {
	Meteor.subscribe('users').ready();
	Meteor.subscribe('userStatus').ready();
	return {
		user: Meteor.userId() || {},
		users: Meteor.users.find().fetch() || {}
	};
})(MemberStatusInfo);

export default MemberContainer;
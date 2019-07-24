import { withTracker } from 'meteor/react-meteor-data';
import { Chats } from '../api/chats/chats';
import { Posts } from '../api/posts/posts';
import { Meteor } from 'meteor/meteor';
import MemberStatusInfo from '../ui/pages/member/MemberStatusInfo';

const MemberContainer = withTracker(() => {
	Meteor.subscribe('users').ready();
	Meteor.subscribe('userStatus').ready();
	console.log(Meteor.users.find({ 'status.online': true }, { fields: { status: 1 } }).fetch());
	return {
		user: Meteor.user() || {},
		users: Meteor.users.find().fetch() || {},
		statusUsers: Meteor.users.find({ 'status.online': true }, { fields: { status: 1 } }).fetch()
	};
})(MemberStatusInfo);

export default MemberContainer;

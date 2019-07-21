import { withTracker } from 'meteor/react-meteor-data';
import { Chats } from '../api/chats/chats';
import { Posts } from '../api/posts/posts';
import { Meteor } from 'meteor/meteor';
import MemberStatusInfo from '../ui/pages/member/MemberStatusInfo';

const MemberContainer = withTracker(() => {
	Meteor.subscribe('chats').ready();
	Meteor.subscribe('posts').ready();
	Meteor.subscribe('user.profile').ready();
	Meteor.subscribe('users.list').ready();

	return {
		chats: Chats.find({}).fetch() || {},
		posts: Posts.find({}).fetch() || {},
		phone: Meteor.users.find({}, { fields: { phones: 1 } }).fetch() || {},
		user: Meteor.userId() || {},
		users: Meteor.users.find().fetch() || {}
	};
})(MemberStatusInfo);

export default MemberContainer;

import { Meteor } from 'meteor/meteor';

Meteor.publish('user.profile', function() {
	return Meteor.users.find(this.userId, {
		fields: { phones: 1 }
	});
});

Meteor.publish('users.list', function() {
	return Meteor.users.find();
});

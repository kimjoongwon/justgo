import { Meteor } from 'meteor/meteor';

Meteor.publish('users', function() {
	return Meteor.users.find();
});

Meteor.publish('user', function() {
	return Meteor.user();
});

// Meteor.publish("currentuser", function() {
//   return Meteor.user();
// });
Meteor.publish('userStatus', function() {
	return Meteor.users.find({ 'status.online': true });
});

import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

Accounts.onCreateUser((options, user) => {
	// user.phone = options.profile.phone;

	user.profile = {
		username: options.profile.username,
		phone: options.profile.phone,
		myLikePosts: options.profile.myLikePosts,
		myPosts: options.profile.myPosts
	};

	return user;
});

import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

Accounts.onCreateUser((options, user) => {
	
	// user.phones = options.profile.phone;

	user.profile = {
		username: options.profile.name,
    	phone: options.profile.phone,  
		postidthatgaveheart: [],
		postidthatiwrote: [],
		postidthatwrote: []
	};

	return user;
});

import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";

Accounts.onCreateUser((options, user) => {
  //   const name = options.profile.name;
  //   const phone = options.profile.phone;
  //   const postidthatgaveheart = options.profile.postidthatgaveheart;
  //   console.log(user.userId)
  const newMailingAddress = {
    addressCountry: 'US',
    addressLocality: 'Seattle',
    addressRegion: 'WA',
    postalCode: '98052',
    streetAddress: "20341 Whitworth Institute 405 N. Whitworth"
  };

  user.phones = options.profile.phone

  user.profile = {
    name: options.profile.name,
    phone: options.profile.phone,
    postidthatgaveheart: options.profile.postidthatgaveheart,
    postidthatiwrote: options.profile.postidthatiwrote,
    postidthatwrote: options.profile.postidthatwrote
  };

  return user;
});

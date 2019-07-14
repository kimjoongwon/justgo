import { Meteor } from "meteor/meteor";
import { Chats } from "../chats";
import { Posts } from "../posts";
import { Logs } from "../logs";

Meteor.publish("chats", function() {
  return Chats.find({});
});

Meteor.publish("posts", function() {
  return Posts.find({});
});

Meteor.publish("logs", function() {
  return Logs.find({});
});

Meteor.publish("user.profile", function() {
  return Meteor.users.find(this.userId, {
    fields: { phones: 1 }
  });
});

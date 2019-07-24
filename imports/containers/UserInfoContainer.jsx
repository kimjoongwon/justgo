import { withTracker } from "meteor/react-meteor-data";
import { Chats } from "../api/chats/chats";
import { Posts } from "../api/posts/posts";
import { Meteor } from "meteor/meteor";
import App from "../ui/App";
import ModifyUserPw from "../ui/pages/ModifyUserPw";

const UserInfoContainer = withTracker(() => {
  Meteor.subscribe("users").ready();
  Meteor.subscribe("currentuser").ready();
  
  return {
    user: Meteor.userId() || {},
    users: Meteor.users.find().fetch() || {},
    currentUser: Meteor.user()
  };
})(ModifyUserPw);

export default UserInfoContainer;

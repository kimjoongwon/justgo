import { withTracker } from "meteor/react-meteor-data";
import { Chats } from "../api/chats/chats";
import { Posts } from "../api/chats/posts";
import { Meteor } from "meteor/meteor";
import { Logs } from "../api/chats/logs";
import App from "../ui/App";

const AppContainer = withTracker(() => {
  const loading1 = Meteor.subscribe("chats").ready();
  const loading2 = Meteor.subscribe("posts").ready();
  const loading3 = Meteor.subscribe("logs").ready();
  const loading4 = Meteor.subscribe("user.profile").ready();

  console.log(loading1);
  console.log(loading2);
  console.log(loading3);
  console.log(loading4);

  return {
    chats: Chats.find({}).fetch(),
    posts: Posts.find({}).fetch(),
    logs: Logs.find({}).fetch(),
    phone: Meteor.users.find({}, { fields: { 'phones': 1 } }).fetch(),
    user: Meteor.userId(),
    loading: !(loading1 && loading2 && loading3 && loading4)
  };
})(App);
// ,{fields:{name:1,phone:1}
export default AppContainer;

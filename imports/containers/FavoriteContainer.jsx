import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../api/posts/posts";
import UserFavoritePost from "../ui/pages/posts/UserFavoritePost";

const FavoriteContainer = withTracker(({}) => {
  Meteor.subscribe("posts.favorites");

  return {
    favoritePosts: Posts.find().fetch() || {}
  };
})(UserFavoritePost);

export default FavoriteContainer;

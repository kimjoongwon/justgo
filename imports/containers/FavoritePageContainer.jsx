import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../api/posts/posts";
import UserFavoritePostsPage from "../ui/pages/posts/UserFavoritePostsPage";

const FavoritePageContainer = withTracker(({}) => {
  Meteor.subscribe("posts.favorites");

  return {
    favoritePosts: Posts.find().fetch() || {}
  };
})(UserFavoritePostsPage);

export default FavoritePageContainer;

import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../api/posts/posts";
import FavoritePost from "../ui/pages/posts/FavoritePost";

const DetailFavoriteContainer = withTracker(({ match }) => {
  const { id } = match.params;
  
  Meteor.subscribe("posts.detailpost", id);

  return {
    favoritePost: Posts.findOne(id)
  };
})(FavoritePost);

export default DetailFavoriteContainer;

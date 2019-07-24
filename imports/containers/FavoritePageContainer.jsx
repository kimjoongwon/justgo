import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/posts/posts';
import UserFavoritePostsPage from '../ui/pages/posts/UserFavoritePostsPage';

const FavoritePageContainer = withTracker((match) => {
	Meteor.subscribe('posts.favorites');
	console.log(match);
	const id = match.params;
	console.log(Posts.find().fetch());
	return {
		favoritePosts: Posts.find().fetch() || {},
		favoritePost: Posts.find(id).fetch()
	};
})(UserFavoritePostsPage);

export default FavoritePageContainer;

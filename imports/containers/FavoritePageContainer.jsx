import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/posts/posts';
import FavoritePage from '../ui/pages/posts/UserFavoritePostsPage';

const FavoritePageContainer = withTracker(({}) => {
	Meteor.subscribe('posts.favorites');
    
	console.log(Post.find({ hearts: this.userId }));
	return {
		favoritePosts: Posts.find({}) || {}
	};
})(FavoritePage);

export default FavoritePageContainer;

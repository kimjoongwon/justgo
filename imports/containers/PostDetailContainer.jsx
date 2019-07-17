import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/chats/posts';
import PostsDetailPage from '../ui/PostsDetailPage.jsx';

const PostDetailContainer = withTracker(({ match }) => {
	console.log('=================== withTracker =========================');
	const { id } = match.params;
	const handler = Meteor.subscribe('post.detail', { postid: id });
	// Meteor.subscribe('posts');

	return {
		post: Posts.find(id).fetch(),
		// posts: Posts.find({}).fetch(),
		loading: !handler
	};
})(PostsDetailPage);

export default PostDetailContainer;

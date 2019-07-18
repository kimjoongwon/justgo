import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/chats/posts';
import PostsDetailPage from '../ui/PostsDetailPage.jsx';

const PostDetailContainer = withTracker(({ match }) => {
	console.log('=================== withTracker =========================');
	const { id } = match.params;
	console.log('withTracker id: ', id);
	const handler = Meteor.subscribe('post.detail', { postid: id });
	// Meteor.subscribe('posts');

	const post = Posts.findOne(id)
	console.log('post: ', post) 
	return {		
		post: Posts.findOne(id) || {},
		// posts: Posts.find({}).fetch(),
		loading: !handler
	};
})(PostsDetailPage);

export default PostDetailContainer;

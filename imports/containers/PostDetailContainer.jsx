import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/chats/posts';
import PostsDetailPage from '../ui/PostsDetailPage.jsx';

const PostDetailContainer = withTracker(({ match }) => {
	const { id } = match.params;
	const handler = Meteor.subscribe('post.detail', { postid: id });

	return {
		post: Posts.find(id).fetch(),
		loading: !handler
	};
})(PostsDetailPage);

export default PostDetailContainer;

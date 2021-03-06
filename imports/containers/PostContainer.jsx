import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/posts/posts';
import Post from '../ui/pages/posts/Post';

const PostContainer = withTracker(({ match }) => {
	const { id } = match.params;

	const isloading = Meteor.subscribe('post', id).ready();

	post = Posts.find().fetch();

	return {
		post: Posts.findOne({ _id: id }) || {}
	};
})(Post);

export default PostContainer;

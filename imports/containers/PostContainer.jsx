import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/posts/posts';
import Post from '../ui/pages/posts/Post';

const PostContainer = withTracker(({ match }) => {
	const { id } = match.params;
	console.log(id);

	const isloading = Meteor.subscribe('post', id).ready();
	console.log(isloading, '==========콘테이너는 실행 ===============');
	post = Posts.find().fetch();
	console.log(post);

	console.log(Posts.find({ _id: 'u7aaMoE6a7wdrQRoi' }).fetch());
	console.log(Posts.find({ _id: id }).fetch());

	return {
		post: Posts.findOne({ _id: id }) || {}
	};
})(Post);

export default PostContainer;

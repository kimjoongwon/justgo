import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/posts/posts';
import DetailPost from '../ui/pages/posts/DetailPost';

const PostContainer = withTracker(({ match }) => {
	console.log(match);

	const { id } = match.params;

	Meteor.subscribe('post', { postid: id });

	return {
		post: Posts.findOne(id)
	};
})(DetailPost);

export default PostContainer;

// 다 가져올 이유가 있나? 다 가져오면 느린데? 하나만 볼껀데?
// post와 posts도 나눠야 하나? 허거덩...?!

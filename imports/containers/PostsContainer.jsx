import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/posts/posts';
import SummaryPosts from '../ui/pages/posts/SummaryPosts';

const PostsContainer = withTracker(({}) => {
	// const { id } = match.params;
	// Meteor.subscribe('post', { postid: id });
	// 다 가져올 이유가 있나? 다 가져오면 느린데? 하나만 볼껀데?
	Meteor.subscribe('posts');
	// 일단 다 가져와야하는데... 흠..

	// post와 posts도 나눠야 하나? 허거덩...?!
	return {
		posts: Posts.find().fetch()
	};
})(SummaryPosts);

export default PostsContainer;

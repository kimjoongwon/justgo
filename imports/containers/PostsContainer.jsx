import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/posts/posts';
import SummaryPosts from '../ui/pages/posts/SummaryPosts';

const PostsContainer = withTracker(({}) => {
	Meteor.subscribe('posts');
	posts = Posts.find().fetch();
	console.log(posts);
	return {
		posts: Posts.find().fetch()
	};
})(SummaryPosts);

export default PostsContainer;

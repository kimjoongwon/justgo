import React, { Component } from 'react';
import LoginPage from './LoginPage';
import JoinPage from './JoinPage';
import { withTracker } from 'meteor/react-meteor-data';
import { Chats } from '../api/chats/chats';
import ChatPage from '../../imports/ui/ChatPage';
import shortid from 'shortid';
import { Button, Form, List } from 'semantic-ui-react';
import insert from '../api/chats/methods';
import updateMessage from '../api/chats/methods';
import { PostsPage } from './PostsPage';
import { Posts } from '../api/chats/posts';
import { PostsList } from '../ui/PostsList';
// import Meteor from 'meteor/meteor'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', message: '' };
		this.onMessageSubmit = this.onMessageSubmit.bind(this);
		this.handleMessage = this.handleMessage.bind(this);
	}

	onMessageSubmit() {
		const chats = this.props.chats;
		console.log(chats);
		const messages = this.state.message;

		Meteor.call(
			'insertchat',
			{
				name: 'name',
				messages: messages
			},
			(err, res) => {
				if (err) {
					alert(err);
					//    여기서 NOT FOUND NOT Mehthod 에러가 발생 server.js에 import 빠짐. structure study
				} else {
				}
			}
		);
	}

	handleMessage(e) {
		const message = e.target.value;
		this.setState({ message: message });
	}

	render() {
		const chats = this.props.chats;
		const posts = this.props.posts;
		let Chats;
		let Posts;
		Chats = chats.map((chat) => <ChatPage name={chat.name} message={chat.messages} key={shortid.generate()} />);
		Posts = posts.map((post) => (
			<PostsList
				title={post.title}
				description={post.description}
				content={post.content}
				key={shortid.generate()}
			/>
		));

		return (
			<div>
				<LoginPage />
				<JoinPage />
				<div>{Chats}</div>
				<div>
					<Form.Input
						fluid
						iconPosition="left"
						placeholder="message"
						type="text"
						onChange={this.handleMessage}
					/>

					<Button onClick={this.onMessageSubmit}>전달</Button>
				</div>
				<PostsPage />
				{Posts}
			</div>
		);
	}
}

export default withTracker(() => {
	const loading1 = Meteor.subscribe('chats').ready();
	const loading2 = Meteor.subscribe('posts').ready();
	const loading3 = Meteor.subscribe('users').ready();
	console.log(loading1);
	console.log(loading2);
	console.log(loading3);

	return {
		chats: Chats.find({}).fetch(),
		posts: Posts.find({}).fetch(),
		users: users
	};
})(App);

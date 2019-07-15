import React, { Component } from 'react';
import LoginPage from './LoginPage';
import JoinPage from './JoinPage';
import ChatPage from '../../imports/ui/ChatPage';
import shortid from 'shortid';
import { Button, Form, List, Label, Text, Container, Grid } from 'semantic-ui-react';
import { PostsPage } from './PostsPage';
import { PostsList } from '../ui/PostsList';
import { Meteor } from 'meteor/meteor';
import { LogsList } from '../ui/LogsList';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Test from './Test';
import Profile from '../ui/Profile';
import MessageInput from '../ui/components/MessageInput';
import PostDetailContainer from '../containers/PostDetailContainer';


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', message: '', profile: {} };
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
				} else {
				}
			}
		);
	}

	handleMessage(e) {
		const message = e.target.value;
		this.setState({ message: message });
	}
	componentWillUpdate() {}

	render() {
		const { loading, posts, chats, user, logs, phone } = this.props;

		// console.log(phone);
		// console.log(Meteor.user());
		let SS;
		let Chats;
		let Posts;
		let Logs;
		// const phones = Meteor.users.find({ userId: user }, { field: { phones: 1, _id: 0 } }).fetch();
		// const sss = Meteor.users.find({ userId: userId }).fetch();
		//     const ss = sss.map(ss => (name = ss.emails[0].address));
		// SS = phones.map(phone => (<Test phone={phone[0].phones} /> ))
		// console.log(phoness)
		// Test = phone.map(phon => <Test phone={phon.phones} />);
		// console.log(phones)
		console.log(new Date());
		console.log(user);

		Chats = chats.map((chat) => <ChatPage name={chat.name} message={chat.messages} key={shortid.generate()} />);
		Logs = logs.map((log) => <LogsList name={log.name} log={log.log} key={shortid.generate()} />);

		Posts = posts.map((post) => (
			// <NavLink
			// to={'posts/${post._id}'}
			// key={post._id}
			// >
			//   </NavLink>
			<NavLink to={`/posts/${post._id}`} key={post._id} className="post" activeClassName="active">
				<PostsList
					title={post.title}
					description={post.description}
					content={post.content}
					key={shortid.generate()}
				/>
			</NavLink>
		));
		// {
		//   /* <PostsPage user={user}/> */
		// }
		// {
		//   /* {Posts} */
		// }
		return (
			<BrowserRouter>
				<MainHeader user={user} phone={phone} />
				<Route
					exact
					path="/"
					render={() => (
						<div>
							<div className="main-container">
								<div className="log-container">{Logs}</div>
								<Profile />
								<div className="chat-container">
									{Chats}
									<MessageInput />
								</div>
							</div>
							<Grid columns={3} stackable={3} celled divided>
								{Posts}
							</Grid>
						</div>
					)}
				/>
				<Route path="/signin" component={LoginPage} />
				<Route path="/join" component={JoinPage} />
				<Route path="/blogwrite" component={PostsPage} />
        <Route path="/posts/:id" render={(props) => <PostDetailContainer {...props} />} />
				{/* <div className="main-container">
					<div className="log-container">{Logs}</div>
					<div className="chat-container">
						{Chats}
						<MessageInput />
					</div>
					<Profile />
				</div> */}

				{/* <div>
          <Button>{profile}</Button>
          </div> */}
			</BrowserRouter>
		);
	}
}

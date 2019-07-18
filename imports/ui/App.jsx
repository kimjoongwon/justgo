import React, { Component } from 'react';
import LoginPage from './LoginPage';
import JoinPage from './JoinPage';
import ChatPage from '../../imports/ui/ChatPage';
import shortid from 'shortid';
import { Button, Form, List, Label, Text, Container, Grid } from 'semantic-ui-react';
import { PostsPage } from './PostsPage';
import { SummaryPostPage } from './SummaryPostPage';
import { Meteor } from 'meteor/meteor';
import { LogsList } from '../ui/LogsList';
import { BrowserRouter, Route, Link, NavLink, Redirect } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Profile from '../ui/Profile';
import MessageInput from '../ui/components/MessageInput';
import PostDetailContainer from '../containers/PostDetailContainer';
import { PrivateRoute } from './components/PrivateRoute';
import ChatMemberListPage from './ChatMemberListPage';
import PostsDetailPage from './PostsDetailPage';
import IGaveYouFavoritePostsPage from './IGaveYouFavoritePostsPage';

export default class App extends Component {
	constructor(props) {
		super(props);
		console.log('App +++++++++++++++++++++++++++++++++++++++++++++');
		this.state = { name: '', message: '', profile: {}, username: '', email: '', phone: '' };
		this.onMessageSubmit = this.onMessageSubmit.bind(this);
		this.handleMessage = this.handleMessage.bind(this);
		this.MemberInfoHandler = this.MemberInfoHandler.bind(this);
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
	MemberInfoHandler(e, phone, username, email) {
		this.setState({ phone: phone, username: username, email: email });
	}

	handleMessage(e) {
		const message = e.target.value;
		this.setState({ message: message });
	}

	render() {
		const { posts, chats, user, logs, phone, users } = this.props;
		console.log('==================', users);
		let Chats;
		let Posts;
		let Logs;
		let ChatMemberList;
		Chats = chats.map((chat) => <ChatPage name={chat.name} message={chat.messages} key={shortid.generate()} />);
		Logs = logs.map((log) => <LogsList name={log.name} log={log.log} key={shortid.generate()} />);
		Posts = posts.map((post) => (
			<NavLink to={`/posts/${post._id}`} key={post._id} className="post" activeClassName="active">
				<SummaryPostPage
					title={post.title}
					description={post.description}
					content={post.content}
					key={shortid.generate()}
				/>
			</NavLink>
		));

		ChatMemberList = users.map((user) => (
			<ChatMemberListPage user={user} MemberInfoHandler={this.MemberInfoHandler} key={shortid.generate()} />
		));

		return (
			<BrowserRouter>
				<MainHeader user={user} phone={phone} />
				<Route
					exact
					path="/"
					render={() => (
						<div>
							<div className="main-container">
								<div className="log-container">
									<List>{ChatMemberList}</List>
								</div>
								<Profile
									username={this.state.username}
									email={this.state.email}
									phone={this.state.phone}
								/>
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
				<PrivateRoute path="/posts/:id" component={PostDetailContainer} />
				<Route path="/favoriteposts" component={IGaveYouFavoritePostsPage} />
			</BrowserRouter>
		);
	}
}

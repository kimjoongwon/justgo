import React, { Component } from 'react';
import Login from './pages/Login';
import Join from './pages/Join';
import ChatWindow from './pages/ChatWindow';
import shortid from 'shortid';
import { List, Grid } from 'semantic-ui-react';
import { PostWrite } from './pages/PostWrite';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Profile from '../ui/Profile';
import MessageInput from '../ui/components/MessageInput';
import PostsContainer from '../containers/PostsContainer';
import ChatMemberInfo from './pages/ChatMemberInfo';
import IGaveYouFavoritePostsPage from './UserFavoritePostsPage';
import UserFavoritePostsPage from './UserFavoritePostsPage';
import PostContainer from '../containers/PostContainer';
import faker from 'faker';
import MemberSearch from './components/MemberSearch';

import _ from 'lodash';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', message: '', profile: {}, username: '', email: '', phone: '' };
		this.handleMessage = this.handleMessage.bind(this);
		this.MemberInfoHandler = this.MemberInfoHandler.bind(this);
		this.renderChatMemberInfo = this.renderChatMemberInfo.bind(this);
		this.renderChatWindow = this.renderChatWindow.bind(this);
		const source = _.times(5, () => ({
			title: faker.company.companyName(),
			description: faker.company.catchPhrase(),
			image: faker.internet.avatar(),
			price: faker.finance.amount(0, 100, 2, '$')
		}));

		console.log(source, '========');
	}

	MemberInfoHandler(e, phone, username, email) {
		this.setState({ phone: phone, username: username, email: email });
	}

	handleMessage(e) {
		const message = e.target.value;
		this.setState({ message: message });
	}

	renderChatMemberInfo() {
		return (
			<div>
				<MemberSearch users={this.props.users} MemberInfoHandler={this.MemberInfoHandler} />

				<List celled>
					{this.props.users.map((user) => (
						<ChatMemberInfo
							user={user}
							MemberInfoHandler={this.MemberInfoHandler}
							key={shortid.generate()}
						/>
					))}
				</List>
			</div>
		);
	}

	renderChatWindow() {
		return (
			<div className="chat-container">
				{this.props.chats.map((chat) => (
					<ChatWindow name={chat.name} message={chat.messages} key={shortid.generate()} />
				))}
				<MessageInput />
			</div>
		);
	}

	render() {
		const { user, phone } = this.props;
		console.log('====================');
		return (
			<BrowserRouter>
				<MainHeader user={user} phone={phone} />
				<Route
					exact
					path="/"
					render={() => (
						<div>
							<div className="main-container">
								<div className="chat-member-container">{this.renderChatMemberInfo()}</div>
								<div className="chat-member-profile">
									<Profile
										username={this.state.username}
										email={this.state.email}
										phone={this.state.phone}
									/>
								</div>
								<div className="chat-window-container">{this.renderChatWindow()}</div>
							</div>
							<div className="summary-posts-container">
								<PostsContainer />
							</div>
						</div>
					)}
				/>
				<Route path="/signin" component={Login} />
				<Route path="/blogwrite" component={PostWrite} />
				<Route path="/join" component={Join} />
				<Route path="/posts/:id" component={PostContainer} />
				<Route path="/favoriteposts" component={IGaveYouFavoritePostsPage} />
				<Route path="/dashboard" render={(props) => <UserFavoritePostsPage {...props} />} />
			</BrowserRouter>
		);
	}
}

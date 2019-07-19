import React, { Component } from 'react';
import LoginPage from './LoginPage';
import JoinPage from './pages/JoinPage';
import ChatWindow from './pages/ChatWindow';
import shortid from 'shortid';
import { List, Grid } from 'semantic-ui-react';
import { PostsPage } from './PostsPage';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Profile from '../ui/Profile';
import MessageInput from '../ui/components/MessageInput';
import PostDetailContainer from '../containers/PostDetailContainer';
import ChatMemberInfo from './pages/ChatMemberInfo';
import IGaveYouFavoritePostsPage from './UserFavoritePostsPage';
import UserFavoritePostsPage from './UserFavoritePostsPage';
import SummaryPostPage from './SummaryPostPage';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', message: '', profile: {}, username: '', email: '', phone: '' };
		this.handleMessage = this.handleMessage.bind(this);
		this.MemberInfoHandler = this.MemberInfoHandler.bind(this);
	}

	MemberInfoHandler(e, phone, username, email) {
		this.setState({ phone: phone, username: username, email: email });
	}

	handleMessage(e) {
		const message = e.target.value;
		this.setState({ message: message });
	}

	render() {
		const { posts, chats, user, phone, users } = this.props;
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
									<List>
										{users.map((user) => (
											<ChatMemberInfo
												user={user}
												MemberInfoHandler={this.MemberInfoHandler}
												key={shortid.generate()}
											/>
										))}
									</List>
								</div>
								<Profile
									username={this.state.username}
									email={this.state.email}
									phone={this.state.phone}
								/>
								<div className="chat-container">
									{chats.map((chat) => (
										<ChatWindow name={chat.name} message={chat.messages} key={shortid.generate()} />
									))}
									<MessageInput />
								</div>
							</div>
							<Grid columns={3} celled divided>
								{posts.map((post) => (
									<NavLink
										to={`/posts/${post._id}`}
										key={post._id}
										className="post"
										activeClassName="active"
									>
										<SummaryPostPage
											title={post.title}
											description={post.description}
											content={post.content}
											key={shortid.generate()}
										/>
									</NavLink>
								))}
							</Grid>
						</div>
					)}
				/>
				<Route path="/signin" component={LoginPage} />
				<Route path="/join" component={JoinPage} />
				<Route path="/blogwrite" component={PostsPage} />
				<Route path="/posts/:id" component={PostDetailContainer} />
				<Route path="/favoriteposts" component={IGaveYouFavoritePostsPage} />
				<Route path="/dashboard" render={(props) => <UserFavoritePostsPage {...props} />} />
			</BrowserRouter>
		);
	}
}

import React, { Component } from 'react';
import Login from './pages/Login';
import Join from './pages/Join';
import { PostWrite } from './pages/posts/PostWrite';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import PostsContainer from '../containers/PostsContainer';
import IGaveYouFavoritePostsPage from './pages/posts/UserFavoritePostsPage';
import UserFavoritePostsPage from './pages/posts/UserFavoritePostsPage';
import PostContainer from '../containers/PostContainer';
import _ from 'lodash';
import MemberContainer from '../containers/MemberContainer';
import ChatsContainer from '../containers/ChatsContainer';

export default class App extends Component {
	constructor(props) {
		super(props);

		// const source = _.times(5, () => ({
		// 	title: faker.company.companyName(),
		// 	description: faker.company.catchPhrase(),
		// 	image: faker.internet.avatar(),
		// 	price: faker.finance.amount(0, 100, 2, '$')
		// }));
	}

	render() {
		const { user, phone } = this.props;
		return (
			<BrowserRouter>
				<MainHeader user={user} phone={phone} />
				<Route
					exact
					path="/"
					render={() => (
						<div>
							<div class="main-container">
								<div class="chat-member-container">
									<MemberContainer />
								</div>
								<div class="chat-window-container">
									<ChatsContainer />
								</div>
							</div>
							<div class="summary-posts-container">
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

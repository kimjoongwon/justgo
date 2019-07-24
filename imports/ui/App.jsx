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
import { Grid, Segment } from 'semantic-ui-react';
import faker from 'faker';
import modifyUserPw from './pages/ModifyUserPw';
import FavoritePageContainer from '../containers/FavoritePageContainer';
import UserInfoContainer from '../containers/UserInfoContainer';
import FavoritePost from '../ui/pages/posts/UserFavoritePostsPage'

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { currentUser, phone, users } = this.props;

		return (
			<BrowserRouter>
				<MainHeader currentUser={currentUser} phone={phone} />
				<Route
					exact
					path="/"
					render={() => (
						<div>
							<Segment.Group horizontal>
								<Segment>
									<MemberContainer />
								</Segment>
								<Segment>
									<ChatsContainer />
								</Segment>
							</Segment.Group>

							<PostsContainer />
						</div>
					)}
				/>
				<Route path="/signin" component={Login} />
				<Route path="/blogwrite" component={PostWrite} />
				<Route path="/join" component={Join} />
				<Route path="/posts/:id" component={PostContainer} />
				<Route path="/favoriteposts" component={FavoritePageContainer} />
				<Route path="/favoriteposts:id" component={FavoritePost} />
				<Route path="/modifyuserpw" component={UserInfoContainer} />
				/>
			</BrowserRouter>
		);
	}
}

import React, { Component } from 'react';
import Login from './pages/Login';
import Join from './pages/Join';
import { PostWrite } from './pages/posts/PostWrite';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import PostsContainer from '../containers/PostsContainer';
import PostContainer from '../containers/PostContainer';
import _ from 'lodash';
import MemberContainer from '../containers/MemberContainer';
import ChatsContainer from '../containers/ChatsContainer';
import { Grid, Segment } from 'semantic-ui-react';

import FavoriteContainer from '../containers/FavoriteContainer';
import UserInfoContainer from '../containers/UserInfoContainer';

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
				<Route exact path="/favoriteposts" component={FavoriteContainer} />
				<Route path="/modifyuserpw" component={UserInfoContainer} />
				/>
			</BrowserRouter>
		);
	}
}

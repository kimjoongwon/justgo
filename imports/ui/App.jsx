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

export default class App extends Component {
	constructor(props) {
		super(props);

		// const ss = _.times(20, () => ({
		// 	title: faker.company.sentences,
		// 	summary: faker.lorem.paragraphs(),
		// 	content: faker.lorem.paragraphs()
		// }));

		// console.log(ss);
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
				<Route path="/favoriteposts" component={IGaveYouFavoritePostsPage} />
				<Route path="/dashboard" render={(props) => <UserFavoritePostsPage {...props} />} />
			</BrowserRouter>
		);
	}
}

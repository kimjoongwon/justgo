import React, { Component } from 'react';
import { Label, Grid, Segment, List, Icon, CardContent, Header, Card } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class UserFavoritePost extends Component {
	constructor(props) {
		super(props);
		this.renderFavoritePosts = this.renderFavoritePosts.bind(this);
	}

	renderFavoritePosts() {
		return this.props.favoritePosts.map((favoritePost) => (
			<NavLink to={`/posts/${favoritePost._id}`} key={favoritePost._id} class="favoritePost">
				<Grid.Column>
					<Card>
						<Card.Content>
							<Card.Header>{favoritePost.title}</Card.Header>
							<Card.Description>{favoritePost.description}</Card.Description>
						</Card.Content>

						<Segment>
							<Icon color="grey" name="heart" />
							{favoritePost.hearts ? favoritePost.hearts.length : '0'}
							<Icon color="grey" name="comment">
								{favoritePost.hearts ? favoritePost.comments.length : '0'}
							</Icon>
						</Segment>
					</Card>
				</Grid.Column>
			</NavLink>
		));
	}

	render() {
		return (
			<div>
				<Header as="h2" textAlign="center">
					Favorite
				</Header>
				<Grid divided>{this.renderFavoritePosts()}</Grid>
			</div>
		);
	}
}

// style={{
//   height: '200',
//   maxHeight: '20em',
//   width: '200 ',
//   maxWidth: '20em',
//   color: 'black '
// }}

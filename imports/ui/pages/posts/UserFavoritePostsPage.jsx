import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

export default class UserFavoritePostsPage extends Component {
	constructor(props) {
		super(props);
		console.log('생성')
	}

	render() {
		const { favoritePosts } = this.props.favoritePosts;

		console.log(favoritePosts);
		return (
			<div>
				<Label>미완성</Label>
			</div>
		);
	}
}

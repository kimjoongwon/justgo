import React, { Component } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';

export default class PostComment extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { comment, username } = this.props;
		return (
			<div>
				<Comment>
					<Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
					<Comment.Content>
						<Comment.Author as="a">{username}</Comment.Author>
						<Comment.Metadata>
							<div />
						</Comment.Metadata>
						<Comment.Text>{comment}</Comment.Text>
					</Comment.Content>
				</Comment>
			</div>
		);
	}
}

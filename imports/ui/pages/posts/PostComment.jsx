import React, { Component } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';

export default class PostComment extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { comment, username } = this.props;
		console.log('============================================');
		console.log(comment, username);
		return (
			<div>
				<Form>
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
				</Form>
			</div>
		);
	}
}

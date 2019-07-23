import React, { Component } from 'react';
import { Label, Comment } from 'semantic-ui-react';

export default class ChatMessage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Comment>
				<Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
				<Comment.Content>
					<Comment.Author as="a">{this.props.name}</Comment.Author>
					<Comment.Metadata>
						<div>Today at 5:42PM</div>
					</Comment.Metadata>
					<Comment.Text>{this.props.message}</Comment.Text>
					<Comment.Actions>
						<Comment.Action>Reply</Comment.Action>
					</Comment.Actions>
				</Comment.Content>
			</Comment>
		);
	}
}

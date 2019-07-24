import React, { Component } from 'react';
import { Label, Comment } from 'semantic-ui-react';

export default class ChatMessage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let style = {
			avatar: {},
			content: {}
		};

		if (this.props.mine) {
			style.avatar = {
				float: 'right'
			};
			style.content = {
				textAlign: 'right'
			};
		}
		return (
			<Comment style={style.content}>
				<Comment.Avatar
					style={style.avatar}
					src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
				/>
				<Comment.Content>
					<Comment.Author as="a">{this.props.name}</Comment.Author>

					<Comment.Text>{this.props.message}</Comment.Text>
					<Comment.Text>
						<div>Today at 5:42PM</div>
					</Comment.Text>
					<Comment.Actions>
						<Comment.Action>Reply</Comment.Action>
					</Comment.Actions>
				</Comment.Content>
			</Comment>
		);
	}
}

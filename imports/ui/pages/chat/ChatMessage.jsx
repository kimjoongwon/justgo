import React, { Component } from 'react';
import { Label, Comment } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';

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

					<Comment.Actions>
						<div>Today at 5:42PM</div>
					</Comment.Actions>
				</Comment.Content>
			</Comment>
		);
	}
}

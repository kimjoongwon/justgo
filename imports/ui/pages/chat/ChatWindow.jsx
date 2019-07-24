import React, { Component } from 'react';
import { Container, Segment, Comment, Header } from 'semantic-ui-react';
import MessageInput from '../../components/MessageInput';
import ChatMessage from './ChatMessage';
import shortid from 'shortid';
import { Meteor } from 'meteor/meteor';

export default class ChatWindow extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '' };
		this.handleMessage = this.handleMessage.bind(this);
		this.renderChatWindow = this.renderChatWindow.bind(this);
		this.renderNoUserChatWindow = this.renderNoUserChatWindow.bind(this);
	}

	handleMessage(e) {
		this.setState({ name: e.target.name });
	}

	renderChatWindow() {
		return (
			<div class="chatwindow">
				<Segment style={{ overflow:'auto',maxHeight:'20em' }}>
					<Comment.Group>
						<Header as="h3" dividing>
							Wally Chat
						</Header>
						{this.props.chats.map((chat) => (
							<ChatMessage name={chat.name} message={chat.messages} key={shortid.generate()} />
						))}
					</Comment.Group>
				</Segment>

				<MessageInput />
			</div>
		);
	}

	renderNoUserChatWindow() {
		return <Segment>로그인 하세요.</Segment>;
	}

	render() {
		return Meteor.userId() ? this.renderChatWindow() : this.renderNoUserChatWindow();
	}
}

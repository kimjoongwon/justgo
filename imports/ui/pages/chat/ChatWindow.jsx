import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import MessageInput from '../../components/MessageInput';
import ChatMessage from './ChatMessage';
import shortid from 'shortid';

export default class ChatWindow extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '' };
		this.handleMessage = this.handleMessage.bind(this);
		this.renderChatWindow = this.renderChatWindow.bind(this);
	}

	handleMessage(e) {
		this.setState({ name: e.target.name });
	}

	renderChatWindow() {
		return (
			<Container>
				{this.props.chats.map((chat) => (
					<ChatMessage name={chat.name} message={chat.messages} key={shortid.generate()} />
				))}
				<MessageInput />
			</Container>
		);
	}
	render() {
		return this.renderChatWindow();
	}
}

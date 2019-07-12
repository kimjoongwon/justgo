import React, { Component } from 'react';
import { Chats } from '../api/chats/chats';
import { toUnicode } from 'punycode';
import shortid from 'shortid';
import List, { Button, Label } from 'semantic-ui-react';

export default class ChatPage extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '' };
		this.handleMessage = this.handleMessage.bind(this);
	}

	handleMessage(e) {
		this.setState({ name: e.target.name });
	}

	render() {
		const { name, message } = this.props;
		console.log(name, message);
		return (
			<Label onChange={this.handleMessage}>
				{name}
				{message}
			</Label>
		);
	}
}

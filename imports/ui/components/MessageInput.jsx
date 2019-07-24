import React, { Component } from 'react';
import { Form, Button, Container } from 'semantic-ui-react';

export default class MessageInput extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', message: '' };
		this.onMessageSubmit = this.onMessageSubmit.bind(this);
		this.handleMessage = this.handleMessage.bind(this);
	}

	onMessageSubmit() {
		const chats = this.props.chats;
	
		const messages = this.state.message;
		Meteor.call(
			'insertchat',
			{
				name: 'name',
				messages: messages
			},
			(err, res) => {
				if (err) {
					alert(err);
				} else {
				}
			}
		);
	}

	handleMessage(e) {
		const message = e.target.value;
		this.setState({ message: message });
	}

	render() {
		return (
			<Form>
				<Form.Input iconPosition="left" placeholder="message" type="text" onChange={this.handleMessage} />
				<Button onClick={this.onMessageSubmit}>전달</Button>
			</Form>
		);
	}
}

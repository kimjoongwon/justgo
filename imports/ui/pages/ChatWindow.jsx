import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

export default class ChatWindow extends Component {
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
		return (
			<div className="message-container">
				<Label onChange={this.handleMessage}>
					{name}
					{message}
				</Label>
			</div>
		);
	}
}

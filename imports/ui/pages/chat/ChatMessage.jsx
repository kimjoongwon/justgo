import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

export default class ChatMessage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="message-container">
				<Label>
					{this.props.name}
					{this.props.message}
				</Label>
			</div>
		);
	}
}

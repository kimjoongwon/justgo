import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default class Profile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { username, email, phone } = this.props;
		return (
			<Card>
				<Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
				<Card.Content>
					<Card.Header>{username}</Card.Header>
					<Card.Meta>
						<span className="date">{email}</span>
					</Card.Meta>
					<Card.Description>{phone}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name="user" />
						0 Friends(ㅠㅠ))
					</a>
				</Card.Content>
			</Card>
		);
	}
}

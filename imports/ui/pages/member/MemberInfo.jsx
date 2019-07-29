import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';

export default class MemberInfo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { username, email, phone } = this.props;
		return (
			<Card centered>
				<Image src="http://img.ezmember.co.kr/cache/board/2013/07/03/d196e195b32666226d8c010363e6e97b.jpg" wrapped ui={false} />
				<Card.Content>
					<Card.Header>{username}</Card.Header>
					<Card.Meta>
						<span class="date">{email}</span>
					</Card.Meta>
					<Card.Description>{phone}</Card.Description>
				</Card.Content>
				<Card.Content extra>{Meteor.userId() ? '' : '로그인하세요.'}</Card.Content>
			</Card>
		);
	}
}

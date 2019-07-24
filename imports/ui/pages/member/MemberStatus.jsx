import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';

export default class MemberStatus extends Component {
	constructor(props) {
		super(props);
		this.onClickChatMember = this.onClickChatMember.bind(this);
	}

	onClickChatMember(e) {
		this.props.memberinfohandler(
			e,
			this.props.user.profile.phone,
			this.props.user.profile.username,
			this.props.user.emails[0].address
		);
		// console.log(this.props.user.status.online);
	}

	render() {
		// const online = this.props.status.online;
		const user = this.props.user;

		

		return (
			<div>
				<List.Item onClick={this.onClickChatMember}>
					<Image avatar src="https://react.semantic-ui.com/images/avatar/small/rachel.png" />
					<List.Content>
						<List.Header>{user.profile.username}</List.Header>
						<List.Description>{user.status && user.status.online ? 'online' : 'offline'}</List.Description>
					</List.Content>
				</List.Item>
			</div>
		);
	}
}

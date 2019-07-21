import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';

export default class MemberStatus extends Component {
	constructor(props) {
		super(props);
		this.onClickChatMember = this.onClickChatMember.bind(this);
	}

	onClickChatMember(e) {
		this.props.memberinfohandler(e,
			this.props.user.profile.phone,
			this.props.user.profile.username,
			this.props.user.emails[0].address
		);
		console.log(this.props.user.profile.phone);
	}

	render() {
		const username = this.props.user.profile.username;
		return (
			<div>
				<List.Item onClick={this.onClickChatMember}>
					<Image avatar src="https://react.semantic-ui.com/images/avatar/small/rachel.png" />
					<List.Content>
						<List.Header>{username}</List.Header>
					</List.Content>
				</List.Item>
			</div>
		);
	}
}

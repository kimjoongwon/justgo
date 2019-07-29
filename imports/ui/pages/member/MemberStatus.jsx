import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';
import moment from 'moment';

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

		if (!user.status) {
			return null;
		}
		if (!user.status.lastLogin.date) {
			return null;
		}

		// if(!user.status.date) {
		// 	return null;
		// }
		let currentDate = new Date();
		let date = user.status.lastLogin.date;
		let lastLogin = moment().startOf('day').fromNow(); // 14 minutes ago
		// console.log(lastLogin);

		return (
			<div>
				<List.Item onClick={this.onClickChatMember}>
					<Image avatar src="https://react.semantic-ui.com/images/avatar/small/rachel.png" />
					<List.Content>
						<List.Header>{user.profile.username}</List.Header>
						<List.Description>
							{user.status.online ? 'online' : lastLogin + '(offline)'}
							{/* {user.status && user.status.lastLogin ? 'offline' : 'online'} */}
						</List.Description>
					</List.Content>
				</List.Item>
			</div>
		);
	}
}

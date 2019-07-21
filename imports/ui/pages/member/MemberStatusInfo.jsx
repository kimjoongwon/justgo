import React, { Component } from 'react';
import shortid from 'shortid';
import { List, Grid, Container } from 'semantic-ui-react';
import MemberStatus from './MemberStatus';
import MemberSearch from '../../components/MemberSearch';
import MemberInfo from './MemberInfo';
import _ from 'lodash';

export default class MemberStatusInfo extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', message: '', profile: {}, username: '', email: '', phone: '' };
		this.memberinfohandler = this.memberinfohandler.bind(this);
		this.renderChatMemberInfo = this.renderChatMemberInfo.bind(this);
	}

	memberinfohandler(e, phone, username, email) {
		this.setState({ phone: phone, username: username, email: email });
	}

	renderChatMemberInfo() {
		return (
			<div>
				<Container text>
					<MemberSearch users={this.props.users} memberinfohandler={this.memberinfohandler} />
					<List celled>
						{this.props.users.map((user) => (
							<MemberStatus
								user={user}
								memberinfohandler={this.memberinfohandler}
								key={shortid.generate()}
							/>
						))}
					</List>

					<MemberInfo username={this.state.username} email={this.state.email} phone={this.state.phone} />
				</Container>
			</div>
		);
	}

	// renderChatWindow() {
	// 	return (
	// 		<div class="chat-container">
	// 			<Container>
	// 				{this.props.chats.map((chat) => (
	// 					<ChatWindow name={chat.name} message={chat.messages} key={shortid.generate()} />
	// 				))}
	// 				<MessageInput />
	// 			</Container>
	// 		</div>
	// 	);
	// }

	render() {
		return this.renderChatMemberInfo();
	}
}

import React, { Component } from 'react';
import shortid from 'shortid';
import { List, Grid, Container, Segment } from 'semantic-ui-react';
import MemberStatus from './MemberStatus';
import MemberSearch from '../../components/MemberSearch';
import MemberInfo from './MemberInfo';
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';

export default class MemberStatusInfo extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', message: '', profile: {}, username: '', email: '', phone: '' };
		this.memberinfohandler = this.memberinfohandler.bind(this);
		this.renderChatMemberInfo = this.renderChatMemberInfo.bind(this);
		this.renderMemberStatus = this.renderMemberStatus.bind(this);
	}

	memberinfohandler(e, phone, username, email) {
		if (!Meteor.userId()) {
			alert('로그인 하세요.');
		} else {
			this.setState({ phone: phone, username: username, email: email });
		}
	}

	renderMemberStatus() {
		console.log(Meteor.user());

		return (
			<List celled>
				{this.props.users.map((user) => (
					<MemberStatus user={user} memberinfohandler={this.memberinfohandler} key={shortid.generate()} />
				))}
			</List>
		);
	}

	renderChatMemberInfo() {
		return (
			<Segment.Group horizontal>
				<Segment>
					<MemberSearch users={this.props.users} memberinfohandler={this.memberinfohandler} />
					<List celled>{this.renderMemberStatus()}</List>
				</Segment>

				<Segment>
					<MemberInfo username={this.state.username} email={this.state.email} phone={this.state.phone} />
				</Segment>
			</Segment.Group>
		);
	}
	render() {
		return this.renderChatMemberInfo();
	}
}

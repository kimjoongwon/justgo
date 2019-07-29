import React, { Component } from 'react';
import { Form, Label, Input, Button, Grid, Header, Segment, Message } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


export default class ModifyUserPw extends Component {
	constructor(props) {
		super(props);
		this.state = {
			oldPassword: '',
			newPassword: '',
			newPasswordConfirm: ''
		};
	}

	handleChangePassword = () => {
		Accounts.changePassword(this.state.oldPassword, this.state.newPassword, (err) => {
			if (err) {
				alert('비밀번호 일치하지 않습니다.');
			} else {
				alert('비밀번호 변경 완료!!!');
				this.props.history.push('/')
			}
		});
	};

	handleOldPassword = (event) => {
		this.setState({ oldPassword: event.target.value });
		console.log(this.state.oldPassword);
	};

	handleNewPassword = (event) => {
		this.setState({ newPassword: event.target.value });
		console.log(this.state.newPassword);
	};
	handleNewPasswordConfirm = (event) => {
		this.setState({ newPasswordConfirm: event.target.value });
		console.log(this.state.newPasswordConfirm);
	};

	handleLogout = () => {
		Meteor.logout();
		this.props.history.push('/');
	};

	render() {
		return (
			<Grid textAlign="center" style={{ height: 1000 }} verticalAlign="middle">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h2" textAlign="center">
						회원정보
					</Header>
					<Form size="large">
						<Segment stacked>
							<Message fluid content={this.props.currentUser.emails[0].address} />

							<Message content={this.props.currentUser.profile.phone} />

							<Message content={this.props.currentUser.profile.username} />

							<Form.Input
								type="password"
								placeholder="현재 비밀번호를 입력하세요."
								onChange={this.handleOldPassword}
							/>

							<Form.Input
								type="password"
								placeholder="변경할 비밀번호를 입력하세요."
								onChange={this.handleNewPassword}
							/>

							<Form.Input
								type="password"
								placeholder="변경할 비밀번호를 한번 더 입력하세요."
								onChange={this.handleNewPasswordConfirm}
							/>

							<Button fluid size="large" placeholder="회원가입" onClick={this.handleChangePassword}>
								비밀번호 변경하기
							</Button>
							<Button fluid size="large" placeholder="로그아웃하기" onClick={this.handleLogout}>
								로그아웃 하기
							</Button>
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
		);
	}
}

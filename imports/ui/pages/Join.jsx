import React, { Component } from 'react';
import { Form, Label, Input, Button } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Redirect } from 'react-router-dom';
export default class Join extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			passworddc: '',
			errors: {},
			name: '',
			phone: '',
			postidthatgaveheart: [],
			commentidthatwrote: [],
			postidthatwrote: []
		};
		this.handleEmail = this.handleEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handlePasswordDoubleCheck = this.handlePasswordDoubleCheck.bind(this);
		this.handleName = this.handleName.bind(this);
		this.handlePhone = this.handlePhone.bind(this);
	}

	handleName(event) {
		this.setState({ name: event.target.value });
	}

	handlePhone(event) {
		this.setState({ phone: event.target.value });
	}

	handleEmail(event) {
		this.setState({ email: event.target.value });
	}
	handlePassword(event) {
		this.setState({ password: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		const email = this.state.email;
		const password = this.state.password;
		const passworddc = this.state.passworddc;
		const postidthatgaveheart = this.state.postidthatgaveheart;
		const phone = this.state.phone;
		const name = this.state.name;
		const commentidthatwrote = this.state.commentidthatwrote;
		const postidthatwrote = this.state.postidthatwrote;
		const profile = {
			name: name,
			phone: phone,
			postidthatgaveheart: postidthatgaveheart,
			commentidthatwrote: commentidthatwrote,
			postidthatwrote: postidthatwrote
		};

		console.log(phone);
		console.log(profile);
		const errors = {};

		if (!email) {
			errors.email = '이메일 입력해주세요.';
		}
		if (!password) {
			errors.password = '비밀번호를 입력해주세요.';
		}
		if (passworddc !== password) {
			errors.passworddc = '비밀번호가 같지 않습니다.';
		}

		this.setState({ errors: errors });

		Accounts.createUser({
			email,
			password,
			profile
		}),
			(err) => {
				if (err) {
				} else {
					this.props.history.push('/');
				}
			};
	}

	handlePasswordDoubleCheck(event) {
		this.setState({ handlePasswordDoubleCheck: event.target.value });
	}

	render() {
		return (
			<div className="join-top-container">
				<Form label="로그인">
					<div className="join-container">
						<Label>
							이메일
							<Input type="email" onChange={this.handleEmail} />
						</Label>
						<Label>
							전화번호
							<Input type="text" onChange={this.handlePhone} />
						</Label>
						<Label>
							이름
							<Input type="text" onChange={this.handleName} />
						</Label>
						<Label>
							비밀번호
							<Input type="password" onChange={this.handlePassword} />
						</Label>
						<Label>
							비밀번호 확인
							<Input type="password" onChange={this.handlePasswordDoubleCheck} />
						</Label>

						<Button type="submit" content="회원가입" onClick={this.handleSubmit} />
					</div>
				</Form>
			</div>
		);
	}
}

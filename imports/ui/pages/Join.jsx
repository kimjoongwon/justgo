import React, { Component } from 'react';
import { Form, Label, Input, Button, Grid, Header, Segment } from 'semantic-ui-react';
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
			username: '',
			phone: ''
		};
		this.handleEmail = this.handleEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handlePasswordDoubleCheck = this.handlePasswordDoubleCheck.bind(this);
		this.handleName = this.handleName.bind(this);
		this.handlePhone = this.handlePhone.bind(this);
	}

	handleName(event) {
		this.setState({ username: event.target.value });
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
		// const postidthatgaveheart = this.state.postidthatgaveheart;
		const phone = this.state.phone;
		const username = this.state.username;
		// const commentidthatwrote = this.state.commentidthatwrote;
		// const postidthatwrote = this.state.postidthatwrote;
		const profile = {
			username: username,
			phone: phone,
			myLikePosts: [null],
			myComments: [null],
			myPosts: [null]
		};

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
			<Grid textAlign="center" style={{ height: 800 }} verticalAlign="middle">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h2" textAlign="center">
						회원가입
					</Header>
					<Form size="large">
						<Segment stacked>
							<Form.Input fluid type="email" placeholder="이메일을 입력하세요." onChange={this.handleEmail} />

							<Form.Input type="phone" placeholder="전화번호를 입력하세요" onChange={this.handlePhone} />

							<Form.Input placeholder="이름을 입력하세요." onChange={this.handleName} />

							<Form.Input type="password" placeholder="비밀번호를 입력하세요" onChange={this.handlePassword} />

							<Form.Input
								type="password"
								placeholder="확을 위해서 비밀번호를 한 번 더 입력하세요"
								onChange={this.handlePasswordDoubleCheck}
							/>

							<Button fluid size="large" placeholder="회원가입" onClick={this.handleSubmit}>
								회원가입
							</Button>
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
		);
	}
}

// <Grid textAlign="center" style={{ hÎeight: '100vh' }} verticalAlign="middle">
// 	<Grid.Column style={{ maxWidth: 450 }}>
// 		<Header as="h2" color="teal" textAlign="center">
// 			<Image src="/logo.png" /> Log-in to your account
// 		</Header>
// 		<Form size="large">
// 			<Segment stacked>
// 				<Form.Input
// 					fluid
// 					icon="user"
// 					iconPosition="left"
// 					placeholder="E-mail address"
// 					onChange={this.handleEmail}
// 				/>
// 				<Form.Input
// 					fluid
// 					icon="lock"
// 					iconPosition="left"
// 					placeholder="Password"
// 					type="password"
// 					onChange={this.handlePassword}
// 				/>

// 				<Button color="teal" fluid size="large" onClick={this.onSubmit}>
// 					Login
// 				</Button>
// 			</Segment>
// 		</Form>
// 		<Message>
// 			New to us? <a href="#">Sign Up</a>
// 		</Message>
// 		<List>
// 			{/* <List.Item>{this.state.useremail}</List.Item> */}
// 			<List.Item>{this.state.date}</List.Item>
// 		</List>
// 	</Grid.Column>
// </Grid>;

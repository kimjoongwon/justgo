import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, List } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
	}

	handleEmail(event) {
		this.setState({ email: event.target.value });
	}

	handlePassword(event) {
		this.setState({ password: event.target.value });
	}

	onSubmit(event) {
		event.preventDefault();
		const email = this.state.email;
		const password = this.state.password;
		const errors = {};

		if (!email) {
			errors.email = '이메일을 입력해주세요.';
		}

		if (!password) {
			errors.password = '비밀번호를 입력해주세요.';
		}

		this.setState({ errors });
		if (Object.keys(errors).length) {
			console.log(Object.keys(errors).length);
			return;
		}

		Meteor.loginWithPassword(email, password, (err) => {
			if (!err) {
			} else {
			}

			this.props.history.push('/');
		});
	}

	render() {
		return (
			<Grid textAlign="center" style={{ height: 800 }} verticalAlign="middle">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h2" textAlign="center">
							계정에 로그인 하세요.
					</Header>
					<Form size="large">
						<Segment stacked>
							<Form.Input
								fluid
								icon="user"
								iconPosition="left"
								placeholder="E-mail address"
								onChange={this.handleEmail}
							/>
							<Form.Input
								fluid
								icon="lock"
								iconPosition="left"
								placeholder="Password"
								type="password"
								onChange={this.handlePassword}
							/>

							<Button fluid size="large" onClick={this.onSubmit}>
								Login
							</Button>
						</Segment>
					</Form>
					<Message>
						New to us? <a href="#">Sign Up</a>
					</Message>
					<List>
						{/* <List.Item>{this.state.useremail}</List.Item> */}
						<List.Item>{this.state.date}</List.Item>
					</List>
				</Grid.Column>
			</Grid>
		);
	}
}

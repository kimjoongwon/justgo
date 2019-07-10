import React, { Component } from "react";
import { Form, Label, Input, Button } from "semantic-ui-react";


export default class JoinPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", passworddc: "", errors: {} };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePasswordDoubleCheck = this.handlePasswordDoubleCheck.bind(this);

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
    const errors = {};

    if (!email) {
      errors.email = '이메일 입력해주세요.'
    }
    if (!password) {
      errors.password = '비밀번호를 입력해주세요.';
    }
    if (passworddc !== password) {
      errors.passworddc = '비밀번호가 같지 않습니다.';
    }

    this.setState({errors: errors})

    Accounts.createUser({
        email,
        password,
    }),(err) => {
      if (err) {
        
      } else {
       
      } 


    }

  }

  handlePasswordDoubleCheck(event) {
    this.setState({ handlePasswordDoubleCheck: event.target.value });
  }

  render() {
    return (
      <Form label="로그인">
        <Label>
          이메일
          <Input type="email" onChange={this.handleEmail} />
        </Label>
        <Label>
          비밀번호
          <Input type="password" onChange={this.handlePassword} />
        </Label>
        <Label>
          비밀번호 확인
          <Input type="password" onChange={this.handlePasswordDoubleCheck} />
        </Label>
        <Button type="submit" content="로그인" onClick={this.handleSubmit} />
      </Form>
    );
  }
}

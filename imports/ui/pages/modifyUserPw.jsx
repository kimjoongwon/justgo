import React, { Component } from "react";
import {
  Form,
  Label,
  Input,
  Button,
  Grid,
  Header,
  Segment,
  Message
} from "semantic-ui-react";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Redirect } from "react-router-dom";
import { timingSafeEqual } from "crypto";

export default class ModifyUserPw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: ""
    };
    
  }

  handleChangePassword = () => {
    Accounts.changePassword(
      this.state.oldPassword,
      this.state.newPassword,
      err => {
        if (err) {
          alert("비밀번호 일치하지 않습니다.");
        } else {
          alert("비밀번호 변경 완료!!!");
        }
      }
    );
  };

  handleoldPassword = event => {
    
    this.setState({ oldPassword: event.target.value });
  };

  handleNewPassword = event => {
    this.setState({ newPassword: event.target.value });
  };

  handleLogout = () => {
    Meteor.logout();
    this.props.history.push("/");
  };

  render() {
    return (
      <Grid textAlign="center" style={{ height: 800 }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            회원가입
          </Header>
          <Form size="large">
            <Segment stacked>
              <Message
                fluid
                content={this.props.currentUser.emails[0].address}
              />

              <Message content={this.props.currentUser.profile.phone} />

              <Message content={this.props.currentUser.profile.username} />

              <Form.Input
                type="password"
                placeholder="비밀번호를 입력하세요"
                onChange={this.handleoldPassword}
              />

              <Form.Input
                type="password"
                placeholder="변경할 비밀번호를 입력하세요."
                onChange={this.handleNewPassword}
              />

              <Button
                fluid
                size="large"
                placeholder="회원가입"
                onClick={this.handleChangePassword}
              >
                비밀번호 수정하기
              </Button>
              <Button
                fluid
                size="large"
                placeholder="로그아웃하기"
                onClick={this.handleLogout}
              >
                로그아웃 하기
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

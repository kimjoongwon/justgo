import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  List
} from "semantic-ui-react";
import { Meteor } from "meteor/meteor";
import { Redirect } from "react-router-dom";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
      errors.email = "이메일을 입력해주세요.";
    }

    if (!password) {
      errors.password = "비밀번호를 입력해주세요.";
    }

    this.setState({ errors });
    if (Object.keys(errors).length) {
      console.log(Object.keys(errors).length);
      return;
    }

    Meteor.loginWithPassword(email, password, err => {
      if (!err) {
        alert("Good");
        console.log(new Date());
        const userId = this.userId;
        this.setState({ useremail: email });
        console.log(Meteor.users.find({ userId: userId }).fetch());
        const sss = Meteor.users.find({ userId: userId }).fetch();
        const ss = sss.map(ss => (name = ss.emails[0].address));
        // const name = ss.toString()
        console.log(ss);
        const date = new Date();
        const log = date.toString();
        console.log(log);

        Meteor.call(
          "insertlog",
          {
            name: name,
            log: log
          },
          (err, res) => {
            if (err) {
              alert(err);
              //    여기서 NOT FOUND NOT Mehthod 에러가 발생 server.js에 import 빠짐. structure study
            } else {
            }
          }
        );
      } else {
      }

      this.props.history.push("/");
    });
  }

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ hÎeight: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/logo.png" /> Log-in to your account
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

              <Button color="teal" fluid size="large" onClick={this.onSubmit}>
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

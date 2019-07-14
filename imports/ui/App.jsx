import React, { Component } from "react";
import LoginPage from "./LoginPage";
import JoinPage from "./JoinPage";
import ChatPage from "../../imports/ui/ChatPage";
import shortid from "shortid";
import { Button, Form, List, Label, Text } from "semantic-ui-react";
import { PostsPage } from "./PostsPage";
import { PostsList } from "../ui/PostsList";
import { Meteor } from "meteor/meteor";
import { LogsList } from "../ui/LogsList";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Test from "./Test";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", message: "", profile: {} };
    this.onMessageSubmit = this.onMessageSubmit.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  onMessageSubmit() {
    const chats = this.props.chats;
    console.log(chats);
    const messages = this.state.message;
    Meteor.call(
      "insertchat",
      {
        name: "name",
        messages: messages
      },
      (err, res) => {
        if (err) {
          alert(err);
        } else {
        }
      }
    );
  }

  handleMessage(e) {
    const message = e.target.value;
    this.setState({ message: message });
  }
  componentWillUpdate() {}

  render() {
    const { loading, posts, chats, user, logs, phone } = this.props;

    // console.log(phone);
    // console.log(Meteor.user());
    let SS;
    let Chats;
    let Posts;
    let Logs;
    // const phones = Meteor.users.find({ userId: user }, { field: { phones: 1, _id: 0 } }).fetch();
    // const sss = Meteor.users.find({ userId: userId }).fetch();
    //     const ss = sss.map(ss => (name = ss.emails[0].address));
    // SS = phones.map(phone => (<Test phone={phone[0].phones} /> ))
    // console.log(phoness)
    // Test = phone.map(phon => <Test phone={phon.phones} />);
    // console.log(phones)
    console.log(new Date());
    console.log(user);

    Chats = chats.map(chat => (
      <ChatPage
        name={chat.name}
        message={chat.messages}
        key={shortid.generate()}
      />
    ));
    Logs = logs.map(log => (
      <LogsList name={log.name} log={log.log} key={shortid.generate()} />
    ));

    // Posts = posts.map((post) => (
    // 	<PostsList
    // 		title={post.title}
    // 		description={post.description}
    // 		content={post.content}
    // 		key={shortid.generate()}
    // 	/>
    // ));
    // {
    //   /* <PostsPage user={user}/> */
    // }
    // {
    //   /* {Posts} */
    // }
    return (
      <BrowserRouter>
        <MainHeader user={user} phone={phone} />
        <Route exact path="/" component={Test}>
          <Route path="/signin" component={LoginPage} />
          <Route path="/join" component={JoinPage} />
          
          {Chats}
          <Button>{SS}</Button>
          <Form.Input
            fluid
            iconPosition="left"
            placeholder="message"
            type="text"
            onChange={this.handleMessage}
          />
          <Button onClick={this.onMessageSubmit}>전달</Button>
          {Logs}
          {/* <div>
          <Button>{profile}</Button>
          </div> */}
        </Route>
      </BrowserRouter>
    );
  }
}

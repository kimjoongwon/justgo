import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { Posts } from "../api/chats/posts";
import shortid from "shortid"
export class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", descriptions: "", contents: "" };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  handleTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleContent(event) {
    this.setState({ content: event.target.value });
  }

  onSubmit(event) {
    const title = this.state.title;
    const description = this.state.description;
	const content = this.state.content;
	const user = this.props.user;
    this.setState({ title: title, description: description, content: content });

	
	

    Meteor.call(
      "insertpost",
      {
        title: title,
        description: description,
		content: content,
		identity:shortid.generate()
      },
      (err, res) => {
        if (err) {
          alert(err);
          //    여기서 NOT FOUND NOT Mehthod 에러가 발생 server.js에 import 빠짐. structure study
        } else {
        }
      }
    );

    
  }

  


  render() {
	

    return (
      <Form>
        <Form.Field>
          <label>제목</label>
          <input placeholder="제목" onChange={this.handleTitle} />
        </Form.Field>
        <Form.Field>
          <label>설명</label>
          <input placeholder="설명" onChange={this.handleDescription} />
        </Form.Field>

        <Form.TextArea
          onChange={this.handleContent}
          label="내용"
          placeholder="내용"
        />
        <Button type="보내기" onClick={this.onSubmit}>
          전송
        </Button>
      </Form>
    );
  }
}

import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Posts } from '../api/chats/posts';
import shortid from 'shortid';
import { Link } from 'react-router-dom';

export class PostsPage extends Component {
	constructor(props) {
		super(props);
		console.log('PostsPage constructor!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
		this.state = { title: '', descriptions: '', contents: '' };
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
		console.log('asdas');
		const title = this.state.title;
		const description = this.state.description;
		const content = this.state.content;

		this.setState({ title: title, description: description, content: content });

		Meteor.call(
			'insertpost',
			{
				title: title,
				description: description,
				content: content,
				identity: shortid.generate(),
				useridwhowrotehtepost: Meteor.userId(),
				useridwhogaveheart: []
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
					<label>제목3</label>
					<input placeholder="제목" onChange={this.handleTitle} />
				</Form.Field>
				<Form.Field>
					<label>설명</label>
					<input placeholder="설명" onChange={this.handleDescription} />
				</Form.Field>

				<Form.TextArea onChange={this.handleContent} label="내용" placeholder="내용" />
				<Link to="/">
					<Button type="send" onClick={this.onSubmit}>
						보내기
					</Button>
				</Link>
				<Link to="/">
					<Button type="cancel">취소</Button>
				</Link>
			</Form>
		);
	}
}

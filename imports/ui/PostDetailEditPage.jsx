import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/chats/posts';
import { Label, Form, Button, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class PostsDetailPage extends Component {
	constructor(props) {
		super(props);
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
		const title = this.state.title;
		const description = this.state.description;
		const content = this.state.content;

		this.setState({ title: title, description: description, content: content });
		const { post } = this.props;
		Meteor.call(
			'editpost',
			{
				title: title,
				description: description,
				content: content,
				id: post[0]._id
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
		const { post, loading } = this.props;

		// console.log(post);

		// console.log(this.props.location);
		// console.log(this.props);
		// console.log(this.props.location.pathname);
		// console.log(this.props.key);
		// console.log(this.props.match.params.id);

		// return loading ? <Label>로딩중</Label> : <Label>{post[0].content}</Label>;
		return (
			<Form>
				<Form.Field>
					<Label>제목</Label>
					<Input placeholder="제목" onChange={this.handleTitle} defaultValue={post[0].title} />
				</Form.Field>
				<Form.Field>
					<Label>설명</Label>
					<Input placeholder="설명" onChange={this.handleDescription} defaultValue={post[0].description} />
				</Form.Field>

				<Form.TextArea
					onChange={this.handleContent}
					label="내용"
					placeholder="내용"
					defaultValue={post[0].content}
				/>

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

import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Label, Form, Button, Input, Container, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Posts } from '../api/chats/posts';

export default class PostsDetailPage extends Component {
	constructor(props) {
		super(props);
		console.log('PostsDetailPage constructor !!!!');
		this.state = { title: '', descriptions: '', contents: '', doyouwanttoedit: false, isredheart: false };
		this.onSubmit = this.onSubmit.bind(this);
		this.handleContent = this.handleContent.bind(this);
		this.handleDescription = this.handleDescription.bind(this);
		this.handleTitle = this.handleTitle.bind(this);
		this.renderHandler = this.renderHandler.bind(this);
	}

	likeHandler() {
		this.setState({ isredheart: false });
	}

	undolikeHnadler() {
		this.setState({ doYouClickLike: false });
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

	onSubmit(e) {
		e.preventDefault();

		console.log('onSubmit called');
		const title = this.state.title;
		const description = this.state.description;
		const content = this.state.content;

		if (!title) {
			console.log('제목 없어욧!');
		}

		const { post } = this.props;

		console.log(post[0]._id);
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
					console.log('success!!!!!');
				}
			}
		);
	}
	likeHandler() {
		this.setState({Like:true});
	}

	renderHandler() {
		this.setState({ doyouwanttoedit: true });
	}

	renderEdit() {
		const { post, loading } = this.props;

		return (
			<Form>
				<Form.Field>
					<Label>제목222</Label>
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

				<Button type="send" onClick={this.onSubmit}>
					수정하기
				</Button>

				<Link to="/">
					<Button type="cancel">취소</Button>
				</Link>

				<Icon disabled name="users" />
			</Form>
		);
	}

	renderPostDetail() {
		const { post, loading } = this.props;

		return (
			<Form>
				<Icon color="red" name="heart" size="huge" onClick={this.likeHandler} />
				<Icon color="grey" name="heart" size="huge" />
				<hr />
				<Label>제목3</Label>

				<Container>{post[0].title}</Container>

				<Label>설명</Label>

				<Container>{post[0].description}</Container>

				<Label>내용</Label>

				<Container>{post[0].content}</Container>

				<Link to="/">
					<Button type="cancel">돌아가기</Button>
				</Link>

				<Button type="edit" onClick={this.renderHandler}>
					수정하기
				</Button>
			</Form>
		);
	}

	render() {
		// console.log(post);

		// console.log(this.props.location);
		// console.log(this.props);
		// console.log(this.props.location.pathname);
		// console.log(this.props.key);
		// console.log(this.props.match.params.id);

		// return loading ? <Label>로딩중</Label> : <Label>{post[0].content}</Label>;
		console.log('this.state.doyouwanttoedit: ', this.state.doyouwanttoedit);

		return this.state.doyouwanttoedit ? this.renderEdit() : this.renderPostDetail();
	}
}

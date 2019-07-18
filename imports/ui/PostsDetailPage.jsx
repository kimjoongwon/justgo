import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Label, Form, Button, Input, Container, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Posts } from '../api/chats/posts';
import { METHODS } from 'http';
import CommentPage from './CommentPage';
import shortid from 'shortid';
import { throws } from 'assert';
export default class PostsDetailPage extends Component {
	constructor(props) {
		super(props);
		console.log('PostsDetailPage constructor !!!!');
		this.state = {
			title: '',
			descriptions: '',
			contents: '',
			doyouwanttoedit: false,
			isredheart: false,
			color: 'grey',
			comment: '',
			user: ''
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.handleContent = this.handleContent.bind(this);
		this.handleDescription = this.handleDescription.bind(this);
		this.handleTitle = this.handleTitle.bind(this);
		this.renderHandler = this.renderHandler.bind(this);
		this.onClickLike = this.onClickLike.bind(this);
		this.onClickSendComment = this.onClickSendComment.bind(this);
		this.onChangeCommentHander = this.onChangeCommentHander.bind(this);
		this.onUserListClickHandler = this.onUserListClickHandler.bind(this);
		Meteor.user();
	}

	onUserListClickHandler() {}

	onClickLike() {
		console.log('B');
		const postid = this.props.post._id;
		const userid = Meteor.userId();
		const isredheart = this.state.isredheart;

		if (!isredheart) {
			Posts.update({ _id: postid }, { $addToSet: { useridwhogaveheart: userid } });
			this.setState({ isredheart: !isredheart });
			this.setState({ color: 'red' });
		} else {
			Posts.update({ _id: postid }, { $pull: { useridwhogaveheart: userid } });

			this.setState({ isredheart: !isredheart });
			this.setState({ color: 'grey' });
		}
	}

	onChangeCommentHander(event) {
		this.setState({ comment: event.target.value });
	}

	onClickSendComment(event) {
		console.log(Meteor.user().emails[0]);
		const username = Meteor.user().profile.username;
		const user = Meteor.user();

		const comment = this.state.comment;
		console.log(comment);
		console.log(username);
		console.log(user);
		Meteor.call(
			'updatecomment',
			{
				postid: this.props.post._id,
				username: username,
				comment: comment,
				createAt: new Date()
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

		console.log(post._id);
		Meteor.call(
			'editpost',
			{
				title: title,
				description: description,
				content: content,
				id: post._id
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
	// likeHandler() {
	// 	this.setState({ Like: true });
	// }

	renderHandler() {
		this.setState({ doyouwanttoedit: true });
	}

	renderEdit() {
		const { post, loading } = this.props;
		console.log('뭐야 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠs');
		return (
			<Container>
				<Form>
					<Form.Field>
						<Label>제목222</Label>
						<Input placeholder="제목" onChange={this.handleTitle} defaultValue={post.title} />
					</Form.Field>
					<Form.Field>
						<Label>설명</Label>
						<Input placeholder="설명" onChange={this.handleDescription} defaultValue={post.description} />
					</Form.Field>

					<Form.TextArea
						onChange={this.handleContent}
						label="내용"
						placeholder="내용"
						defaultValue={post.content}
					/>

					<Button type="send" onClick={this.onSubmit}>
						수정하기
					</Button>

					<Link to="/">
						<Button type="cancel">취소</Button>
					</Link>
				</Form>
			</Container>
		);
	}

	renderPostDetail() {
		const { post, loading } = this.props;
		const userid = Meteor.userId();
		var classified = post.useridwhogaveheart.includes(userid);

		// console.log(classified);
		if (classified) {
			this.state.color = 'red';
			console.log('redset');
		} else {
			this.state.color = 'grey';
			console.log('');
		}
		// 처음 시작에 하트색 결정 하는 부분.하트를 누른 사용자는 하트로 표시 하트를 누르지 않은 사용자는 그레이로 표시되도록 초기화 단계 설정.
		let Comments;

		Comments = post.comments.map((comment) => (
			<CommentPage comment={comment.comment} username={comment.username} key={shortid.generate()} />
		));

		return (
			<Container>
				<Form>
					<Icon color={this.state.color} name="heart" size="huge" onClick={this.onClickLike} />

					<hr />
					<Label>제목3</Label>

					<Container>{post.title}</Container>

					<Label>설명</Label>

					<Container>{post.description}</Container>

					<Label>내용</Label>

					<Container>{post.content}</Container>

					<Link to="/">
						<Button type="cancel">돌아가기</Button>
					</Link>

					<Button type="edit" onClick={this.renderHandler}>
						수정하기
					</Button>
				</Form>
				<Container>
					<Input onChange={this.onChangeCommentHander} />
					<Button onClick={this.onClickSendComment} />
				</Container>

				{Comments}
			</Container>
		);
	}

	render() {
		console.log('this.state.doyouwanttoedit: ', this.state.doyouwanttoedit);

		return this.state.doyouwanttoedit ? this.renderEdit() : this.renderPostDetail();
	}
}

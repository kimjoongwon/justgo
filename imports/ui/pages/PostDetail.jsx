import React, { Component } from 'react';
import { Label, Form, Button, Input, Container, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Posts } from '../../api/chats/posts';
import PostComment from './PostComment';
import shortid from 'shortid';

export default class PostDetail extends Component {
	constructor(props) {
		super(props);
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
	}
	onClickLike() {
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
		const username = Meteor.user().profile.username;
		const comment = this.state.comment;

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
		const title = this.state.title;
		const description = this.state.description;
		const content = this.state.content;

		if (!title) {
			console.log('제목없습니다.');
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
				} else {
				}
			}
		);
	}

	renderHandler() {
		this.setState({ doyouwanttoedit: true });
	}

	renderEdit() {
		const { post } = this.props;

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
					<Link to="/">
						<Button type="send" onClick={this.onSubmit}>
							수정하기
						</Button>
					</Link>
					<Link to="/">
						<Button type="cancel">취소</Button>
					</Link>
				</Form>
			</Container>
		);
	}

	renderPostDetail() {
		const { post } = this.props;
		const userid = Meteor.userId();
		if (post.useridwhogaveheart) {
			var classified = post.useridwhogaveheart.includes(userid);
		}

		if (classified) {
			this.state.color = 'red';
		} else {
			this.state.color = 'grey';
		}

		let Comments;
		if (post.comments) {
			Comments = post.comments.map((comment) => (
				<PostComment comment={comment.comment} username={comment.username} key={shortid.generate()} />
			));
		}

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

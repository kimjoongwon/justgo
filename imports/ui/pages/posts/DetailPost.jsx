import React, { Component } from 'react';
import { Label, Form, Button, Icon, Grid, Header, Segment, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Posts } from '../../../api/posts/posts';
import { Meteor } from 'meteor/meteor';
import PostComment from './PostComment';
import shortid from 'shortid';

export default class DetailPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isRed: false,
			color: 'grey',
			classifiedColor: false
		};

		console.log(this.props.post, '디테일 포스트 실행됬어요!!!!!!!!!!!!!!!!!!!!!!');
	}

	onClickLike = () => {
		if (!this.state.isRed) {
			Posts.update({ _id: this.props.post._id }, { $addToSet: { hearts: Meteor.userId() } });
			this.setState({ isRed: !this.state.isRed });
			this.setState({ color: 'red' });
		} else {
			Posts.update({ _id: this.props.post._id }, { $pull: { hearts: Meteor.userId() } });
			this.setState({ isRed: !this.state.isRed });
			this.setState({ color: 'grey' });
			// hearts;
		}
	};

	onChangeCommentHander = (event) => {
		this.setState({ comment: event.target.value });
	};

	onClickSendComment = () => {
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
				}
			}
		);
	};

	editModeHandler = () => {
		this.props.editModeHandler();
	};

	renderPostComment = () => {};

	render() {
		if (this.props.post.hearts) {
			this.state.classifiedColor = this.props.post.hearts.includes(Meteor.userId());
		}

		if (this.state.classifiedColor) {
			this.state.color = 'red';
		} else {
			this.state.color = 'grey';
		}

		this.props.post.comments.map((commnet) => <PostComment />);

		return (
			<Grid>
				<Grid.Row>
					<Header as="h1" attached="top">
						TITLE<Icon color={this.state.color} name="heart" size="huge" onClick={this.onClickLike} />
					</Header>
				</Grid.Row>
				<Grid.Row>
					<Segment attached>{this.props.post.title}</Segment>
				</Grid.Row>
				<Grid.Row>
					<Segment attached>{this.props.post.description}</Segment>
				</Grid.Row>
				<Grid.Row>
					<Segment attached>{this.props.post.content}</Segment>
				</Grid.Row>

				<Button type="edit" onClick={this.editModeHandler}>
					수정하기
				</Button>
			</Grid>
		);
	}
}

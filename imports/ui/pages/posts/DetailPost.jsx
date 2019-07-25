import React, { Component } from 'react';
import {
	Label,
	Form,
	Button,
	Icon,
	Grid,
	Feed,
	Card,
	Image,
	Header,
	Segment,
	Container,
	Message,
	Divider
} from 'semantic-ui-react';
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
			classifiedColor: false,
			comment: ''
		};
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

	renderPostComment = (event) => {
		this.setState({ comment: event.target.value });
	};

	render() {
		if (this.props.post.hearts) {
			this.state.classifiedColor = this.props.post.hearts.includes(Meteor.userId());
		}

		if (this.state.classifiedColor) {
			this.state.color = 'red';
		} else {
			this.state.color = 'grey';
		}

		return (
			<Grid stretched columns="equal">
				<Grid.Column width={10}>
					<Segment>
						<Segment basic>
							<Header as="h1" textAlign="center">
								{this.props.post.title}
							</Header>
							<Divider hidden />
							<p>{this.props.post.description}</p>

							<Divider hidden />
							<p>{this.props.post.content}</p>
							<Segment basic>
								<Button primary floated="right" onClick={this.editModeHandler}>
									수정하기
								</Button>
							</Segment>
						</Segment>
						<Segment textAlign="center" basic>
							<Icon name="user" size="big" />
						</Segment>
						<Segment basic textAlign="center">
							{this.props.post.author}
						</Segment>
					</Segment>
				</Grid.Column>
				<Grid.Column width={3}>
					<Icon
						corner="bottom right"
						color={this.state.color}
						name="heart"
						size="huge"
						onClick={this.onClickLike}
					/>
				</Grid.Column>
				<Grid.Column>
					<Form>
						<Form.TextArea
							label="Comments"
							placeholder="Tell us more about you..."
							onChange={this.renderPostComment}
						/>

						<Form.Button primary onClick={this.onClickSendComment}>
							Submit
						</Form.Button>
						{this.props.post.comments ? (
							this.props.post.comments.map((comment) => (
								<PostComment username={comment.username} comment={comment.comment} />
							))
						) : (
							[]
						)}
					</Form>
				</Grid.Column>
			</Grid>
		);
	}
}

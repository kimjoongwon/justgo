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
	Message
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
		if (!Meteor.user().userId == post.postAuthorId) {
			<Redirect to="/" />;
		}
		if (this.props.post.hearts) {
			this.state.classifiedColor = this.props.post.hearts.includes(Meteor.userId());
		}

		if (this.state.classifiedColor) {
			this.state.color = 'red';
		} else {
			this.state.color = 'grey';
		}

		return (
			<Grid centered columns="equal">
				<Grid.Column width={10}>
					<Card fluid>
						<Card.Header as="h1" textAlign="center">
							{this.props.post.title}
							<Icon
								corner="bottom right"
								color={this.state.color}
								name="heart"
								size="large"
								onClick={this.onClickLike}
							/>
						</Card.Header>
						<Card.Content>{this.props.post.description}</Card.Content>
						<Card.Content>
							<Image src="https://react.semantic-ui.com/images/wireframe/image.png" fluid />
						</Card.Content>
						<Card.Content>
							<p>{this.props.post.content}</p>
						</Card.Content>
						<Card.Content>
							<Button primary floated="right" type="edit" onClick={this.editModeHandler}>
								수정하기
							</Button>
						</Card.Content>
						<Card.Content textAlign="center">
							<Card
								centered
								image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
								header={this.props.post.author}
								meta="San Fansisco"
							/>
						</Card.Content>
					</Card>
				</Grid.Column>
				<Grid.Column width={3}>
					{this.props.post.comments ? (
						this.props.post.comments.map((comment) => (
							<PostComment username={comment.username} comment={comment.comment} />
						))
					) : (
						<div />
					)}
					<Form>
						<Form.TextArea
							label="About"
							placeholder="Tell us more about you..."
							onChange={this.renderPostComment}
						/>

						<Form.Button primary onClick={this.onClickSendComment}>
							Submit
						</Form.Button>
					</Form>
				</Grid.Column>
			</Grid>
		);
	}
}

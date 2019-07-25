import React, { Component } from 'react';
import { Container, Grid, List, Icon, Segment, Label, Card, Header } from 'semantic-ui-react';
import shortid from 'shortid';
import { NavLink, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class SummaryPosts extends Component {
	constructor(props) {
		super(props);
		this.state = { IsClickEditButton: false };
		this.renderSummaryPostPage = this.renderSummaryPostPage.bind(this);
	}
	renderSummaryPostPage() {
		// console.log(this.props.posts.hearts.length());
		return this.props.posts.map((post) => {
			if (Meteor.userId()) {
				return (
					<NavLink to={`/posts/${post._id}`} key={post._id} class="post">
						<Card>
							<Card.Content>
								<Card.Header>{post.title}</Card.Header>

								<Card.Content>{post.content}</Card.Content>
							</Card.Content>
							<Segment>
								<Icon color="grey" name="heart" />
								{post.hearts ? post.hearts.length : '0'}
								<Icon color="grey" name="comment">
									{post.hearts ? post.comments.length : '0'}
								</Icon>
							</Segment>
						</Card>
					</NavLink>
				);
			} else {
				return (
					<Card>
						<Card.Content>
							<Card.Header>{post.title}</Card.Header>

							<Card.Content>{post.content}</Card.Content>
						</Card.Content>
						<Segment>
							<Icon color="grey" name="heart" />
							{post.hearts ? post.hearts.length : '0'}
							<Icon color="grey" name="comment">
								{post.hearts ? post.comments.length : '0'}
							</Icon>
						</Segment>
					</Card>
				);
			}
		});
	}

	render() {
		return <Card.Group>{this.renderSummaryPostPage()}</Card.Group>;
	}
}

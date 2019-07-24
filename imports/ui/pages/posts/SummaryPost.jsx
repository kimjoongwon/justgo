import React, { Component } from 'react';
import { Container, Grid, List, Icon, Segment, Label } from 'semantic-ui-react';

import shortid from 'shortid';
import { NavLink } from 'react-router-dom';

export default class SummaryPosts extends Component {
	constructor(props) {
		super(props);
		this.state = { IsClickEditButton: false };
		this.renderSummaryPostPage = this.renderSummaryPostPage.bind(this);
		
	}
	renderSummaryPostPage() {
		// console.log(this.props.posts.hearts.length());
		return this.props.posts.map((post) => (
			<NavLink to={`/posts/${post._id}`} key={post._id} class="post">
				<Grid.Column
					style={{ height: '100', maxHeight: '10em', width: '100 ', maxWidth: '10em', color: 'black ' }}
				>
					<Segment>
						<Segment>
							<List.Item>{post.title}</List.Item>
						</Segment>
						<Segment>
							<List.Item>{post.description}</List.Item>
						</Segment>
						<Segment>
							<List.Item>{post.content}</List.Item>
						</Segment>
					</Segment>
					<Segment>
						<Icon color="grey" name="heart" />
						{post.hearts ? post.hearts.length : '0'}
						<Icon color="grey" name="comment">
							{post.hearts ? post.comments.length : '0'}
						</Icon>
					</Segment>
				</Grid.Column>
			</NavLink>
		));
	}

	render() {
		return <Grid divided>{this.renderSummaryPostPage()}</Grid>;
	}
}

import React, { Component } from 'react';
import { Grid, Segment, Image, Container, Header, Button } from 'semantic-ui-react';
import SummaryPost from './SummaryPost';
import shortid from 'shortid';
import { NavLink } from 'react-router-dom';

export default class SummaryPosts extends Component {
	constructor(props) {
		super(props);
		this.state = { IsClickEditButton: false };
		this.renderSummaryPostPage = this.renderSummaryPostPage.bind(this);
		console.log(this.props.posts);
	}
	renderSummaryPostPage() {
		return this.props.posts.map((post) => (
			<NavLink to={`/posts/${post._id}`} key={post._id} class="post">
				<SummaryPost
					title={post.title}
					description={post.description}
					content={post.content}
					key={shortid.generate()}
				/>
			</NavLink>
		));
	}

	render() {
		return <Container>{this.renderSummaryPostPage()}</Container>;
	}
}

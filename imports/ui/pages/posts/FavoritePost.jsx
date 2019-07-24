import React, { Component } from 'react';
import { Label, Form, Button, Icon, Grid, Header, Segment, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Posts } from '../../../api/posts/posts';
import { Meteor } from 'meteor/meteor';
import PostComment from './PostComment';
import shortid from 'shortid';

export default class FavoritePost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isRed: false,
			color: 'grey',
			classifiedColor: false,
			comment: ''
		};

		console.log(this.props);
	}

	render() {
		return (
			<Grid centered columns="equal">
				<Grid.Column width={10}>
					<Grid.Row>
						<Header as="h1" attached="top">
							{/* TITLE<Icon color={this.state.color} name="heart" size="huge" onClick={this.onClickLike} /> */}
						</Header>
					</Grid.Row>
					<Grid.Row>
						<Segment attached></Segment>
					</Grid.Row>
					<Grid.Row>
						<Segment attached></Segment>
					</Grid.Row>
					<Grid.Row>
						<Segment attached></Segment>
					</Grid.Row>

					<Button type="edit" onClick={this.editModeHandler}>
						수정하기
					</Button>
				</Grid.Column>
			</Grid>
		);
	}
}

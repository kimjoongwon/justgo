import React, { Component } from 'react';
import { Form, Button, Grid, Segment, List } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

export class PostWrite extends Component {
	constructor(props) {
		super(props);

		this.state = { title: '', descriptions: '', contents: '' };
		this.onSubmit = this.onSubmit.bind(this);
		this.handleContent = this.handleContent.bind(this);
		this.handleDescription = this.handleDescription.bind(this);
		this.handleTitle = this.handleTitle.bind(this);
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

	onSubmit(event) {
		const title = this.state.title;
		const description = this.state.description;
		const content = this.state.content;

		this.setState({  title: title, description: description, content: content });

		Meteor.call(
			'insertpost',
			{
				author: Meteor.user().profile.username,
				postAuthorId: Meteor.userId(),
				title: title,
				description: description,
				content: content,
				hearts: [],
				createAt: new Date(),
				comments: []
			},
			(err, res) => {
				if (err) {
					alert(err);
				} else {
				}
			}
		);
	}

	render() {
		return (
			<Grid fluid textAlign="center" style={{ height: 800 }} verticalAlign="middle">
				<Grid.Column style={{ maxWidth: 1200 }}>
					<Form size="Huge" style={{ maxWidth: 800 }}>
						<Segment stacked>
							<Form.TextArea label="Title" style={{ height: 50 }} onChange={this.handleTitle} />

							<Form.TextArea
								label="Desciption"
								style={{ height: 50 }}
								onChange={this.handleDescription}
							/>

							<Form.TextArea label="Desciption" style={{ height: 450 }} onChange={this.handleContent} />

							<Link to="/">
								<Button basic color="blue" content="Blue" type="send" onClick={this.onSubmit}>
									보내기
								</Button>
							</Link>
							<Link to="/">
								<Button basic color="blue" content="Blue" type="cancel">
									취소
								</Button>
							</Link>
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
		);
	}
}

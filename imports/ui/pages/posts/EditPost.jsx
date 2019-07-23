import React, { Component } from 'react';
import { Grid, Header, Segment, Message, List, Form, Button, Label } from 'semantic-ui-react';

export default class EditPost extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onSubmit = () => {
		Meteor.call(
			'editpost',
			{
				title: this.props.post.title,
				description: this.props.post.description,
				content: this.props.content
			},
			(err, res) => {
				if (err) {
					alert(err);
				} else {
				}
			}
		);
	};

	render() {
		return (
			<Grid textAlign="center" style={{ height: 800 }} verticalAlign="middle">
				<Grid.Column style={{ maxWidth: 1200 }}>
					<Header as="h2" textAlign="center">
						계정에 로그인 하세요.
					</Header>

					<Form size="Huge" style={{ maxWidth: 800 }}>
						<Segment stacked>
							<Form.TextArea label="Title" style={{ height: 50 }} />

							<Form.TextArea label="Desciption" style={{ height: 50 }} />

							<Form.TextArea label="Desciption" style={{ height: 450 }} />

							<Button fluid size="large" onClick={this.onSubmit}>
								수정하기
							</Button>
						</Segment>
					</Form>

					<List>
						{/* <List.Item>{this.state.useremail}</List.Item> */}
						<List.Item>{this.state.date}</List.Item>
					</List>
				</Grid.Column>
			</Grid>
		);
	}
}

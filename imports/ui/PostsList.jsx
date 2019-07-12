import React, { Component } from 'react';
import { Grid, Segment, Image, Container } from 'semantic-ui-react';

export class PostsList extends Component {
	constructor(props) {
		super(props);

		this.handleList = this.handleList.bind(this);
	}

	handleList() {}

	render() {
		const { title, description, content } = this.props;

		return (
			<Grid stackable columns={5}>
				<Grid.Column>
					<Segment>
						<Container>
							<p>{title}</p>
						</Container>
					</Segment>
				</Grid.Column>
				<Grid.Column>
					<Segment>
						<Container>
							<p>{description}</p>
						</Container>
					</Segment>
				</Grid.Column>
				<Grid.Column>
					<Segment>
						<Container>
							<p>{content}</p>
						</Container>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

import React, { Component } from 'react';
import { Grid, Segment, Image, Container,Header } from 'semantic-ui-react';

export class PostsList extends Component {
	constructor(props) {
		super(props);

		this.handleList = this.handleList.bind(this);
	}

	handleList() {}

	render() {
		const { title, description, content } = this.props;

		return (
			<Grid celled stackable columns={5}>
                <Header>POST</Header>
				<Grid.Row>
					<Segment>
						<Container>
							<p>{title}</p>
						</Container>
					</Segment>
				</Grid.Row>
				<Grid.Row>
					<Segment>
						<Container>
							<p>{description}</p>
						</Container>
					</Segment>
				</Grid.Row>
				<Grid.Row>
					<Segment>
						<Container>
							<p>{content}</p>
						</Container>
					</Segment>
				</Grid.Row>
			</Grid>
		);
	}
}

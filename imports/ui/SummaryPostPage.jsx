import React, { Component } from 'react';
import { Grid, Segment, Image, Container, Header, Button } from 'semantic-ui-react';

export default class SummaryPostPage extends Component {
	constructor(props) {
		super(props);
		this.state = { IsClickEditButton: false };
	}

	render() {
		const { title, description, content } = this.props;

		return (
			<div>
				<Grid.Row>
					<Header>POST</Header>

					<Segment>{title}</Segment>

					<Segment>{description}</Segment>

					<Segment>{content}</Segment>
				</Grid.Row>
			</div>
		);
	}
}

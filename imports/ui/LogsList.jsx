import React, { Component } from 'react';
import { Grid, Segment, Image, Container,Header } from 'semantic-ui-react';

export class LogsList extends Component {
	constructor(props) {
		super(props);

		
	}


	render() {
		const { log, name} = this.props;

		return (
			<Grid celled stackable columns={5}>
                <Header>Logs</Header>
				<Grid.Row>
					<Segment>
						<Container>
							<p>{log}</p>
						</Container>
					</Segment>
				</Grid.Row>
				<Grid.Row>
					<Segment>
						<Container>
							<p>{name}</p>
						</Container>
					</Segment>
				</Grid.Row>
				<Grid.Row>
					<Segment>
						<Container>
							<p></p>
						</Container>
					</Segment>
				</Grid.Row>
			</Grid>
		);
	}
}

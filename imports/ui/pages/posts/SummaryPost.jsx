import React, { Component } from 'react';
import { Label, Grid, Segment, Container, Icon } from 'semantic-ui-react';
export default class SummaryPost extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Grid.Column>
					<Grid.Row>
						<Container text>{this.props.title}</Container>
					</Grid.Row>
					<Grid.Row>
						<Container text>{this.props.description}</Container>
					</Grid.Row>
					<Grid.Row>
						<Container text>{this.props.content}</Container>
					</Grid.Row>
					<Grid.Row>
						<Container text>{this.props.content}</Container>
					</Grid.Row>
					<Grid.Row>
						<Icon color="grey" name="heart" /> {this.props.likecount}
						<Icon color="grey" name="comment" />
						{this.props.commentcount}
					</Grid.Row>
				</Grid.Column>
			</div>
		);
	}
}

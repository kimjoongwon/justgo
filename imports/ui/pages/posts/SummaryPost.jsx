import React, { Component } from 'react';
import { Label, Grid, Segment } from 'semantic-ui-react';
export default class SummaryPost extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Segment>
					<Label>{this.props.title}</Label>
					<Label>{this.props.description}</Label>
					<Label>{this.props.content}</Label>
				</Segment>
			</div>
		);
	}
}

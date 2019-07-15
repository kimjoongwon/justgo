import React, { Component } from 'react';
import { Grid, Segment, Image, Container, Header, Text, Label } from 'semantic-ui-react';

export class LogsList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { log, name } = this.props;

		return (
			<div className="log-container">
				<Label>{log}</Label>

				<Label>{name}</Label>
			</div>
		);
	}
}

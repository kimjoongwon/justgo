import React, { Component } from 'react';
import DetailPost from './DetailPost';
import EditPost from './EditPost';

export default class Post extends Component {
	constructor(props) {
		super(props);
		this.state = { editMode: false };
	}

	editModeHandler = () => {
		this.setState({ editMode: !this.state.editMode });
	};

	render() {
		const post = this.props.post;
        console.log(post);
    
		return (
			<div>
				{!this.state.editMode ? (
					<DetailPost post={post} editModeHandler={this.editModeHandler} />
				) : (
					<EditPost post={post} editModeHandler={this.editModeHandler} />
				)}
			</div>
		);
	}
}

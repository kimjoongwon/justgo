import React, { Component } from 'react';
import { Grid, Search } from 'semantic-ui-react';
import _ from 'lodash';

export default class MemberSearch extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: false, results: [], value: '' };
	}

	handleResultSelect = (e, { result }) => {
		this.setState({ value: result.title });
		this.props.memberinfohandler(result.description, result.title, result.price);
	};

	handleSearchChange = (e, { value }) => {
		let MembersData = [];
		MembersData = this.props.users.map((user) => ({
			title: user.profile.username,
			description: user.profile.phone,
			price: user.emails[0].address
		}));
		this.setState({ isLoading: true, value });
		setTimeout(() => {
			if (this.state.value.length < 1) return this.setState({ isLoading: false, results: [], value: '' });
			const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
			const isMatch = (result) => re.test(result.title);
			const source = MembersData;
			this.setState({
				isLoading: false,
				results: _.filter(source, isMatch)
			});
		}, 300);
	};

	render() {
		return (
			<Grid>
				<Search
					loading={this.state.isLoading}
					onResultSelect={this.handleResultSelect}
					onSearchChange={_.debounce(this.handleSearchChange, 500, {
						leading: true
					})}
					results={this.state.results}
					value={this.state.value}
					{...this.props}
				/>
			</Grid>
		);
	}
}

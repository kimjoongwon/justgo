import React, { Component } from 'react';
import { Header, Button, Label, Icon, Menu, Container, Divider, Grid, Segment, MenuMenu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
export default class MainHeader extends Component {
	constructor(props) {
		super(props);
		this.state = { activeItem: '' };
		// this.logoutHandle = this.logoutHandle.bind(this);
		this.handleItemClick = this.handleItemClick.bind(this);
		this.loginjoinMenuRender = this.loginjoinMenuRender.bind(this);
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	loginjoinMenuRender() {
		const { activeItem } = this.state;

		return (
			<Grid columns={3}>
				<Grid.Column />
				<Grid.Column>
					<Header as="h1" textAlign="center">
						<Link to="/">ToyProject</Link>
					</Header>
				</Grid.Column>
				<Grid.Column textAlign="center">
					<Menu compact>
						<Link to="/signin">
							<Menu.Item name="로그인" active={activeItem === '로그인'} onClick={this.handleItemClick} />
						</Link>
						<Link to="/join">
							<Menu.Item name="회원가입" active={activeItem === '회원가입'} onClick={this.handleItemClick} />
						</Link>
					</Menu>
				</Grid.Column>
			</Grid>
		);
	}

	logoutRender() {
		return (
			<Grid columns={3}>
				<Grid.Column>
					<Link to="/blogwrite">
						<Button basic color="blue">
							블로그 쓰기
						</Button>
					</Link>

					<Link to="/favoriteposts">
						<Button basic color="blue">
							좋아요한 블로그
						</Button>
					</Link>
				</Grid.Column>
				<Grid.Column>
					<Link to="/">
						<Header as="h1" color="blue" textAlign="center">
							ToyProject
						</Header>
					</Link>
				</Grid.Column>
				<Grid.Column textAlign="center">
					<Link to="/modifyuserpw">
						<Menu secondary>
							<Menu.Item>
								<Icon name="user" size="large" />
							</Menu.Item>
							<Menu.Item>{this.props.currentUser.profile.username}</Menu.Item>
						</Menu>
					</Link>
				</Grid.Column>
			</Grid>
		);
	}

	render() {
		return !this.props.currentUser ? this.loginjoinMenuRender() : this.logoutRender();
	}
}

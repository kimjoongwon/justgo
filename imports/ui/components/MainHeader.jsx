import React, { Component } from 'react';
import { Header, Button, Label, Menu, Container, Divider, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
export default class MainHeader extends Component {
	constructor(props) {
		super(props);
		this.state = { activeItem: '' };
		this.logoutHandle = this.logoutHandle.bind(this);
		this.handleItemClick = this.handleItemClick.bind(this);
		this.loginjoinMenuRender = this.loginjoinMenuRender.bind(this);
	}

	logoutHandle() {
		Meteor.logout();
		this.loginjoinMenuRender();
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
		const user = this.props.user;
		const currentUser = Meteor.user();
		const phone = this.props.phone;
		console.log(user);
		return (
			<Grid columns={3}>
				<Grid.Column>
					<Link to="/blogwrite">
						<Button>블로그 쓰기</Button>
					</Link>

					<Link to="/favoriteposts">
						<Button>좋아요한 블로그</Button>
					</Link>
				</Grid.Column>
				<Grid.Column>
					<Link to="/">
						<Header as="h1" textAlign="center">
							ToyProject
						</Header>
					</Link>
				</Grid.Column>
				<Grid.Column textAlign="center">
					<Button onClick={this.logoutHandle}>로그아웃</Button>
					<Link to="/modifyUserPw">
						<Segment>{currentUser.profile.username}</Segment>
					</Link>
				</Grid.Column>
			</Grid>
		);
	}

	render() {
		return !Meteor.userId() ? this.loginjoinMenuRender() : this.logoutRender();
	}
}

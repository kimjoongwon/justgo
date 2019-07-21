import React, { Component } from 'react';
import { Header, Button, Label, Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
			<div class="header-container">
				<div />
				<Header>
					<Link to="/">ToyProject</Link>
				</Header>

				<Menu>
					<Link to="/signin">
						<Menu.Item name="로그인" active={activeItem === '로그인'} onClick={this.handleItemClick} />
					</Link>
					<Link to="/join">
						<Menu.Item name="회원가입" active={activeItem === '회원가입'} onClick={this.handleItemClick} />
					</Link>
				</Menu>
			</div>
		);
	}

	logoutRender() {
		const user = this.props.user;
		const phone = this.props.phone;

		return (
			<div class="logout-header-container">
				<div>
					<Link to="/blogwrite">
						<Button>블로그 쓰기</Button>
					</Link>

					<Link to="/favoriteposts">
						<Button>좋아요한 블로그</Button>
					</Link>
				</div>
				<Link to="/">
					<Header>ToyProject</Header>
				</Link>

				<Button onClick={this.logoutHandle}>로그아웃</Button>
			</div>
		);
	}

	render() {
		return !Meteor.userId() ? this.loginjoinMenuRender() : this.logoutRender();
	}
}

import React, { Component } from 'react';
import { Button, Label } from 'semantic-ui-react';

export default class Logout extends Component {
	constructor(props) {
        super(props)
    }

	render() {
		return <Button>로그아웃</Button>;
	}
}

import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import Link from 'react-router-dom'
export default class BlogWriteButton extends Component {
	constructor(props) {
		super(props);
    }
    render(){

        return(
            <Link to="/blogwrite">  <Button>블로그 쓰기</Button>   </Link>


        )
    }
}

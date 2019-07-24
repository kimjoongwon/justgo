import React, { Component } from "react";
import {
  Label,
  Form,
  Button,
  Icon,
  Grid,
  Header,
  Segment,
  Message,
  Container
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Posts } from "../../../api/posts/posts";
import { Meteor } from "meteor/meteor";
import PostComment from "./PostComment";
import shortid from "shortid";

export default class FavoritePost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
	  
    return <Container>상세뷰 입니다.</Container>;
  }
}

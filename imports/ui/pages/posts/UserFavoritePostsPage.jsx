import React, { Component } from "react";
import { Label, Grid, Segment, List, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class UserFavoritefavoritePostsPage extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    

    return (
      <Grid>
        {this.props.favoritePosts.map(favoritePost => (
          <NavLink
            to={`/favoriteposts/${favoritePost._id}`}
            key={favoritePost._id}
            class="favoritePost"
          >
            <Grid.Column
              style={{
                height: "200",
                maxHeight: "20em",
                width: "200 ",
                maxWidth: "20em",
                color: "black "
              }}
            >
              <Segment>
                <Segment>
                  <List.Item>{favoritePost.title}</List.Item>
                </Segment>
                <Segment>
                  <List.Item>{favoritePost.description}</List.Item>
                </Segment>
                <Segment>
                  <List.Item>{favoritePost.content}</List.Item>
                </Segment>
              </Segment>
              <Segment>
                <Icon color="grey" name="heart" />
                {favoritePost.hearts ? favoritePost.hearts.length : "0"}
                <Icon color="grey" name="comment">
                  {favoritePost.hearts ? favoritePost.comments.length : "0"}
                </Icon>
              </Segment>
            </Grid.Column>
          </NavLink>
        ))}
      </Grid>
    );
  }
}

// import React, { Component } from "react";
// import {
//   Grid,
//   Segment,
//   Image,
//   Container,
//   Header,
//   Button
// } from "semantic-ui-react";

// export class PostsList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { IsClickEditButton: false };
//     this.handleList = this.handleList.bind(this);
//   }

//   handleList() {}

//   renderHandler() {}
//   renderPagesList() {
//     const { title, description, content } = this.props;
//     <Grid celled stackable columns={5}>
//       <Header>POST</Header>
//       <Grid.Row>
//         <Segment>
//           <Container>
//             <p>{title}</p>
//           </Container>
//         </Segment>
//       </Grid.Row>
//       <Grid.Row>
//         <Segment>
//           <Container>
//             <p>{description}</p>
//           </Container>
//         </Segment>
//       </Grid.Row>
//       <Grid.Row>
//         <Segment>
//           <Container>
//             <p>{content}</p>
//           </Container>
//         </Segment>
//       </Grid.Row>
//       <Grid.Row>
//         <Button onClick={this.renderHandler()}>수정하기</Button>
//       </Grid.Row>
//     </Grid>;
//   }
//   renderEditPagesRender() {
//     <Grid celled stackable columns={5}>
//       <Header>POST</Header>
//       <Grid.Row>
//         <Segment>
//           <Input>
//             <p>{title}</p>
//           </Input>
//         </Segment>
//       </Grid.Row>
//       <Grid.Row>
//         <Segment>
//           <Input>
//             <p>{description}</p>
//           </Input>
//         </Segment>
//       </Grid.Row>
//       <Grid.Row>
//         <Segment>
//           <Input>
//             <p>{content}</p>
//           </Input>
//         </Segment>
//       </Grid.Row>
//       <Grid.Row>
//         <Button onClick={this.renderHandler()}>수정하기</Button>
//       </Grid.Row>
//     </Grid>;
//   }

//   render() {
    
//   }
// }

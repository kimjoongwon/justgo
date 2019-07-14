import React, { Component } from "react";
import { Header, Button, Label ,Menu} from "semantic-ui-react";
import { Link } from "react-router-dom";
export default class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state =({activeItem:''})
    this.logoutHandle = this.logoutHandle.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  logoutHandle() {
    Meteor.logout(() => {
      const user = this.props.user;
      const phone = this.props.phone;
      console.log(user);

      const name = user;
      console.log(name);
      const date = new Date();
      const log = date.toString();

      Meteor.call(
        "insertlog",
        {
          name: name + "님이 로그아웃 하셨습니다.",
          log: log
        },
        (err, res) => {
          if (err) {
            alert(err);
            //    여기서 NOT FOUND NOT Mehthod 에러가 발생 server.js에 import 빠짐. structure study
          } else {
          }
        }
      );
    });
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  loginjoinMenuRender() {
    const { activeItem } = this.state
    return (
      <div className='header-container'>
        <div>

        </div>
        <Header>
          <Link to="/">ToyProject</Link>
        </Header>

        <Menu>
          <Link to="/signin">
            <Menu.Item
              name="로그인"
              active={activeItem === "로그인"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/join">
            <Menu.Item
              name="회원가입"
              active={activeItem === "회원가입"}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu>
      </div>
    );
  }

  logoutRender() {
    const phone = this.props.phone;
    if (Meteor.userId()) {
      console.log(phone[0].phones);
    }
    // const asd = phone[0].phones.toStirng()
    return (
      <div>
        <Header>asdasd</Header>

        <Button onClick={this.logoutHandle}>로그아웃</Button>
      </div>
    );
  }

  render() {
    return !this.props.user ? this.loginjoinMenuRender() : this.logoutRender();
  }
}

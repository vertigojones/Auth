import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import styled from "styled-components";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <NavBarStyles>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item
              as={Link}
              name="home"
              to="/"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/employees"
              name="employees"
              active={activeItem === "employees"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/register"
              name="register"
              active={activeItem === "register"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              name="login"
              to="/login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Segment>
      </NavBarStyles>
    );
  }
}

const NavBarStyles = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`;

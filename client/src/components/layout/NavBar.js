import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Menu, Segment, Button } from "semantic-ui-react";
import styled from "styled-components";

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <>
      <Menu.Item as={Link} name="dashboard" to="/dashboard" />
      <Menu.Item as={Link} name="employees" to="/employees" />
      <Menu.Item as={Link} name="posts" to="/posts" />
      <Button onClick={logout} negative>
        Log Out
      </Button>
    </>
  );

  const guestLinks = (
    <>
      <Menu.Item as={Link} name="home" to="/" />
      <Menu.Item as={Link} name="employees" to="/employees" />
      <Menu.Item as={Link} name="sign up" to="/register" />
      <Menu.Item as={Link} name="log in" to="/login" />
    </>
  );

  return (
    <NavBarStyles>
      <Segment inverted>
        <Menu inverted pointing secondary>
          {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
        </Menu>
      </Segment>
    </NavBarStyles>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { logout })(NavBar);

const NavBarStyles = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

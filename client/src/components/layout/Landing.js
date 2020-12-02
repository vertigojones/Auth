import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Header, Message, Button } from "semantic-ui-react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <OuterContainer>
      <Container style={{ padding: "20px" }}>
        <HeaderContainer>
          <Header size="huge">
            <span>HD</span> SupplyBook
          </Header>
        </HeaderContainer>
        <MessageContainer>
          <Message compact color="yellow">
            Connect with fellow HD Supply and White Cap employees. Please sign
            up for an account or log in to your current profile.
          </Message>
        </MessageContainer>
        <ButtonContainer>
          <Button.Group>
            <Link to="/register">
              <Button primary>Sign Up</Button>
            </Link>
            <Button.Or />
            <Link to="/login">
              <Button secondary>Log In</Button>
            </Link>
          </Button.Group>
        </ButtonContainer>
      </Container>
    </OuterContainer>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);

const OuterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  border-top: solid;
  border-width: 1px;
  border-color: black;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  text-shadow: 1px 1px white;

  span {
    color: #eebb15;
    text-shadow: 1px 1px black;
  }
`;

const MessageContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

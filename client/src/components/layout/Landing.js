import React from "react";
import { Container, Header, Message, Button } from "semantic-ui-react";
import styled from "styled-components";

const Landing = () => {
  return (
    <ComponentStyles>
      <Container className="container">
        <HeaderContainer>
          <Header size="huge">HD SupplyBook</Header>
        </HeaderContainer>
        <Message>
          <p>
            Connect with fellow HD Supply and White Cap employees. Please sign
            up for an account or log in to your current profile.
          </p>
        </Message>
        <ButtonContainer>
          <Button primary>Sign Up</Button>
          <Button secondary>Log In</Button>
        </ButtonContainer>
      </Container>
    </ComponentStyles>
  );
};

export default Landing;

const ComponentStyles = styled.div`
  position: relative;

  .container {
    padding-top: 25vh;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

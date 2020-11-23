import React from "react";
import { Container, Header, Message, Button } from "semantic-ui-react";
import styled from "styled-components";

const Landing = () => {
  return (
    <LandingStyles>
      <OuterContainer>
        <Container style={{ padding: "20px" }}>
          <HeaderContainer>
            <Header size="huge">HD SupplyBook</Header>
          </HeaderContainer>
          <Message>
            <p>
              Connect with fellow HD Supply and White Cap employees. Please sign
              up for an account or log in to your current
            </p>
          </Message>
          <ButtonContainer>
            <Button.Group>
              <Button primary>Sign Up</Button>
              <Button.Or />
              <Button secondary>Log In</Button>
            </Button.Group>
          </ButtonContainer>
        </Container>
      </OuterContainer>
    </LandingStyles>
  );
};

export default Landing;

const LandingStyles = styled.div`
  position: relative;
`;

const OuterContainer = styled.div`
  margin-top: 33vh;
  background-color: rgba(255, 255, 255, 0.75);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

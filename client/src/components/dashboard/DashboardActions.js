import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

export const DashboardActions = () => {
  return (
    <OuterContainer>
      <Link to="/edit-profile">
        <Button primary>Edit Profile</Button>
      </Link>
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

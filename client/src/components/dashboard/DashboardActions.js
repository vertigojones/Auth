import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAccount } from "../../actions/profile";
import PropTypes from "prop-types";
import { Message, Button } from "semantic-ui-react";
import styled from "styled-components";

const DashboardActions = ({ deleteAccount }) => {
  return (
    <OuterContainer>
      <Message>
        <Link to="/edit-profile">
          <Button primary>Edit Profile</Button>
        </Link>
        <Button negative onClick={() => deleteAccount()}>
          Delete Account
        </Button>
      </Message>
    </OuterContainer>
  );
};

DashboardActions.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
};

export default connect(null, { deleteAccount })(DashboardActions);

const OuterContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { Container, Header, Icon, Message } from "semantic-ui-react";
import styled from "styled-components";

import DashboardActions from "./DashboardActions";
import Spinner from "../layout/Spinner";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <OuterContainer>
      <Container style={{ padding: "20px" }}>
        {loading && profile === null ? (
          <Spinner />
        ) : (
          <>
            <HeaderContainer>
              <Header size="huge">
                <span>HD</span> SupplyBook - Dashboard
              </Header>
            </HeaderContainer>
            <HeaderContainer style={{ marginTop: "20px" }}>
              <Header size="medium">
                <Icon name="user" />
                Welcome {user && user.name}
              </Header>
            </HeaderContainer>
            {profile !== null ? (
              <>
                <DashboardActions />
              </>
            ) : (
              <MessageContainer>
                <Message compact color="yellow">
                  You have not yet entered a profile. Please add some
                  information <Link to="/create-profile">here</Link>
                </Message>
              </MessageContainer>
            )}
          </>
        )}
      </Container>
    </OuterContainer>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

const OuterContainer = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  border: solid 1px black;
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
  margin: 40px 0;
  display: flex;
  justify-content: center;
`;

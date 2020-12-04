import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllProfiles } from "../../actions/profile";
import { Container, Header, Item, Message } from "semantic-ui-react";
import styled from "styled-components";

import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";

const Profiles = ({ getAllProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);

  return (
    <OuterContainer>
      <Container style={{ padding: "20px" }}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <HeaderContainer>
              <Header size="huge">
                <span>HD</span> SupplyBook Profiles
              </Header>
            </HeaderContainer>
            {profiles.length > 0 ? (
              <Item.Group>
                {profiles.map((profile) => {
                  return <ProfileItem key={profile._id} profile={profile} />;
                })}
              </Item.Group>
            ) : (
              <MessageContainer>
                <Message compact color="yellow">
                  There are currently no profiles. Please add your profile{" "}
                  <Link to="/create-profile">here</Link>
                </Message>
              </MessageContainer>
            )}
          </>
        )}
      </Container>
    </OuterContainer>
  );
};

Profiles.propTypes = {
  getAllProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getAllProfiles })(Profiles);

const OuterContainer = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  border: solid 1px black;

  @media (max-width: 768px) {
    top: 82px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  text-shadow: 1px 1px white;
  margin-bottom: 40px;

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

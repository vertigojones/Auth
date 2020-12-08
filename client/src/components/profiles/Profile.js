import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/profile";
import {
  Container,
  Message,
  Divider,
  Header,
  Item,
  Button,
} from "semantic-ui-react";
import styled from "styled-components";

import Spinner from "../layout/Spinner";

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  return (
    <OuterContainer>
      <Container style={{ padding: "20px" }}>
        {loading || profile === null ? (
          <Spinner />
        ) : (
          <>
            <HeaderContainer>
              <Header size="huge">
                <span>HD</span> SupplyBook Profile
              </Header>
            </HeaderContainer>
            <CardContainer>
              <Message>
                <Item.Group>
                  <Item>
                    <Item.Image size="small" src={profile.user.avatar} />
                    <Item.Content>
                      <Item.Header>{profile.user.name}</Item.Header>
                      <Item.Description>{profile.department}</Item.Description>
                      <Item.Meta>{profile.user.email}</Item.Meta>
                      <Divider />
                      <Item.Description>Bio:</Item.Description>
                      <Item.Meta>{profile.about}</Item.Meta>
                      <Item.Description>Skills:</Item.Description>
                      <Item.Meta>{profile.skills.join(", ")}</Item.Meta>
                      <Item.Description>Hobbies:</Item.Description>
                      <Item.Meta>{profile.hobbies.join(", ")}</Item.Meta>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Message>
            </CardContainer>
            <ButtonContainer>
              {auth.isAuthenticated &&
                auth.loading === false &&
                auth.user._id === profile.user._id && (
                  <Link to="/edit-profile">
                    <Button primary>Edit Profile</Button>
                  </Link>
                )}
              <Link to="/employees">
                <Button basic primary>
                  All Employees
                </Button>
              </Link>
            </ButtonContainer>
          </>
        )}
      </Container>
    </OuterContainer>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);

const OuterContainer = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  border: solid 1px black;
  top: 100px;

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

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

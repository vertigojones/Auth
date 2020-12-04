import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/profile";
import { Container, Header, Card, Image, Button } from "semantic-ui-react";
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
              <Card>
                <Image src={profile.user.avatar} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{profile.user.name}</Card.Header>
                  <Card.Description>{profile.department}</Card.Description>
                  <Card.Meta>{profile.user.email}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>Bio:</Card.Description>
                  {profile.about}
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>Skills:</Card.Description>
                  {profile.skills.join(", ")}
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>Hobbies:</Card.Description>
                  {profile.hobbies.join(", ")}
                </Card.Content>
              </Card>
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

import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { Container, Header, Button, Form } from "semantic-ui-react";
import styled from "styled-components";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    department: "",
    position: "",
    about: "",
    skills: "",
    hobbies: "",
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      department: loading || !profile.department ? "" : profile.department,
      position: loading || !profile.position ? "" : profile.position,
      about: loading || !profile.about ? "" : profile.about,
      skills: loading || !profile.skills ? "" : profile.skills.join(", "),
      hobbies: loading || !profile.hobbies ? "" : profile.hobbies.join(", "),
    });
  }, [loading]);

  const { department, position, about, skills, hobbies } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <OuterContainer>
      <Container style={{ padding: "20px" }}>
        <HeaderContainer>
          <Header size="huge">
            <span>HD</span> SupplyBook Create New Profile
          </Header>
        </HeaderContainer>
        <HeaderContainer style={{ margin: "20px 0" }}>
          <HeaderContainer size="small">
            *Please fill out all fields
          </HeaderContainer>
        </HeaderContainer>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Field>
            <label>Department</label>
            <input
              placeholder="Department Name"
              name="department"
              value={department}
              onChange={(e) => onChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Position</label>
            <input
              placeholder="Current Position"
              name="position"
              value={position}
              onChange={(e) => onChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>About</label>
            <textarea
              placeholder="About me"
              name="about"
              value={about}
              onChange={(e) => onChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Skills</label>
            <input
              placeholder="Please enter some skills, separated by a comma"
              name="skills"
              value={skills}
              onChange={(e) => onChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Hobbies</label>
            <input
              placeholder="Please enter some hobbies, separated by a comma"
              name="hobbies"
              value={hobbies}
              onChange={(e) => onChange(e)}
            />
          </Form.Field>
          <Button
            type="submit"
            disabled={
              department === "" ||
              position === "" ||
              about === "" ||
              skills === "" ||
              hobbies === ""
                ? true
                : false
            }
          >
            Submit
          </Button>
        </Form>
      </Container>
    </OuterContainer>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);

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

  span {
    color: #eebb15;
    text-shadow: 1px 1px black;
  }
`;

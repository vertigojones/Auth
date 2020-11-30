import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { Container, Header, Message, Button, Form } from "semantic-ui-react";
import styled from "styled-components";

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert("Passwords do not match", "negative");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <OuterContainer>
      <Container style={{ padding: "20px" }}>
        <HeaderContainer>
          <Header size="huge">
            <span>HD</span> SupplyBook Sign Up
          </Header>
        </HeaderContainer>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              minLength="6"
              onChange={(e) => onChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              minLength="6"
              onChange={(e) => onChange(e)}
            />
          </Form.Field>
          <Button
            type="submit"
            disabled={
              name === "" ||
              email === "" ||
              password === "" ||
              confirmPassword === ""
                ? true
                : false
            }
          >
            Sign Up
          </Button>
        </Form>
        <Message compact color="yellow">
          Already subscribed? <Link to="/login">Login</Link>
        </Message>
      </Container>
    </OuterContainer>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Register);

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

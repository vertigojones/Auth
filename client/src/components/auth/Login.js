import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Message, Button, Form } from "semantic-ui-react";
import styled from "styled-components";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <OuterContainer>
      <Container style={{ padding: "20px" }}>
        <HeaderContainer>
          <Header size="huge">
            <span>HD</span> SupplyBook Login
          </Header>
        </HeaderContainer>
        <Form onSubmit={(e) => onSubmit(e)}>
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
          <Button
            type="submit"
            disabled={email === "" || password === "" ? true : false}
          >
            Login
          </Button>
        </Form>
        <Message compact color="yellow">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </Message>
      </Container>
    </OuterContainer>
  );
};

export default Login;

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
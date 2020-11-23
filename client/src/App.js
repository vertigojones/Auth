import React from "react";
import styled from "styled-components";

import NavBar from "./components/layout/NavBar";
import Landing from "./components/layout/Landing";

import background from "./library/images/hd-supply-background.jpeg";

const App = () => (
  <AppStyles style={{ backgroundImage: `url("${background}")` }}>
    <NavBar />
    <Landing />
  </AppStyles>
);

export default App;

const AppStyles = styled.div`
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
`;

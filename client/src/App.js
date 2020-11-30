import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import styled from "styled-components";

import NavBar from "./components/layout/NavBar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import background from "./library/images/hd-supply-background.jpeg";

const App = () => (
  <Provider store={store}>
    <Router>
      <AppStyles style={{ backgroundImage: `url("${background}")` }}>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </AppStyles>
    </Router>
  </Provider>
);

export default App;

const AppStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
`;

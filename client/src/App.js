import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import styled from "styled-components";

import NavBar from "./components/layout/NavBar";
import Alert from "./components/layout/Alert";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Employees from "./components/profiles/Profiles";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profiles/CreateProfile";
import EditProfile from "./components/profiles/EditProfile";
import Profile from "./components/profiles/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/posts/Post";
import PrivateRoute from "./components/routing/PrivateRoute";

import background from "./library/images/hd-supply-background.jpeg";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <AppStyles style={{ backgroundImage: `url("${background}")` }}>
          <NavBar />
          <Alert />
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/employees" component={Employees} />
            <Route exact path="/employees/:id" component={Profile} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute exact path="/posts" component={Posts} />
            <PrivateRoute exact path="/posts/:id" component={Post} />
          </Switch>
        </AppStyles>
      </Router>
    </Provider>
  );
};

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
  overflow-y: scroll;
`;

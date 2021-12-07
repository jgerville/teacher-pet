import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Redirect } from "react-router";
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import Modal from './modal/modal';

// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <Modal />
    model goes here
    <NavBarContainer />
    <Switch>
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
      <Route exact path="/" component={MainPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Redirect } from "react-router";
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPageContainer from './main/main_page_container';
import Modal from './modal/modal';
import ClassPage from './pages/class_page';
import ClassShowPage from './pages/class_show_page';

// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
      <ProtectedRoute path="/classes/:classId" component={ClassShowPage} />
      <ProtectedRoute path="/classes" component={ClassPage} />
      <Route exact path="/">
        <MainPageContainer />
      </Route>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
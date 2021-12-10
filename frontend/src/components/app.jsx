import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Redirect } from "react-router";
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPageContainer from './main/main_page_container';
import Modal from './modal/modal';
import ClassPage from './pages/class_page';
import ClassShowPage from './pages/class_show_page';
import StudentShowPage from './pages/student_show_page';
import ReportTextHandler from './reports/report_text_handler';
import ReportDataFormContainer from './reports/report_data_form_container'
import ReportFormContainer from './reports/report_form_container'



const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
      <ProtectedRoute path="/reports/" component={ReportTextHandler} />
      <ProtectedRoute path="/students/:studentId/reports/:reportDataId" component={ReportFormContainer} />
      <ProtectedRoute path="/students/:studentId/reports" component={ReportDataFormContainer} />
      <ProtectedRoute path="/students/:studentId" component={StudentShowPage} />
      <ProtectedRoute path="/classes/:classId" component={ClassShowPage} />
      <ProtectedRoute path="/classes" component={ClassPage} />
      <AuthRoute exact path="/" component={MainPageContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Toastr from 'react-redux-toastr';
import { connect } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import tryAutoLogin from '@actions/tryAutoLogin';
import Header from './Header';
import GuestRoute from './GuestRoute';

function App({ tryAutoLogin }) {
  useEffect(() => {
    tryAutoLogin();
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <GuestRoute path="/login" component={Login} />
        <GuestRoute path="/register" component={Register} />
      </Switch>
      <Toastr transitionIn="fadeIn" transitionOut="fadeOut" />
    </Router>
  );
}

export default connect(null, { tryAutoLogin })(App);

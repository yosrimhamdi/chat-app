import React, { useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Toastr from 'react-redux-toastr';
import { connect } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import onAuthStateChange from '@actions/onAuthStateChange';
import Header from './Header';
import GuestRoute from './Routes/GuestRoute';
import history from '../history';

function App({ onAuthStateChange }) {
  useEffect(() => {
    onAuthStateChange();
  }, []);

  return (
    <Router history={history}>
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

export default connect(null, { onAuthStateChange })(App);

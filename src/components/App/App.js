import React, { useEffect } from 'react';
import { Router, Switch } from 'react-router-dom';
import Toastr from 'react-redux-toastr';
import { connect } from 'react-redux';

import './App.scss';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'semantic-ui-css/semantic.min.css';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import onAuthStateChange from '@actions/onAuthStateChange';
import GuestRoute from '../Routes/GuestRoute';
import ProtectedRoute from '../Routes/ProtectedRoute';
import history from '../../history';

function App({ onAuthStateChange }) {
  useEffect(() => {
    onAuthStateChange();
  }, []);

  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
        </Switch>
      </div>
      <Toastr transitionIn="fadeIn" transitionOut="fadeOut" />
    </Router>
  );
}

export default connect(null, { onAuthStateChange })(App);

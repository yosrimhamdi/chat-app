import React, { useEffect } from 'react';
import { Router, Switch } from 'react-router-dom';
import Toastr from 'react-redux-toastr';
import { connect } from 'react-redux';

import './App.scss';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'semantic-ui-css/semantic.min.css';
import Home from '../Home/Home';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import onAuthStateChanged from '../../firebase/auth/onAuthStateChanged';
import GuestRoute from '../Routes/GuestRoute';
import ProtectedRoute from '../Routes/ProtectedRoute';
import history from '../../history';
import signIn from '@actions/signIn';
import Spinner from '../Spinner/Spinner';
import removeMountSpinner from '@actions/removeMountSpinner';

function App({ signIn, isInitialMount, removeMountSpinner }) {
  useEffect(() => {
    onAuthStateChanged(signIn, isInitialMount, removeMountSpinner);
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
      <Spinner />
      <Toastr transitionIn="fadeIn" transitionOut="fadeOut" />
    </Router>
  );
}

const mapStateToProps = state => ({
  isInitialMount: state.loading.isInitialMount,
});

export default connect(mapStateToProps, { signIn, removeMountSpinner })(App);

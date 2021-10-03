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
import AppMountSpinner from '../AppMountSpinner/AppMountSpinner';
import removeLoadingChatSpinner from '@actions/removeLoadingChatSpinner';
import onConnectionStateChanged from '../../firebase/database/onConnectionStateChanged';
import removeListener from '../../firebase/database/removeListener';
import onAuthUserDocValue from '../../firebase/database/onAuthUserDocValue';
import setAuthUserDoc from '../../redux/actions/setAuthUserDoc';

const App = ({ signIn, removeLoadingChatSpinner, user, setAuthUserDoc }) => {
  useEffect(() => {
    onAuthStateChanged(signIn, removeLoadingChatSpinner);
  }, []);

  useEffect(() => {
    if (user) {
      onConnectionStateChanged();

      return () => removeListener('.info/connected', 'value');
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      onAuthUserDocValue(user.uid, setAuthUserDoc);

      return () => removeListener('users/', 'value');
    }
  }, [user]);

  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
        </Switch>
      </div>
      <AppMountSpinner />
      <Toastr transitionIn="fadeIn" transitionOut="fadeOut" />
    </Router>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  signIn,
  removeLoadingChatSpinner,
  setAuthUserDoc,
})(App);

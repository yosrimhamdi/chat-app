import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

function ProtectedRoute({ isLoggedIn, component, ...rest }) {
  if (isLoggedIn) {
    return <Route component={component} {...rest} />;
  }

  return <Redirect to="/" />;
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

export default connect(mapStateToProps)(ProtectedRoute);

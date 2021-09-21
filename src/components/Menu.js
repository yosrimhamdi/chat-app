import React from 'react';
import { connect } from 'react-redux';
import { Input, Menu as SemanticMenu } from 'semantic-ui-react';

import trySignOut from '@actions/trySignOut';
import { Link } from 'react-router-dom';

function Menu({ trySignOut, isLoggedIn }) {
  let cta = <SemanticMenu.Item name="logout" onClick={trySignOut} />;

  if (!isLoggedIn) {
    cta = <Link to="/login">Login</Link>;
  }

  return (
    <SemanticMenu secondary>
      <SemanticMenu.Item name="home" />
      <SemanticMenu.Item name="messages" />
      <SemanticMenu.Item name="friends" />
      <SemanticMenu.Menu position="right">
        <SemanticMenu.Item>
          <Input icon="search" placeholder="Search..." />
        </SemanticMenu.Item>
        {cta}
      </SemanticMenu.Menu>
    </SemanticMenu>
  );
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

export default connect(mapStateToProps, { trySignOut })(Menu);

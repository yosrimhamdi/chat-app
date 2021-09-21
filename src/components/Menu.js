import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Menu as SemanticMenu, Button } from 'semantic-ui-react';

import trySignOut from '@actions/trySignOut';

function Menu({ trySignOut, isLoggedIn }) {
  let cta = <SemanticMenu.Item name="logout" onClick={trySignOut} />;

  if (!isLoggedIn) {
    cta = (
      <Button>
        <Link to="/login">Login</Link>
      </Button>
    );
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

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Menu, Button } from 'semantic-ui-react';

import trySignOut from '@actions/trySignOut';

function Header({ trySignOut, isLoggedIn }) {
  let cta = <Menu.Item name="logout" onClick={trySignOut} />;

  if (!isLoggedIn) {
    cta = (
      <Button>
        <Link to="/login">Login</Link>
      </Button>
    );
  }

  return (
    <Menu secondary>
      <Menu.Item name="home" />
      <Menu.Item name="messages" />
      <Menu.Item name="friends" />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        {cta}
      </Menu.Menu>
    </Menu>
  );
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

export default connect(mapStateToProps, { trySignOut })(Header);

import React from 'react';
import UserPanel from './UserPanel';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

function SidePanel({ isLoggedIn }) {
  return (
    <Menu
      size="large"
      inverted
      fixed="left"
      vertical
      style={{ background: '#4c3c4c', fontSize: '1.2rem' }}
    >
      {isLoggedIn ? <UserPanel /> : ''}
    </Menu>
  );
}

const mapStateToProps = state => ({ isLoggedIn: state.auth.isLoggedIn });

export default connect(mapStateToProps)(SidePanel);

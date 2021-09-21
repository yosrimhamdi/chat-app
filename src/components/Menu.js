import React from 'react';
import { connect } from 'react-redux';
import { Input, Menu as SemanticMenu } from 'semantic-ui-react';

import trySignOut from '@actions/trySignOut';

function Menu({ trySignOut }) {
  return (
    <SemanticMenu secondary>
      <SemanticMenu.Item name="home" />
      <SemanticMenu.Item name="messages" />
      <SemanticMenu.Item name="friends" />
      <SemanticMenu.Menu position="right">
        <SemanticMenu.Item>
          <Input icon="search" placeholder="Search..." />
        </SemanticMenu.Item>
        <SemanticMenu.Item name="logout" onClick={trySignOut} />
      </SemanticMenu.Menu>
    </SemanticMenu>
  );
}

export default connect(null, { trySignOut })(Menu);

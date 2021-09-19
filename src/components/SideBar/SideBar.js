import React from 'react';

import './SideBar.scss';
import UserSettings from '../UserSettings/UserSettings';

function SideBar() {
  return (
    <div className="side-bar">
      <UserSettings />
    </div>
  );
}

export default SideBar;

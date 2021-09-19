import React from 'react';

import './SideBar.scss';
import UserSettings from '../UserSettings/UserSettings';
import SearchMessage from '../SearchMessage/SearchMessage';

function SideBar() {
  return (
    <div className="side-bar">
      <UserSettings />
      <SearchMessage />
    </div>
  );
}

export default SideBar;

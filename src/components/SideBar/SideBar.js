import React from 'react';

import './SideBar.scss';
import UserSettings from './UserSettings/UserSettings';
import SearchMessage from './SearchMessage/SearchMessage';
import Contacts from './Contacts/Contacts';

function SideBar() {
  return (
    <div className="side-bar">
      <UserSettings />
      <SearchMessage />
      <Contacts />
    </div>
  );
}

export default SideBar;

import React from 'react';

import './SearchMessage.scss';

function SearchMessage() {
  return (
    <div className="search-message">
      <i className="fas fa-search search-message__search-icon"></i>
      <input
        type="text"
        className="search-message__input"
        placeholder="Search Messenger"
      />
    </div>
  );
}

export default SearchMessage;

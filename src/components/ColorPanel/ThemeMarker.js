import React from 'react';

import './ThemeMarker.scss';

const ThemeMarker = () => {
  return (
    <div className="theme-marker">
      <div className="theme-marker__primary-color"></div>
      <div className="theme-marker__secondary-color"></div>
    </div>
  );
};

export default ThemeMarker;

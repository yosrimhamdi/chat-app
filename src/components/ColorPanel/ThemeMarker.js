import React from 'react';
import { connect } from 'react-redux';

import './ThemeMarker.scss';

const ThemeMarker = ({ theme }) => {
  const { primaryColor, secondaryColor } = theme;

  return (
    <div className="theme-marker" onClick={() => console.log(theme)}>
      <div
        style={{ backgroundColor: primaryColor }}
        className="theme-marker__primary-color"
      ></div>
      <div
        style={{ backgroundColor: secondaryColor }}
        className="theme-marker__secondary-color"
      ></div>
    </div>
  );
};

export default connect(null)(ThemeMarker);

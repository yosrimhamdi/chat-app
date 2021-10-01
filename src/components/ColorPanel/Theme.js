import React from 'react';
import { connect } from 'react-redux';

import './Theme.scss';
import setTheme from '../../redux/actions/setTheme';

const Theme = ({ theme, setTheme }) => {
  const { primaryColor, secondaryColor } = theme;

  return (
    <div className="theme-marker" onClick={() => setTheme(theme)}>
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

export default connect(null, { setTheme })(Theme);

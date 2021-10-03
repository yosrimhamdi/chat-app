import React from 'react';
import { connect } from 'react-redux';

import './Theme.scss';
import selectTheme from '../../firebase/database/selectTheme';
import unSelectTheme from '../../firebase/database/unSelectTheme';

const Theme = ({ theme, prevSelectedTheme }) => {
  const { primaryColor, secondaryColor, id } = theme;

  const onThemeClick = () => {
    selectTheme(id);

    if (prevSelectedTheme) {
      unSelectTheme(prevSelectedTheme.id);
    }
  };

  return (
    <div className="theme-marker" onClick={onThemeClick}>
      <div
        style={{ backgroundColor: primaryColor }}
        className="theme-marker__primary-color"
      ></div>
      <div
        style={{ backgroundColor: secondaryColor }}
        className="theme-marker__secondary-color"
      ></div>
      <div className="theme-marker__remove-icon"></div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const prevSelectedTheme = Object.values(auth.userDocument.themes).find(
    theme => theme.isSelected,
  );

  return { prevSelectedTheme };
};

export default connect(mapStateToProps)(Theme);

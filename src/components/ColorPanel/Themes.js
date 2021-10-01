import React from 'react';
import { connect } from 'react-redux';

import Theme from './Theme';

const Themes = ({ themes }) => {
  const renderedThemes = themes.map(theme => (
    <Theme key={theme.id} theme={theme} />
  ));

  return renderedThemes;
};

const mapStateToProps = ({ auth }) => {
  const themes = auth?.userDocument.themes || [];

  return { themes: Object.values(themes) };
};

export default connect(mapStateToProps)(Themes);

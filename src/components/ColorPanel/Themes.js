import React from 'react';
import { connect } from 'react-redux';

import Theme from './Theme';

const Themes = ({ themes }) => {
  const renderedThemes = themes.map(theme => (
    <Theme key={theme.id} theme={theme} />
  ));

  return renderedThemes;
};

const mapStateToProps = ({ users, auth }) => {
  const uid = auth.user.uid;

  const user = users.find(user => uid == user.uid);

  return { themes: Object.values(user?.themes || {}) };
};

export default connect(mapStateToProps)(Themes);

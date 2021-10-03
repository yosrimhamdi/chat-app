import React from 'react';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';

import Theme from './Theme';

const Themes = ({ themes }) => {
  const renderedThemes = themes.map(theme => (
    <React.Fragment key={theme.id}>
      <Divider />
      <Theme theme={theme} />
    </React.Fragment>
  ));

  return renderedThemes;
};

const mapStateToProps = ({ auth }) => {
  const themes = auth.userDocument?.themes ?? [];

  return { themes: Object.values(themes) };
};

export default connect(mapStateToProps)(Themes);

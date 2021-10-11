import React from 'react';
import { connect } from 'react-redux';

import Typing from './Typing';

const Typings = ({ typings }) => {
  console.log(typings);

  return <Typing />;
};

const mapStateToProps = ({ typings }) => ({ typings });

export default connect(mapStateToProps)(Typings);

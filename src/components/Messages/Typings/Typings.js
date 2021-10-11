import React from 'react';
import { connect } from 'react-redux';

import Typing from './Typing';

const Typings = ({ typing }) => {
  console.log(typing);

  return <Typing />;
};

const mapStateToProps = ({ typing }) => ({ typing });

export default connect(mapStateToProps)(Typings);

import React from 'react';
import { connect } from 'react-redux';

import Typing from './Typing';

const Typings = ({ typings }) => {
  const renderedTypings = typings.map(typing => (
    <Typing key={typing.uid} typing={typing} />
  ));

  return <div>{renderedTypings}</div>;
};

const mapStateToProps = ({ typings }) => ({ typings });

export default connect(mapStateToProps)(Typings);

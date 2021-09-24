import React from 'react';
import { connect } from 'react-redux';
import { Progress } from 'semantic-ui-react';

import './ProgressBar.scss';

const ProgressBar = ({ percent }) => {
  if (percent == 0) {
    return null;
  }

  return (
    <Progress
      className="progress-bar"
      percent={percent}
      progress
      indicating
      size="small"
      inverted
    />
  );
};

const mapStateToProps = state => ({
  percent: state.upload.percent,
});

export default connect(mapStateToProps)(ProgressBar);

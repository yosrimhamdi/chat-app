import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Loader, Dimmer } from 'semantic-ui-react';

import './AppMountSpinner.scss';

const Spinner = ({ isInitialMount }) => {
  if (!isInitialMount) {
    return null;
  }

  return ReactDOM.createPortal(
    <Dimmer active>
      <Loader size="huge" content={'Preparing Chat...'} />
    </Dimmer>,
    document.getElementById('spinner'),
  );
};

const mapStateToProps = state => {
  return {
    isInitialMount: state.loading.isInitialMount,
  };
};

export default connect(mapStateToProps)(Spinner);

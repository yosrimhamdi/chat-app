import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './firebase/config';
import App from './components/App';
import store from './redux/store';

export default ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

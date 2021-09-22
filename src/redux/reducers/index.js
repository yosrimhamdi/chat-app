import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import channels from './channelsReducer';
import auth from './authReducer';
import messages from './messagesReducer';
import loading from './loadingReducer';

export default combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  auth,
  channels,
  messages,
  loading,
});

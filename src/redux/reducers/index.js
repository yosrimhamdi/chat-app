import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import channels from './channelsReducer';
import auth from './authReducer';
import messages from './messagesReducer';
import loading from './loadingReducer';
import upload from './uploadReducer';
import users from './usersReducer';
import theme from './themeReducer';
import typings from './typingsReducer';

export default combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  auth,
  channels,
  messages,
  loading,
  upload,
  users,
  theme,
  typings,
});

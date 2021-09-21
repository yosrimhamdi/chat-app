import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import auth from './auth';

export default combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  auth,
});

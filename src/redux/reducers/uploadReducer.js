import { SET_PERCENT } from '@types';
import { SET_UPLOAD_PATH } from '../actions/types';

const INITIAL_STATE = {
  percent: 0,
  path: '',
};

const uploadReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PERCENT:
      return {
        ...state,
        percent: payload,
      };
    case SET_UPLOAD_PATH:
      return {
        ...state,
        path: payload,
      };
    default:
      return state;
  }
};

export default uploadReducer;

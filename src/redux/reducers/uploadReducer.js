import { SET_FILE_TO_UPLOAD, SET_PERCENT } from '@types';

const INITIAL_STATE = {
  file: null,
  percent: 0,
};

const uploadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILE_TO_UPLOAD:
      return {
        ...state,
        file: action.payload,
      };
    case SET_PERCENT:
      return {
        ...state,
        percent: action.payload,
      };
    default:
      return state;
  }
};

export default uploadReducer;

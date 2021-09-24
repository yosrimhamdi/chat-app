import { SET_FILE_TO_UPLOAD } from '@types';

const INITIAL_STATE = {
  file: null,
  error: null,
  percentage: null,
};

const uploadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILE_TO_UPLOAD:
      return {
        ...state,
        file: action.payload,
      };
    default:
      return state;
  }
};

export default uploadReducer;

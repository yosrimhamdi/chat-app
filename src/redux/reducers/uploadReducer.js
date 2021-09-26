import { SET_PERCENT } from '@types';

const INITIAL_STATE = {
  percent: 0,
};

const uploadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

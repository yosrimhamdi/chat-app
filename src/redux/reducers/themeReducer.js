import { SET_PRIMARY_COLOR, SET_SECONDARY_COLOR } from '../actions/types';

const INITIAL_VALUES = {
  primaryColor: '#582dfd',
  secondaryColor: '#a6e3cd',
};

const themeReducer = (state = INITIAL_VALUES, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: payload,
      };
    case SET_SECONDARY_COLOR:
      return {
        ...state,
        secondaryColor: payload,
      };
    default:
      return state;
  }
};

export default themeReducer;

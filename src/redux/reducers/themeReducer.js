import {
  SET_PRIMARY_COLOR,
  SET_SECONDARY_COLOR,
  SET_THEME,
} from '../actions/types';

const INITIAL_VALUES = {
  primaryColor: '#582dfd',
  secondaryColor: '#a6e3cd',
  id: null,
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
    case SET_THEME:
      return { ...payload };
    default:
      return state;
  }
};

export default themeReducer;

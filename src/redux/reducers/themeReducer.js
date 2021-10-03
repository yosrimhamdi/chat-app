import {
  SET_PRIMARY_COLOR,
  SET_SECONDARY_COLOR,
  SET_THEME,
} from '../actions/types';

const INITIAL_VALUES = {
  userTheme: null,
  defaultTheme: {
    primaryColor: '#4C3C4C',
    secondaryColor: '#1B1C1D',
  },
  colorPicker: {
    primaryColor: '#fff',
    secondaryColor: '#fff',
  },
};

const themeReducer = (state = INITIAL_VALUES, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PRIMARY_COLOR:
      return {
        ...state,
        colorPicker: { ...state.colorPicker, primaryColor: payload },
      };
    case SET_SECONDARY_COLOR:
      return {
        ...state,
        colorPicker: { ...state.colorPicker, secondaryColor: payload },
      };
    case SET_THEME:
      return { ...payload };
    default:
      return state;
  }
};

export default themeReducer;

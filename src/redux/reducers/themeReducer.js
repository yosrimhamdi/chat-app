import {
  SET_PICKER_PRIMARY_COLOR,
  SET_PICKER_SECONDARY_COLOR,
  AUTH_USER_DOCUMENT,
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
    case SET_PICKER_PRIMARY_COLOR:
      return {
        ...state,
        colorPicker: { ...state.colorPicker, primaryColor: payload },
      };
    case SET_PICKER_SECONDARY_COLOR:
      return {
        ...state,
        colorPicker: { ...state.colorPicker, secondaryColor: payload },
      };
    case AUTH_USER_DOCUMENT: {
      let userTheme = null;
      if (payload.themes) {
        userTheme =
          Object.values(payload.themes).find(theme => theme.isSelected) || null;
      }

      return { ...state, userTheme };
    }
    default:
      return state;
  }
};

export default themeReducer;

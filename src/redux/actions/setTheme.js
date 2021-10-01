import { SET_THEME } from '@types';

const setTheme = theme => ({
  type: SET_THEME,
  payload: theme,
});

export default setTheme;

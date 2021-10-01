import { SET_PRIMARY_COLOR } from './types';

const setPrimaryColor = primaryColor => ({
  type: SET_PRIMARY_COLOR,
  payload: primaryColor,
});

export default setPrimaryColor;

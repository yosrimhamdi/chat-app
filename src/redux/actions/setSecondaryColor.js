import { SET_SECONDARY_COLOR } from './types';

const setSecondaryColor = secondaryColor => ({
  type: SET_SECONDARY_COLOR,
  payload: secondaryColor,
});

export default setSecondaryColor;

import { SET_PICKER_SECONDARY_COLOR } from './types';

const setSecondaryColor = secondaryColor => ({
  type: SET_PICKER_SECONDARY_COLOR,
  payload: secondaryColor,
});

export default setSecondaryColor;

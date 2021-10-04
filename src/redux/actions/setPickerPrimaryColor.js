import { SET_PICKER_PRIMARY_COLOR } from './types';

const setPickerPrimaryColor = primaryColor => ({
  type: SET_PICKER_PRIMARY_COLOR,
  payload: primaryColor,
});

export default setPickerPrimaryColor;

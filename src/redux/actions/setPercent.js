import { SET_PERCENT } from './types';

const setPercentage = percent => ({
  type: SET_PERCENT,
  payload: percent,
});

export default setPercentage;

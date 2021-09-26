import { SET_MESSAGES_DIV_HEIGHT } from '@types';

const setMessagesDivHeight = height => ({
  type: SET_MESSAGES_DIV_HEIGHT,
  payload: height,
});

export default setMessagesDivHeight;

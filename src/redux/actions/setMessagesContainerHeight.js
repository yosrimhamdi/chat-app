import { SET_MESSAGES_CONTAINER_HEIGHT } from '@types';

const setMessagesDivHeight = height => ({
  type: SET_MESSAGES_CONTAINER_HEIGHT,
  payload: height,
});

export default setMessagesDivHeight;

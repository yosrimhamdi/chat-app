import { SET_NOTIFICATION } from './types';

const setNotification = channelId => ({
  type: SET_NOTIFICATION,
  payload: channelId,
});

export default setNotification;

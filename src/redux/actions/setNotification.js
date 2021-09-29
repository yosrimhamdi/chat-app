import { SET_NOTIFICATION } from './types';

const setNotification = message => ({
  type: SET_NOTIFICATION,
  payload: message.channelId,
});

export default setNotification;

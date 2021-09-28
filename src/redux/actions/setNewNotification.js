import { SET_NEW_NOTIFICATION } from './types';

const setNewNotification = channelId => ({
  type: SET_NEW_NOTIFICATION,
  payload: channelId,
});

export default setNewNotification;

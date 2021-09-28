import { CLEAR_NOTIFICATION } from './types';

const clearNotification = channelId => ({
  type: CLEAR_NOTIFICATION,
  payload: channelId,
});

export default clearNotification;

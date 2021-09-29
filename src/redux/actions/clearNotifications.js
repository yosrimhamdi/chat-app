import { CLEAR_NOTIFICATIONS } from '@types';

const clearNotifications = channelId => ({
  type: CLEAR_NOTIFICATIONS,
  payload: channelId,
});

export default clearNotifications;

import { SET_MESSAGES_PATH } from './types';

const setMessagesPath = path => ({
  type: SET_MESSAGES_PATH,
  payload: path,
});

export default setMessagesPath;

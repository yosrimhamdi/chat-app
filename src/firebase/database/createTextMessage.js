import { getAuth } from 'firebase/auth';

import writeData from './writeData';
import catcher from '../../catcher';

const createTextMessage = async (content, channelId) => {
  const { currentUser: user } = getAuth();
  const { uid, photoURL, displayName } = user;

  await writeData('messages/' + channelId + '/', {
    content,
    type: 'text',
    createdAt: Date.now(),
    user: {
      uid,
      photoURL,
      displayName,
    },
  });
};

export default catcher(createTextMessage);

import { getAuth } from 'firebase/auth';

import writeData from './writeData';
import catcher from '../../catcher';

const createTextMessage = async (content, path, channelId) => {
  const { uid, photoURL, displayName } = getAuth().currentUser;

  await writeData(path + channelId + '/', {
    content,
    type: 'text',
    channelId,
    createdAt: Date.now(),
    user: {
      uid,
      photoURL,
      displayName,
    },
  });
};

export default catcher(createTextMessage);

import { getAuth } from 'firebase/auth';

import writeData from '../writeData';

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

export default createTextMessage;

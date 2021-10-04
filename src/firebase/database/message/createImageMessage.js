import { getAuth } from 'firebase/auth';

import writeData from '../writeData';
import catcher from '../../../catcher';

const createImageMessage = async (imageURL, path, channelId) => {
  const { uid, photoURL, displayName } = getAuth().currentUser;

  await writeData(path + channelId + '/', {
    imageURL,
    type: 'image',
    channelId,
    createdAt: Date.now(),
    user: {
      uid,
      photoURL,
      displayName,
    },
  });
};

export default catcher(createImageMessage);

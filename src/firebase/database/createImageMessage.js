import { getAuth } from 'firebase/auth';

import writeData from './writeData';
import catcher from '../../catcher';

const createImageMessage = async (imageURL, channelId) => {
  const { currentUser: user } = getAuth();
  const { uid, photoURL, displayName } = user;

  await writeData('messages/' + channelId + '/', {
    imageURL,
    type: 'image',
    createdAt: Date.now(),
    user: {
      uid,
      photoURL,
      displayName,
    },
  });
};

export default catcher(createImageMessage);

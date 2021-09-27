import { getAuth } from 'firebase/auth';

import writeData from './writeData';
import catcher from '../../catcher';

const createImageMessage = async (imageURL, path) => {
  const { uid, photoURL, displayName } = getAuth().currentUser;

  await writeData(path, {
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

import { getAuth } from 'firebase/auth';

import writeData from './writeData';
import catcher from '../../catcher';

const createTextMessage = async (content, path) => {
  const { uid, photoURL, displayName } = getAuth().currentUser;

  await writeData(path, {
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

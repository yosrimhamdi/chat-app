import writeData from './writeData';
import catcher from '../../catcher';

const createMessage = async (content, channelId, user) => {
  const { uid, photoURL, displayName } = user;

  await writeData('messages/' + channelId + '/', {
    content,
    createdAt: Date.now(),
    user: {
      uid,
      photoURL,
      displayName,
    },
  });
};

export default catcher(createMessage);

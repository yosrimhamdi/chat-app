import writeData from './writeData';
import catcher from '../../catcher';

const createMessage = async (imageURL, channelId, user) => {
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

export default catcher(createMessage);

import writeData from './writeData';

const createMessage = async (content, channelId, user) => {
  const { uid, photoURL, displayName } = user;

  try {
    await writeData('messages/' + channelId + '/', {
      content,
      createdAt: Date.now(),
      user: {
        uid,
        photoURL,
        displayName,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export default createMessage;

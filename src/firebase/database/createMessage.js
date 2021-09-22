import writeData from './writeData';

const createMessage = async (content, channelId, user) => {
  const { uid, photoURL, displayName } = user;

  try {
    console.log(content, channelId, user);
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

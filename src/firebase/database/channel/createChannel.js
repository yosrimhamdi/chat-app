import { toastr } from 'react-redux-toastr';
import { getAuth } from 'firebase/auth';

import writeData from '../writeData';

const createChannel = async (channelName, channelDescription) => {
  const { email, photoURL, displayName } = getAuth().currentUser;

  await writeData('channels/', {
    name: channelName,
    details: channelDescription,
    isPrivate: false,
    createdAt: Date.now(),
    createdBy: {
      displayName,
      email,
      photoURL,
    },
  });

  toastr.success('Success', 'Channel created.');
};

export default createChannel;

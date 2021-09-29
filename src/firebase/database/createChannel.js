import { toastr } from 'react-redux-toastr';
import { getAuth } from 'firebase/auth';

import writeData from './writeData';
import catcher from '../../catcher';

const createChannel = async formValues => {
  const { channelName, channelDetails } = formValues;

  const { email, photoURL, displayName } = getAuth().currentUser;

  await writeData('channels/', {
    name: channelName,
    details: channelDetails,
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

export default catcher(createChannel);

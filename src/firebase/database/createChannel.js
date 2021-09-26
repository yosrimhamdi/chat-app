import { toastr } from 'react-redux-toastr';
import { getAuth } from 'firebase/auth';

import writeData from './writeData';
import catcher from '../../catcher';

const createChannel = async formValues => {
  const { channelName, channelDetails } = formValues;

  const { currentUser: user } = getAuth();

  console.log(user);

  await writeData('channels/', {
    name: channelName,
    details: channelDetails,
    createdBy: {
      userName: user.displayName,
      email: user.email,
      avatar: user.photoURL,
    },
  });

  toastr.success('Success', 'Channel created.');
};

export default catcher(createChannel);

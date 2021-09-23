import { toastr } from 'react-redux-toastr';

import writeData from './writeData';
import catcher from '../../catcher';

const createChannel = async (formValues, user) => {
  const { channelName, channelDetails } = formValues;

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

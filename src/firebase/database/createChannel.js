import { toastr } from 'react-redux-toastr';

import writeData from './writeData';

const createChannel = async (formValues, user) => {
  const { channelName, channelDetails } = formValues;

  try {
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
  } catch (e) {
    console.log(e);
  }
};

export default createChannel;

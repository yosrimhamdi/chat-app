import { toastr } from 'react-redux-toastr';
import { reset } from 'redux-form';

import writeData from './writeData';

const createChannel = formValues => async (dispatch, getState) => {
  const { channelName, channelDetails } = formValues;
  const user = getState().auth.user;

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

  dispatch(reset('createNewChannelForm'));
};

export default createChannel;

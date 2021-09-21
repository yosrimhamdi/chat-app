import { toastr } from 'react-redux-toastr';

import { CREATE_CHANNEL } from '@types';
import writeData from '../../firebase/writeData';
import { reset } from 'redux-form';

const createChannel = formValues => async (dispatch, getState) => {
  const { channelName, channelDetails } = formValues;
  const user = getState().auth.user;

  try {
    const channel = await writeData('channels/', {
      name: channelName,
      details: channelDetails,
      createdBy: {
        userName: user.displayName,
        email: user.email,
        avatar: user.photoURL,
      },
    });

    dispatch({ type: CREATE_CHANNEL, payload: channel });

    toastr.success('Success', 'Channel created.');
  } catch (e) {
    console.log(e);
  }

  dispatch(reset('createNewChannelForm'));
};

export default createChannel;

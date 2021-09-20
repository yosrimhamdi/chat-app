import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import firebase from '../../firebase';
import { REGISTER_USER } from '@types';

const registerUser = ({ email, password }) => {
  return async (dispatch) => {
    const auth = getAuth(firebase);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch({
        type: REGISTER_USER,
        payload: userCredential.user,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export default registerUser;

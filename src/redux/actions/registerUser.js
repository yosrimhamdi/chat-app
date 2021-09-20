import firebase from '../../firebase';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const registerUser =
  ({ email, password }) =>
  async () => {
    console.log(email, password);
    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

export default registerUser;

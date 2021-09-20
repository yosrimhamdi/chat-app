// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const registerUser =
  ({ email, password }) =>
  async () => {
    console.log(email, password);
    const auth = getAuth();
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

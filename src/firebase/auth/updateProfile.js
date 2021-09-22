import md5 from 'md5';
import { getAuth, updateProfile } from 'firebase/auth';
import catcher from '../../catcher';

const updateUserProfile = async username => {
  const { currentUser } = getAuth();

  const photoURL = `//0.gravatar.com/avatar/${md5(
    currentUser.email,
  )}?s=200&d=identicon`;

  await updateProfile(currentUser, {
    displayName: username,
    photoURL,
  });

  return currentUser;
};

export default catcher(updateUserProfile);

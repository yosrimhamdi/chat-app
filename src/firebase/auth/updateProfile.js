import md5 from 'md5';
import { getAuth, updateProfile } from 'firebase/auth';
import catcher from '../../catcher';

const updateUserProfile = async username => {
  const { currentUser } = getAuth();

  const photoURL = `//0.gravatar.com/avatar/${md5(
    currentUser.email,
  )}?s=200&d=identicon`;

  return updateProfile(currentUser, {
    displayName: username,
    photoURL,
  });
};

export default catcher(updateUserProfile);

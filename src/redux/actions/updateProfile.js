import md5 from 'md5';
import { getAuth, updateProfile as update } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

const updateProfile = async (username) => {
  try {
    const { currentUser } = getAuth();
    const { email } = currentUser;

    await update(currentUser, {
      displayName: username,
      photoURL: `//0.gravatar.com/avatar/${md5(email)}?s=200&d=identicon`,
    });

    toastr.success('Success', 'Profile name & image updated');
  } catch (e) {
    toastr.error('Success', e.message);
  }
};

export default updateProfile;

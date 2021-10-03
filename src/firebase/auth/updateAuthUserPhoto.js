import { getAuth, updateProfile } from 'firebase/auth';

const updateAuthUserPhoto = async photoURL => {
  const { currentUser } = getAuth();

  return await updateProfile(currentUser, { photoURL });
};

export default updateAuthUserPhoto;

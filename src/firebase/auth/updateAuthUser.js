import { getAuth, updateProfile } from 'firebase/auth';

const updateAuthUser = async updates => {
  const { currentUser } = getAuth();

  return await updateProfile(currentUser, updates);
};

export default updateAuthUser;

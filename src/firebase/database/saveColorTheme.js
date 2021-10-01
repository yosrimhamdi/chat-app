import { getAuth } from 'firebase/auth';
import writeData from './writeData';

const saveColorTheme = async theme => {
  const { currentUser } = getAuth();

  return await writeData('users/' + currentUser.uid + '/themes/', theme);
};

export default saveColorTheme;

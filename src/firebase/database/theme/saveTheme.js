import { getAuth } from 'firebase/auth';
import writeData from '../writeData';

const saveTheme = async theme => {
  const { currentUser } = getAuth();

  return await writeData('users/' + currentUser.uid + '/themes/', {
    ...theme,
    isSelected: false,
  });
};

export default saveTheme;

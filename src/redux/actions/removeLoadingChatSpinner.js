import { APP_MOUNTED } from '@types';
import { dispatch } from '../store';

const removeLoadingChatSpinner = () => {
  dispatch({ type: APP_MOUNTED });
};

export default removeLoadingChatSpinner;

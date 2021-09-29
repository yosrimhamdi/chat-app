import { SET_UPLOAD_PATH } from './types';

const setUploadPath = path => ({
  type: SET_UPLOAD_PATH,
  payload: path,
});

export default setUploadPath;

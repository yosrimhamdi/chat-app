import { SET_FILE_TO_UPLOAD } from '@types';

const setFileToUpload = (file) => ({
  type: SET_FILE_TO_UPLOAD,
  payload: file,
});

export default setFileToUpload;

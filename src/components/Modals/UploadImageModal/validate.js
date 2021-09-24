import { toastr } from 'react-redux-toastr';

const validate = (file) => {
  let error = '';

  if (!file) {
    error = 'No image selected';
  } else if (!file.type.includes('image')) {
    error = 'Not an image';
  }

  if (error) {
    toastr.warning('Warning', error);
  }

  return error == '';
};

export default validate;

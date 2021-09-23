const validate = ({ file }) => {
  const errors = {};

  if (!file) {
    errors.file = 'No file selected';
  } else if (!file.type.includes('image')) {
    errors.file = 'Not an image';
  }

  return errors;
};

export default validate;

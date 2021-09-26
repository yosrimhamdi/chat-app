const validate = ({ file }) => {
  const errors = {};

  if (!file) {
    errors.message = 'No image selected';
  } else if (!file.type.includes('image')) {
    errors.message = 'Not an image';
  }

  return errors;
};

export default validate;

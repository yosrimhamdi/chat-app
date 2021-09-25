const validate = ({ message }) => {
  const errors = {};

  if (!message) {
    errors.message = 'no message';
  }

  return errors;
};

export default validate;

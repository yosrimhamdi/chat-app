const validate = ({ message }) => {
  if (!message) {
    return { message: 'no message' };
  }

  return {};
};

export default validate;

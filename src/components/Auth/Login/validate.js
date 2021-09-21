import { isEmail } from 'validator';

const validate = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = 'Email is required';
  } else if (!isEmail(email)) {
    errors.email = 'invalid email';
  }

  if (!password) {
    errors.password = 'Password is required';
  }

  return errors;
};

export default validate;

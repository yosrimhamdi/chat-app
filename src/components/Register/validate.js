import { isEmail, isLength } from 'validator';

const validate = ({ username, email, password, passwordConfirmation }) => {
  const errors = {};

  if (!username) {
    errors.username = 'Username is required';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (!isEmail(email)) {
    errors.email = 'invalid email';
  }

  if (!password) {
    errors.password = 'Password is required';
  } else if (!isLength(password, { min: 6 })) {
    errors.password = 'password must be at least 6 character';
  }

  if (!passwordConfirmation) {
    errors.passwordConfirmation = 'Password Confirmation is required';
  } else if (password !== passwordConfirmation) {
    errors.passwordConfirmation = 'passwords do not match';
  }

  return errors;
};

export default validate;

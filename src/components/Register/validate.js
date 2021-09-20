import { isEmail } from 'validator';

const validate = ({ username, email, password, passwordConfirmation }) => {
  const errors = {};

  if (!username) {
    errors.username = 'no user name';
  }

  if (!email || !isEmail(email)) {
    errors.email = 'invalid email';
  }

  if (!password) {
    errors.password = 'no password';
  }

  if (password !== passwordConfirmation) {
    errors.passwordConfirmation = 'password do not match';
  }

  return errors;
};

export default validate;

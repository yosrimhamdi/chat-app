import { toastr } from 'react-redux-toastr';

function catcher(fn) {
  return async function (...args) {
    try {
      return await fn(...args);
    } catch ({ message }) {
      console.log({ message });
      toastr.error('Error', message);
    }
  };
}

export default catcher;

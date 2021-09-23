import { toastr } from 'react-redux-toastr';

function catcher(fn) {
  return async function (...args) {
    try {
      return await fn(...args);
    } catch (e) {
      toastr.error('Error', e.message);
    }
  };
}

export default catcher;

import { SET_TYPING } from './types';

const setTyping = snap => {
  console.log(SET_TYPING);
  console.log(snap.val());

  return { type: SET_TYPING, payload: snap.val() };
};

export default setTyping;

import { REMOVE_TYPING } from './types';

const removeTyping = snap => {
  console.log(REMOVE_TYPING);
  console.log(snap.val());

  return { type: REMOVE_TYPING, payload: snap.val() };
};

export default removeTyping;

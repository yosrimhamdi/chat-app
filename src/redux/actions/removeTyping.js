import { REMOVE_TYPING } from './types';

const removeTyping = snap => ({ type: REMOVE_TYPING, payload: snap.val() });

export default removeTyping;

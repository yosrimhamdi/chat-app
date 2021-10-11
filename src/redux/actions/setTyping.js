import { SET_TYPING } from './types';

const setTyping = snap => ({ type: SET_TYPING, payload: snap.val() });

export default setTyping;

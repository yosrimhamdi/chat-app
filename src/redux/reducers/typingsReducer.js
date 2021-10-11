import { SET_TYPING, REMOVE_TYPING } from '@types';

const typingsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TYPING:
      return [...state, payload];
    case REMOVE_TYPING:
      return state.filter(typing => typing.uid !== payload.uid) ?? [];
    default:
      return state;
  }
};

export default typingsReducer;

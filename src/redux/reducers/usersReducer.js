import { FETCH_USERS, FETCH_USER, UPDATE_USER } from '@types';

const usersReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS:
      return [...state, ...payload];
    case FETCH_USER:
      return [...state, payload];
    case UPDATE_USER: {
      state[state.findIndex(({ uid }) => uid === payload.uid)] = payload;

      return [...state];
    }
    default:
      return state;
  }
};

export default usersReducer;

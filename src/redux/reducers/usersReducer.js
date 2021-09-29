import { FETCH_USERS, FETCH_USER } from '@types';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload];
    case FETCH_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default usersReducer;

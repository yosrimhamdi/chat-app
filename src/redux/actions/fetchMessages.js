import { FETCH_MESSAGES } from '@types';

const fetchComment = comments => {
  return {
    type: FETCH_MESSAGES,
    payload: comments,
  };
};

export default fetchComment;

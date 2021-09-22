import { FETCH_MESSAGES } from '@types';

const fetchComment = comments => ({
  type: FETCH_MESSAGES,
  payload: comments,
});

export default fetchComment;

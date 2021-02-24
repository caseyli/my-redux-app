import {
  ADD_POST,
  DESTROY_POST,
  ADD_COMMENT,
  DESTROY_COMMENT,
} from './actionTypes'


// Action generators
export function addPost(content) {
  return (
    {
      type: ADD_POST,
      payload: {
        content: content
      }
    }
  );
}

export function destroyPost(id) {
  return (
    {
      type: DESTROY_POST,
      payload: {
        content: id
      }
    }
  );
}

export function addComment(content) {
  return (
    {
      type: ADD_COMMENT,
      payload: {
        content: content
      }
    }
  );
}

export function destroyComment(id) {
  return (
    {
      type: DESTROY_COMMENT,
      payload: {
        content: id
      }
    }
  );
}
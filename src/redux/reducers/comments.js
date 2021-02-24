import { ADD_COMMENT, DESTROY_COMMENT } from '../actionTypes';

const initialState = {
  comments: []
};

function commentsReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT: {
      return state;
    }

    case DESTROY_COMMENT: {
      return state;
    }

    default: {
      return state;
    }
  }
}

export default commentsReducer;
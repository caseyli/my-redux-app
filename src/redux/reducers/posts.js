import { ADD_POST, DESTROY_POST } from '../actionTypes';

const initialState = {
  values: []
};

let id = 0;

function postsReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST: {
      const newState = {
        ...state,
        values: [
          ...state.values, 
          {
            id,
            content: 'Hello',
          }
        ]
      };
      id++;
      return newState;
    }

    case DESTROY_POST: {
      return state;
    }

    default: {
      return state;
    }
  }
}

export default postsReducer;
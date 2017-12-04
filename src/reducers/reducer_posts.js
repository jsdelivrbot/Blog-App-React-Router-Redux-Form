import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

function PostReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      // es5 way
      // const post = action.payload.data; // it is actual post we fetche with action creator
      // const newState = { ...state };
      // newState[post[id]] = post; // add additional property to our actual state
      // return newState;

      // es6 way
      return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }


}

export default PostReducer;
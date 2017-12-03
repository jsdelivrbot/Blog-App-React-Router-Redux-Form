import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=whatever124';

export  function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

// export function fromSubmit() {
//   const request = axios.post(`${ROOT_URL}/posts${API_KEY}`);
//
//   return {
//     type: ADD_POST,
//     payload: request
//   }
// }
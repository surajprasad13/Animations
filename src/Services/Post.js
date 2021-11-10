import axios from 'axios';

function fetchPost() {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return null;
    });
}

export const postService = {
  fetchPost,
};

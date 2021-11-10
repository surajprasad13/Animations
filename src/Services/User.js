import axios from 'axios';

function fetchUser() {
  return axios
    .get('http://jsonplaceholder.typicode.com/users')
    .then(result => {
      return result.data;
    })
    .catch(err => {
      return err;
    });
}

export const userService = {fetchUser};

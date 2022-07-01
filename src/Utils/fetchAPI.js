import axios from 'axios';

const fetch = axios.create({
  baseURL: 'http://localhost:3001/',
});

const taskApi = async (method, { task, status }) => {
  const requestMethod = {
    GET: fetch.get('task').then((response) => response.data),
    POST: fetch.post('task', { task, status }).then((response) => response.data),
  };

  const result = requestMethod[method];
  return result;
};

export default taskApi;

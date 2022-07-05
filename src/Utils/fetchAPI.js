import axios from 'axios';

const fetch = axios.create({
  baseURL: 'http://localhost:3001/',
});

const GET = async () => fetch.get('task').then(({ data }) => (data));

const POST = async (newTask) => {
  const result = fetch.post('task', { ...newTask }).then(({ data }) => (data));
  return result;
};

export default { GET, POST };

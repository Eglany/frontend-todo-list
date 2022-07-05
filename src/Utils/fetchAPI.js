import axios from 'axios';

const fetch = axios.create({
  baseURL: 'http://localhost:3001/',
});

const GET = async () => fetch.get('task').then(({ data }) => (data));

const POST = async (newTask) => fetch.post('task', { ...newTask }).then(({ data }) => (data));

const DELETE = async (id) => fetch.delete(`task/${id}`).then();

export default { GET, POST, DELETE };

import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.PUBLIC_API_HOST,
});

export { instance as axios };

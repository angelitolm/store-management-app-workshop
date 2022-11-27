import axios from 'axios';

export const storeAPI = axios.create({
  baseURL: 'http://localhost:3001',
});
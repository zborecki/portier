import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.PUBLIC_CMS_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

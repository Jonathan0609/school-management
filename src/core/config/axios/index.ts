import axios from 'axios';

export const schoolManagementApi = axios.create({
  baseURL: process.env.API_URL,
  timeout: 40000,
});

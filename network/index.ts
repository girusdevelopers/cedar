import axios from 'axios';

const network = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default network;

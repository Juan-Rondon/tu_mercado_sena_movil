import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.7:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerService = async (payload: {
  nombre: string;
  correo_id: string;
  password: string;
  password_confirmation: string;
  avatar: number;
}) => {
  return await api.post('/auth/register', payload);
}

export const loginService = (email: string, password: string) => {
  return api.post('/auth/login', { 
    email, 
    password 
  });
};

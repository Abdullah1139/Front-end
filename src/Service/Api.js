import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:1139' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    req.headers.email = `${localStorage.getItem('email')}`;
  }
  return req;
});

export const register = async (registrationData) => {
  await API.post('/registration', registrationData);
};

export const login = async (loginDetails) => {
  console.log(loginDetails);
  return await API.post('/login', loginDetails);
};

export const sellerRegister = async (registrationData) => {
  console.log(registrationData);
  await API.post('/sellerRegistration', registrationData);
};

export const createProduct = async (product) => {
  console.log('APII');
  await API.post('/product', product);
};

export const jazzcash = async (data) => {
  console.log(data);
  return await API.post('/jazzcash', data);
};

import axios from 'axios';
import {baseConfig} from './http.config';

const httpInstance = axios.create(baseConfig);

const homeInstace = axios.create(baseConfig);

httpInstance.interceptors.request.use(
  (config: any) => {
    //valido jwt no interceptor, request
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  },
);

httpInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (err: any) => {
    return Promise.reject(err);
  },
);

export const http = httpInstance;

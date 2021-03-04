import { AxiosRequestConfig } from 'axios';

export const baseConfig: AxiosRequestConfig = {
  baseURL: '',
  timeout: 30000,
  headers: {
    authorization: 'wise',
    "cache-control": "public, max-age=0",
    "etag": "W/\"f59-e0jWTVjlNJnaHU4xQCqjYO3XNNE\"",
    "x-xss-protection": "1; mode=block",
    "x-content-type-options": "nosniff",
    "date": "Fri, 24 Aug 2018 12:38:36 GMT",
    "content-type": "application/json; charset=utf-8",
    "content-length": "3929",
    "x-frame-options": "SAMEORIGIN",
    "connection": "keep-alive",
    "access-control-allow-origin": "*",
    "server": "nginx/1.10.3 (Ubuntu)",
    "x-dns-prefetch-control": "off",
    "strict-transport-security": "max-age=15552000; includeSubDomains",
    "x-download-options": "noopen"
  },
};

export const httpConfig = {
  loginService: {
    ...baseConfig,
    // baseURL: 'https://603e4e0848171b0017b2f0d7.mockapi.io/wise/api/v1/',
    baseURL: 'https://run.mocky.io/v3/',
  },
};

export default {
  httpConfig: httpConfig,
};

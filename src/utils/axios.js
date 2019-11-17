import axios from 'axios';

axios.defaults.headers.common.Authorization = localStorage.getItem('jwt');

axios.interceptors.request.use(config => {
  const jwt = localStorage.getItem('jwt');

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${jwt}`,
    },
  };
});

axios.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axios;

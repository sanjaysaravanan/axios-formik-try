import axios from "axios";

const moviesIntance = axios.create({
  baseURL: 'https://63f9bdce897af748dcc2d723.mockapi.io',
  timeout: 5000,
});

moviesIntance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export {
  moviesIntance
}

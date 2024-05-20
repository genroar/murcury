import axios from "axios";
const BaseUrl = "https://mercury.devigners.net/";
const Axios = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-type": "application/json"
  }
});
Axios.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const Axios$1 = Axios;
export {
  Axios$1 as A
};

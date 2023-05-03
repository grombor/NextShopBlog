import axios from 'axios';
import UserService from "./services/UserService";

const axiosWithAuth = axios.create({
  baseURL:""
});

axiosWithAuth.interceptors.request.use(
  (config) => {
    const token = UserService.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

export default axiosWithAuth;

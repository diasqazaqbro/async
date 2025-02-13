import axios from "axios";
import { AppConfig } from "../consts/app-config";
import storageService from "../lib/utils/storage-service";

const axiosInstance = axios.create({
  baseURL: AppConfig.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = storageService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    console.log("Request:", config);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log('йоу');
    
    if (error.response?.status === 401) {
      console.log('ресет');

      storageService.resetAccessToken();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

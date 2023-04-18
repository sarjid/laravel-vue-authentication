import axios from "axios";
import { useAuthStore } from "@/stores/auth";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
});

axiosInstance.interceptors.request.use(
  function (config) {
    const auth = useAuthStore();
    config.headers.common["Authorization"] = `Bearer ${auth.user?.token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;

import axios from "axios";
import { HTTPError } from "@/types";

const axiosInstance = axios.create();

const controllersSet = new Set<AbortController>();

axiosInstance.interceptors.request.use((config) => {
  const controller = new AbortController();
  config.signal = controller.signal;
  controllersSet.add(controller);
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const customError: HTTPError = {
      ...error,
      message: error.response?.data?.message,
      status: error.response?.status,
      data: error.response?.data,
    };

    return Promise.reject(customError);
  }
);

export { axiosInstance };

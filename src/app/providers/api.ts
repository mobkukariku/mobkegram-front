import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("jwt");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Добавляем токен в заголовки
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            console.error("Unauthorized! Redirecting to login...");
            Cookies.remove("jwt");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
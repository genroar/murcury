import axios from "axios";
import BaseUrl from "./BaseUrl";

const Axios = axios.create({
    baseURL: BaseUrl,
    headers: {
        "Content-type": "application/json",
    },
});

// Request interceptor
Axios.interceptors.request.use(
    async (config) => {
        try {
            // Retrieve token from AsyncStorage
            //   const token = await AsyncStorage.getItem('token');
            //   if (token) {
            //     // Add the token to the Authorization header
            //     config.headers.Authorization = `Bearer ${token}`;
            //   }
        } catch (error) {
            console.error("Error retrieving token from AsyncStorage:", error);
        }
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

// Response interceptor
Axios.interceptors.response.use(
    (response) => {
        // Handle successful responses
        return response;
    },
    (error) => {
        // Handle error responses
        return Promise.reject(error);
    }
);

export default Axios;

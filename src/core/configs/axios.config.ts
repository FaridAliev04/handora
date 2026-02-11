// import axios from 'axios';
// import {environment} from './app.config';

// const axiosInstance = axios.create({
//     baseURL: environment.apiMain,
    
//     headers: {
//         'Authorization': 'Bearer ',
//     },
// });


// export default axiosInstance


import axios from 'axios';
import {environment} from './app.config';

const axiosInstance = axios.create({
    baseURL: environment.apiMain,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
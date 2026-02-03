import axios from 'axios';
import {environment} from './app.config';

const axiosInstance = axios.create({
    baseURL: environment.apiMain,
    
    headers: {
        'Authorization': 'Bearer ',
    },
});


export default axiosInstance
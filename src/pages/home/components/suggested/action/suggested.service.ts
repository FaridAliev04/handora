import { API } from '../../../../../core/configs/api.config';
import axiosInstance from '../../../../../core/configs/axios.config';

export const getSuggesteddService = () => {
    return axiosInstance.get(`${API.suggestion}`).then(res => {
        return res.data;
    });
};
import { API } from '../../../../../configs/api.config';
import axiosInstance from '../../../../../../core/configs/axios.config';

export const getUserService = () => {
    return axiosInstance.get(`${API.user}`).then(res => {
        return res.data;
    });
};

export const getSearchService = (searchTerm:any) => {
    return axiosInstance.get(`${API.search}?search=${searchTerm}`).then(res => {
        return res.data;
    });
};


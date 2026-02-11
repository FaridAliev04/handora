import { API } from '../../../../core/configs/api.config';
import axiosInstance from '../../../../core/configs/axios.config';

export const getHandMadeService = (id:any) => {
    return axiosInstance.get(`${API.product}/${id}`).then(res => {
        return res.data;
    });
};
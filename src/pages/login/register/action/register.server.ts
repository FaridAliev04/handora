import {API} from '../../../../core/configs/api.config';
import axiosInstance from '../../../../core/configs/axios.config';

export const signUp = (credentials: any): Promise<{ token: string }> => {
    return axiosInstance.post(API.register, credentials)
        .then((res:any) => res.data);
};
import {API} from '../../../../core/configs/api.config';
import axiosInstance from '../../../../core/configs/axios.config';

export const postSignInService = (loginData:any) => {
  return axiosInstance.post(API.login, loginData).then(res => res.data);
};
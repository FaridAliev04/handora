import { useMutation } from "@tanstack/react-query";
import { signUp } from "./register.server"; 
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

export const useSignUpMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (registerData: { email: string; password: string; full_name: string; phone: string }) => 
      signUp(registerData),
    onSuccess: () => {
      notification.success({
        message: 'Qeydiyyat uğurludur!',
        description: 'Giriş səhifəsinə yönləndirilirsiniz...',
        placement: 'topRight'
      });
      setTimeout(() => navigate('/login'), 2000);
    },
    onError: (error: any) => {
      notification.error({
        message: 'Xəta!',
        description: error?.response?.data?.message || 'Məlumatları yenidən yoxlayın.',
        placement: 'topRight'
      });
    }
  });
};
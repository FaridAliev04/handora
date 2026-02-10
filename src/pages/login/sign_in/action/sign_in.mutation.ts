import { useMutation } from "@tanstack/react-query";
import { postSignInService } from "./sign_in.servece";

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: (loginData) => postSignInService(loginData),
    onSuccess: (data) => {
      console.log("Giriş uğurlu!", data);
    },
    onError: (error) => {
      console.error("Xəta baş verdi:", error);
    }
  });
};
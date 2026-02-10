import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import PublicComponets from "../core/layouts/public/public.components";
import HomeComponent from "../pages/home/home.component";
import SignInComponent from "../pages/login/sign_in/sign_in.component";
import RegisterComponents from "../pages/login/register/register.component";


const router = createBrowserRouter([
    {
        path: Routes.default,
        element: <PublicComponets />,
        children: [
            {
                index: true,
                element: <HomeComponent />

            },
           
        ]
    },
    {
        path: Routes.login,
        element: <PublicComponets />,
        children: [
            {
                index: true,
                element: <SignInComponent />

            },
           
        ]
    },
    {
        path: Routes.register,
        element: <PublicComponets />,
        children: [
            {
                index: true,
                element: <RegisterComponents/>

            },
           
        ]
    },

])


export default router
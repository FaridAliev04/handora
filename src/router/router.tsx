import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import PublicComponets from "../core/layouts/public/public.components";
import HomeComponent from "../pages/home/home.component";


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

])


export default router
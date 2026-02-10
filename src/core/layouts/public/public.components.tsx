import { Outlet } from "react-router-dom";
import NavComponet from "./components/nav/nav.component";
import ListComponent from "./components/list/list.component";

const PublicComponets = () => {
    return (
        <div>
            <NavComponet/>
            {/* <ListComponent/> */}
            <Outlet />
        </div>
    );
}

export default PublicComponets;
import { Outlet } from "react-router-dom"
import  Copyright  from "../components/Copyright.jsx";

const Layout = () => {
    return(
        <>
            <Outlet/>
            <Copyright/>
        </>
    )
};

export default Layout;
import Header from "../components/header/Header.jsx";
import ScrollToHashElement from "../components/ScrollHelper.jsx";
import { Outlet } from "react-router-dom";
function Layout() {
    return (
        <div>
            <Header />
            <ScrollToHashElement />
            <Outlet />
        </div>
    );
}

export default Layout;

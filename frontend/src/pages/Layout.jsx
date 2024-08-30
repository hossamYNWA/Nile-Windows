import Header from "../components/header/Header.jsx";
import ScrollToHashElement from "../components/ScrollHelper.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState} from "react";
function Layout() {
    ///////////////////////////
    const [loggedINState, setLogin] = useState(false);
    useEffect(() => {
      window.addEventListener('storage', () => {
        const newstate = localStorage.getItem('loggedIn')
        console.log('new state is : ' + newstate);
        setLogin(newstate);
      })
    }, []);
    //////////////////////////////////
    return (
        <div>
            <Header loggedIn = {loggedINState}/>
            <ScrollToHashElement />
            <Outlet />
        </div>
    );
}

export default Layout;

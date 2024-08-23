import "./App.css";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import WinConfiguration from "./pages/WinConfiguration.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    loginAction,
    regAction,
} from "./components/inputs/InputsContainer.jsx";

//defining our routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
                action: loginAction,
            },
            {
                path: "register",
                element: <Register />,
                action: regAction,
            },
            {
                path: "winconfig",
                element: <WinConfiguration />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
]);
export default function App() {
    return <RouterProvider router={router} />;
}

import Container from "@mui/material/Container";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./Header.module.css";
import logo from "../assets/images/logowindow.png";
import Tabs from "./Tabs";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
        <header>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <div className={classes.logo}>
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </NavLink>
                </div>
                <div className={classes.login}>
                    <NavLink to="/login">
                        <PersonIcon />
                    </NavLink>
                    <NavLink to="/cart">
                        <ShoppingCartIcon />
                    </NavLink>
                </div>
            </Container>
            {/* <Tabs /> */}
        </header>
    );
}

import React, { useState } from "react";
import classes from "./Tab.module.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
const Tab = ({ title, items, accessories }) => {
    const [showContent, setShowContent] = useState(false);
    return (
        <Container>
            <div
                className={
                    showContent
                        ? `${classes.mainContent} ${classes.show}`
                        : classes
                }
            >
                <div
                    className={classes.mainTitle}
                    onMouseEnter={() => setShowContent(true)}
                    onMouseLeave={() => setShowContent(false)}
                >
                    {title}
                </div>
                {showContent && (
                    <div
                        onMouseEnter={() => setShowContent(true)}
                        onMouseLeave={() => setShowContent(false)}
                        className={classes.tabBody}
                    >
                        <Container
                            sx={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-around",
                            }}
                        >
                            {" "}
                            <div className={classes.tabBodyrt}>
                                <h4 className={classes.title}>Windows</h4>
                                <div className={classes.cardsContainer}>
                                    {items.map((item) => {
                                        return (
                                            <div
                                                className={classes.card}
                                                key={item.name}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                />
                                                <h5>{item.name}</h5>
                                            </div>
                                        );
                                    })}
                                </div>
                                <Link to="/winconfig">
                                    <Button
                                        sx={{
                                            width: "60%",
                                            textTransform: "capitalize",
                                            backgroundColor: "#585c6a",
                                            fontWeight: "bold",
                                            "&:hover": {
                                                backgroundColor: "#868e97",
                                                color:'var(red-color)'
                                            },
                                        }}
                                        size="medium"
                                        variant="contained"
                                        href="#contained-buttons"
                                    >
                                        Window configurator
                                    </Button>
                                </Link>

                            </div>
                            <div className={classes.tabBodylt}>
                                <h4 className={classes.title}>Accessories</h4>
                                <ul className={classes.accessoriesList}>
                                    {accessories.map((ac) => {
                                        return (
                                            <li key={ac}>
                                                <Link to="#">{ac}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Container>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Tab;

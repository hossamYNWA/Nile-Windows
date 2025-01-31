import { useState } from "react";
import classes from "./Tabs.module.css";
import Tab from "./Tab";
export default function Tabs() {
    const windowsItems = [
        {
            name: "uPVC Windows",
            image: "https://www.windows24.com/fileadmin/images/in/flyout/upvc-windows.png",
        },
        {
            name: "uPVC-Alu Windows",
            image: "https://www.windows24.com/fileadmin/images/in/flyout/upvc-aluminium-windows.png",
        },
        {
            name: "Wood Windows",
            image: "https://www.windows24.com/fileadmin/images/in/flyout/wood-windows.png",
        },
        {
            name: "Wood-Alu Windows",
            image: "https://www.windows24.com/fileadmin/images/in/flyout/composite-windows.png",
        },
        {
            name: "Aluminium Windows",
            image: "https://www.windows24.com/fileadmin/images/in/flyout/aluminium-windows.png",
        },
    ];
    const windowsAcc = [
        "window handles",
        "casing and trim",
        "window couplers",
        "window asembly set",
    ];
    return (
        <div className={classes.tabsContainer}>
            <Tab
                title="Windows"
                items={windowsItems}
                accessories={windowsAcc}
            />
            {/* <Tab title="French Doors" items={windowsItems} accessories={windowsAcc}/>
            <Tab title="Patio Doors" items={windowsItems} accessories={windowsAcc}/>
            <Tab title="Front Doors" items={windowsItems} accessories={windowsAcc}/> */}
        </div>
    );
}

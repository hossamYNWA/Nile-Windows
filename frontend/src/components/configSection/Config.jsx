import ConfigContainer from "./ConfigContainer.jsx";
import Container from "@mui/material/Container";
import classes from "./Config.module.css";
import RadioOptions from "./RadioOptions.jsx";
import Inputs from "./Inputs.jsx";
import CustomBtn from "../inputs/CustomBtn.jsx";
import SendIcon from "@mui/icons-material/Send";
import { useSelector, useDispatch } from "react-redux";
import ConfigSummary from "./configSummary/ConfigSummary.jsx";
import Dialog from "./Dialog.jsx";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../store/CartSlice.jsx";
import { useCallback, useMemo, useState } from "react";
import { winSelectActions } from "../store/WinConfigOptions.jsx";
const Config = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showDialog, setShowDialog] = useState(false);
    // data to show for user to choose from
    const configData = useSelector((state) => state.winConfigOptions);
    // the data selected by user so far
    const slectedOptions = useSelector((state) => state.selectedWinConfigs);
    // function to check fields completion and handle submit
    const handleSubmit = useCallback(() => {
        for (let opt of slectedOptions) {
            if (Object.values(opt).includes(null)) {
                const fieldId = Object.keys(opt)[0].replace(" ", "_");
                console.log(slectedOptions)
                navigate(`#${fieldId}`);
                setShowDialog(true);
                return;
            }
        }
        const dataToCart = {};
        slectedOptions.forEach((item) => {
            for (let objKey in item) {
                dataToCart[objKey] = item[objKey];
            }
        });
        const generatedID = Math.floor(Math.random() * 100000000);
        dataToCart.id = generatedID;
        dispatch(cartActions.addToCart(dataToCart));
        navigate("/cart");
    }, [slectedOptions]);
    // reset dialog
    const handleClose = useCallback(() => {
        setShowDialog(false);
    }, []);
    const configRadios = useMemo(
        () => [
            {
                id: "1234",
                title: "glass Type",
                options: ["Single Glass", "Double Glass"],
            },
            {
                id: "5647",
                title: "glass Specification",
                options: ["Clear", "Reflective"],
            },
            { id: "6584", title: "glass Thickness", options: ["4mm", "6mm"] },
        ],
        [],
    );
    //the configuration data
    const content = useMemo(() => {
        return configData.map((item, i) => {
            return (
                <ConfigContainer
                    title={item.title}
                    options={item.options}
                    optionsLength = {item.options.length}
                    key={i}
                    index={i}
                />
            );
        });
    }, [configData]);
    //the content of radio input fields
    const radioContent = useMemo(() => {
        return configRadios.map((item) => {
            return (
                <RadioOptions
                    title={item.title}
                    options={item.options}
                    id={item.id}
                    key={item.id}
                />
            );
        });
    }, [configRadios]);
    return (
        <Container
            sx={{
                marginTop: "80px",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <div className={classes.chart}>
                <ConfigSummary />
            </div>
            <div className={classes.mainContent}>
                {content} {radioContent} <Inputs />
                <CustomBtn
                    onClick={handleSubmit}
                    csx={{ width: 200, margin: "30px auto" }}
                    variant="contained"
                    endIcon={<SendIcon />}
                >
                    Send to Cart
                </CustomBtn>
                {showDialog && (
                    <Dialog
                        onclose={handleClose}
                        message={"please complete your configuration"}
                    />
                )}
            </div>
        </Container>
    );
};

export default Config;

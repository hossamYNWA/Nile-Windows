import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import ConfigHead from "./ConfigHead.jsx";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addWinConfig } from "../store/WinConfigs";
import { useCallback, memo } from "react";
const Inputs = memo(() => {
    const dispatch = useDispatch();
    const submitHandler = useCallback((keyName, e) => {
        dispatch(addWinConfig.addInputData({ keyName, val: e.target.value }));
    }, []);
    return (
        <div>
            <ConfigHead title="Size" />
            <Typography
                sx={{ margin: "10px auto", fontWeight: 500 }}
                variant="subtitle2"
            >
                Please enter the total size required including all extra parts
                in millimeters
            </Typography>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                    onChange={(e) => submitHandler("height", e)}
                    id="height"
                    endAdornment={
                        <InputAdornment position="end">mm</InputAdornment>
                    }
                    aria-describedby="outlined-height-helper-text"
                    inputProps={{
                        "aria-label": "height",
                        min: 100,
                        max: 600,
                    }}
                />
                <FormHelperText id="outlined-weight-helper-text">
                    Total Height
                </FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                    onChange={(e) => submitHandler("width", e)}
                    id="width"
                    endAdornment={
                        <InputAdornment position="end">mm</InputAdornment>
                    }
                    aria-describedby="outlined-width-helper-text"
                    inputProps={{
                        "aria-label": "width",
                        min: 100,
                        max: 600,
                    }}
                />
                <FormHelperText id="outlined-weight-helper-text">
                    Total Width
                </FormHelperText>
            </FormControl>
            <ConfigHead title="Quantity" />
            <FormControl sx={{ mt: 3, width: "25ch" }} variant="outlined">
                <OutlinedInput
                    onChange={(e) => submitHandler("pieces", e)}
                    id="pcs"
                    endAdornment={
                        <InputAdornment position="end">pieces</InputAdornment>
                    }
                    aria-describedby="outlined-height-helper-text"
                    inputProps={{
                        "aria-label": "pcs",
                        min: 1,
                        max: 20,
                    }}
                />
                <FormHelperText id="outlined-weight-helper-text">
                    pieces per m<sup>2</sup>
                </FormHelperText>
            </FormControl>
        </div>
    );
});

export default Inputs;

import TextField from "@mui/material/TextField";
import { memo } from "react";
const CustomInput = memo((props) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      sx={{ width: "25ch", transition: "all 0.3s ease-in-out", ...props.csx }}
    />
  );
});
export default CustomInput;

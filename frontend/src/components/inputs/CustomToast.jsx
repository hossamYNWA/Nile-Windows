import { useState,useCallback,memo } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const  CustomToast = memo(({ errorState, message }) => {
  const [open, setOpen] = useState(errorState);

  // const OpenToast = () => {
  //   setOpen(true);
  // };

  const handleClose =useCallback( (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  },[])

  const action = (
    <>
      <Button sx={{ color: "whitesmoke" }} size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
})
export default CustomToast;

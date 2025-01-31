import Button from "@mui/material/Button";
import { memo } from "react";
const CustomBtn = memo(({ children, ...props }) => {
    return (
        <Button
            variant="contained"
            sx={{
                ...props.csx,
                backgroundColor: "var(--primary-color)",
                textTransform: "capitalize",
                width: "150px",
                "&:hover": { backgroundColor: "#4d5b62" },
            }}
            {...props}
        >
            {children}
        </Button>
    );
});

export default CustomBtn;

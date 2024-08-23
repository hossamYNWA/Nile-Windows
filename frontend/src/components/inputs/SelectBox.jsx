import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {memo} from 'react';
const SelectBox = memo(({ val, label, options, handleChange, name, disabled }) => {
    let optionsContent = null;
    if (options.length > 0) {
        optionsContent = options.map((option) => {
            return (
                <MenuItem key={option.id} value={option.name}>
                    {option.name}
                </MenuItem>
            );
        });
    }
    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
                disabled={disabled}
                variant="outlined"
                sx={{
                    transition: "all 0.3s ease-in-out",
                }}
                defaultValue=""
                value={val}
                label={label}
                name={name}
                onChange={handleChange}
            >
                {optionsContent}
            </Select>
        </FormControl>
    );
});

export default SelectBox;

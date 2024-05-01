import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { SelectDropdownProps } from "../../../types";


export function SelectDropdown<T extends string>({ label, value, onChange, options, errorHelperText, disabled }: SelectDropdownProps<T, T>) {

    const isError = !!errorHelperText;

    const onChangeDropdown = (event: SelectChangeEvent<T>) => {
        onChange?.(event.target.value);
    }

    return (<Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth error={isError}>
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                label={label}
                onChange={onChangeDropdown}
                error={isError}
                disabled={disabled}
            >

                {options.map((option) => (<MenuItem
                    key={`dropdown-${label}-${option.value}`}
                    value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </Select>
            <FormHelperText hidden={!isError}>{errorHelperText}</FormHelperText>
        </FormControl>
    </Box>);
};
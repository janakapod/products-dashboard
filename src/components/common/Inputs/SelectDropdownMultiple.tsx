import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { SelectDropdownProps } from "../../../types";

export function SelectDropdownMultiple<T extends (number | string)[], Y extends number | string>({
    label, value, onChange, options, disabled
}: SelectDropdownProps<T, Y>) {

    const onChangeDropdown = (event: SelectChangeEvent<T>) => {
        const { target: { value: valueRef } } = event;
        onChange?.(typeof valueRef === 'string' ? valueRef : valueRef.join(","));

    }


    return (<Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                label={label}
                onChange={onChangeDropdown}
                disabled={disabled}
                multiple
            >

                {options.map((option) => (
                    <MenuItem
                        key={`dropdown-${label}-${option.value}`}
                        value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>);
};
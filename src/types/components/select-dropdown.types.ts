
export type SelectDropdownOption<T> = {
    label: string;
    value: T
}

export interface SelectDropdownProps<T, Y> {
    label: string;
    value: T;
    options: SelectDropdownOption<Y>[];
    onChange?: (value: string) => void;
    disabled?: boolean;
    errorHelperText?: string;
}
import { useMemo } from "react";
import { SelectDropdown } from "../../../../../components";
import { useCategoriesQuery } from "../../../../../hooks";
import { SelectDropdownOption } from "../../../../../types";
import { StringFormatter } from "../../../../../utils";

interface CategoryDropdownProps {
    selectedCategory: string;
    onChange: (value: string) => void;
}


export const CategoryDropdown = ({ selectedCategory, onChange }: CategoryDropdownProps) => {

    const { data: categoryData, isFetching: isCategoriesFetching, isError: isCategoriesFetchingError } = useCategoriesQuery();

    const categoryOptions: SelectDropdownOption<string>[] = useMemo(() => {

        return categoryData
            ? categoryData.map((category) => ({ label: StringFormatter.formatToReadableLabel(category), value: category }))
            : [];
    }, [categoryData]);

    return (
        <SelectDropdown
            label={"Category"}
            value={selectedCategory}
            options={categoryOptions}
            onChange={onChange}
            disabled={isCategoriesFetching}
            errorHelperText={isCategoriesFetchingError ? "Failed to fetch Categories from source." : undefined}
        />
    )
}
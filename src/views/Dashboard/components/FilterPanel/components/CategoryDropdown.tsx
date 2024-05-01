import { useMemo } from "react";
import { SelectDropdown } from "../../../../../components";
import { CategoryDataResponse, SelectDropdownOption } from "../../../../../types";
import { replace, startCase } from "lodash";
import { useCategoriesQuery } from "../../../../../hooks";

interface CategoryDropdownProps {
    selectedCategory: string;
    onChange: (value: string) => void;
}


export const CategoryDropdown = ({ selectedCategory, onChange }: CategoryDropdownProps) => {

    const { data: categoryData, isFetching: isCategoriesFetching, isError: isCategoriesFetchingError } = useCategoriesQuery();

    const categoryOptions: SelectDropdownOption<string>[] = useMemo(() => {

        return categoryData
            ? categoryData.map((category) => ({ label: startCase(replace(category, "-", " ")), value: category }))
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
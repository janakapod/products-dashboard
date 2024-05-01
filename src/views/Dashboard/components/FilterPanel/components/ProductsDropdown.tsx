import { useMemo } from "react";
import { SelectDropdownMultiple } from "../../../../../components";
import { ProductsResponse, SelectDropdownOption } from "../../../../../types";
import { useProductsUnderCategory } from "../../../../../hooks";


interface ProductsDropdownProps {
    selectedCategory?: string;
    selectedProducts: number[];
    onChange: (selectedProducts: string) => void;
    disabled?: boolean;
}

/**
 * Products Dropdown Multi selector
 */
export const ProductsDropdown = ({ selectedCategory, selectedProducts, onChange, disabled }: ProductsDropdownProps) => {

    const { data: productsData } = useProductsUnderCategory(selectedCategory);

    const productOptions: SelectDropdownOption<number>[] = useMemo(() => (
        productsData
            ? productsData.products.map((product) => ({ label: product.title, value: product.id }))
            : []
    ), [productsData?.products]);

    return (
        <SelectDropdownMultiple
            label={"Products"}
            value={selectedProducts}
            options={productOptions}
            onChange={onChange}
            disabled={disabled}
        />
    )
}
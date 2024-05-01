import { Box, Button, Typography } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";

import { useProductStore } from "../../../../../store";
import { CategoryDropdown } from "./CategoryDropdown";
import { ProductsDropdown } from "./ProductsDropdown";

interface FilterPanelFormProps {
    onFormPostSubmit?: () => void;
}

export const FilterPanelForm = ({
    onFormPostSubmit
}: FilterPanelFormProps) => {
    const isFormChanged = useRef<boolean>(false);
    const selectedCategory = useProductStore(state => state.selectedCategory);
    const selectedProducts = useProductStore(state => state.selectedProducts);

    const clearSelection = useProductStore(state => state.clearSelection);
    const setSelection = useProductStore(state => state.setSelection);

    const [category, setCategory] = useState<string | undefined>(selectedCategory);
    const [products, setProducts] = useState<number[]>(selectedProducts);

    useEffect(() => {
        setCategory(selectedCategory);
    }, [selectedCategory]);

    useEffect(() => {
        setProducts(selectedProducts);
    }, [selectedProducts]);


    const onChangeSelectedProducts = (selectedProducts: string) => {
        setProducts(selectedProducts && selectedProducts.split(",").map(a => parseInt(a)) || []);
        isFormChanged.current = true;
    }

    const onChangeSelectedCategory = (newCategory: string) => {
        setCategory(newCategory);
        isFormChanged.current = true;
    }

    const onClickRunReport = useCallback(() => {
        if (!category) {
            return;
        }
        setSelection(category, products);
        onFormPostSubmit?.();
        isFormChanged.current = false;
    }, [category, products]);


    const onClickClearButton = () => {
        clearSelection();
        isFormChanged.current = false;
    }

    // useProductStore
    return (
        <Box display="flex" flexDirection="column" mt={2} px={1}>
            <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="h6" component="label" noWrap>
                    Filters
                </Typography>

                <Button
                    type="button" variant="text" color="inherit"
                    onClick={onClickClearButton}
                >
                    Clear
                </Button>
            </Box>

            <Box mb={2}>
                <CategoryDropdown
                    selectedCategory={category || ""}
                    onChange={onChangeSelectedCategory}
                />
            </Box>


            <Box mb={2}>
                <ProductsDropdown
                    selectedCategory={category}
                    selectedProducts={products}
                    onChange={onChangeSelectedProducts}
                    disabled={!category}
                />
            </Box>
            <Box mb={2}>
                <Button
                    type="button" variant="contained" fullWidth
                    onClick={onClickRunReport}
                    disabled={!isFormChanged.current}
                >
                    Run Report
                </Button>
            </Box>
        </Box>
    )
}
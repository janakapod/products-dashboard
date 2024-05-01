export interface ProductState {
    selectedCategory: string | undefined;
    selectedProducts: number[];

    setSelection: (category: string, products: number[]) => void;
    clearSelection: () => void;
}
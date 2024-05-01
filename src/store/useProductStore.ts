import { create } from "zustand"
import { ProductState } from "../types"

export const useProductStore = create<ProductState>((set) => ({
    selectedCategory: undefined,
    selectedProducts: [],
    setSelection: (selectedCategory: string, selectedProducts: number[]) => set({ selectedCategory, selectedProducts }),
    clearSelection: () => set({ selectedCategory: undefined, selectedProducts: [] }),
}))
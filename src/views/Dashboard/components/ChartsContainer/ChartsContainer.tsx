import { useProductStore } from "../../../../store";
import { CategoryPieChart } from "./components/CategoryPieChart";
import { ProductsBarChart } from "./components/ProductsBarChart";

/**
 * Container foor Charts Preview area with conditional loading
 */
export const ChartsContainer = () => {
    const selectedCategory = useProductStore(state => state.selectedCategory);

    if (selectedCategory) {
        return <ProductsBarChart />;
    }
    return <CategoryPieChart />;
}
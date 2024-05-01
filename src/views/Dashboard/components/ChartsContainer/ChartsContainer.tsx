import { useProductStore } from "../../../../store";
import { CategoryPieChart } from "./components/CategoryPieChart";
import { ProductsBarChart } from "./components/ProductsBarChart";


export const ChartsContainer = () => {
    const selectedCategory = useProductStore(state => state.selectedCategory);

    console.log({ selectedCategory })
    if (selectedCategory) {
        return <ProductsBarChart />;
    }
    return <CategoryPieChart />;
}

import { Typography } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useQuery } from "react-query";

import { LoadingSpanner } from "../../../../../components";
import { useProductStore } from "../../../../../store";
import { Product, ProductsResponse, QUERY_KEY_PRODUCTS } from "../../../../../types";
import { StringFormatter } from "../../../../../utils";


/**
 * getFilterdProducts will return filtered Products if filterDataFrom is filled
 * @param products array of Products to filter
 * @param filterDataFrom ids of Products which needs to be returned
 * @returns 
 */
const getFilterdProducts = (products: Product[], filterDataFrom: number[]): Product[] => (
    filterDataFrom.length === 0 ? products : products.filter(product => filterDataFrom.indexOf(product.id) !== -1)
);

/**
 * getBarChartOptions will return options which required to graph a bar chart with provided Products
 */
const getBarChartOptions = (products: Product[], categoryName: string): Highcharts.Options => (
    {
        chart: {
            type: "column",
        },
        title: {
            text: "Products in " + categoryName,
            align: 'left'
        },
        xAxis: {
            categories: products.map((product) => product.title),
        },
        yAxis: {
            title: {
                text: "Price ($)",
            },
        },
        series: [
            {
                name: "Price",
                type: "column",
                data: products.map((product) => [product.title, product.price]),
                dataLabels: {
                    enabled: true,
                    format: '{point.y} $',
                    style: {
                        fontWeight: 'bold',
                        color: 'black',
                    },
                },
            },
        ],
        legend: {
            enabled: false
        },
        tooltip: {
            valueSuffix: " $"
        }
    }
);


/**
 * Component which will show the Bar Chart for a specific Category
 */
export const ProductsBarChart = () => {
    const selectedCategory = useProductStore(state => state.selectedCategory);
    const selectedProducts = useProductStore(state => state.selectedProducts);


    const { data, error, isFetching } = useQuery<ProductsResponse>({ queryKey: [QUERY_KEY_PRODUCTS, selectedCategory] });


    if (isFetching) {
        return <LoadingSpanner />;
    }

    if (error || !data || !selectedCategory) {
        return <Typography>An error occurred</Typography>;
    }

    return (<HighchartsReact
        highcharts={Highcharts}
        options={getBarChartOptions(
            getFilterdProducts(data.products, selectedProducts),
            StringFormatter.formatToReadableLabel(selectedCategory)
        )}
    />);
}
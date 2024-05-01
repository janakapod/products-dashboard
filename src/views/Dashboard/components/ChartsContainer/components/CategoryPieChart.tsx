import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useQuery } from "react-query";
import { QUERY_KEY_CATEGORIES } from "../../../../../types";


const getPiChartOptions = (data: string[]) => (
    {
        chart: {
            type: "pie",
        },
        title: {
            text: "Distribution of Categories",
        },
        series: [
            {
                name: "Items",
                data: data?.map((item) => ({ name: item, y: 1 })),
            },
        ],
    }
);

export const CategoryPieChart = () => {

    const { data, error, isFetching } = useQuery({ queryKey: QUERY_KEY_CATEGORIES });
    return (<HighchartsReact
        highcharts={Highcharts}
        options={getPiChartOptions()}
    />)
}
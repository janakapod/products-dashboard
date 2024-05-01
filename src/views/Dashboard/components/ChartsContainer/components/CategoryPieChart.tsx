import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useQuery } from "react-query";
import { CategoryDataResponse, QUERY_KEY_CATEGORIES } from "../../../../../types";
import { LoadingSpanner } from "../../../../../components";
import { Typography } from "@mui/material";
import { replace, startCase } from "lodash";


const getPiChartOptions = (data: string[]): Highcharts.Options => (
    {
        chart: {
            type: "pie",
        },
        title: {
            text: "All Categories",
        },
        series: [
            {

                type: "pie",
                name: "Items",
                data: data?.map((category) => ({ name: startCase(replace(category, "-", " ")), y: 1 })),

            },
        ],
        tooltip: {
            enabled: false
        },
    }
);

export const CategoryPieChart = () => {

    const { data, error, isFetching } = useQuery<CategoryDataResponse>({ queryKey: QUERY_KEY_CATEGORIES });

    if (isFetching) {
        return <LoadingSpanner />
    }

    if (error || !data) {
        return <Typography>An error occurred</Typography>
    }


    return (<HighchartsReact
        highcharts={Highcharts}
        options={getPiChartOptions(data)}
    />)
}
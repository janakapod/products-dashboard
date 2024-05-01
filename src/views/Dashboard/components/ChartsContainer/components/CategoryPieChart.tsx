import { Typography } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { replace, startCase } from "lodash";
import { useQuery } from "react-query";
import { LoadingSpanner } from "../../../../../components";
import { CategoryDataResponse, QUERY_KEY_CATEGORIES } from "../../../../../types";
import { StringFormatter } from "../../../../../utils";


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
                data: data?.map((category) => ({ name: StringFormatter.formatToReadableLabel(category), y: 1 })),

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
        return <LoadingSpanner />;
    }

    if (error || !data) {
        return <Typography>An error occurred</Typography>;
    }


    return (<HighchartsReact
        highcharts={Highcharts}
        options={getPiChartOptions(data)}
    />);
}
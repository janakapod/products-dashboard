import HighchartsReact from "highcharts-react-official"
import Highcharts from 'highcharts'


const options = {
    title: {
        text: 'My chart'
    },
    series: [{
        data: [1, 2, 3]
    }]
}

export const TestChart = () => <div>
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
</div>
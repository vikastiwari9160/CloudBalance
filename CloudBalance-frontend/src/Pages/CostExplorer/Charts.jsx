import React from 'react'

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { useSearchParams } from 'react-router-dom';

charts(FusionCharts);

const Charts = ({ data , width}) => {

    console.log(width)

    const [searchParams] = useSearchParams();

    const ChartView= searchParams.get('ChartView');

    if (!data) return <></>;

    const otherValue = {};
    data.forEach((item, index) => {
        if (index > 4) {
            otherValue["Value_1"] == undefined ? otherValue["Value_1"] = item.Value_1 : otherValue["Value_1"] += item.Value_1;
            otherValue["Value_2"] == undefined ? otherValue["Value_2"] = item.Value_2 : otherValue["Value_2"] += item.Value_2;
            otherValue["Value_3"] == undefined ? otherValue["Value_3"] = item.Value_3 : otherValue["Value_3"] += item.Value_3;
            otherValue["Value_4"] == undefined ? otherValue["Value_4"] = item.Value_4 : otherValue["Value_4"] += item.Value_4;
            otherValue["Value_5"] == undefined ? otherValue["Value_5"] = item.Value_5 : otherValue["Value_5"] += item.Value_5;
            otherValue["Value_6"] == undefined ? otherValue["Value_6"] = item.Value_6 : otherValue["Value_6"] += item.Value_6;
        }
    });

    const DataSet = {
        categories: [
            {
                category: [
                    {
                        label: data[0].month1
                    },
                    {
                        label: data[0].month2
                    },
                    {
                        label: data[0].month3
                    },
                    {
                        label: data[0].month4
                    },
                    {
                        label: data[0].month5
                    },
                    {
                        label: data[0].month6
                    },
                ]
            }
        ],
        dataset: [
            {
                seriesname: data[1].Service_Name,
                data: [
                    {
                        value: data[1].Value_1
                    },
                    {
                        value: data[1].Value_2
                    },
                    {
                        value: data[1].Value_3
                    },
                    {
                        value: data[1].Value_4
                    },
                    {
                        value: data[1].Value_5
                    },
                    {
                        value: data[1].Value_6
                    }
                ]
            },
            {
                seriesname: data[2].Service_Name,
                data: [
                    {
                        value: data[2].Value_1
                    },
                    {
                        value: data[2].Value_2
                    },
                    {
                        value: data[2].Value_3
                    },
                    {
                        value: data[2].Value_4
                    },
                    {
                        value: data[2].Value_5
                    },
                    {
                        value: data[2].Value_6
                    }
                ]
            },
            {
                seriesname: data[3].Service_Name,
                data: [
                    {
                        value: data[3].Value_1
                    },
                    {
                        value: data[3].Value_2
                    },
                    {
                        value: data[3].Value_3
                    },
                    {
                        value: data[3].Value_4
                    },
                    {
                        value: data[3].Value_5
                    },
                    {
                        value: data[3].Value_6
                    }
                ]
            },
            {
                seriesname: data[4].Service_Name,
                data: [
                    {
                        value: data[4].Value_1
                    },
                    {
                        value: data[4].Value_2
                    },
                    {
                        value: data[4].Value_3
                    },
                    {
                        value: data[4].Value_4
                    },
                    {
                        value: data[4].Value_5
                    },
                    {
                        value: data[4].Value_6
                    }
                ]
            },
            {
                seriesname: data[5].Service_Name,
                data: [
                    {
                        value: data[5].Value_1
                    },
                    {
                        value: data[5].Value_2
                    },
                    {
                        value: data[5].Value_3
                    },
                    {
                        value: data[5].Value_4
                    },
                    {
                        value: data[5].Value_5
                    },
                    {
                        value: data[5].Value_6
                    }
                ]
            },
            {
                seriesname: "Others",
                data: [
                    {
                        value: otherValue.Value_1
                    },
                    {
                        value: otherValue.Value_2
                    },
                    {
                        value: otherValue.Value_3
                    },
                    {
                        value: otherValue.Value_4
                    },
                    {
                        value: otherValue.Value_5
                    },
                    {
                        value: otherValue.Value_6
                    }
                ]
            },
        ]
    }

    const dataSourceForGroupChart = {
        chart: {
            xaxisname: "Months",
            yaxisname: "Cost ($)",
            theme: "fusion",

            // Background & borders
            bgColor: "#FFFFFF",
            canvasBgColor: "#FFFFFF",
            showBorder: "0",
            showCanvasBorder: "0",

            // Axes + grid
            paletteColors:
                "#2498fe,#61dbfd,#ffa213,#a3dc28,#88D39A,#f2cb00",
            divLineColor: "#E0E0E0",
            divLineIsDashed: "0",
            showAlternateHGridColor: "0",

            // Font & text styling
            baseFont: "Inter, Arial",
            baseFontColor: "#424242",
            labelFontColor: "#424242",
            outCnvBaseFontColor: "#424242",

            // Tooltip (cleaner)
            plottooltext:
                "<div style='font-size:14px'><b>$dataValue</b> on <b>$seriesName</b> ($label)</div>",

            // Columns styling
            usePlotGradientColor: "0",
            plotBorderAlpha: "0",
            drawCrossLine: "1",

            // Value display
            showValues: "0"
        }
        ,
        ...DataSet
    };
    

    switch (ChartView) {
        case "groupChart":
            return (
                <ReactFusioncharts
                    type="mscolumn2d"
                    width="100%"
                    height="400"
                    dataFormat="JSON"
                    dataSource={dataSourceForGroupChart}
                />
            )
        case "multipleLineChart":
            return (
                <ReactFusioncharts
                    type="msline"
                    width="100%"
                    height="400"
                    dataFormat="JSON"
                    dataSource={dataSourceForGroupChart}
                />
            )
        case "stackedColumn2d":
            return (
                <ReactFusioncharts
                    type="stackedcolumn2d"
                    width="100%"
                    height="400"
                    dataFormat="JSON"
                    dataSource={dataSourceForGroupChart}
                />
            )
    }
}

export default Charts
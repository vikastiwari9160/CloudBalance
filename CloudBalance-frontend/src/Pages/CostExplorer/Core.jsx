import BarChartIcon from '@mui/icons-material/BarChart';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import {useSearchParams } from 'react-router-dom';

import CostExplorerTable from './CostExplorerTable';
import Charts from './Charts';
import { useSideFilter } from '../../Contexts/SideFiltersProvider';
import { useEffect, useRef } from 'react';

const Core = () => {

    const {isOpen} = useSideFilter();
    console.log(isOpen);

    const LeftColumnWidth = useRef();

    const [searchParams,setSearchParams] = useSearchParams();

    useEffect(()=>{
        setSearchParams({"ChartView":"groupChart"})
    },[])

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    function createDataForTable(name, costFirstMonth, costSecondMonth, costThirdMonth, costForthMonth, costFifthMonth, costSixthMonth) {
        return {
            name,
            costFirstMonth: `$${formatter.format(costFirstMonth)}`,
            costSecondMonth: `$${formatter.format(costSecondMonth)}`,
            costThirdMonth: `$${formatter.format(costThirdMonth)}`,
            costForthMonth: `$${formatter.format(costForthMonth)}`,
            costFifthMonth: `$${formatter.format(costFifthMonth)}`,
            costSixthMonth: `$${formatter.format(costSixthMonth)}`,
            totalcost: `$${formatter.format(Number(costFirstMonth + costSecondMonth + costThirdMonth + costForthMonth + costFifthMonth + costSixthMonth))}`
        };
    }

    const res = [
        { "Service_Name": "Amazon Elastic Compute Cloud", "Value_1": 39086.88, "Value_2": 42441.19, "Value_3": 36717.95, "Value_4": 38043.52, "Value_5": 33826.71, "Value_6": 31048.98 }, { "Service_Name": "Savings Plans for AWS Compute usage", "Value_1": 24480.0, "Value_2": 25296.0, "Value_3": 25296.0, "Value_4": 24480.0, "Value_5": 25296.0, "Value_6": 24480.0 }, { "Service_Name": "Amazon Relational Database Service", "Value_1": 25434.85, "Value_2": 24148.67, "Value_3": 24200.03, "Value_4": 24554.95, "Value_5": 23718.76, "Value_6": 22238.68 }, { "Service_Name": "AWS Marketplace", "Value_1": 14145.44, "Value_2": 20607.99, "Value_3": 28863.24, "Value_4": 23589.09, "Value_5": 13497.72, "Value_6": 26540.31 }, { "Service_Name": "AWS Data Transfer", "Value_1": 12255.36, "Value_2": 13140.0, "Value_3": 12162.33, "Value_4": 12068.5, "Value_5": 11798.63, "Value_6": 10928.28 }, { "Service_Name": "Amazon Simple Storage Service", "Value_1": 10535.52, "Value_2": 10390.56, "Value_3": 10473.91, "Value_4": 10619.57, "Value_5": 10050.02, "Value_6": 8900.63 }, { "Service_Name": "Amazon ElastiCache", "Value_1": 6274.76, "Value_2": 6104.43, "Value_3": 6266.93, "Value_4": 5524.13, "Value_5": 4039.58, "Value_6": 1908.36 }, { "Service_Name": "Amazon Simple Queue Service", "Value_1": 2898.85, "Value_2": 3006.26, "Value_3": 2842.71, "Value_4": 2477.82, "Value_5": 2505.44, "Value_6": 2567.55 }, { "Service_Name": "Elastic Load Balancing", "Value_1": 2141.04, "Value_2": 2466.4, "Value_3": 2514.69, "Value_4": 2530.81, "Value_5": 2543.78, "Value_6": 2326.03 }, { "Service_Name": "AWS Database Migration Service", "Value_1": 2155.55, "Value_2": 2288.48, "Value_3": 2295.74, "Value_4": 2222.27, "Value_5": 2295.74, "Value_6": 2168.51 }, { "Service_Name": "Amazon QuickSight", "Value_1": 130.59, "Value_2": 1017.65, "Value_3": 1147.01, "Value_4": 1599.1, "Value_5": 2680.5, "Value_6": 3114.03 }, { "Service_Name": "AmazonCloudWatch", "Value_1": 2152.62, "Value_2": 1221.69, "Value_3": 1279.18, "Value_4": 1399.53, "Value_5": 1603.97, "Value_6": 1452.14 }, { "Service_Name": "AWS CloudTrail", "Value_1": 1468.06, "Value_2": 1245.01, "Value_3": 1230.53, "Value_4": 1150.22, "Value_5": 1069.82, "Value_6": 1039.5 }, { "Service_Name": "Amazon Virtual Private Cloud", "Value_1": 1115.85, "Value_2": 1188.06, "Value_3": 1115.71, "Value_4": 1131.97, "Value_5": 1260.1, "Value_6": 1209.83 }, { "Service_Name": "AWS Config", "Value_1": 4636.02, "Value_2": 1461.24, "Value_3": 0.0, "Value_4": 0.0, "Value_5": 0.0, "Value_6": 0.0 }, { "Service_Name": "Amazon Elastic Container Service for Kubernetes", "Value_1": 720.0, "Value_2": 744.0, "Value_3": 744.21, "Value_4": 750.68, "Value_5": 748.44, "Value_6": 714.0 }, { "Service_Name": "Amazon GuardDuty", "Value_1": 2850.52, "Value_2": 1307.47, "Value_3": 0.0, "Value_4": 0.0, "Value_5": 0.0, "Value_6": 0.0 }, { "Service_Name": "Amazon EC2 Container Registry (ECR)", "Value_1": 903.75, "Value_2": 880.69, "Value_3": 489.55, "Value_4": 528.71, "Value_5": 566.69, "Value_6": 590.9 }, { "Service_Name": "Amazon Elastic File System", "Value_1": 417.78, "Value_2": 464.29, "Value_3": 366.5, "Value_4": 344.57, "Value_5": 369.83, "Value_6": 248.87 }, { "Service_Name": "Amazon Elastic MapReduce", "Value_1": 99.11, "Value_2": 201.04, "Value_3": 202.1, "Value_4": 195.84, "Value_5": 202.37, "Value_6": 194.48 }, { "Service_Name": "Amazon API Gateway", "Value_1": 131.29, "Value_2": 147.78, "Value_3": 168.24, "Value_4": 162.71, "Value_5": 144.53, "Value_6": 135.21 }, { "Service_Name": "AWS Glue", "Value_1": 108.35, "Value_2": 112.03, "Value_3": 115.02, "Value_4": 110.65, "Value_5": 128.02, "Value_6": 135.26 }, { "Service_Name": "Amazon OpenSearch Service", "Value_1": 166.07, "Value_2": 90.08, "Value_3": 70.84, "Value_4": 68.83, "Value_5": 70.84, "Value_6": 68.25 }, { "Service_Name": "Amazon S3 Glacier Deep Archive", "Value_1": 86.46, "Value_2": 86.46, "Value_3": 76.82, "Value_4": 63.47, "Value_5": 63.51, "Value_6": 90.44 }, { "Service_Name": "AWS Lambda", "Value_1": 78.71, "Value_2": 54.62, "Value_3": 53.99, "Value_4": 66.35, "Value_5": 98.82, "Value_6": 79.37 }, { "Service_Name": "CloudWatch Events", "Value_1": 60.15, "Value_2": 71.48, "Value_3": 76.28, "Value_4": 73.63, "Value_5": 74.06, "Value_6": 71.64 }, { "Service_Name": "AWS Key Management Service", "Value_1": 44.91, "Value_2": 25.47, "Value_3": 23.49, "Value_4": 93.4, "Value_5": 36.67, "Value_6": 23.29 }, { "Service_Name": "Amazon DynamoDB", "Value_1": 45.84, "Value_2": 47.98, "Value_3": 35.02, "Value_4": 29.98, "Value_5": 31.76, "Value_6": 30.38 }, { "Service_Name": "Amazon Athena", "Value_1": 63.82, "Value_2": 20.6, "Value_3": 24.54, "Value_4": 17.49, "Value_5": 17.21, "Value_6": 16.37 }, { "Service_Name": "AWS X-Ray", "Value_1": 6.39, "Value_2": 11.8, "Value_3": 13.49, "Value_4": 25.75, "Value_5": 49.31, "Value_6": 48.76 }, { "Service_Name": "Amazon Route 53", "Value_1": 23.45, "Value_2": 20.16, "Value_3": 19.68, "Value_4": 19.66, "Value_5": 19.68, "Value_6": 23.32 }, { "Service_Name": "Amazon CloudFront", "Value_1": 0.0, "Value_2": 0.01, "Value_3": 0.02, "Value_4": 0.03, "Value_5": 0.04, "Value_6": 116.7 }, { "Service_Name": "AWS DataSync", "Value_1": 75.3, "Value_2": 0.0, "Value_3": 0.0, "Value_4": 0.0, "Value_5": 0.0, "Value_6": 0.0 }, { "Service_Name": "Amazon Registrar", "Value_1": 14.0, "Value_2": 45.0, "Value_3": 0.0, "Value_4": 15.0, "Value_5": 0.0, "Value_6": 0.0 }, { "Service_Name": "AWS Systems Manager", "Value_1": 7.0, "Value_2": 7.0, "Value_3": 7.0, "Value_4": 7.0, "Value_5": 7.0, "Value_6": 7.0 }, { "Service_Name": "Amazon Lightsail", "Value_1": 5.26, "Value_2": 5.42, "Value_3": 5.42, "Value_4": 5.26, "Value_5": 5.42, "Value_6": 5.2 }, { "Service_Name": "Amazon Cognito", "Value_1": 6.0, "Value_2": 6.0, "Value_3": 6.0, "Value_4": 6.0, "Value_5": 6.0, "Value_6": 0.0 }, { "Service_Name": "AWS Backup", "Value_1": 2.27, "Value_2": 3.46, "Value_3": 4.56, "Value_4": 5.42, "Value_5": 6.44, "Value_6": 7.07 }, { "Service_Name": "AWS Identity and Access Management Access Analyzer", "Value_1": 1.8, "Value_2": 4.2, "Value_3": 4.4, "Value_4": 4.4, "Value_5": 5.4, "Value_6": 5.4 }
    ];

    const dataForChart =[
        { Group: "Service", month1: "Jun2025", month2: "Jul2025", month3: "Aug2025", month4: "Sep2025", month5: "Oct2025", month6: "Nov2025" },
        ...res
    ]

    // Sample Response
    const dataForTable = [
        { Group: "Service", month1: "Jun2025", month2: "Jul2025", month3: "Aug2025", month4: "Sep2025", month5: "Oct2025", month6: "Nov2025" },
        ...res.map(item=>{return createDataForTable(item.Service_Name,item.Value_1,item.Value_2,item.Value_3,item.Value_4,item.Value_5,item.Value_6)})
    ];

    return (
        <div className='flex flex-row w-full justify-between'>
            <div ref={LeftColumnWidth} className={`flex flex-col p-3 flex-1 gap-4 ${isOpen?`max-w-[calc(100%-360px)]`:'w-full'}`}>
                <div className='flex flex-row justify-between'>
                    <div><p className='text-sm'>Costs ($)</p></div>
                    <div>
                        <div className='border border-gray-200 rounded-lg '>
                            <button onClick={()=>{setSearchParams({"ChartView":"groupChart"})}} className='px-1 border-r border-gray-200'>
                                <BarChartIcon />
                            </button>
                            <button onClick={()=>{setSearchParams({"ChartView":"multipleLineChart"})}} className='px-1 border-r border-gray-200'>
                                <TimelineIcon />
                            </button>
                            <button onClick={()=>{setSearchParams({"ChartView":"stackedColumn2d"})}} className='px-1'>
                                <StackedBarChartIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <Charts data={dataForChart} />
                </div>
                <div className='flex items-center justify-center py-3 bg-blue-100 border border-blue-700 text-blue-700 font-semibold'>
                    <p className=''>We are showing up top 1000 records by cost.</p>
                </div>
                <div>
                    <CostExplorerTable data={dataForTable} />
                </div>
            </div>
            <div className={` bg-blue-400 overflow-hidden ${isOpen?`w-[360]`:`w-0`}`}></div>
        </div>
    )
}

export default Core
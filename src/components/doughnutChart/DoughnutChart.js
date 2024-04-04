import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import Box from '../styled/Box';
import "./doughnut.css"
import Flex from '../styled/Flex';
// import Span from '../styled/Typography/Span';
import Text from "../styled/Typography/Text"

Chart.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
    const data = {
        labels: ["Active", "Expired"],
        datasets: [{
            label: "Subscriptions",
            data: [5000, 1000],
            backgroundColor: ["#1890FF", "#C193FE"],
            borderColor: ["#1890FF", "#C193FE"],
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: false 
            }
        }
    };

    return (
        <Box width="183px" className='doughnut'>
            <Doughnut data={data} options={options} />
            <Flex className="legends" justify='center'>
                <Flex direction='column' justify='center' gap='5' align='center'>
                  <Flex gap='1' align='center'>
                    <Box width='10px' background='#1890FF'  className='circle'></Box>
                    <Text color='#929292' font='font-16' className='active-text' >Active</Text>
                  </Flex>
                    <Text font='font-18' className='numbers' >5000</Text>    
                </Flex>
                <hr style={{ margin: '0px 25px',border: '0.3px solid #1890FF'}} />
                <Flex direction='column' justify='center' gap='5' align='center'>
                  <Flex gap='1' align='center'>
                    <Box width='10px' background='#C193FE'  className='circle'></Box>
                    <Text color='#929292' font='font-16' className='active-text'>Expired</Text>
                  </Flex>
                    <Text font='font-18' className='numbers'>1000</Text>    
                </Flex>
            </Flex>
        </Box>
    );
}

export default DoughnutChart;

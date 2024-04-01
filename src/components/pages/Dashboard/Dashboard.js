import React, { useRef } from "react";
import Box from "../../styled/Box";
import Heading from "../../styled/Typography/Heading";
import Flex from "../../styled/Flex";
import "./dashboard.css";
import boy from "./icons/image 52.png";
import board from "./icons/image 53.png";
import family from "./icons/image 54.png";
import total from "./icons/image 55.png";
import {
  Chart as chartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, getElementsAtEvent } from "react-chartjs-2";
import DoughnutChart from "../../doughnutChart/DoughnutChart";
import {
  Table,
  TableBody,
  TableBodyData,
  TableHead,
  TableHeadData,
  TableRow,
  TableText,
} from "../../styled/Table/Table";
import { Link } from "react-router-dom";
import Pagination from "../../pagination/Pagination";

chartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Dashboard() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        labels: "Monthely",
        data: [20, 30, 40, 50],
        borderColor: "#1890FF",
        tension: 0.3,
      },
    ],
  };
  const options = {};
  const chartRef = useRef();
  const onClick = (event) => {
    if (event) {
      const elements = getElementsAtEvent(event);
      console.log(elements, event);
    } else {
      console.log("Event object is undefined.");
    }
  };

  return (
    <>
      <Box className="schoolup-outer-div">
        <Heading font="font-22">Good Afternoon Ali!</Heading>
        <Flex direction="row" gap="20" className="dashboard-top-boxes">
          <Box background="#FFFFFF" className="dashboard-top-box">
            <Flex justify="space-between">
              <Box className="walking-boy">
                <img src={boy} />
              </Box>
              <Box className="right-curve">
                <Box className="right-curve-inner"></Box>
              </Box>
            </Flex>
            <Flex direction="column" gap="6" className="box-text">
              <Heading font="font-16" weight="weight-400" color="#929292">
                Net Profit
              </Heading>
              <Heading color="#1890FF" font="font-34" weight="weight-800">
                $50,532,230
              </Heading>
            </Flex>
          </Box>
          <Box background="#FFFFFF" className="dashboard-top-box">
            <Flex justify="space-between">
              <Box className="walking-boy">
                <img src={family} />
              </Box>
              <Box className="right-curve">
                <Box className="right-curve-inner"></Box>
              </Box>
            </Flex>
            <Flex direction="column" gap="6" className="box-text">
              <Heading font="font-16" weight="weight-400" color="#929292">
                Total User
              </Heading>
              <Heading color="#1890FF" font="font-34" weight="weight-800">
                11,02,234
              </Heading>
            </Flex>
          </Box>
          <Box background="#FFFFFF" className="dashboard-top-box">
            <Flex justify="space-between">
              <Box className="walking-boy">
                <img src={total} />
              </Box>
              <Box className="right-curve">
                <Box className="right-curve-inner"></Box>
              </Box>
            </Flex>
            <Flex direction="column" gap="6" className="box-text">
              <Heading font="font-16" weight="weight-400" color="#929292">
                Total Subscribtion
              </Heading>
              <Heading color="#1890FF" font="font-34" weight="weight-800">
                31,212,234
              </Heading>
            </Flex>
          </Box>

          <Box background="#FFFFFF" className="dashboard-top-box">
            <Flex justify="space-between">
              <Box className="walking-boy">
                <img src={board} />
              </Box>
              <Box className="right-curve">
                <Box className="right-curve-inner"></Box>
              </Box>
            </Flex>
            <Flex direction="column" gap="6" className="box-text">
              <Heading font="font-16" weight="weight-400" color="#929292">
                Total Revenue
              </Heading>
              <Heading color="#1890FF" font="font-34" weight="weight-800">
                50,532,234
              </Heading>
            </Flex>
          </Box>
        </Flex>

        <Flex gap="20" className="charts">
          <Box background="#FFFFFF" width="850px" className="line-chart">
            <Heading font="font-18" weight="weight-600" family="Poppins">
              Total Revenue
            </Heading>

            <Box className="main-line-chart" width="802px">
              <Line
                data={data}
                options={options}
                onClick={onClick}
                ref={chartRef}
              />
            </Box>
          </Box>
          <Box
            background="#FFFFFF"
            width="270px"
            className="doughnut-chart-outer"
          >
            <Heading font="font-18" weight="weight-600" family="Poppins">
              Subscribtions
            </Heading>
            <DoughnutChart />
          </Box>
        </Flex>

        <Table>
          <TableHead>
            <TableHeadData>School ID</TableHeadData>
            <TableHeadData>School Name</TableHeadData>
            <TableHeadData>Total amount</TableHeadData>
            <TableHeadData>Status</TableHeadData>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableBodyData>
                <Link>
                  <TableText variant="link">10051</TableText>
                </Link>
              </TableBodyData>
              <TableBodyData>
                <TableText>Army Public School</TableText>
              </TableBodyData>
              <TableBodyData>
                <TableText>$4560968</TableText>
              </TableBodyData>
              <TableBodyData>
              <TableText variant={{ type: "simple", status: "unpaid" }}>Unpaid</TableText>
              </TableBodyData>
            </TableRow>
            <TableRow>
              <TableBodyData>
                <Link>
                  <TableText variant="link">10051</TableText>
                </Link>
              </TableBodyData>
              <TableBodyData>
                <TableText>Army Public School</TableText>
              </TableBodyData>
              <TableBodyData>
                <TableText>$4560968</TableText>
              </TableBodyData>
              <TableBodyData>
              <TableText variant={{ type: "simple", status: "paid" }}>Paid</TableText>
              </TableBodyData>
            </TableRow>
            <TableRow>
              <TableBodyData>
                <Link>
                  <TableText variant="link">10051</TableText>
                </Link>
              </TableBodyData>
              <TableBodyData>
                <TableText>Army Public School</TableText>
              </TableBodyData>
              <TableBodyData>
                <TableText>$4560968</TableText>
              </TableBodyData>
              <TableBodyData>
              <TableText variant={{ type: "simple", status: "unpaid" }}>Unpaid</TableText>
              </TableBodyData>
            </TableRow>
            <TableRow>
              <TableBodyData>
                <Link>
                  <TableText variant="link">10051</TableText>
                </Link>
              </TableBodyData>
              <TableBodyData>
                <TableText>Army Public School</TableText>
              </TableBodyData>
              <TableBodyData>
                <TableText>$4560968</TableText>
              </TableBodyData>
              <TableBodyData>
              <TableText  variant={{ type: "simple", status: "unpaid" }}>Unpaid</TableText>
              </TableBodyData>
            </TableRow>
          </TableBody>
        </Table>
      <Pagination/>
      </Box>
    </>
  );
}

export default Dashboard;

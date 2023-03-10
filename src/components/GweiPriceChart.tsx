import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { blockCache } from "src/utils/db";
import { ethers } from "ethers";

const data = [
  {
    name: "Sunday",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Monday",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Tuesday",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Wednesday",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Thursday",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Friday",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Saturday",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const GweiPriceChart = () => {
  useEffect(() => {
    blockCache.iterate((value: any, key, iterationNumber) => {
      // console.log(
      //   "baseFee",
      //   ethers.BigNumber.from(value.baseFeePerGas._hex).toString()
      // );
      // console.log(
      //   "gaslimit",
      //   ethers.BigNumber.from(value.gasUsed._hex).toString()
      // );
      // console.log("extraData", value.extraData);
      // console.log([key, value]);
    });
  }, []);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GweiPriceChart;

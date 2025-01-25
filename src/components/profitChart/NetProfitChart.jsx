import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Product 1", profit: 200, fill: "#7D4283" },
  { name: "Product 2", profit: 90, fill: "#F3722C" },
  { name: "Product 3", profit: 150, fill: "#F8961E" },
];

const ProfitChart = () => {
  return (
    <div className="hidden relative p-[20px] pr-10 mt-5 bg-[#1E1E1E] rounded-lg xl:flex flex-col justify-center drop-shadow-[0_4px_4px_#0000001A;] max-w-[700px] mx-auto ">
      <h2 className="text-2xl bg-[#1E1E1E] font-bold text-white mb-4">
        Net Profit
      </h2>
      <h3 className="text-gray-400 mb-6 bg-[#1E1E1E]">2024</h3>
      <div className="flex justify-center ">
        <BarChart width={700} height={350} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{ backgroundColor: "#333", border: "none" }}
            labelStyle={{ color: "#fff" }}
          />
          <Bar
            dataKey="profit"
            barSize={20}
            fill={({ payload }) => payload.fill}
          />
        </BarChart>
        <div className="absolute flex items-center gap-x-4 bottom-11 left-16">
          <div className="flex gap-x-1 items-center">
            <div className="bg-[#7D4283] rounded-full w-[10px] h-[10px]"></div>
            <div className="font-[Inter] text-xs leading-[15px] font-normal text-white">
              Product 1
            </div>
          </div>
          <div className="flex gap-x-1 items-center ">
            <div className="bg-[#F3722C] rounded-full w-[10px] h-[10px]"></div>
            <div className="font-[Inter] text-xs leading-[15px] font-normal text-white">
              Product 2
            </div>
          </div>
          <div className="flex gap-x-1 items-center ">
            <div className="bg-[#4CAF50] rounded-full w-[10px] h-[10px]"></div>
            <div className="font-[Inter] text-xs leading-[15px] font-normal text-white">
              Product 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitChart;

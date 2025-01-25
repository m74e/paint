import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const DonutChartCard = () => {
  const data = [
    { name: "Product 1", value: 50, color: "#7D4283" },
    { name: "Product 2", value: 50, color: "#F3722C" },
  ];

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5; 
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{ fontSize: "12px", fontWeight: "bold" }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div className="flex justify-center items-center mt-2 dropShadow">
        <div className="bg-[#1E1E1E] rounded-lg shadow-md w-[355px] flex flex-col px-4 py-5">
          <div className="text-white text-left text-lg font-semibold mb-1">
            Primary Text
          </div>
          <div className="text-gray-300 text-xl font-bold">5.987,34</div>
          <div className="text-gray-500 text-left text-sm">Secondary text</div>

          
          <div className="w-full h-[1px] bg-gray-700 my-4"></div>

        
          <div className="flex justify-center">
            <PieChart width={200} height={336}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={50} 
                outerRadius={90} 
                fill="#8884d8"
                label={renderCustomLabel}
                labelLine={false}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                align="left"
                verticalAlign="bottom"
                iconSize={10}
                formatter={(value) => (
                  <span className="text-gray-400 text-sm">{value}</span>
                )}
              />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonutChartCard;

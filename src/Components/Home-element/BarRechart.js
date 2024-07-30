
import React from "react";
import { BarChart, Bar, YAxis, Tooltip, Legend } from "recharts";
import { useGlobalContext } from "../../contextApi/myContext";

const BarRechart = () => {
  const { exp } = useGlobalContext();

  if (exp.length === 0) {
    return <p>there are no expense to show</p>;
  }
  const categoryData = exp.reduce((acc, curr) => {
    const category = curr.category;
    const price = Number(curr.price);
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += price;
    return acc;
  }, {});

  // Transform the grouped data to the format required by recharts
  const data = Object.entries(categoryData).map(([category, value]) => ({
    name: category,
    value,
  }));

  return (
    <div>
      <BarChart
        width={300}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        style={{
        //   transform: "rotate(90deg)",
        }}
      >
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />

        <Tooltip />
        <Legend />
        <Bar
          yAxisId="left"
          dataKey="pv"
          style={{ width: "10px" }}
          fill="#8884d8"
        />
      </BarChart>
    </div>
  );
};
export default BarRechart;

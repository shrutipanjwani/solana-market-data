/* eslint-disable react/display-name */
"use client";

import React, { useEffect, useState } from "react";

interface ExchangeVolumeChartProps {
  data: number[];
  color: string;
}

const ExchangeVolumeChart: React.FC<ExchangeVolumeChartProps> = ({
  data,
  color,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Chart, setChart] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import("recharts").then((mod) => {
      const { ResponsiveContainer, LineChart, Line, YAxis } = mod;
      setChart(() => ({ data, color }: { data: number[]; color: string }) => (
        <ResponsiveContainer width="100%" height={30}>
          <LineChart data={data.map((value, index) => ({ value, index }))}>
            <YAxis domain={["dataMin", "dataMax"]} hide />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={1.5}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      ));
    });
  }, []);

  if (!Chart) {
    // Return a placeholder while the chart is loading
    return (
      <div
        style={{ width: "100%", height: "30px", backgroundColor: "#2D3748" }}
      />
    );
  }

  return <Chart data={data} color={color} />;
};

export default ExchangeVolumeChart;

/* eslint-disable react/display-name */
"use client";

import React, { useEffect, useState } from "react";

interface SevenDayChartProps {
  data: { value: number }[];
  color: string;
}

const SevenDayChartClient: React.FC<SevenDayChartProps> = ({ data, color }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Chart, setChart] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import("recharts").then((mod) => {
      const { ResponsiveContainer, LineChart, Line, YAxis } = mod;
      setChart(
        () =>
          ({ data, color }: { data: { value: number }[]; color: string }) =>
            (
              <ResponsiveContainer width="100%" height={40}>
                <LineChart data={data}>
                  <YAxis domain={["dataMin", "dataMax"]} hide />
                  <Line
                    type="linear"
                    dataKey="value"
                    stroke={color}
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            )
      );
    });
  }, []);

  if (!Chart) {
    // Return a placeholder while the chart is loading
    return (
      <div
        style={{ width: "100%", height: "40px", backgroundColor: "#2D3748" }}
      />
    );
  }

  return <Chart data={data} color={color} />;
};

export default SevenDayChartClient;

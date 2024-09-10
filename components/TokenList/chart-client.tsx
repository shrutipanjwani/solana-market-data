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
      const { ResponsiveContainer, AreaChart, Area } = mod;
      setChart(
        () =>
          ({ data, color }: { data: { value: number }[]; color: string }) =>
            (
              <ResponsiveContainer width="100%" height={40}>
                <AreaChart data={data}>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={color}
                    fill={color}
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )
      );
    });
  }, []);

  if (!Chart) {
    // Return a placeholder while the chart is loading
    return (
      <div
        style={{ width: "100%", height: "40px", backgroundColor: "#f0f0f0" }}
      />
    );
  }

  return <Chart data={data} color={color} />;
};

export default SevenDayChartClient;

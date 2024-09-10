import React from "react";
import dynamic from "next/dynamic";

const SevenDayChartClient = dynamic(() => import("./chart-client"), {
  ssr: false,
});

interface SevenDayChartProps {
  data: { value: number }[];
  color: string;
}

const SevenDayChart: React.FC<SevenDayChartProps> = (props) => {
  return <SevenDayChartClient {...props} />;
};

export default SevenDayChart;

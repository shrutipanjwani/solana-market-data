import React from "react";
import TradingViewWidget from "./TradingViewWidget";

interface ChartViewProps {
  symbol: string;
  provider: string;
}

const ChartView: React.FC<ChartViewProps> = ({ provider, symbol }) => {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <TradingViewWidget provider={provider} symbol={symbol} />
    </div>
  );
};

export default ChartView;

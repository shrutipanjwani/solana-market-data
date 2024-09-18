import React from "react";

const MetricRow: React.FC<{
  label: string;
  value: string;
  change?: number;
  rank?: number;
  verified?: boolean;
}> = ({ label, value, change, rank }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-400 text-sm">{label}</span>
    <div className="text-right text-xs">
      <span className="font-semibold">{value}</span>
      {change !== undefined && (
        <span
          className={`ml-2 ${change >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {change >= 0 ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
        </span>
      )}
      {rank && <span className="ml-2 text-gray-500">#{rank}</span>}
    </div>
  </div>
);

export default MetricRow;

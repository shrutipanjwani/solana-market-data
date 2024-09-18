"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ExchangeVolumeChart from "./volumeChart";

// Define types for our data
interface ExchangeData {
  id: number;
  name: string;
  logo: string;
  tradingVolume24h: number;
  avgLiquidity: number;
  weeklyVisits: number;
  markets: number;
  coins: number;
  fiatSupported: string;
  volumeHistory: number[];
}

// Sample data (replace with actual data later)
const exchangeData: ExchangeData[] = [
  {
    id: 1,
    name: "Phoenix",
    logo: "/favicon.png",
    tradingVolume24h: 12978441947,
    avgLiquidity: 879,
    weeklyVisits: 10403969,
    markets: 1653,
    coins: 423,
    fiatSupported: "EUR, GBP, BRL and +8 more",
    volumeHistory: [
      10000000000, 11000000000, 12000000000, 11500000000, 12500000000,
      13000000000, 12978441947,
    ],
  },
  {
    id: 2,
    name: "Openbook",
    logo: "/favicon.png",
    tradingVolume24h: 12978441947,
    avgLiquidity: 879,
    weeklyVisits: 10403969,
    markets: 1653,
    coins: 423,
    fiatSupported: "EUR, GBP, and +8 more",
    volumeHistory: [
      10000000000, 11000000000, 12000000000, 11500000000, 12500000000,
      13000000000, 12978441947,
    ],
  },
];

const tabs = [
  "Spot",
  "Derivatives",
  "DEX (spot)",
  "DEX (derivatives)",
  "Lending",
];

const ExchangesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Spot");

  return (
    <div className="w-full mx-auto pt-6 pb-4 px-6 bg-background text-foreground">
      <h1 className="text-2xl font-bold mb-2">
        Top Solana Cryptocurrency Spot Exchanges
      </h1>
      <p className="text-gray-400 text-sm mb-6">
        DeFi Depths ranks and scores exchanges based on traffic, liquidity,
        trading volumes, and confidence in the legitimacy of trading volumes
        reported.
      </p>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant="ghost"
            className={`text-sm font-medium px-4 py-2 rounded-full border hover:bg-transparent hover:border-gray-700 hover:text-white ${
              activeTab === tab ? "border-gray-700" : "border-transparent"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {activeTab === tab && (
              <span className="w-1.5 h-1.5 bg-[#CFE731] rounded-full mr-2" />
            )}
            {tab}
          </Button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="h-[50px]">
            <TableRow className="rounded-full bg-[#151515]">
              <TableHead className="w-[50px] text-gray-300 text-left rounded-l-full">
                #
              </TableHead>
              <TableHead className="text-left text-gray-300">
                Exchange
              </TableHead>
              <TableHead className="text-right text-gray-300">
                Trading volume(24h)
              </TableHead>
              <TableHead className="text-right text-gray-300">
                Avg. Liquidity
              </TableHead>
              <TableHead className="text-right text-gray-300">
                Weekly Visits
              </TableHead>
              <TableHead className="text-right text-gray-300">
                # Markets
              </TableHead>
              <TableHead className="text-right text-gray-300">
                # Coins
              </TableHead>
              <TableHead className="text-center text-gray-300">
                Fiat Supported
              </TableHead>
              <TableHead className="w-[150px] text-center text-gray-300 rounded-r-full">
                Volume Graph (7d)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {exchangeData.map((exchange) => (
              <TableRow key={exchange.id}>
                <TableCell>{exchange.id}</TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Image
                      src={exchange.logo}
                      alt={exchange.name}
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    {exchange.name}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${exchange.tradingVolume24h.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  {exchange.avgLiquidity}
                </TableCell>
                <TableCell className="text-right">
                  {exchange.weeklyVisits.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">{exchange.markets}</TableCell>
                <TableCell className="text-right">{exchange.coins}</TableCell>
                <TableCell className="text-center max-w-xs">
                  {exchange.fiatSupported}
                </TableCell>
                <TableCell>
                  <ExchangeVolumeChart
                    data={exchange.volumeHistory}
                    color={
                      exchange.volumeHistory[6] > exchange.volumeHistory[0]
                        ? "#95cc2f"
                        : "#dc3737"
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ExchangesPage;

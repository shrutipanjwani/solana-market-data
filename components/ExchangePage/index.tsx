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
import { useRouter } from "next/navigation";
import { marketData } from "@/data/markets";

const tabs = ["Spot"];

const ExchangesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Spot");

  const router = useRouter();

  return (
    <div className="w-full mx-auto pt-6 pb-4 px-20 bg-background text-foreground">
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
              <span className="w-1.5 h-1.5 bg-[#38B2C4] rounded-full mr-2" />
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
              <TableHead className="text-left text-gray-300">
                Trading volume(24h)
              </TableHead>
              <TableHead className="text-left text-gray-300">Markets</TableHead>
              <TableHead className="text-left text-gray-300">Coins</TableHead>
              <TableHead className="w-[180px] text-center text-gray-300 rounded-r-full">
                Volume Graph (7d)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marketData.map((exchange) => (
              <TableRow
                key={exchange.id}
                onClick={() =>
                  router.push(`/exchanges/${exchange.name.toLowerCase()}`)
                }
                className="cursor-pointer"
              >
                <TableCell>{exchange.id}</TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <div className="flex-shrink-0"> {/* Ensure logo container doesn't shrink */}
                      <Image
                        src={exchange.logo}
                        alt={exchange.name}
                        width={exchange.logoOrientation === "horizontal" ? 24 : undefined} // Horizontal logos have width 24px
                        height={exchange.logoOrientation === "vertical" ? 24 : undefined}  // Vertical logos have height 24px
                        className="mr-2"
                        style={{
                          width: exchange.logoOrientation === "horizontal" ? '24px' : 'auto',  // Set width to 24px for horizontal logos
                          height: exchange.logoOrientation === "vertical" ? '24px' : 'auto',   // Set height to 24px for vertical logos
                        }}
                      />
                    </div>
                    <div className="ml-2">
                      {exchange.name}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-left">
                  ${exchange.tradingVolume24h.toLocaleString()}
                </TableCell>
                <TableCell className="text-left">{exchange.markets}</TableCell>
                <TableCell className="text-left">{exchange.coins}</TableCell>
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

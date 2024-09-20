import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MarketData } from "@/data/markets";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ExchangeDetails: React.FC<{ exchangeData: MarketData }> = ({
  exchangeData,
}) => {
  return (
    <div className="min-h-screen text-white p-8">
      <Card className="bg-background border-none">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Image
                src={exchangeData.logo}
                alt={exchangeData.name}
                width={50}
                height={50}
                unoptimized
              />
              <h1 className="text-2xl text-gray-100 font-bold">
                {exchangeData.name}
              </h1>
            </div>
            <div className="space-x-2">
              <Button
                size="sm"
                className="bg-[#151515] text-gray-200 border-gray-900 rounded-full"
                asChild
              >
                <Link href={exchangeData.website}>Website</Link>
              </Button>
              <Button
                size="sm"
                className="bg-[#151515] text-gray-200 border-gray-900 rounded-full"
              >
                Fees
              </Button>
              <Button
                size="sm"
                className="bg-[#151515] text-gray-200 border-gray-900 rounded-full"
              >
                Chat
              </Button>
              <Button
                size="sm"
                className="bg-[#151515] text-gray-200 border-gray-900 rounded-full"
              >
                @binance
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-100 mb-4">
                About {exchangeData.name}
              </h2>
              <h3 className="text-lg font-semibold text-gray-400 mb-2">
                What Is {exchangeData.name}?
              </h3>
              <p className="text-gray-200">{exchangeData.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-8 text-center">
              <div className="border border-gray-800 rounded-full px-6 py-2 bg-[#151515] h-[80px]">
                <h2 className="text-md text-gray-300 mb-1">
                  Spot Trading Volume (24h)
                </h2>
                <p className="text-2xl text-gray-100 font-semibold">
                  {exchangeData.spotTradingVolume}
                </p>
              </div>
              <div className="border border-gray-800 rounded-full px-6 py-2 bg-[#151515] h-[80px]">
                <h2 className="text-md text-gray-300 mb-1">Total assets</h2>
                <p className="text-2xl text-gray-100  font-semibold">
                  {exchangeData.totalAssets}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-background border-none">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">Markets</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="h-[50px]">
                <TableRow className="rounded-full bg-[#151515]">
                  <TableHead className="text-gray-300 text-left rounded-l-full pl-4">
                    NAME
                  </TableHead>
                  <TableHead className="text-left text-gray-300">
                    PAIRS
                  </TableHead>
                  <TableHead className="text-left text-gray-300 rounded-r-full">
                    PRICE
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exchangeData.pairs.map((pair, index) => (
                  <TableRow key={index} className="border-b border-gray-800">
                    <TableCell className="text-blue-400 pl-4">
                      {`${exchangeData.name}_${pair.pair.replace(
                        "/",
                        ""
                      )}_d.csv`}
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {`${pair.pair}`}
                    </TableCell>
                    <TableCell className="text-gray-300">
                      <span className="flex items-center">
                        <span className="text-gray-300">$</span>
                        {pair.price.toFixed(2)}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExchangeDetails;

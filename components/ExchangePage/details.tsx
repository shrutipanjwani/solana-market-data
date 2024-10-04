"use client";

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
import { marketData } from "@/data/markets";
import { useRouter } from "next/navigation";
import { SquareArrowOutUpRight } from "lucide-react";

const ExchangeDetails: React.FC<{ exchangeData: MarketData }> = ({
  exchangeData,
}) => {
  const router = useRouter();

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
                  <TableHead className="w-[50px] text-gray-300 text-left rounded-l-full">
                    #
                  </TableHead>
                  <TableHead className="text-left text-gray-300">
                    Currency
                  </TableHead>
                  <TableHead className="text-left text-gray-300">
                    Pair
                  </TableHead>
                  <TableHead className="text-center text-gray-300">
                    Price
                  </TableHead>
                  <TableHead className="text-right text-gray-300">
                    +2% Depth
                  </TableHead>
                  <TableHead className="text-right text-gray-300">
                    -2% Depth
                  </TableHead>
                  <TableHead className="text-right text-gray-300">
                    Volume
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {marketData.flatMap((exchange) =>
                  exchange.pairs.map((pair, pairIndex) => (
                    <TableRow
                      key={`${exchange.id}-${pairIndex}`}
                      onClick={() =>
                        router.push(`/exchanges/${exchange.name.toLowerCase()}`)
                      }
                      className="cursor-pointer"
                    >
                      <TableCell className="font-medium text-gray-100">
                        {exchange.id}
                      </TableCell>
                      <TableCell className="flex items-center text-gray-100">
                        <Image
                          src={exchange.logo}
                          alt={exchange.name}
                          width={24}
                          height={24}
                          className="mr-2"
                        />
                        {exchange.name}
                      </TableCell>
                      <TableCell>
                        <Link
                          href={pair.href}
                          target="_blank"
                          className="flex items-center gap-x-2"
                        >
                          <span className="text-blue-400">{pair.pair} </span>
                          <span className="text-gray-400">
                            <SquareArrowOutUpRight className="h-4 w-4" />
                          </span>
                        </Link>
                      </TableCell>
                      <TableCell className="text-right text-gray-100">
                        ${pair.price.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right text-gray-100">
                        ${pair.depthPlus.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right text-gray-100">
                        ${pair.depthMinus.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right text-gray-100">
                        ${pair.volume24h.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExchangeDetails;

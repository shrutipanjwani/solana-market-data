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
import tokensList from "@/data/tokenlist"; // Import tokens list

// Function to retrieve token data
const getTokenData = (symbol: string) => {
  return tokensList.find((token) => token.symbol === symbol);
};

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
              {/* We use relative sizing here to match the text */}
              <Image
                src={exchangeData.logo}
                alt={exchangeData.name}
                width={0} // Set width to auto
                height={0} // Set height to auto
                className="h-[1.8em] w-auto min-h-[1.8em]" // Ensures the height is 40% larger than the text size
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
              {/* Twitter Link */}
              <Button
                size="sm"
                className="bg-[#151515] text-gray-200 border-gray-900 rounded-full"
                asChild
              >
                <Link
                  href={`https://twitter.com/${exchangeData.twitterHandle}`}
                  target="_blank"
                >
                  {exchangeData.twitterHandle}
                </Link>
              </Button>
            </div>
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
              <p className="text-2xl text-gray-100 font-semibold">
                {exchangeData.totalAssets}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-background border-none">
        <CardContent className="py-6 px-16">
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
                  exchange.pairs.map((pair, pairIndex) => {
                    const baseCurrency = pair.pair.split("/")[0]; // Extract the base currency
                    const tokenData = getTokenData(baseCurrency); // Get token data by symbol

                    return (
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
                          {tokenData ? (
                            <>
                              <Image
                                src={tokenData.logo} // Display token logo
                                alt={tokenData.name}
                                width={24}
                                height={24}
                                className="mr-2 rounded-full" // Round clipping mask for Solana
                                unoptimized
                              />
                              {tokenData.name} {/* Only the token name */}
                            </>
                          ) : (
                            "Token not found"
                          )}
                        </TableCell>
                        <TableCell>
                          <Link
                            href={pair.href}
                            target="_blank"
                            className="flex items-center gap-x-2"
                          >
                            <span className="text-blue-400">{pair.pair}</span>
                            <SquareArrowOutUpRight className="h-4 w-4" />
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
                    );
                  })
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

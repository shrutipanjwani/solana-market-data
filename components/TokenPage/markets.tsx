import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface MarketData {
  exchange: string;
  logo: string;
  pair: string;
  price: number;
  depthPlus: number;
  depthMinus: number;
  volume24h: number;
  volumePercent: number;
  confidence: "High" | "Moderate" | "Low";
  liquidityScore: number;
}

const marketData: MarketData[] = [
  {
    exchange: "Phoenix",
    logo: "/favicon.png",
    pair: "SOL/USDT",
    price: 132.99,
    depthPlus: 26826373,
    depthMinus: 21858348,
    volume24h: 739504296,
    volumePercent: 4.56,
    confidence: "High",
    liquidityScore: 1183,
  },
  {
    exchange: "OpenBook",
    logo: "/favicon.png",
    pair: "SOL/USDC",
    price: 132.99,
    depthPlus: 5774733,
    depthMinus: 5584918,
    volume24h: 929778555,
    volumePercent: 5.73,
    confidence: "High",
    liquidityScore: 948,
  },
];

const MarketsTable: React.FC = () => {
  return (
    <div className="p-4 mt-6 bg-background text-foreground">
      <h1 className="text-xl font-bold mb-4">Solana Markets</h1>
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
              <TableHead className="text-left text-gray-300">Pair</TableHead>
              <TableHead className="text-center text-gray-300">Price</TableHead>
              <TableHead className="text-right text-gray-300">
                +2% Depth
              </TableHead>
              <TableHead className="text-right text-gray-300">
                -2% Depth
              </TableHead>
              <TableHead className="text-right text-gray-300">
                Volume (24h)
              </TableHead>
              <TableHead className="text-right text-gray-300">
                Volume %
              </TableHead>
              <TableHead className="text-right text-gray-300">
                Confidence
              </TableHead>
              <TableHead className="text-center text-gray-300 rounded-r-full">
                Liquidity score
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marketData.map((data, index) => (
              <TableRow key={data.exchange}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="flex items-center">
                  <Image
                    src={data.logo}
                    alt={data.exchange}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  {data.exchange}
                </TableCell>
                <TableCell className="text-blue-400">{data.pair}</TableCell>
                <TableCell className="text-right">
                  ${data.price.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  ${data.depthPlus.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  ${data.depthMinus.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  ${data.volume24h.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  {data.volumePercent.toFixed(2)}%
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant={
                      data.confidence === "High" ? "default" : "secondary"
                    }
                  >
                    {data.confidence}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  {data.liquidityScore}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MarketsTable;

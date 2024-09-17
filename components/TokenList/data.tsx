"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Star } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { TokensList } from "@/data/tokenlist";

const SevenDayChart = dynamic(() => import("./chart"), { ssr: false });

const CryptoTable: React.FC<{ data: TokensList[] }> = ({ data }) => {
  const router = useRouter();

  return (
    <div className="w-full">
      <Table>
        <TableHeader className="h-[50px]">
          <TableRow className="rounded-full bg-[#151515]">
            <TableHead className="w-[50px] rounded-l-full"></TableHead>
            <TableHead className="text-left text-gray-300">#</TableHead>
            <TableHead className="text-left text-gray-300">Token</TableHead>
            <TableHead className="text-right text-gray-300">Price</TableHead>
            <TableHead className="text-right text-gray-300">1h</TableHead>
            <TableHead className="text-right text-gray-300">24h</TableHead>
            <TableHead className="text-right text-gray-300">7d</TableHead>
            <TableHead className="text-right text-gray-300">
              Market Cap
            </TableHead>
            <TableHead className="text-right text-gray-300">Volume</TableHead>
            <TableHead className="text-right text-gray-300">
              Total Supply
            </TableHead>
            <TableHead className="w-[150px] text-center text-gray-300 rounded-r-full">
              7d History
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((coin) => (
            <TableRow
              onClick={() => router.push(`/tokens/${coin.name.toLowerCase()}`)}
              key={coin.id}
              className="border-b border-gray-900 cursor-pointer"
            >
              <TableCell className="w-[50px]">
                <Star className="w-4 h-4 text-gray-500 cursor-pointer hover:text-yellow-500" />
              </TableCell>
              <TableCell>{coin.id}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Image
                    src={coin.logo}
                    alt={coin.name}
                    width={24}
                    height={24}
                    className="mr-2 rounded-full"
                    unoptimized
                  />
                  <span className="font-medium">{coin.name}</span>
                  <span className="ml-2 text-gray-500">{coin.symbol}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                ${coin.price.toLocaleString()}
              </TableCell>
              <TableCell
                className={`text-right ${
                  coin.change1h >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {coin.change1h.toFixed(2)}%
              </TableCell>
              <TableCell
                className={`text-right ${
                  coin.change24h >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {coin.change24h.toFixed(2)}%
              </TableCell>
              <TableCell
                className={`text-right ${
                  coin.change7d >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {coin.change7d.toFixed(2)}%
              </TableCell>
              <TableCell className="text-right">
                ${coin.marketCap.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">
                ${coin.volume24h.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">
                {coin.circulatingSupply.toLocaleString()} {coin.symbol}
              </TableCell>
              <TableCell>
                <SevenDayChart
                  data={coin.history7d}
                  color={coin.change7d >= 0 ? "#95cc2f" : "#dc3737"}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CryptoTable;

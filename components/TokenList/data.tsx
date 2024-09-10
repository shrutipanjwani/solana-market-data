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

const SevenDayChart = dynamic(() => import("./chart"), { ssr: false });

export interface TokensList {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  history7d: { value: number }[];
}

const CryptoTable: React.FC<{ data: TokensList[] }> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <Table className="w-screen">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">1h %</TableHead>
            <TableHead className="text-right">24h %</TableHead>
            <TableHead className="text-right">7d %</TableHead>
            <TableHead className="text-right">Market Cap</TableHead>
            <TableHead className="text-right">Volume(24h)</TableHead>
            <TableHead className="text-right">Circulating Supply</TableHead>
            <TableHead className="w-[150px]">Last 7 Days</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((coin) => (
            <TableRow key={coin.id}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 text-gray-400 cursor-pointer" />
                  {coin.id}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Image
                    src={coin.logo}
                    alt={coin.name}
                    width={24}
                    height={24}
                    className="mr-2 rounded-full"
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
                  coin.change1h >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {coin.change1h.toFixed(2)}%
              </TableCell>
              <TableCell
                className={`text-right ${
                  coin.change24h >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {coin.change24h.toFixed(2)}%
              </TableCell>
              <TableCell
                className={`text-right ${
                  coin.change7d >= 0 ? "text-green-600" : "text-red-600"
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
                  color={
                    coin.change7d >= 0
                      ? "hsl(var(--chart-1))"
                      : "hsl(var(--chart-2))"
                  }
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

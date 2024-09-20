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
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { marketData } from "@/data/markets";
import { useRouter } from "next/navigation";

const MarketsTable: React.FC = () => {
  const router = useRouter();
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
              <TableHead className="text-center text-gray-300 rounded-r-full">
                Confidence
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
                  <TableCell className="font-medium">{exchange.id}</TableCell>
                  <TableCell className="flex items-center">
                    <Image
                      src={exchange.logo}
                      alt={exchange.name}
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    {exchange.name}
                  </TableCell>
                  <TableCell className="text-blue-400">{pair.pair}</TableCell>
                  <TableCell className="text-right">
                    ${pair.price.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ${pair.depthPlus.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ${pair.depthMinus.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ${pair.volume24h.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    {pair.volumePercent.toFixed(2)}%
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        exchange.confidence === "High" ? "default" : "secondary"
                      }
                    >
                      {exchange.confidence}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MarketsTable;

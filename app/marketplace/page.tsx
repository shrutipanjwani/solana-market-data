import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import { marketData } from "@/data/markets";
import { Button } from "@/components/ui/button";

const Marketplace = () => {
  return (
    <>
      <Navbar />
      <Card className="bg-background border-none">
        <CardContent className="py-6 px-28">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">
              Market Data
            </h2>
            <Button
              size="lg"
              className="bg-[#38b2c4] text-gray-900 border-gray-900 hover:text-gray-200 hover:bg-[#151515] rounded-full"
            >
              Connect Wallet
            </Button>
          </div>
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
                  <TableHead className="text-left text-gray-300">
                    PRICE
                  </TableHead>
                  <TableHead className="text-right text-gray-300 rounded-r-full"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {marketData.flatMap((exchangeData) =>
                  exchangeData.pairs.map((pair, index) => (
                    <TableRow
                      key={`${exchangeData.id}-${index}`}
                      className="border-b border-gray-800"
                    >
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
                      <TableCell className="">
                        <Button
                          size="sm"
                          className="bg-[#38b2c4] text-gray-900 px-6 border-gray-900 hover:text-gray-200 hover:bg-[#151515] rounded-full"
                        >
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Marketplace;

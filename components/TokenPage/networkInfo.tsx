"use client";

import React from "react";

import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface NetworkInfoProps {
  tokenAccountAddress: string;
}

const NetworkInfo: React.FC<NetworkInfoProps> = ({ tokenAccountAddress }) => {
  return (
    <div className="mt-8">
      <h3 className="text-sm font-medium text-white mb-2">
        Network Information
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400">Token Account Address</span>
          <a
            href={`https://solscan.io/token/${tokenAccountAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center"
          >
            {tokenAccountAddress.slice(0, 6)}...
            {tokenAccountAddress.slice(-4)}
            <ExternalLinkIcon className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NetworkInfo;

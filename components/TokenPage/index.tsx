import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GlobeIcon,
  FileTextIcon,
  GitHubLogoIcon,
  Share1Icon,
} from "@radix-ui/react-icons";
import Image from "next/image";

import { TokenData } from "@/data/tokenlist";
import NetworkInfo from "./networkInfo";

interface TokenPageProps {
  params: {
    id: string;
  };
  tokenData: TokenData;
}

const TokenPage: React.FC<TokenPageProps> = ({ params, tokenData }) => {
  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Panel */}
          <div className="w-1/4">
            <Card className="bg-background border-none">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Image
                      src="/solana-icon.png"
                      alt={tokenData.name}
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    <h1 className="text-xl text-gray-100 capitalize">
                      <span className="font-bold">{params.id} </span>
                      <span className="text-gray-400 text-sm font-light ml-1">
                        {tokenData.symbol}
                      </span>
                    </h1>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* <Button variant="outline" size="icon">
                      <StarIcon className="h-4 w-4" />
                    </Button> */}
                    <Button
                      size="icon"
                      className="bg-[#151515] text-white border-gray-900 rounded-full"
                    >
                      <Share1Icon className="h-4 w-4 " />
                    </Button>
                  </div>
                </div>

                <div className="mb-6 flex items-center gap-2">
                  <h2 className="text-4xl text-white font-bold">
                    ${tokenData.price.toFixed(2)}
                  </h2>
                  <p
                    className={`text-sm ${
                      tokenData.change24h >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {tokenData.change24h >= 0 ? "▲" : "▼"}{" "}
                    {Math.abs(tokenData.change24h).toFixed(2)}% (1d)
                  </p>
                </div>

                <div className="space-y-4 text-gray-100">
                  <MetricRow
                    label="Market cap"
                    value={`$${formatNumber(tokenData.marketCap)}`}
                    change={0.84}
                    rank={5}
                  />
                  <MetricRow
                    label="Volume (24h)"
                    value={`$${formatNumber(tokenData.volume24h)}`}
                    change={-18.09}
                    rank={7}
                  />

                  <MetricRow
                    label="Total supply"
                    value={`${formatNumber(tokenData.circulatingSupply)} ${
                      tokenData.symbol
                    }`}
                  />
                </div>

                <div className="mt-8">
                  <h3 className="text-sm font-medium text-white mb-2">
                    Official links
                  </h3>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-[#151515] text-gray-200 border-gray-900 rounded-full"
                    >
                      <GlobeIcon className="mr-2 h-4 w-4 text-gray-400" />{" "}
                      Website
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#151515]  text-gray-200 border-gray-900 rounded-full"
                    >
                      <FileTextIcon className="mr-2 h-4 w-4 text-gray-400" />{" "}
                      Whitepaper
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#151515]  text-gray-200 border-gray-900 rounded-full"
                    >
                      <GitHubLogoIcon className="mr-2 h-4 w-4 text-gray-400" />{" "}
                      GitHub
                    </Button>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-medium text-white mb-2">
                    Socials
                  </h3>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-[#151515]  text-gray-200 border-gray-900 rounded-full flex"
                    >
                      <span className="mb-1 mr-1 h-4 w-4">𝕏</span> Twitter
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#151515]  text-gray-200 border-gray-900 rounded-full"
                    >
                      <RedditIcon />
                      Reddit
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#151515]  text-gray-200 border-gray-900 rounded-full"
                    >
                      <TelegramIcon />
                      Telegram
                    </Button>
                  </div>
                </div>

                <NetworkInfo
                  tokenAccountAddress={tokenData.tokenAccountAddress}
                />
              </CardContent>
            </Card>
          </div>

          {/* Right Panel (Chart) */}
          <div className="w-full">
            {/* TODO: Implement chart component */}
            <Card className="h-full bg-background border-gray-800">
              <CardContent className="p-6">
                <p>Chart will be implemented here</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricRow: React.FC<{
  label: string;
  value: string;
  change?: number;
  rank?: number;
  verified?: boolean;
}> = ({ label, value, change, rank }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-400 text-sm">{label}</span>
    <div className="text-right text-xs">
      <span className="font-semibold">{value}</span>
      {change !== undefined && (
        <span
          className={`ml-2 ${change >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {change >= 0 ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
        </span>
      )}
      {rank && <span className="ml-2 text-gray-500">#{rank}</span>}
    </div>
  </div>
);

const formatNumber = (num: number): string => {
  return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
};

const RedditIcon = () => {
  return (
    <svg
      viewBox="0 0 14 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      width="1em"
      className="mr-2 mb-1"
    >
      <path
        fill="currentColor"
        d="M14.6673 7.88119C14.6673 6.93069 13.9451 6.15842 13.0562 6.15842C12.6673 6.15842 12.334 6.27723 12.0562 6.51485C11.0562 5.86139 9.83398 5.44554 8.50065 5.38614L9.16732 3.06931L11.0562 3.54455C11.1118 4.25743 11.6673 4.85149 12.3895 4.85149C13.1118 4.85149 13.7229 4.19802 13.7229 3.42574C13.7229 2.65347 13.1118 2 12.3895 2C11.8895 2 11.4451 2.29703 11.2229 2.77228L9.00065 2.23762C8.83398 2.17822 8.61176 2.29703 8.55621 2.47525L7.72287 5.38614C6.33398 5.44554 4.9451 5.80198 3.9451 6.51485C3.66732 6.27723 3.33398 6.15842 2.9451 6.15842C2.05621 6.15842 1.33398 6.93069 1.33398 7.88119C1.33398 8.47525 1.61176 9.0099 2.00065 9.30693C2.00065 9.42574 2.00065 9.60396 2.00065 9.72277C2.00065 10.9109 2.66732 11.9802 3.83398 12.8119C4.9451 13.5842 6.4451 14 8.00065 14C9.55621 14 11.0562 13.5842 12.1673 12.8119C13.334 11.9802 14.0007 10.9109 14.0007 9.72277C14.0007 9.60396 14.0007 9.48515 14.0007 9.36634C14.3895 9.0099 14.6673 8.47525 14.6673 7.88119ZM12.4451 2.77228C12.7784 2.77228 13.0562 3.06931 13.0562 3.42574C13.0562 3.78218 12.7784 4.07921 12.4451 4.07921C12.1118 4.07921 11.834 3.78218 11.834 3.42574C11.834 3.06931 12.1118 2.77228 12.4451 2.77228ZM5.11176 8.9505C5.11176 8.41584 5.55621 8 6.00065 8C6.50065 8 6.88954 8.47525 6.88954 8.9505C6.88954 9.42574 6.50065 9.90099 6.00065 9.90099C5.55621 9.90099 5.11176 9.48515 5.11176 8.9505ZM10.2229 11.7426C9.77843 12.2178 9.05621 12.4554 8.05621 12.4554C7.05621 12.4554 6.33398 12.2178 5.88954 11.7426C5.72287 11.5644 5.72287 11.3267 5.88954 11.2079C6.05621 11.0297 6.27843 11.0297 6.38954 11.2079C6.72287 11.5644 7.27843 11.7426 8.05621 11.7426C8.83398 11.7426 9.38954 11.5644 9.72287 11.2079C9.88954 11.0297 10.1118 11.0297 10.2229 11.2079C10.334 11.3861 10.334 11.6238 10.2229 11.7426ZM10.0007 9.90099C9.50065 9.90099 9.05621 9.48515 9.05621 8.9505C9.05621 8.41584 9.50065 8 10.0007 8C10.5007 8 10.8895 8.47525 10.8895 8.9505C10.8895 9.42574 10.5007 9.90099 10.0007 9.90099Z"
      ></path>
    </svg>
  );
};

const TelegramIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      width="1em"
      className="mr-2"
    >
      <path
        fill="currentColor"
        d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
      ></path>
    </svg>
  );
};

export default TokenPage;

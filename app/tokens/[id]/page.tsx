import React from "react";
import Navbar from "@/components/Navbar";
import TokenPage from "@/components/TokenPage";
import { notFound } from "next/navigation";
import tokensList from "@/data/tokenlist";

interface TokenPageProps {
  params: {
    id: string;
  };
}

const TokenDetails: React.FC<TokenPageProps> = ({ params }) => {
  const tokenData = tokensList.find(
    (token) => token.name.toLowerCase() === params.id.toLowerCase()
  );

  if (!tokenData) {
    notFound();
  }
  // Prepare the data in the format expected by TokenPage
  const formattedTokenData = {
    ...tokenData,
    priceChange: tokenData.change24h,
    tokenAccountAddress: "So11111111111111111111111111111111111111111", // Example address, replace with actual data
    maxSupply: Infinity,
    fullyDilutedMarketCap: tokenData.marketCap, // Assuming it's the same as market cap, adjust if you have the correct data
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <TokenPage params={params} tokenData={formattedTokenData} />
    </div>
  );
};
export default TokenDetails;

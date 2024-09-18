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

const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const TokenDetails: React.FC<TokenPageProps> = ({ params }) => {
  const tokenData = tokensList.find(
    (token) => generateSlug(token.name) === params.id
  );

  if (!tokenData) {
    notFound();
  }

  const formattedTokenData = {
    ...tokenData,
    priceChange: tokenData.change24h,
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <TokenPage params={params} tokenData={formattedTokenData} />
    </div>
  );
};
export default TokenDetails;

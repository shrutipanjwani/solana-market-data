import ExchangeDetails from "@/components/ExchangePage/details";
import Navbar from "@/components/Navbar";
import { marketData } from "@/data/markets";
import React from "react";

interface ExchangeDetailsPageProps {
  params: {
    id: string;
  };
}

const ExchangeDetailsPage: React.FC<ExchangeDetailsPageProps> = ({
  params,
}) => {
  const exchangeData = marketData.find(
    (exchange) => exchange.name.toLowerCase() === params.id?.toLowerCase()
  );

  if (!exchangeData) {
    return <div>Exchange not found</div>;
  }

  return (
    <>
      <Navbar />
      <ExchangeDetails exchangeData={exchangeData} />
    </>
  );
};

export default ExchangeDetailsPage;

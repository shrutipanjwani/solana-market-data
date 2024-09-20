import Navbar from "@/components/Navbar";
import React from "react";

interface ExchangeDetailsPageProps {
  params: {
    id: string;
  };
}

const ExchangeDetailsPage: React.FC<ExchangeDetailsPageProps> = ({
  params,
}) => {
  return (
    <>
      <Navbar />
      {params.id}
    </>
  );
};

export default ExchangeDetailsPage;

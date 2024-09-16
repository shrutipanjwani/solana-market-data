import React from "react";

interface TokenPageProps {
  params: {
    id: string;
  };
}

const TokenPage: React.FC<TokenPageProps> = ({ params }) => {
  return <div>{params.id}</div>;
};

export default TokenPage;

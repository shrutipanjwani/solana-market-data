"use client";

import React, { useState, useMemo } from "react";
import tokensList from "@/data/tokenlist";
import CryptoTable from "./data";
import CryptoFilterBar from "./filter";

const TokenList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rowsToShow, setRowsToShow] = useState("100");

  const filteredTokens = useMemo(() => {
    return tokensList.filter(
      (token) =>
        token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleRowsChange = (rows: string) => {
    setRowsToShow(rows);
  };

  const displayedTokens = filteredTokens.slice(0, parseInt(rowsToShow));

  return (
    <div className="w-full mx-auto py-4 px-4">
      <CryptoFilterBar
        onSearch={handleSearch}
        onRowsChange={handleRowsChange}
      />
      <CryptoTable data={displayedTokens} />
    </div>
  );
};

export default TokenList;

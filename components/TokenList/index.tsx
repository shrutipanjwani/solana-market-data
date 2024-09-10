import tokensList from "@/data/tokenlist";
import CryptoTable from "./data";

const TokenList = () => {
  return (
    <div className="w-full mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold">
        Today&apos;s Solana Cryptocurrency Prices by Market Cap.
      </h1>
      <p className="text-gray-600 text-sm mt-1">
        The global solana crypto market cap is{" "}
        <span className="text-blue-600">$2.02T</span>, a{" "}
        <span className="text-green-600">1.13%</span> increase over the last
        day.
      </p>
      <br />
      <CryptoTable data={tokensList} />
    </div>
  );
};

export default TokenList;

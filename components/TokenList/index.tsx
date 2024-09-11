import tokensList from "@/data/tokenlist";
import CryptoTable from "./data";
import CryptoFilterBar from "./filter";

const TokenList = () => {
  return (
    <div className="w-full mx-auto py-8 px-4">
      <CryptoFilterBar />
      <CryptoTable data={tokensList} />
    </div>
  );
};

export default TokenList;

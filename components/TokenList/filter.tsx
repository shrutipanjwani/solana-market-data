import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Search from "../Input/search";

interface CryptoFilterBarProps {
  onSearch: (query: string) => void;
  onRowsChange: (rows: string) => void;
}

const CryptoFilterBar: React.FC<CryptoFilterBarProps> = ({
  onSearch,
  onRowsChange,
}) => {
  return (
    <div className="w-full p-4 rounded-lg mb-2 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Button
          variant="secondary"
          className="text-sm font-medium text-white transition-colors px-4 py-2 rounded-full flex items-center border border-gray-800"
        >
          <span className="w-1.5 h-1.5 bg-[#38B2C4] rounded-full mr-2" />
          All tokens
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Search onSearch={onSearch} />
        <span className="text-gray-400">Rows</span>
        <Select onValueChange={onRowsChange} defaultValue="100">
          <SelectTrigger className="w-[70px] bg-[#151515] rounded-full border-none text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-[#151515] border-none text-white">
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CryptoFilterBar;

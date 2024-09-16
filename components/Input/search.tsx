import React from "react";
import { Input } from "@/components/ui/input";
import { JSX, SVGProps } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="w-full max-w-md relative bg-[#151515] rounded-full border-none">
      <SearchIcon className="w-4 h-4 absolute left-4 top-4 text-gray-300 dark:text-gray-300" />
      <Input
        type="search"
        placeholder="Search"
        className="pl-10 h-12"
        onChange={handleSearch}
      />
    </div>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

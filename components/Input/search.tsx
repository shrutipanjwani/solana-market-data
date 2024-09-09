import { Input } from "@/components/ui/input";
import { JSX, SVGProps } from "react";

export default function Search() {
  return (
    <div className="w-full max-w-sm relative">
      <SearchIcon className="w-4 h-4 absolute left-2.5 top-2.5 text-gray-500 dark:text-gray-400" />
      <Input type="search" placeholder="Search" className="pl-8" />
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

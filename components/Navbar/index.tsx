"use client";

import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// import Search from "@/components/Input/search";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

// const TopStatsBar = () => (
//   <div className="text-xs py-2 px-4 flex flex-wrap justify-between items-center">
//     <div className="flex space-x-4">
//       <span>
//         Tokens: <span className="text-blue-600">2.4M+</span>
//       </span>
//       <span>
//         Exchanges: <span className="text-blue-600">790</span>
//       </span>
//       <span>
//         Market Cap: $1.99T <span className="text-blue-600">+3.36%</span>
//       </span>
//       <span>
//         24h Vol: $66.06B <span className="text-blue-600">+66.52%</span>
//       </span>
//     </div>
//     <div className="flex space-x-4">
//       <DropdownMenu>
//         <DropdownMenuTrigger className="outline-none">
//           <Avatar>
//             <AvatarImage src="" alt="avatar" />
//             <AvatarFallback>A</AvatarFallback>
//           </Avatar>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="mr-2">
//           <DropdownMenuLabel>My Account</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>Profile</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   </div>
// );

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        href={href}
        className={`text-sm font-medium text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-full flex items-center
          ${isActive ? "bg-primary border border-gray-800 text-white" : ""}
        `}
      >
        {isActive && (
          <span className="w-1.5 h-1.5 bg-[#CFE731] rounded-full mr-2" />
        )}
        {children}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const MainNavbar = () => (
  <div className="flex justify-between items-center py-3 px-6 bg-primary">
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-[#CFE731] rounded-full"></div>
      <span className="font-medium text-lg text-white">SolanaMarketCap</span>
    </Link>

    <NavigationMenu>
      <NavigationMenuList className="space-x-2">
        <NavItem href="/">Tokens</NavItem>
        <NavItem href="/exchanges">Exchanges</NavItem>
      </NavigationMenuList>
    </NavigationMenu>

    <div className="flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Avatar>
            <AvatarImage src="" alt="avatar" />
            <AvatarFallback className="bg-[#151515] text-white">
              A
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-[#151515] text-white border-gray-900"
        >
          <DropdownMenuLabel>Alisiya Ken</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-900" />
          <DropdownMenuItem className="focus:bg-gray-700">
            Portfolio
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-gray-700">
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" size="icon" className="lg:hidden text-white">
        <Menu className="h-5 w-5" />
      </Button>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="w-full">
    {/* <TopStatsBar /> */}

    <MainNavbar />
  </nav>
);

export default Navbar;

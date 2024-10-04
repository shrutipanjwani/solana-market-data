"use client";

import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "../ui/button";
// import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

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
      {/* <span className="font-medium text-lg text-white">SolanaMarketCap</span> */}
    </Link>

    <NavigationMenu>
      <NavigationMenuList className="space-x-2">
        <NavItem href="/">Tokens</NavItem>
        <NavItem href="/exchanges">Exchanges</NavItem>
        <NavItem href="/marketplace">Marketplace</NavItem>
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
          <DropdownMenuItem className="focus:bg-[#000000] focus:text-white">
            Portfolio
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-[#000000] focus:text-white">
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <Button variant="ghost" size="icon" className="lg:hidden text-white">
        <Menu className="h-5 w-5" />
      </Button> */}
    </div>
  </div>
);

const Navbar = () => (
  <nav className="w-full">
    <MainNavbar />
  </nav>
);

export default Navbar;

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
import Image from "next/image";

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
          <span className="w-1.5 h-1.5 bg-[#38B2C4] rounded-full mr-2" />
        )}
        {children}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const MainNavbar = () => (
  <div className="relative flex justify-between items-center py-3 px-6 bg-primary">
    {/* Logo Section */}
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/logo.png"
        alt="DeFi Depths"
        unoptimized
        width={100}
        height={100}
        className="w-8 h-8"
      />
      <span className="font-medium text-lg text-white">DeFi Depths</span>
    </Link>

    {/* Centered Navigation using absolute positioning */}
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <NavigationMenu>
        <NavigationMenuList className="space-x-4">
          <NavItem href="/">Tokens</NavItem>
          <NavItem href="/exchanges">Exchanges</NavItem>
          <NavItem href="/marketplace">Marketplace</NavItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

    {/* Avatar Section */}
    <div className="flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Avatar>
            <AvatarImage src="" alt="avatar" />
            <AvatarFallback className="bg-[#151515] text-white">A</AvatarFallback>
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
    </div>
  </div>
);

const Navbar = () => (
  <nav className="w-full">
    <MainNavbar />
  </nav>
);

export default Navbar;

import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Search from "@/components/Input/search";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TopStatsBar = () => (
  <div className="text-xs py-2 px-4 flex flex-wrap justify-between items-center">
    <div className="flex space-x-4">
      <span>
        Tokens: <span className="text-blue-600">2.4M+</span>
      </span>
      <span>
        Exchanges: <span className="text-blue-600">790</span>
      </span>
      <span>
        Market Cap: $1.99T <span className="text-blue-600">+3.36%</span>
      </span>
      <span>
        24h Vol: $66.06B <span className="text-blue-600">+66.52%</span>
      </span>
    </div>
    <div className="flex space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Avatar>
            <AvatarImage src="" alt="avatar" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
);

const MainNavbar = () => (
  <div className="flex justify-between items-center py-2 px-4">
    <div className="flex items-center">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl">CoinMarketCap</span>
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/exchanges"
              className={navigationMenuTriggerStyle()}
            >
              Exchanges
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

    <Search />
  </div>
);

const Navbar = () => (
  <nav className="w-full">
    <TopStatsBar />
    <Separator />
    <MainNavbar />
    <Separator />
  </nav>
);

export default Navbar;

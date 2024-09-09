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

const TopStatsBar = () => (
  <div className="text-xs sm:text-sm py-4 px-4 flex flex-wrap justify-between items-center">
    <div className="flex space-x-4">
      <span>Tokens: 2.4M+</span>
      <span>Exchanges: 790</span>
      <span>
        Market Cap: $1.99T <span className="text-green-500">+3.36%</span>
      </span>
      <span>
        24h Vol: $66.06B <span className="text-green-500">+66.52%</span>
      </span>
    </div>
    <div className="flex space-x-4"></div>
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
  </nav>
);

export default Navbar;

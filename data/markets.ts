export interface MarketData {
  id: number;
  name: string;
  logo: string;
  logoOrientation: "horizontal" | "vertical";
  pairs: {
    pair: string;
    price: number;
    depthPlus: number;
    depthMinus: number;
    volume24h: number;
    volumePercent: number;
    href: string;
  }[];
  tradingVolume24h: number;
  spotTradingVolume: string;
  totalAssets: string;
  markets: number;
  coins: number;
  volumeHistory: number[];
  confidence: "High" | "Moderate" | "Low";
  website: string;
  description: string;
  twitterHandle?: string;
}

export const marketData: MarketData[] = [
  {
    id: 1,
    name: "Phoenix",
    logo: "/Phoenix_Logo.svg",
    logoOrientation: "vertical",
    pairs: [
      {
        pair: "SOL/USDT",
        price: 132.99,
        depthPlus: 26826373,
        depthMinus: 21858348,
        volume24h: 739504296,
        volumePercent: 4.56,
        href: "",
      },
    ],
    tradingVolume24h: 12978441947,
    spotTradingVolume: "$17,514,161,597.77",
    totalAssets: "$92,886,789,767.25",
    markets: 1653,
    coins: 423,
    volumeHistory: [
      10000000000, 11000000000, 12000000000, 11500000000, 12500000000,
      13000000000, 12978441947,
    ],
    confidence: "High",
    website: "https://www.phoenix.trade",
    description: `Phoenix is a decentralized exchange on the Solana blockchain.`,
    twitterHandle: "@PhoenixTrade", 
  },
  {
    id: 2,
    name: "OpenBook",
    logo: "/Openbook_Logo.svg",
    logoOrientation: "horizontal",
    pairs: [
      {
        pair: "SOL/USDC",
        price: 132.99,
        depthPlus: 5774733,
        depthMinus: 5584918,
        volume24h: 929778555,
        volumePercent: 5.73,
        href: "",
      },
    ],
    tradingVolume24h: 12978441947,
    spotTradingVolume: "$17,514,161,597.77",
    totalAssets: "$92,886,789,767.25",
    markets: 1653,
    coins: 423,
    volumeHistory: [
      10000000000, 11000000000, 12000000000, 11500000000, 12500000000,
      13000000000, 12978441947,
    ],
    confidence: "High",
    website: "https://www.openbook.ag",
    description: `OpenBook is a decentralized exchange on the Solana blockchain.`,
    twitterHandle: "@openbookdex",
  },
];

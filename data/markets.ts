export interface MarketData {
  id: number;
  name: string;
  logo: string;
  pairs: {
    pair: string;
    price: number;
    depthPlus: number;
    depthMinus: number;
    volume24h: number;
    volumePercent: number;
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
}

export const marketData: MarketData[] = [
  {
    id: 1,
    name: "Phoenix",
    logo: "/favicon.png",
    pairs: [
      {
        pair: "SOL/USDT",
        price: 132.99,
        depthPlus: 26826373,
        depthMinus: 21858348,
        volume24h: 739504296,
        volumePercent: 4.56,
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
    website: "https://phoenix.com/",
    description: `Phoenix is a decentralized exchange on the Solana blockchain. It is the world's largest crypto exchange by trading volume, with $76 billion daily trading volume on Binance exchange as of August 2022, and 90 million customers worldwide. The platform has established itself as a trusted member of the crypto space, where users can buy, sell and store their digital assets, as well as access over 350 cryptocurrencies listed and thousands of trading pairs. The Binance ecosystem now comprises of Binance Exchange, Labs, Launchpad, Info, Academy, Research, Trust Wallet, Charity, NFT and more.`,
  },
  {
    id: 2,
    name: "OpenBook",
    logo: "/favicon.png",
    pairs: [
      {
        pair: "SOL/USDC",
        price: 132.99,
        depthPlus: 5774733,
        depthMinus: 5584918,
        volume24h: 929778555,
        volumePercent: 5.73,
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
    website: "https://openbook.com/",
    description: `Openbook is a decentralized exchange on the Solana blockchain. It is the world's largest crypto exchange by trading volume, with $76 billion daily trading volume on Binance exchange as of August 2022, and 90 million customers worldwide. The platform has established itself as a trusted member of the crypto space, where users can buy, sell and store their digital assets, as well as access over 350 cryptocurrencies listed and thousands of trading pairs. The Binance ecosystem now comprises of Binance Exchange, Labs, Launchpad, Info, Academy, Research, Trust Wallet, Charity, NFT and more.`,
  },
];

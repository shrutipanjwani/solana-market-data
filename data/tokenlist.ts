export interface TokenData {
  id: number;
  name: string;
  symbol: string;
  provider: string;
  ticker: string;
  logo: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  history7d: { value: number }[];
  tokenAccountAddress: string;
}

export interface TokensList {
  id: number;
  name: string;
  symbol: string;
  provider: string;
  ticker: string;
  logo: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  history7d: { value: number }[];
  tokenAccountAddress: string;
}

const tokensList: TokensList[] = [
  {
    id: 1,
    name: "Solana",
    symbol: "SOL",
    provider: "COINBASE",
    ticker: "SOLUSD",
    logo: "/solana-icon.png",
    price: 135.99,
    change1h: -0.36,
    change24h: 1.3,
    change7d: -1.05,
    marketCap: 1135943066628,
    volume24h: 31180340178,
    circulatingSupply: 19752443,
    history7d: [
      { value: 57000 },
      { value: 58000 },
      { value: 57500 },
      { value: 56000 },
      { value: 57000 },
      { value: 58000 },
      { value: 57508 },
    ],
    tokenAccountAddress: "So11111111111111111111111111111111111111111",
  },
  {
    id: 2,
    name: "USDC",
    symbol: "USDC",
    provider: "BITSTAMP",
    ticker: "USDCUSD",
    logo: "/usdc-icon.png",
    price: 1,
    change1h: -0.14,
    change24h: 0.9,
    change7d: -3.99,
    marketCap: 284174283145,
    volume24h: 13284573542,
    circulatingSupply: 120326064,
    history7d: [
      { value: 2400 },
      { value: 2450 },
      { value: 2300 },
      { value: 2250 },
      { value: 2300 },
      { value: 2350 },
      { value: 2361 },
    ],
    tokenAccountAddress: "So11111111111111111111111111111111111111111",
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    provider: "COINBASE",
    ticker: "USDTUSD",
    logo: "/usdt-icon.png",
    price: 0.9999,
    change1h: -0.01,
    change24h: -0.06,
    change7d: 0.03,
    marketCap: 118365416127,
    volume24h: 48001383963,
    circulatingSupply: 118369316856,
    history7d: [
      { value: 1.0001 },
      { value: 0.9999 },
      { value: 1.0 },
      { value: 0.9998 },
      { value: 1.0002 },
      { value: 0.9997 },
      { value: 0.9999 },
    ],
    tokenAccountAddress: "So11111111111111111111111111111111111111111",
  },
  {
    id: 4,
    name: "Jupiter Perps LP",
    symbol: "JLP",
    provider: "PYTH",
    ticker: "JLPUSD",
    logo: "/jlp-icon.png",
    price: 3.14,
    change1h: -0.22,
    change24h: 0.2,
    change7d: -0.91,
    marketCap: 75853816588,
    volume24h: 1498647722,
    circulatingSupply: 145934334,
    history7d: [
      { value: 525 },
      { value: 520 },
      { value: 515 },
      { value: 510 },
      { value: 515 },
      { value: 520 },
      { value: 519 },
    ],
    tokenAccountAddress: "So11111111111111111111111111111111111111111",
  },
  {
    id: 5,
    name: "Jupiter",
    symbol: "JUP",
    provider: "BINANCE",
    ticker: "JUPUSDT",
    logo: "/jup-icon.png",
    price: 0.74,
    change1h: -0.67,
    change24h: 1.76,
    change7d: 3.34,
    marketCap: 63648837642,
    volume24h: 1869942380,
    circulatingSupply: 467758322,
    history7d: [
      { value: 130 },
      { value: 132 },
      { value: 134 },
      { value: 133 },
      { value: 135 },
      { value: 137 },
      { value: 136 },
    ],
    tokenAccountAddress: "So11111111111111111111111111111111111111111",
  },
];

export default tokensList;

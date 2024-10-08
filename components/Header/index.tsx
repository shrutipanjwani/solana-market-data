const Header = () => {
  return (
    <div className="w-full mx-auto pt-10 pb-4 px-6">
      <h1 className="text-2xl font-bold">
        Today&apos;s Solana Cryptocurrency Prices by Market Cap
      </h1>
      <p className="text-gray-400 text-sm mt-2 md:mt-1">
        The global solana crypto market cap is{" "}
        <span className="text-blue-600">$2.02T</span>, a{" "}
        <span className="text-green-600">1.13%</span> increase over the last
        day.
      </p>
    </div>
  );
};

export default Header;

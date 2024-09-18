"use client";

import React, { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
  symbol: string;
  provider: string;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({
  provider,
  symbol,
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "${provider}:${symbol}",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "hide_top_toolbar": true,
        "backgroundColor": "rgba(0, 0, 0, 1)",
        "gridColor": "rgba(0, 0, 0, 1)",
        "withdateranges": true,
        "range": "1D",
        "allow_symbol_change": false,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;

    if (container.current) {
      container.current.innerHTML = ""; // Clear previous content
      container.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (container.current) {
        container.current.innerHTML = ""; // Clear content on unmount
      }
    };
  }, [symbol]); // Re-run effect when symbol changes

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
    </div>
  );
};

export default memo(TradingViewWidget);

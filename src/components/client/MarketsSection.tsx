interface Props {
  markets: string[];
}

const marketIcons = [
  "🏛️",
  "🏥",
  "🤝",
  "✈️",
  "🚪",
  "🏦",
  "🌐",
  "₿"
];

export default function MarketsSection({
  markets,
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Target Markets
      </h2>

      <div className="market-grid">

        {markets.map((market, index) => (

          <div
            key={index}
            className="market-card"
          >

            <span className="market-icon">
              {marketIcons[index] || "🌍"}
            </span>

            <h3>
              {market}
            </h3>

          </div>

        ))}

      </div>
    </>
  );
}
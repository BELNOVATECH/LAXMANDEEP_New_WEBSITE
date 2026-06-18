interface Props {
  markets: string[];
  clientId?: string;
}

const qmastersIcons = [
  "🛡️",
  "🏦",
  "🏥",
  "📡",
  "🏢",
  "⚡",
];

const wibioIcons = [
  "🏛️",
  "🏥",
  "🤝",
  "✈️",
  "🚪",
  "🏦",
  "🌐",
  "₿",
];

export default function MarketsSection({
  markets,
  clientId,
}: Props) {
  const icons =
    clientId === "qmasters"
      ? qmastersIcons
      : wibioIcons;

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
              {icons[index] || "🌍"}
            </span>

            <h3>{market}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
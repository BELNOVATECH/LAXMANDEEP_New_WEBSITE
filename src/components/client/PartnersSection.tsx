interface Partner {
  name: string;
  url?: string;
}

interface Props {
  partners: (string | Partner)[];
}

export default function PartnersSection({
  partners,
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Strategic Partners
      </h2>

      <div className="partner-grid">
        {partners.map((partner, index) => {
          const item =
            typeof partner === "string"
              ? { name: partner }
              : partner;

          return item.url ? (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card"
            >
              {item.name}
            </a>
          ) : (
            <div
              key={index}
              className="partner-card"
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </>
  );
}
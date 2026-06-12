interface Props {
  partners: string[];
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
        {partners.map((item, index) => (
          <div
            key={index}
            className="partner-card"
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
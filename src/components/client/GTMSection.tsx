interface Props {
  items: string[];
}

export default function GTMSection({
  items,
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Go To Market Strategy
      </h2>

      <div className="gtm-grid">
        {items.map((item, index) => (
          <div
            key={index}
            className="gtm-card"
          >
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
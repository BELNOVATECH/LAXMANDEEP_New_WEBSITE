interface Props {
  advantages: string[];
}

export default function WhySection({
  advantages,
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Why WiBioCard?
      </h2>

      <div className="why-grid">

        {advantages.map((item, index) => (

          <div
            key={index}
            className="why-card"
          >
            <span>✓</span>
            <p>{item}</p>
          </div>

        ))}

      </div>
    </>
  );
}
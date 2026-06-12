interface Props {
  countries: string[];
}

export default function GlobalReachSection({
  countries,
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Global Reach
      </h2>

      <div className="global-grid">

        {countries.map((country, index) => (

          <div
            key={index}
            className="global-card"
          >
            🌍 {country}
          </div>

        ))}

      </div>

    </>
  );
}
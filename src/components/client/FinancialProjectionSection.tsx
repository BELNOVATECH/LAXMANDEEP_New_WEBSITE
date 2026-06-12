interface Props {
  projections: string[];
}

export default function FinancialProjectionSection({
  projections
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Financial Projections
      </h2>

      <div className="projection-grid">

        {projections.map((item,index)=>(

          <div
            key={index}
            className="projection-card"
          >
            {item}
          </div>

        ))}

      </div>
    </>
  );
}
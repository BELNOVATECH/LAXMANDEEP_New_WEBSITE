interface Props {
  data: string[];
}

export default function MarketOpportunitySection({
  data
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Market Opportunity
      </h2>

      <div className="market-opportunity-grid">

        {data.map((item,index)=>(

          <div
            key={index}
            className="market-opportunity-card"
          >
            {item}
          </div>

        ))}

      </div>
    </>
  );
}
export default function GTMSection() {

  const phases = [
    {
      title: "Phase 1",
      subtitle: "MSP Core",
      value: "$1.5M"
    },

    {
      title: "Phase 2",
      subtitle: "Proof + Distribution",
      value: "$5M"
    },

    {
      title: "Phase 3",
      subtitle: "Exponential Scale",
      value: "$12-15M"
    }
  ];

  return (
    <>
      <h2 className="section-title">
        Go To Market Strategy
      </h2>

      <div className="gtm-grid">

        {phases.map((phase,index)=>(

          <div
            key={index}
            className="gtm-card"
          >
            <span>{phase.title}</span>

            <h3>{phase.subtitle}</h3>

            <p>{phase.value}</p>
          </div>

        ))}

      </div>
    </>
  );
}
export default function CompetitorComparison() {

  const rows = [
    {
      feature: "Biometric Smart Card",
      wibiocard: "✓",
      thales: "✕",
      idemia: "✕"
    },

    {
      feature: "Blockchain Voting",
      wibiocard: "✓",
      thales: "✕",
      idemia: "✕"
    },

    {
      feature: "MFA Platform",
      wibiocard: "✓",
      thales: "✓",
      idemia: "✓"
    },

    {
      feature: "Digital Asset Custody",
      wibiocard: "✓",
      thales: "✕",
      idemia: "✕"
    },

    {
      feature: "Global Patent Portfolio",
      wibiocard: "✓",
      thales: "✓",
      idemia: "✓"
    },

    {
      feature: "Multiple Use Cases",
      wibiocard: "✓",
      thales: "✕",
      idemia: "✕"
    }
  ];

  return (
    <>
      <h2 className="section-title">
        Competitor Comparison
      </h2>

      <div className="comparison-wrapper">

        <table className="comparison-table">

          <thead>

            <tr>
              <th>Feature</th>
              <th>WiBioCard</th>
              <th>Thales</th>
              <th>IDEMIA</th>
            </tr>

          </thead>

          <tbody>

            {rows.map((row, index) => (

              <tr key={index}>

                <td>{row.feature}</td>
                <td>{row.wibiocard}</td>
                <td>{row.thales}</td>
                <td>{row.idemia}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}
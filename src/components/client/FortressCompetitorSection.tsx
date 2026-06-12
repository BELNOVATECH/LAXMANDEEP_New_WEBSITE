export default function FortressCompetitorSection() {

  const rows = [
    ["Pax8","Marketplace Only","Full Enablement OS"],
    ["Guardz","SMB Security","White Label Platform"],
    ["Acronis","Backup Focused","Open Marketplace"],
    ["ConnectWise","Tool Focused","Revenue Infrastructure"]
  ];

  return (
    <>
      <h2 className="section-title">
        Competitive Advantage
      </h2>

      <div className="comparison-wrapper">

        <table className="comparison-table">

          <thead>
            <tr>
              <th>Competitor</th>
              <th>Limitation</th>
              <th>Fortress Advantage</th>
            </tr>
          </thead>

          <tbody>

            {rows.map((row,index)=>(

              <tr key={index}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}
interface Props {
  partners: string[];
}

export default function EcosystemSection({
  partners,
}: Props) {

  return (
    <>
      <h2 className="section-title">
        Strategic Partnership Ecosystem
      </h2>

      <div className="ecosystem-grid">

        <div className="ecosystem-card">

          <h3>Manufacturing</h3>

          <div>CardLab</div>
          <div>Partitalia</div>

        </div>

        <div className="ecosystem-card">

          <h3>Technology</h3>

          <div>Betacom</div>
          <div>Nexid</div>

        </div>

        <div className="ecosystem-card">

          <h3>Security</h3>

          <div>Futurae</div>
          <div>Vaultavo</div>

        </div>

        <div className="ecosystem-card">

          <h3>Hardware</h3>

          <div>HID Global</div>
          <div>Techboard</div>
          <div>Ambiq</div>
          <div>OctoLab</div>

        </div>

      </div>
    </>
  );
}
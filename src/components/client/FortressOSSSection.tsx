interface Props {
  steps: string[];
}

export default function FortressOSSSection({
  steps,
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Fortress Enablement OS
      </h2>

      <div className="os-grid">

        <div className="os-card">
          <span>01</span>
          <h3>READY</h3>
          <p>
            Pre-integrated cybersecurity vendors,
            automation and provisioning.
          </p>
        </div>

        <div className="os-arrow">→</div>

        <div className="os-card">
          <span>02</span>
          <h3>SET</h3>
          <p>
            Configure pricing, packaging and
            white-label deployment instantly.
          </p>
        </div>

        <div className="os-arrow">→</div>

        <div className="os-card">
          <span>03</span>
          <h3>SELL</h3>
          <p>
            Monetize services immediately through
            MSP and distributor channels.
          </p>
        </div>

      </div>
    </>
  );
}
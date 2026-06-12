export default function EconomicsSection() {
  return (
    <>
      <h2 className="section-title">
        Fortress Economics
      </h2>

      <div className="economics-grid">

        <div className="economics-card">
          <span>Traditional MSP</span>
          <h3>$900K</h3>
          <p>Annual Cost</p>
        </div>

        <div className="economics-card highlight">
          <span>Fortress Platform</span>
          <h3>$232K</h3>
          <p>Annual Cost</p>
        </div>

        <div className="economics-card success">
          <span>Cost Savings</span>
          <h3>$628K+</h3>
          <p>73% Reduction</p>
        </div>

        <div className="economics-card growth">
          <span>Revenue Expansion</span>
          <h3>$1.8M</h3>
          <p>4x Growth Factor</p>
        </div>

      </div>
    </>
  );
}
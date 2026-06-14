import "./clients.css";
import Navbar from "../../components/navbar/navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
export default function Clients() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="clients-page">

        <div className="clients-hero">

          <span>GLOBAL PARTNERSHIPS</span>

          <h1>
            Strategic Clients &
            <br />
            Intelligence Network
          </h1>

          <p>
            Building a future powered by cybersecurity,
            artificial intelligence, digital identity,
            financial intelligence and global innovation.
          </p>

        </div>

        <div className="premium-client-card fortress">

          <div className="client-left">

            <img
              src="/fortress.png"
              alt="Fortress"
            />

          </div>

          <div className="client-right">

            <span>Cyber Security Platform</span>

            <h2>Fortress Cyber</h2>

            <p>
              Advanced cybersecurity monetization ecosystem
              helping MSPs, MSSPs and enterprises scale
              security operations globally.
            </p>

            <div className="mini-stats">

              <div>$2.1T Market</div>
              <div>150K+ MSPs</div>
              <div>4X Growth</div>

            </div>

            <button
              onClick={() =>
                navigate("/client/fortress")
              }
            >
              Explore Partnership
            </button>

          </div>

        </div>

        <div className="premium-client-card wibiocard">

          <div className="client-left">

            <img
              src="/wibiocard.png"
              alt="WiBioCard"
            />

          </div>

          <div className="client-right">

            <span>Identity Technology</span>

            <h2>WiBioCard</h2>

            <p>
              Enterprise authentication and identity
              verification solutions helping organizations
              secure digital access and credentials.
            </p>

            <div className="mini-stats">

              <div>Identity Tech</div>
              <div>Authentication</div>
              <div>Enterprise Security</div>

            </div>

            <button
              onClick={() =>
                navigate("/client/wibiocard")
              }
            >
              Explore Partnership
            </button>

          </div>

        </div>
<div className="premium-client-card qmasters">

  <div className="client-left">

    <img
      src="/qmasters.png"
      alt="QMasters Cyber Security Services"
    />

  </div>

  <div className="client-right">

    <span>Cyber Security & SIEM Integration</span>

    <h2>QMasters Cyber Security Services</h2>

    <p>
      International cybersecurity consulting and integration
      company specializing in SIEM, SOAR, SOC operations,
      cloud security, endpoint protection, network security,
      threat intelligence, and security automation.
    </p>

    <div className="mini-stats">

      <div>Founded 2015</div>
      <div>Global Reach</div>
      <div>SIEM / SOAR</div>

    </div>

 <button
  onClick={() =>
    navigate("/client/qmasters")
  }
>
  View Partnership
</button>

  </div>

</div>
        <div className="partnership-section">

          <h2>Partnership Highlights</h2>

          <div className="highlight-grid">

            <div>
              <h1>150K+</h1>
              <p>MSPs Supported</p>
            </div>

            <div>
              <h1>2</h1>
              <p>Strategic Clients</p>
            </div>

            <div>
              <h1>Global</h1>
              <p>Technology Reach</p>
            </div>

            <div>
              <h1>24/7</h1>
              <p>Innovation Focus</p>
            </div>

          </div>

        </div>

      </section>
    <Footer />
    </>
  );
}
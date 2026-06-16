import "./home.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaGlobe,
  FaChartLine,
  FaShieldHalved,
  FaArrowRight,
} from "react-icons/fa6";

export default function Home() {
  const ecosystemRef = useRef<HTMLElement | null>(null);

  const scrollToEcosystem = () => {
    ecosystemRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="home-page">

        {/* HERO */}

        <section className="hero-section">
          <div className="particle p1"></div>
<div className="particle p2"></div>
<div className="particle p3"></div>
<div className="particle p4"></div>

          <div className="hero-glow hero-glow-1"></div>
          <div className="hero-glow hero-glow-2"></div>

          <div className="hero-left">

            <span className="hero-badge">
              AI • FINANCE • INTELLIGENCE
            </span>

            <h1>
  Intelligence.
  <br />
  Finance.
  <br />
  Future.
</h1>
<div className="hero-live">
  <span></span>
  Global Intelligence Network Active
</div>

            <p>
              LaxmanDeep Financial Services Pvt Ltd is creating
              a powerful ecosystem where Finance, Artificial
              Intelligence, FinTech Innovation and Global
              Intelligence work together to unlock limitless
              opportunities.
            </p>

            <div className="hero-buttons">

<button
  className="primary-btn"
  onClick={scrollToEcosystem}
>
  Explore Ecosystem
</button>

              <button className="secondary-btn">
                Watch Vision
              </button>

            </div>

          </div>

          <div className="hero-right">

            <div className="hero-image-card">

              <div className="floating-ring"></div>

              <img
                src="/123.png"
                alt="123"
              />

            </div>

          </div>

        </section>

        {/* AI STATS */}

        <section className="stats-section">

          <div className="stat-card">
            <h2>18K+</h2>
            <p>Global Followers</p>
          </div>

          <div className="stat-card">
            <h2>16k+</h2>
            <p>Strategic Connections</p>
          </div>

          <div className="stat-card">
            <h2>24/7</h2>
            <p>AI Intelligence</p>
          </div>

          <div className="stat-card">
            <h2>150+</h2>
            <p>Global Reach</p>
          </div>

        </section>

        {/* ABOUT */}

        <section className="vision-section">

          <div className="section-title">

            <span>WHO WE ARE</span>

            <h2>
              More Than Financial Services
            </h2>

          </div>

          <div className="vision-grid">

            <div className="vision-card">
              <FaChartLine />
              <h3>Finance</h3>

              <p>
                Strategic investment planning,
                wealth creation and financial growth.
              </p>
            </div>

            <div className="vision-card">
              <FaBrain />
              <h3>Artificial Intelligence</h3>

              <p>
                Intelligent analytics,
                predictive systems and automation.
              </p>
            </div>

            <div className="vision-card">
              <FaGlobe />
              <h3>Global Intelligence</h3>

              <p>
                Market research,
                forecasting and strategic insights.
              </p>
            </div>

          </div>

        </section>

        {/* ECOSYSTEM */}

       <section
  className="ecosystem-section"
  ref={ecosystemRef}
>

          <div className="section-title">

            <span>OUR ECOSYSTEM</span>

            <h2>
              Three Organizations.
              One Vision.
            </h2>

          </div>

          <div className="ecosystem-flow">

           <div className="eco-card ">

              <img
                src="/laxmandeep-logo.png"
                alt=""
              />

              <h3>
                LaxmanDeep Financial Services
              </h3>

            </div>

            <div className="flow-line"></div>

            <div className="eco-card">

              <img
                src="/swiss-laxmandeep.png"
                alt=""
              />

              <h3>
                Swiss LaxmanDeep AI FINTECH
              </h3>

            </div>

            <div className="flow-line"></div>

            <div className="eco-card">

              <img
                src="/wia-global.png"
                alt=""
              />

              <h3>
                World Intelligence Agency
              </h3>

            </div>

          </div>

        </section>

        {/* COMMAND CENTER */}

        <section className="command-section">

          <div className="section-title">

            <span>AI COMMAND CENTER</span>

            <h2>
              Core Capabilities
            </h2>

          </div>

          <div className="command-grid">

            <div className="command-card">
              <FaChartLine />
              <h3>Investment Advisory</h3>

              <p>
                AI-driven investment insights.
              </p>
            </div>

            <div className="command-card">
              <FaShieldHalved />
              <h3>Risk Management</h3>

              <p>
                Intelligent risk monitoring.
              </p>
            </div>

            <div className="command-card">
              <FaBrain />
              <h3>Predictive Analytics</h3>

              <p>
                Future-focused financial intelligence.
              </p>
            </div>

            <div className="command-card">
              <FaGlobe />
              <h3>Global Research</h3>

              <p>
                Worldwide strategic intelligence.
              </p>
            </div>

          </div>

        </section>

        {/* CEO MESSAGE */}

        <section className="ceo-section">

          <div className="ceo-image">

            <img
              src="/ceo.jpg"
              alt="CEO"
            />

          </div>

          <div className="ceo-content">

            <span>MESSAGE FROM CEO</span>

            <h2>
              Building A Future Powered
              By Trust & Intelligence
            </h2>

            <p>
              Our mission is to create a global ecosystem
              where innovation, finance, intelligence and
              opportunity work together to generate
              sustainable prosperity.
            </p>

            <h4>
              Lakshumaiah Nanubala
            </h4>

            <small>
              Founder & CEO
            </small>

          </div>

        </section>

        {/* TIMELINE */}

        <section className="timeline-section">

          <div className="section-title">

            <span>OUR JOURNEY</span>

            <h2>
              Growth Timeline
            </h2>

          </div>

          <div className="timeline">

            <div className="timeline-item">
              <h3>2024</h3>
              <p>LaxmanDeep Founded</p>
            </div>

            <div className="timeline-item">
              <h3>2025</h3>
              <p>Swiss AI FINTECH Launch</p>
            </div>

            <div className="timeline-item">
              <h3>2026</h3>
              <p>World Intelligence Agency</p>
            </div>

            <div className="timeline-item">
              <h3>Future</h3>
              <p>Global Expansion</p>
            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="cta-section">

          <h2>
            Ready To Shape The Future?
          </h2>

          <p>
            Join our ecosystem and unlock
            limitless opportunities.
          </p>

<button
  className="primary-btn"
  onClick={() => navigate("/contact")}
>
  Get Started
  <FaArrowRight />
</button>
        </section>

      </main>

      <Footer />
    </>
  );
}
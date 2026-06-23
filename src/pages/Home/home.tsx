import "./home.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { FaUserTie } from "react-icons/fa";
import {
  FaBrain,
  FaGlobe,
  FaChartLine,
  FaShieldHalved,
  FaArrowRight,
} from "react-icons/fa6";
import {  useState } from "react";


export default function Home() {
  const [showMilindDocs, setShowMilindDocs] = useState(false);
  const ecosystemRef = useRef<HTMLElement | null>(null);

  const scrollToEcosystem = () => {
    
    ecosystemRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
const navigate = useNavigate();
const [showVideo, setShowVideo] = useState(false);
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

<button
  className="secondary-btn"
  onClick={() => setShowVideo(true)}
>
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

{showVideo && (
  <div
    className="vision-modal"
    onClick={() => setShowVideo(false)}
  >
    <div
      className="vision-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="vision-close"
        onClick={() => setShowVideo(false)}
      >
        ×
      </button>

      <video
        autoPlay
        controls
        playsInline
        className="vision-video"
      >
        <source src="/vision.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
)}
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

        {/* STRATEGIC PARTNERS */}

{/* STRATEGIC PARTNERS */}

<section className="partner-network-section">

  <div className="section-title">
    <span>GLOBAL PARTNERS</span>
    <h2>Strategic Leadership Network</h2>
  </div>

  <p className="partner-network-subtitle">
    Collaborating with global business leaders, investors,
    consultants and market-entry specialists to build an
    international ecosystem of intelligence, innovation
    and financial growth.
  </p>

  <div className="partner-network-grid">

    {/* Partner 1 */}

    <div className="partner-network-card">

<div className="partner-network-avatar">
  <img
    src="/abdul-wali.jpg"
    alt="Abdul Wali Marwat"
  />
</div>

      <h3 className="partner-network-name">
        Abdul Wali Marwat
      </h3>

      <div className="partner-network-role">
        Afghanistan Market Entry & Strategic Partner
      </div>

      <p className="partner-network-desc">
        Specialist in mining, logistics, healthcare,
        trade and foreign investment opportunities
        across Afghanistan.
      </p>

      <a
        href="https://www.linkedin.com/in/abdul-wali-marwat-34720915"
        target="_blank"
        rel="noopener noreferrer"
        className="partner-network-linkedin-btn"
      >
        View LinkedIn
      </a>

    </div>

    {/* Partner 2 */}

    <div className="partner-network-card">

<div className="partner-network-avatar">

<img src="/gregoryingles.jpg" alt="Gregory Ingles" />

</div>

      <h3 className="partner-network-name">
        Gregory Ingles
      </h3>

      <div className="partner-network-role">
        Chairman, World dBank Corp
      </div>

      <p className="partner-network-desc">
        Global technology executive and financial
        innovation leader with extensive experience
        in digital banking and enterprise growth.
      </p>

      <a
        href="https://www.linkedin.com/in/gregory-ingles-4b4b565"
        target="_blank"
        rel="noreferrer"
        className="partner-network-linkedin-btn"
      >
        View LinkedIn
      </a>
<a
  href="/gregory-ingles-letter.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="partner-network-pdf-btn"
>
  View Chairman's Letter
</a>
    </div>

    {/* Partner 3 */}

    <div className="partner-network-card">
<div className="partner-network-avatar">
<img src="/michaelatkins.jpg" alt="Michael Atkins" />
</div>

      <h3 className="partner-network-name">
        Michael Atkins
      </h3>

      <div className="partner-network-role">
        Chairman & CEO, AMAXVEN
      </div>

      <p className="partner-network-desc">
        Executive advisor to boards, investors and
        enterprises with expertise in finance,
        governance and global strategy.
      </p>

      <a
        href="https://www.linkedin.com/in/mikeatkins08"
        target="_blank"
        rel="noreferrer"
        className="partner-network-linkedin-btn"
      >
        View LinkedIn
      </a>
      <a
  href="/michael-atkins-agreement.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="partner-network-pdf-btn"
>
  View Appointment Letter
</a>

    </div>

    {/* Partner 4 */}

    <div className="partner-network-card">

      <div className="partner-network-avatar">
        <img src="/dr-gary-s.jpg" alt="Dr. Gary S." />
      </div>

      <h3 className="partner-network-name">
        Dr. Gary S.
      </h3>

      <div className="partner-network-role">
        Chairman & Chief Executive, Swiss Capital Group
      </div>

      <p className="partner-network-desc">
        Finance and fintech leader with expertise in
        banking, digital assets and global partnerships.
      </p>

      <a
        href="https://www.linkedin.com/in/drgarypsum/"
        target="_blank"
        rel="noreferrer"
        className="partner-network-linkedin-btn"
      >
        View LinkedIn
      </a>
      <a
  href="/Dr-Gary-Sum-MOU.pdf"
  target="_blank"
  rel="noreferrer"
  className="partner-network-pdf-btn"
>
  View Strategic MOU
</a>

    </div>
<div className="partner-network-card">

  <div className="partner-network-avatar">
    <img
      src="/milind-kshirsagar.jpg"
      alt="Milind Kshirsagar"
    />
  </div>

  <h3 className="partner-network-name">
    Milind Kshirsagar
  </h3>

  <div className="partner-network-role">
    Founder & Chairman, TiruBaa Technologies
  </div>

  <p className="partner-network-desc">
    Global technology entrepreneur with 45+ years of
    experience across IT, telecom, education technology,
    renewable energy and international business expansion
    in more than 30 countries.
  </p>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noreferrer"
    className="partner-network-linkedin-btn"
  >
    View LinkedIn
  </a>
  <button
  className="partner-network-pdf-btn"
  onClick={() => setShowMilindDocs(true)}
>
  View Portfolio
</button>


</div>
  </div>

</section>
{/* TEAM MEMBERS */}

<section className="team-wall-section">

  <div className="section-title">
    <span>OUR PEOPLE</span>
    <h2>Global Team Members</h2>
  </div>

  <p className="team-wall-subtitle">
    Dedicated professionals contributing to our growing
    international ecosystem.
  </p>

  <div className="team-wall-grid">

    <div className="team-wall-card">Alessandro Martinelli</div>
    <div className="team-wall-card">Amenyo Setordzie</div>
    <div className="team-wall-card">Anupam Upadhyay</div>
    <div className="team-wall-card">Didi Q</div>
    <div className="team-wall-card">Dr. Kutay Mutdogan</div>
    <div className="team-wall-card">Jayanth Kumar</div>
    <div className="team-wall-card">Muskan</div>
    <div className="team-wall-card">Rajesh Kaul</div>
    <div className="team-wall-card">Tal Tetivski</div>
    <div className="team-wall-card">Vikas</div>

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
              <p>Swiss LaxmanDeep AI FINTECH Launch</p>
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
        return (
  <>
    <Navbar />

    <main className="home-page">

      {/* All sections */}

      <section className="cta-section">
        ...
      </section>

      {/* 👇 MILIND MODAL HERE */}

{showMilindDocs && (
  <div
    className="docs-modal"
    onClick={() => setShowMilindDocs(false)}
  >
    <div
      className="docs-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Milind Kshirsagar Portfolio</h3>

      <a
        href="/tirubaa-goldmine-overview.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tirubaa Goldmine Overview
      </a>

      <a
        href="/offline-digital-education-infrastructure.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Offline Education Infrastructure
      </a>

      <a
        href="/north-east-learning-initiative.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        North-East Learning Initiative
      </a>

      <a
        href="/ttom-awareness-program.pptx"
        target="_blank"
        rel="noopener noreferrer"
      >
        TTOM Awareness Program
      </a>
    </div>
  </div>
)}

    </main>

    <Footer />
  </>
);

      </main>

      <Footer />
    </>
  );
}
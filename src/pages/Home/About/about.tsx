import "./about.css";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
export default function About() {
  return (
    <>
    <Navbar />
    
    <section className="about-section" id="about">

      <div className="bg-glow glow1"></div>
      <div className="bg-glow glow2"></div>

      <div className="about-header">
        <span>ABOUT LAXMANDEEP</span>

        <h2>
          Empowering Businesses Through
          <br />
          Financial Intelligence &
          Future Innovation
        </h2>

        <p>
          LaxmanDeep Financial Services Pvt Ltd is a next-generation financial
          institution focused on investment advisory, wealth management,
          business growth strategies, and global financial opportunities.
          We combine financial expertise, innovation, and emerging technologies
          to create sustainable growth for businesses and investors worldwide.
        </p>
      </div>

      <div className="about-content">

        <div className="vision-card glass-card">
          <img
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
            alt="AI Finance"
          />

          <div className="card-content">
            <h3>AI-Powered Financial Vision</h3>

            <p>
              Leveraging intelligent analytics and market insights to create
              smarter investment opportunities and long-term wealth generation.
            </p>
          </div>
        </div>

        <div className="vision-card glass-card">
          <img
            src="https://images.unsplash.com/photo-1559526324-593bc073d938"
            alt="Global Network"
          />

          <div className="card-content">
            <h3>Global Investment Network</h3>

            <p>
              Connecting entrepreneurs, institutions, and investors through
              strategic partnerships and international opportunities.
            </p>
          </div>
        </div>

      </div>

      <div className="future-section">

        <div className="future-left">
          <span>OUR PURPOSE</span>

          <h2>
            Creating A Financial Ecosystem
            For The Next Generation
          </h2>

          <p>
            Our mission is not only to provide financial services but to build
            a future where innovation, trust, technology, and financial
            empowerment work together to create lasting prosperity.
          </p>

          <button>Explore Our Vision</button>
        </div>

        <div className="future-right">

          <div className="stat-card glass-card">
            <h1>18K+</h1>
            <p>Professional Followers</p>
          </div>

          <div className="stat-card glass-card">
            <h1>500+</h1>
            <p>Business Connections</p>
          </div>

          <div className="stat-card glass-card">
            <h1>Global</h1>
            <p>Investment Vision</p>
          </div>

          <div className="stat-card glass-card">
            <h1>24/7</h1>
            <p>Client Support</p>
          </div>

        </div>

      </div>

    </section>
    <Footer />
      </>

  );
}
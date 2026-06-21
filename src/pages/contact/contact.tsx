import "./contact.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">

        <div className="contact-left">

          <span>CONTACT US</span>

          <h1>
            Three Organizations.
            <br />
            One Vision.
            <br />
            Infinite Possibilities.
          </h1>

          <p>
            Whether you're an investor, entrepreneur, institution,
            or strategic partner, our ecosystem is designed to help
            you unlock new opportunities through financial intelligence,
            AI innovation, and global strategic insights.
          </p>

          <div className="contact-cards">

            <div className="info-card">
              <h3>Email</h3>
              <a href="mailto:info@laxmandeep.com">info@laxmandeep.com</a>
            </div>

<div className="info-card">
  <h3>Phone</h3>

  <a
    href="tel:+919640080880"
    className="contact-link"
  >
    +91 96400 80880
  </a>
</div>

<div className="info-card">
  <h3>Registered Office</h3>

  <p>
    D.No. 1-18 ,
    <br />
    D Gollapalli,
    <br />
    Vontimitta,
    <br />
    Kadapa District,
    <br />
    Andhra Pradesh - 516213,
    <br />
    India
  </p>
</div>

<div className="info-card">
  <h3>CEO LinkedIn</h3>

  <a
    href="https://www.linkedin.com/in/lakshumaiah-nanubala-5b7baa23a"
    target="_blank"
    rel="noreferrer"
    className="contact-link"
  >
    Connect With CEO
  </a>
</div>

          </div>

        </div>

        <div className="contact-right">

          <div className="glass-form">

            <h2>Send Us A Message</h2>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Company Name"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project or investment goals..."
            />

            <button>
              Submit Inquiry
            </button>

          </div>

        </div>

      </section>

      <section className="ecosystem-section">

        <h2>Our Global Ecosystem</h2>

        <div className="ecosystem-grid">

          <div className="eco-card">
            <img
              src="/laxmandeep-logo.png"
              alt="LaxmanDeep"
            />

            <h3>
              LaxmanDeep Financial Services Pvt Ltd
            </h3>

            <p>
              Investment advisory, wealth creation,
              portfolio optimization and business growth.
            </p>
          </div>

          <div className="eco-card">
            <img
              src="/swiss-laxmandeep.png"
              alt="Swiss LaxmanDeep"
            />

            <h3>
              Swiss LaxmanDeep AI FINTECH Pvt Ltd
            </h3>

            <p>
              AI-powered financial technology,
              automation and intelligent analytics.
            </p>
          </div>

          <div className="eco-card">
            <img
              src="/wia-global.png"
              alt="WIA Global"
            />

            <h3>
              World Intelligence Agency Global
            </h3>

            <p>
              Business intelligence, research,
              strategic forecasting and global insights.
            </p>
          </div>

        </div>

      </section>
      <Footer />
    </>
  );
}
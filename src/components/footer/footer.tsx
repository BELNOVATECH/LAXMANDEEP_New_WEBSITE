import "./footer.css";

import {
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="lxd-footer">

      <div className="lxd-footer-container">

        {/* BRAND */}

        <div className="lxd-footer-brand">

          <h2>LAXMANDEEP</h2>

          <p>
            Engineering Financial Futures Through
            AI-Powered Wealth Intelligence and
            Global Intelligence Ecosystems.
          </p>

          <div className="lxd-footer-contact">

            <a href="mailto:info@laxmandeep.com">
              <FaEnvelope />
              <span>info@laxmandeep.com</span>
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              <span>+91 99999 99999</span>
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="lxd-footer-links">

          <h4>Quick Links</h4>

          <Link to="/">Home</Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/ai-intelligence">
            AI Intelligence
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

        {/* ECOSYSTEM */}

        <div className="lxd-footer-links">

          <h4>Our Ecosystem</h4>

          <Link to="/services">
            LaxmanDeep Financial Services
          </Link>

          <Link to="/services">
            Swiss LaxmanDeep AI FINTECH
          </Link>

          <Link to="/services">
            World Intelligence Agency
          </Link>

          <Link to="/services">
            Fortress Cyber
          </Link>

        </div>

        {/* CONTACT INFO */}

        <div className="lxd-footer-links">

          <h4>Contact Info</h4>

          <p>📍 Hyderabad, Telangana, India</p>

          <p>📧 info@laxmandeep.com</p>

          <p>📞 +91 99999 99999</p>

          <p>🌐 Global Intelligence Network</p>

        </div>

      </div>

      {/* SOCIALS */}

      <div className="lxd-footer-social">

        <a
          href="https://www.linkedin.com/in/lakshumaiah-nanubala-5b7baa23a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>

        <a href="mailto:info@laxmandeep.com">
          <FaEnvelope />
        </a>

        <a href="#">
          <FaInstagram />
        </a>

        <a href="#">
          <FaYoutube />
        </a>

        <a href="#">
          <FaXTwitter />
        </a>

      </div>

      {/* BOTTOM */}

      <div className="lxd-footer-bottom">

        <p>
          © 2026 LAXMANDEEP. All Rights Reserved.
        </p>

        <div className="lxd-footer-policies">

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms & Conditions
          </Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
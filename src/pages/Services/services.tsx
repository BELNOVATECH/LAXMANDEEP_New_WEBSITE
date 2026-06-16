import { useState } from "react";
import "./services.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import {
  FaChartLine,
  FaRobot,
  FaGlobe,
  FaShieldHalved,
  FaBrain,
  FaChartPie,
  FaArrowRight,
} from "react-icons/fa6";

const services = [
{
  id: 1,
  title: "LaxmanDeep Financial Services",
  subtitle: "FLAGSHIP DIVISION",
  image: "/laxmandeep-logo.png",

  description:
    "LaxmanDeep Financial Services provides wealth management, investment advisory, portfolio optimization, strategic financial planning, risk assessment, and long-term wealth creation solutions. Our mission is to empower investors and enterprises with intelligent financial strategies driven by data, research, and market intelligence.",

  offers: [
    {
      icon: <FaChartLine />,
      title: "Investment Advisory",
      desc: "Expert financial guidance backed by research and market intelligence.",
    },
    {
      icon: <FaChartPie />,
      title: "Portfolio Optimization",
      desc: "Diversified portfolio strategies focused on sustainable growth.",
    },
    {
      icon: <FaShieldHalved />,
      title: "Risk Management",
      desc: "Protecting capital through intelligent planning and risk controls.",
    },
    {
      icon: <FaBrain />,
      title: "Financial Planning",
      desc: "Comprehensive strategies for individuals and enterprises.",
    },
    {
      icon: <FaChartLine />,
      title: "Capital Growth",
      desc: "Long-term investment strategies for wealth generation.",
    },
    {
      icon: <FaShieldHalved />,
      title: "Financial Security",
      desc: "Building resilient financial foundations for the future.",
    },
  ],

benefits: [
"Open Source Intelligence",
"Geopolitical Monitoring",
"Global Risk Assessment",
"Strategic Decision Support",
"Cyber Threat Intelligence",
"International Research Collaboration",
"Verified Intelligence Frameworks",
"24/7 Intelligence Monitoring",
],
stats: [
{ value: "500+", label: "Research Publications" },
{ value: "100+", label: "Countries Monitored" },
{ value: "24/7", label: "Intelligence Operations" },
{ value: "99%", label: "Data Verification" },
],
},

{
  id: 2,
  title: "Swiss LaxmanDeep AI FinTech",
  subtitle: "AI • FINTECH • INNOVATION",
  image: "/swiss-laxmandeep.png",

  description:
    "Swiss LaxmanDeep AI FinTech is building the next generation of financial intelligence infrastructure through Artificial Intelligence, Predictive Analytics, Cybersecurity, Biometric Authentication, and Intelligent Automation. We aim to create secure, scalable, and future-ready financial ecosystems that transform data into strategic investment decisions.",

  offers: [
    {
      icon: <FaRobot />,
      title: "AI Financial Intelligence",
      desc: "Advanced AI systems for financial analysis and decision-making.",
    },
    {
      icon: <FaBrain />,
      title: "Predictive Analytics",
      desc: "Machine learning models that forecast future market opportunities.",
    },
    {
      icon: <FaShieldHalved />,
      title: "Biometric Security",
      desc: "Identity protection and authentication technologies.",
    },
    {
      icon: <FaShieldHalved />,
      title: "Cybersecurity Infrastructure",
      desc: "Enterprise-grade protection for financial systems.",
    },
    {
      icon: <FaChartLine />,
      title: "Smart Investing",
      desc: "Data-driven investment intelligence powered by AI.",
    },
    {
      icon: <FaRobot />,
      title: "Financial Automation",
      desc: "Automated workflows and intelligent decision systems.",
    },
  ],

  benefits: [
    "AI-Powered Insights",
    "Predictive Market Intelligence",
    "Biometric Authentication",
    "Cybersecurity Frameworks",
    "Financial Automation",
    "Future-Ready FinTech Solutions",
    "Secure Digital Infrastructure",
    "Global Financial Intelligence",
  ],

  stats: [
    { value: "50+", label: "AI Models" },
    { value: "98%", label: "Prediction Accuracy" },
    { value: "24/7", label: "Automation" },
    { value: "150+", label: "Global Reach" },
  ],
},

{
  id: 3,
  title: "World Intelligence Agency",
subtitle: "GLOBAL INTELLIGENCE • RESEARCH • ANALYTICS",
  image: "/wia-global.png",

  description:
"World Intelligence Agency (WIA) is a global intelligence, research, and strategic analytics organization that transforms complex data into actionable intelligence. Leveraging Artificial Intelligence, Open-Source Intelligence (OSINT), Economic Research, Geopolitical Analysis, Blockchain Verification, and Advanced Data Systems, WIA delivers trusted insights that empower governments, enterprises, institutions, investors, and global stakeholders to make informed strategic decisions.",

offers: [
{
  icon: <FaGlobe />,
  title: "Open Source Intelligence (OSINT)",
  desc: "Collecting and analyzing publicly available information for strategic insights.",
},
{
  icon: <FaBrain />,
  title: "Geopolitical Intelligence",
  desc: "Monitoring global political developments, risks, and opportunities.",
},
{
  icon: <FaShieldHalved />,
  title: "Cyber Threat Intelligence",
  desc: "Identifying emerging cyber risks and digital security threats.",
},
{
  icon: <FaChartLine />,
  title: "Global Risk Assessment",
  desc: "Evaluating economic, political, and operational risks worldwide.",
},
{
  icon: <FaGlobe />,
  title: "International Research Network",
  desc: "Connecting researchers, analysts, and institutions globally.",
},
{
  icon: <FaBrain />,
  title: "Strategic Intelligence Reports",
  desc: "Delivering actionable reports for decision-makers and investors.",
},
],

  benefits: [
    "Transparent Data Flows",
    "Real-Time Strategic Insights",
    "AI-Driven Intelligence",
    "Blockchain Verification",
    "Cross-Border Coordination",
    "Economic Monitoring",
    "Global Intelligence Networks",
    "Decentralized Trust Systems",
  ],

  stats: [
    { value: "100+", label: "Research Reports" },
    { value: "50+", label: "Countries Covered" },
    { value: "24/7", label: "Monitoring" },
    { value: "99%", label: "Data Reliability" },
  ],
},
];
const technologies = [
  "Artificial Intelligence",
  "Machine Learning",
  "Predictive Analytics",
  "Blockchain Technology",
  "Cloud Infrastructure",
  "Cybersecurity",
  "Biometric Authentication",
  "Financial Intelligence",
  "Strategic Intelligence",
  "Economic Intelligence",
  "Data Transparency",
  "Automation Systems",
  "Open Source Intelligence (OSINT)",
"Big Data Analytics",
"Geospatial Intelligence",
"Knowledge Graph Systems",
"Strategic Analytics",
];

const impacts = [
  {
    title: "Finance",
    desc: "Automated global capital flow systems and intelligent investment frameworks.",
  },
  {
    title: "Diplomacy",
    desc: "Real-time intelligence supporting high-level decision making.",
  },
  {
    title: "Trust",
    desc: "Blockchain-backed transparency and verifiable data flows.",
  },
  {
    title: "Research",
    desc: "Global economic intelligence and forecasting systems.",
  },
  {
    title: "Innovation",
    desc: "AI-powered ecosystem development and strategic growth.",
  },
];

const roadmap = [
  {
    year: "2026",
    title: "AI Financial Infrastructure",
  },
  {
    year: "2027",
    title: "Blockchain Intelligence Layer",
  },
  {
    year: "2028",
    title: "Cross-Border Investment Systems",
  },
  {
    year: "2029",
    title: "Global Strategic Intelligence Platform",
  },
  {
    year: "2030",
    title: "Unified Finance + AI + Intelligence Ecosystem",
  },
];
const whyChooseUs = [
  {
    title: "AI-Driven Intelligence",
    desc: "Transforming data into strategic decisions.",
  },
  {
    title: "Blockchain Trust",
    desc: "Transparent and verifiable information systems.",
  },
  {
    title: "Financial Innovation",
    desc: "Future-ready fintech infrastructure.",
  },
  {
    title: "Global Intelligence",
    desc: "Cross-border insights and strategic research.",
  },
  {
    title: "Cybersecurity",
    desc: "Enterprise-grade protection and resilience.",
  },
  {
    title: "Research Excellence",
    desc: "Economic forecasting and intelligence.",
  },
];
export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <>
      <Navbar />

      <section className="services-page">

        {/* HERO */}

        <section className="services-hero">

          <div className="hero-left">

            <span>AI • FINANCE • INTELLIGENCE</span>

            <h1>
              One Ecosystem.
              <br />
              Three Powerful
              <br />
              Organizations.
            </h1>

            <p>
              Discover our integrated ecosystem combining
              Financial Services, Artificial Intelligence,
              FinTech Innovation and Global Intelligence.
            </p>

          </div>

          <div className="hero-right">

            <img
              src="/ai-globe.png"
              alt="AI Globe"
            />

          </div>

        </section>

        {/* SERVICE NAVIGATION */}

        <section className="service-navigation">

          {services.map((service) => (

            <div
              key={service.id}
              className={`service-tab ${
                activeService.id === service.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveService(service)
              }
            >

              <img
                src={service.image}
                alt={service.title}
              />

              <div>

                <h4>{service.title}</h4>

                <span>
                  {service.subtitle}
                </span>

              </div>

            </div>

          ))}

        </section>

        {/* MAIN AI SHOWCASE */}

        <section className="service-showcase">

          <div className="ai-orb"></div>
          <div className="ai-orb ai-orb-two"></div>

          <div className="showcase-left">

            <div className="logo-ring"></div>

            <img
              src={activeService.image}
              alt={activeService.title}
            />

          </div>

          <div className="showcase-right">

            <span>
              {activeService.subtitle}
            </span>

            <h2>
              {activeService.title}
            </h2>

            <p>
              {activeService.description}
            </p>

            <div className="benefits-list">

              {activeService.benefits.map(
                (item) => (
                  <div
                    key={item}
                    className="benefit-item"
                  >
                    <FaArrowRight />
                    {item}
                  </div>
                )
              )}

            </div>

          </div>

        </section>

        {/* WHAT WE OFFER */}

        <section className="offer-section">

          <div className="section-header">

            <span>WHAT WE OFFER</span>

            <h2>
              Services & Capabilities
            </h2>

          </div>

          <div className="offer-grid">

            {activeService.offers.map(
              (offer) => (

                <div
                  key={offer.title}
                  className="offer-card"
                >

                  <div className="offer-icon">
                    {offer.icon}
                  </div>

                  <h3>
                    {offer.title}
                  </h3>

                  <p>
                    {offer.desc}
                  </p>

                </div>
              )
            )}

          </div>

        </section>

        {/* AI METRICS */}

        <section className="metrics-section">

          <div className="section-header">

            <span>LIVE ECOSYSTEM</span>

            <h2>
              Intelligence Metrics
            </h2>

          </div>

          <div className="metrics-grid">

            {activeService.stats.map(
              (stat) => (

                <div
                  key={stat.label}
                  className="metric-card"
                >

                  <h1>
                    {stat.value}
                  </h1>

                  <p>
                    {stat.label}
                  </p>

                </div>
              )
            )}

          </div>

        </section>
        <section className="vision-mission-section">

  <div className="section-header">
    <span>OUR PURPOSE</span>
    <h2>Vision & Mission</h2>
  </div>

  <div className="vision-grid">

    <div className="vision-card">
      <h3>Vision</h3>
<p>
To become the world's most trusted intelligence,
research, and strategic analytics ecosystem,
connecting knowledge, technology, and decision-making
across borders.
</p>
    </div>

    <div className="vision-card">
      <h3>Mission</h3>
<p>
To provide accurate, transparent, and actionable
intelligence through AI, research, analytics,
and global collaboration that empowers organizations
to navigate complexity and create sustainable growth.
</p>
    </div>

  </div>

</section>
<section className="technology-section">

  <div className="section-header">
    <span>TECHNOLOGY STACK</span>
    <h2>Technology Ecosystem</h2>
  </div>

  <div className="tech-grid">

    {technologies.map((tech) => (
      <div
        key={tech}
        className="tech-card"
      >
        {tech}
      </div>
    ))}

  </div>

</section>
<section className="impact-section">

  <div className="section-header">
    <span>GLOBAL IMPACT</span>
    <h2>Strategic Impact</h2>
  </div>

  <div className="impact-grid">

    {impacts.map((item) => (

      <div
        key={item.title}
        className="impact-card"
      >
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>

    ))}

  </div>

</section>
<section className="roadmap-section">

  <div className="section-header">
    <span>FUTURE ROADMAP</span>
    <h2>Roadmap 2030</h2>
  </div>

  <div className="roadmap-grid">

    {roadmap.map((item) => (

      <div
        key={item.year}
        className="roadmap-card"
      >
        <h1>{item.year}</h1>
        <p>{item.title}</p>
      </div>

    ))}

  </div>

</section>

<section className="why-us-section">

  <div className="section-header">
    <span>WHY CHOOSE US</span>
    <h2>Building The Future</h2>
  </div>

  <div className="offer-grid">

    {whyChooseUs.map((item) => (

      <div
        key={item.title}
        className="offer-card"
      >
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>

    ))}

  </div>

</section>

      </section>

      <Footer />
    </>
  );
}
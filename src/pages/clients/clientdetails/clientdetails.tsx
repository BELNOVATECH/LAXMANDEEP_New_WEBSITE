import { useParams } from "react-router-dom";
import FortressDetails from "../fortress/FortressDetails";
import { clients } from "../../../data/client";
import WhySection from "../../../components/client/WhySection";
import ProductsSection from "../../../components/client/ProductsSection";
import PartnersSection from "../../../components/client/PartnersSection";
import SolutionsSection from "../../../components/client/SolutionsSection";
import PatentSection from "../../../components/client/PatentSection";
import EcosystemSection from "../../../components/client/EcosystemSection";
import CompetitorComparison from "../../../components/client/CompetitorComparison";
import GlobalReachSection from "../../../components/client/GlobalReachSection";
import MarketsSection from "../../../components/client/MarketsSection";
export default function ClientDetails() {


  const { id } = useParams();

  const client =
    clients[id as keyof typeof clients];

  if (!client) {
    return <h1>Client Not Found</h1>;
  }
if (id === "fortress") {
  return <FortressDetails />;
}
return (
  <section className="client-page">

    <div className="hero">

      <div className="hero-content">
        <span>{client.category}</span>

        <h1>{client.title}</h1>

        <p>{client.overview}</p>
      </div>

    </div>

    {/* Problem & Solution */}

    <div className="bento-grid">

      <div className="card">
        <h2>Problem</h2>
        <p>{client.problem}</p>
      </div>

      <div className="card ai-card">
        <h2>Solution</h2>
        <p>{client.solution}</p>
      </div>

    </div>

    {/* Benefits */}

    <h2 className="section-title">
      Benefits
    </h2>

    <div className="benefits-grid">

      {client.benefits.map((item, index) => (
        <div
          key={index}
          className="benefit-card"
        >
          {item}
        </div>
      ))}

    </div>

    {/* Products */}

    <ProductsSection
      products={client.products}
    />
<SolutionsSection
  solutions={client.solutions}
/>
<GlobalReachSection
  countries={client.globalReach}
/>
    {/* Markets */}
<MarketsSection
  markets={client.markets}
/>



    {/* Partners */}

    <PartnersSection
      partners={client.partners}
    />

    {/* Patents */}


<EcosystemSection
  partners={client.partners}
/>

<PatentSection
  patents={client.patents}
/>
<WhySection
  advantages={client.advantages}
/>


    {/* Competitors */}



  </section>
);
}
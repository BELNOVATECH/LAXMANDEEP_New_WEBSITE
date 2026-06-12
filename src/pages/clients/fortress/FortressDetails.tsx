import { useNavigate } from "react-router-dom";
import { clients } from "../../../data/client";
import FortressHero from "../../../components/client/FortressHero";
import FortressChallengeSection from "../../../components/client/FortressChallengeSection";
import FortressOSSSection from "../../../components/client/FortressOSSSection";
import EconomicsSection from "../../../components/client/EconomicsSection";
import ExecutionSection from "../../../components/client/ExecutionSection";
import MarketOpportunitySection from "../../../components/client/MarketOpportunitySection";
import FortressBusinessModel from "../../../components/client/FortressBusinessModel";
import GTMSection from "../../../components/client/GTMSection";
import FinancialProjectionSection from "../../../components/client/FinancialProjectionSection";
import TeamSection from "../../../components/client/TeamSection";
import TechnologyValidationSection from "../../../components/client/TechnologyValidationSection";
import ExitVision from "../../../components/client/ExitVision";
export default function FortressDetails() {
  const client = clients.fortress;
  const navigate = useNavigate();
  return (
       
    
    <section className="client-page">
      <button
      className="back-btn"
      onClick={() => navigate(-1)}
    >
      ← Back
    </button>

        
<FortressHero
  title={client.title}
  category={client.category}
  overview={client.overview}
/>
      {/* <FortressHero /> */}

      <FortressChallengeSection
        challenges={client.challenges}
      />

     <FortressOSSSection
  steps={client.osSteps}
/>

      <EconomicsSection />

      <ExecutionSection
        pipeline={client.pipeline}
      />

      <MarketOpportunitySection
        data={client.marketSize}
      />

      <FortressBusinessModel
        models={client.businessModel}
      />

     <GTMSection
  items={client.gtm}
/>

      <FinancialProjectionSection
        projections={client.projections}
      />

      <TeamSection
        team={client.team}
      />

      <TechnologyValidationSection
  validation={client.validation}
/>

      <ExitVision />

    </section>
      
  );
}
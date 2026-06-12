export default function FortressOSSection() {

  const steps = [
    {
      title:"READY",
      items:[
        "Upload Logo",
        "Select Vendors",
        "Set Pricing"
      ]
    },

    {
      title:"SET",
      items:[
        "Launch Marketplace",
        "Automation",
        "Compliance"
      ]
    },

    {
      title:"SELL",
      items:[
        "Client Portal",
        "Billing",
        "Revenue Analytics"
      ]
    }
  ];

  return (
    <>
      <h2 className="section-title">
        Fortress Enablement OS
      </h2>

      <div className="os-grid">

        {steps.map((step,index)=>(

          <div
            key={index}
            className="os-card"
          >

            <h3>{step.title}</h3>

            {step.items.map((item,i)=>(
              <div key={i}>
                ✓ {item}
              </div>
            ))}

          </div>

        ))}

      </div>
    </>
  );
}
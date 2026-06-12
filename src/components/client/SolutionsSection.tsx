interface Solution {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

interface Props {
  solutions: Solution[];
}

export default function SolutionsSection({
  solutions,
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Core Solutions
      </h2>

      <div className="solutions-grid">

        {solutions.map((item, index) => (

          <div
            key={index}
            className="solution-card"
          >

            <span className="solution-tag">
              {item.subtitle}
            </span>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.description}
            </p>

            <div className="feature-grid">

              {item.features.map((feature, i) => (
                <div
                  key={i}
                  className="feature-item"
                >
                  ✓ {feature}
                </div>
              ))}

            </div>

          </div>

        ))}

      </div>
    </>
  );
}
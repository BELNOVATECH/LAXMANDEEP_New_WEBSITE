interface Props {
  validation: string[];
}

export default function TechnologyValidationSection({
  validation,
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Technology Validation
      </h2>

      <div className="validation-grid">
        {validation.map((item, index) => (
          <div
            key={index}
            className="validation-card"
          >
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
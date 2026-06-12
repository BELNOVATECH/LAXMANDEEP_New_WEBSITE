interface Props {
  team: string[];
}

export default function TeamSection({
  team
}: Props) {

  return (
    <>
      <h2 className="section-title">
        Leadership Team
      </h2>

      <div className="services-grid">
        {team.map((member, index) => (
          <div
            key={index}
            className="service-card"
          >
            {member}
          </div>
        ))}
      </div>
    </>
  );
}
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

      <div className="team-grid">

        {team.map((member,index)=>(

          <div
            key={index}
            className="team-card"
          >
            <div className="team-avatar">
              👤
            </div>

            <h3>{member}</h3>
          </div>

        ))}

      </div>
    </>
  );
}
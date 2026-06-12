interface Props {
  challenges: {
    title: string;
    value: string;
  }[];
}

export default function FortressChallengeSection({
  challenges
}: Props) {
  return (
    <>
      <h2 className="section-title">
        The $2.1T Monetization Gap
      </h2>

      <div className="challenge-grid">

        {challenges.map((item,index)=>(

          <div
            key={index}
            className="challenge-card"
          >
            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </div>

        ))}

      </div>
    </>
  );
}
interface Props {
  pipeline: string[];
}

export default function ExecutionSection({
  pipeline
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Execution & Velocity
      </h2>

      <div className="execution-grid">

        {pipeline.map((item,index)=>(

          <div
            key={index}
            className="execution-card"
          >
            {item}
          </div>

        ))}

      </div>
    </>
  );
}
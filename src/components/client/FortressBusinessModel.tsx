interface Props {
  models: string[];
}

export default function FortressBusinessModel({
  models
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Business Model
      </h2>

      <div className="business-model-grid">

        {models.map((item,index)=>(

          <div
            key={index}
            className="business-model-card"
          >
            {item}
          </div>

        ))}

      </div>
    </>
  );
}
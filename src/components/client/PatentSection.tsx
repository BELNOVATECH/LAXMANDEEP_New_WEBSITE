interface Props {
  patents: string[];
}

export default function PatentSection({
  patents,
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Global Patent Portfolio
      </h2>

      <div className="patent-card">

        <div className="patent-header">

          <h3>
            WO/2007/110142
          </h3>

          <span>
            International Patent Protection
          </span>

        </div>

        <div className="patent-grid">

          {patents.map((item, index) => (

            <div
              key={index}
              className="patent-country"
            >
              {item}
            </div>

          ))}

        </div>

      </div>
    </>
  );
}
import ReactCountryFlag from "react-country-flag";

interface Props {
  countries: string[];
}

const countryCodes: Record<string, string> = {
  USA: "US",
  "United States": "US",
  Israel: "IL",
  Europe: "EU",
  "Middle East": "AE",
  "Asia Pacific": "SG",
  Canada: "CA",
  China: "CN",
  Australia: "AU",
  Singapore: "SG",
  Indonesia: "ID",
  Malaysia: "MY",
  Philippines: "PH",
  Vietnam: "VN",
  "South Africa": "ZA",
};

export default function GlobalReachSection({
  countries,
}: Props) {
  return (
    <>
      <h2 className="section-title">
        Global Reach
      </h2>

      <p className="global-subtitle">
        We have skilled professionals and trusted partners worldwide
      </p>

      <div className="countries-marquee">
        <div className="countries-track">

          {[...countries, ...countries].map((country, index) => (
            <div
              key={index}
              className="country-item"
            >
              <div className="flag-wrapper">
                <ReactCountryFlag
                  countryCode={countryCodes[country] || "UN"}
                  svg
                  style={{
                    width: "42px",
                    height: "42px",
                  }}
                />
              </div>

              <span>{country}</span>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
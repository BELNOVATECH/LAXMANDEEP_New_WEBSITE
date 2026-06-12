import "./clientSections.css";

interface Props {
  products: string[];
}

export default function ProductsSection({ products }: Props) {
  return (
    <>
      <h2 className="section-title">
        Product Portfolio
      </h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <div
            key={index}
            className="product-card"
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
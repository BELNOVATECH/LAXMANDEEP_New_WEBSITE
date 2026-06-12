interface Props {
  title: string;
  category: string;
  overview: string;
}

export default function FortressHero({
  title,
  category,
  overview
}: Props) {
  return (
    <div className="hero">
      <div className="hero-content">
        <span>{category}</span>
        <h1>{title}</h1>
        <p>{overview}</p>
      </div>
    </div>
  );
}
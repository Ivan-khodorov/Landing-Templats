export default function Features() {
  const items = ["REACT", "VITE", "SCSS", "A11Y", "ANIM"];
  return (
    <section id="features" className="features preview__content" aria-label="Features">
      {items.map((t) => (
        <div key={t} className="features__item">
          <span className="features__text">{t}</span>
        </div>
      ))}
    </section>
  );
}

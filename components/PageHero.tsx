// Top of an inner page: eyebrow, one H1, a short lede and optional buttons.
export function PageHero({ eyebrow, title, lede, children }: { eyebrow: string; title: string; lede: string; children?: React.ReactNode }) {
  return (
    <section className="hero page-hero">
      <div className="container narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
        {children ? <div className="actions">{children}</div> : null}
      </div>
    </section>
  );
}

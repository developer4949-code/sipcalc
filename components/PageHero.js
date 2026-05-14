export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6">
      <p className="font-bold uppercase tracking-[0.22em] text-electric">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-tight sm:text-6xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-white/68 light:text-slate-600">{description}</p>
    </section>
  );
}

export function PageHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-ink-line/70 bg-ink">
      <div className="container-page py-14 text-center lg:py-20">
        <h1 className="text-3xl font-bold text-cream sm:text-4xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-cream-dim">
          {description}
        </p>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="border-t border-foreground/8 bg-surface px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[40fr_60fr] lg:gap-16">
        <p className="label-caps text-muted lg:pt-2">01 — The Problem</p>
        <h2
          id="problem-heading"
          className="display-serif text-[clamp(1.625rem,2.8vw,2rem)] leading-[1.35] font-normal tracking-[-0.01em] text-foreground"
        >
          In most of the world, getting a usable prosthesis still means custom
          casting, multiple appointments, and a price tag that can hit $10,000 or
          more. For amputees in India, East Africa, Gaza, Ukraine, and dozens of
          other low-resource regions, that combination makes access nearly
          impossible. Even when devices are donated, poor fit means they sit in a
          closet.
        </h2>
      </div>
    </section>
  );
}

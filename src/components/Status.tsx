export function Status() {
  return (
    <section
      aria-labelledby="status-heading"
      className="border-t border-foreground/8 bg-surface px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[560px] text-center">
        <h2
          id="status-heading"
          className="display-serif text-[clamp(1.75rem,3.5vw,2.25rem)] leading-[1.2] font-normal tracking-[-0.01em] text-foreground"
        >
          Mobilis is currently on pause.
        </h2>
        <p className="mt-6 text-[clamp(1rem,1.2vw,1.0625rem)] leading-[1.65] text-foreground/75">
          Active development has slowed while the team considers the
          project&apos;s next chapter. Inquiries from researchers, manufacturers,
          clinicians, and organizations working in global prosthetics access are
          welcome.
        </p>
      </div>
    </section>
  );
}

import { SPEC_ROWS } from "@/lib/constants";

export function Technology() {
  return (
    <section
      id="technology"
      aria-labelledby="technology-heading"
      className="border-t border-foreground/8 bg-surface px-6 py-20 md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[60fr_40fr] lg:gap-16">
          <h2
            id="technology-heading"
            className="display-serif order-2 text-[clamp(1.625rem,2.8vw,2rem)] leading-[1.35] font-normal tracking-[-0.01em] text-foreground lg:order-1"
          >
            A patented socket architecture that adjusts on-body in real time —
            no casting, no waiting. A skin-safe silicone interface with
            engineered pressure distribution to reduce hotspots under load. Rigid
            carbon-fiber-infused prints paired with flexible TPU where compliance
            matters. The full system fits in under five minutes by minimally
            trained staff.
          </h2>
          <p className="label-caps order-1 text-muted lg:order-2 lg:text-right">
            02 — The Technology
          </p>
        </div>

        <div
          className="mx-auto mt-16 flex max-w-[960px] flex-col items-center text-center"
          data-lenis-prevent
        >
          <p className="label-caps mb-5 text-muted">How the socket works</p>
          <video
            controls
            playsInline
            preload="metadata"
            className="w-full bg-black"
            aria-label="Demonstration of how the Mobilis universal-fit socket adjusts and fits on-body"
          >
            <source src="/videos/newdemo.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>

        <dl className="mt-16 border-t border-foreground/12">
          {SPEC_ROWS.map((row) => (
            <div
              key={row.label}
              className="flex items-baseline justify-between gap-6 border-b border-foreground/12 py-5"
            >
              <dt className="mono-label text-muted">{row.label}</dt>
              <dd className="mono-label text-right text-foreground">
                {"href" in row && row.href ? (
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

import { MARQUEE_ITEMS } from "@/lib/constants";
import { Marquee } from "./Marquee";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="bg-surface px-6 py-20 md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="label-caps mb-10 text-muted">03 — The Work</p>
        <h2
          id="work-heading"
          className="display-serif max-w-[680px] text-[clamp(1.25rem,2.2vw,1.375rem)] leading-[1.5] font-normal tracking-[-0.01em] text-foreground"
        >
          Mobilis was developed over several years and more than 300 prototypes
          by founder Arav Bhargava, with collaboration from prosthetists at
          Medical Center Orthotics and Prosthetics, researchers at George Mason
          University, clinicians at Walter Reed National Military Medical Center,
          and a research partnership with Morph Labs in neuroprosthetics —
          alongside direct feedback from amputees throughout the process.
        </h2>

        <Marquee items={[...MARQUEE_ITEMS, ...MARQUEE_ITEMS]} />
      </div>
    </section>
  );
}

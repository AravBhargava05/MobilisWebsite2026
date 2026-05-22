import { FullWidthImage } from "./FullWidthImage";
import { ScaledImage } from "./ScaledImage";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-background">
      <FullWidthImage
        src="/images/prototypes.png"
        alt="A family of Mobilis prototypes from 2022–2024 development, showing iteration across socket designs"
        width={1024}
        height={890}
        priority
        caption="A selection of prototypes — 2022–2024"
      />

      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-14 lg:py-24">
        <div className="flex flex-col justify-between gap-12">
          <p className="label-caps text-muted">Est. 2022 · Based at Harvard College</p>

          <div>
            <h1
              id="hero-heading"
              className="display-serif display-serif-xl max-w-[14ch] text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[0.95] font-normal tracking-[-0.02em] text-foreground"
            >
              A prosthetic socket that fits <em className="italic">anyone.</em>
            </h1>
            <p className="mt-8 max-w-[460px] text-[clamp(1rem,1.4vw,1.1875rem)] leading-[1.55] text-foreground/80">
              Traditional prosthetic sockets cost over $10,000 and require
              multiple appointments with a trained prosthetist. Mobilis is a
              universal-fit socket that costs $40 in materials and can be fitted
              in under five minutes.
            </p>
          </div>

          <p className="label-caps text-muted/80">
            Currently on pause · Scroll ↓
          </p>
        </div>

        <figure className="mx-auto w-full shrink-0 lg:mx-0 lg:w-auto">
          <ScaledImage
            src="/images/exploded.png"
            alt="Exploded view of two Mobilis sockets showing BOA tightening system and carbon-fiber construction in red and blue colorways"
            width={1024}
            height={682}
            maxWidthClass="max-w-[min(100%,360px)] sm:max-w-[400px] lg:max-w-[440px]"
            bgClassName="bg-black px-4 py-5 sm:px-6 sm:py-6"
          />
        </figure>
      </div>
    </section>
  );
}

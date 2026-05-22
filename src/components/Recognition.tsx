import Image from "next/image";
import { PRESS_LINKS } from "@/lib/constants";

export function Recognition() {
  return (
    <section
      id="recognition"
      aria-labelledby="recognition-heading"
      className="border-t border-foreground/8 bg-background px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto flex max-w-[960px] flex-col items-center text-center">
        <p className="label-caps mb-10 text-muted">04 — Recognition</p>

        <h2
          id="recognition-heading"
          className="display-serif max-w-[18ch] text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] font-normal tracking-[-0.02em] text-foreground"
        >
          Top 40, Regeneron Science Talent Search, 2024.
        </h2>

        <p className="mt-6 max-w-xl text-[clamp(1rem,1.3vw,1.0625rem)] leading-[1.6] text-foreground/80">
          $27,000 award. US Patent 12,245,957, granted March 2025.
        </p>

        <ul className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {PRESS_LINKS.map((item) => {
            const previewBg =
              "previewBg" in item ? item.previewBg : "bg-black";
            const previewAspect =
              "previewAspect" in item ? item.previewAspect : "16 / 10";
            const previewFit =
              "previewFit" in item ? item.previewFit : "cover";

            return (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group block overflow-hidden border-2 border-foreground/12 text-left transition-colors hover:border-accent"
              >
                <div
                  className={`relative w-full overflow-hidden ${previewBg}`}
                  style={{ aspectRatio: previewAspect }}
                >
                  <Image
                    src={item.preview}
                    alt={item.previewAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 480px"
                    className={
                      previewFit === "contain"
                        ? "object-contain object-top"
                        : "object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    }
                  />
                </div>
                <p className="mono-label px-4 py-3 text-foreground transition-colors group-hover:text-accent">
                  {item.label}
                </p>
              </a>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

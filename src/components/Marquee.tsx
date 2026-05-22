"use client";

export function Marquee({ items }: { items: string[] }) {
  return (
    <div
      className="mt-16 overflow-hidden border-y border-foreground/10 py-6"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max items-center gap-8">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="display-serif flex shrink-0 items-center gap-8 text-[clamp(1.5rem,3vw,2.5rem)] leading-none font-normal tracking-[0.04em] text-foreground uppercase"
          >
            {item}
            <span className="text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

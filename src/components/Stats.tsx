"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(0);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) {
      setValue(end);
      return;
    }

    let startTime: number | null = null;
    let frameId = 0;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, end, duration, reducedMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

const STATS = [
  {
    display: "cost",
    caption: "per-unit material cost",
    static: false as const,
    content: <CountUp end={40} prefix="$" />,
  },
  {
    display: "time",
    caption: "fitting time",
    static: true as const,
    content: "<5 MIN",
  },
  {
    display: "prototypes",
    caption: "prototypes iterated",
    static: false as const,
    content: (
      <>
        <CountUp end={300} />
        +
      </>
    ),
  },
] as const;

export function Stats() {
  return (
    <section
      aria-label="Key statistics"
      className="border-y border-foreground/8 bg-surface px-6 py-20 md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14 md:gap-20">
        {STATS.map((stat) => (
          <div
            key={stat.display}
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:gap-10 lg:gap-16"
          >
            <p
              aria-hidden="true"
              className="display-serif text-[clamp(5rem,14vw,13.75rem)] leading-[0.85] font-normal tracking-[-0.03em] text-foreground display-serif-xl"
            >
              {stat.content}
            </p>
            <p className="pb-2 text-[clamp(0.875rem,1.2vw,1rem)] font-medium tracking-[0.08em] text-muted uppercase sm:pb-4">
              · {stat.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

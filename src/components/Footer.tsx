const FOOTER_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="bg-deep px-6 pb-10 text-cream md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1440px] border-t border-cream/15 pt-8">
        <div className="grid gap-8 md:grid-cols-3 md:items-center">
          <p className="label-caps text-cream/70">
            Mobilis · Based at Harvard College
          </p>

          <ul className="flex items-center justify-start gap-6 md:justify-center">
            {FOOTER_LINKS.map((link, i) => (
              <li key={link.label} className="flex items-center gap-6">
                <a
                  href={link.href}
                  className="text-sm text-cream/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
                {i < FOOTER_LINKS.length - 1 && (
                  <span aria-hidden="true" className="text-cream/30">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>

          <p className="text-sm text-cream/50 md:text-right">© 2026</p>
        </div>
      </div>
    </footer>
  );
}

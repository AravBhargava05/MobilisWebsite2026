export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="flex min-h-[100svh] flex-col justify-center bg-deep px-6 py-24 text-cream md:px-10 lg:px-14"
    >
      <div className="mx-auto w-full max-w-[640px] text-center">
        <p className="label-caps mb-8 text-cream/55">Get in touch</p>
        <h2 id="contact-heading" className="sr-only">
          Contact Mobilis
        </h2>
        <a
          href="mailto:abhargava@college.harvard.edu"
          className="contact-email inline-block text-[clamp(1.0625rem,2vw,1.375rem)] leading-snug font-normal tracking-[-0.01em] text-cream underline decoration-accent/60"
        >
          abhargava@college.harvard.edu
        </a>
      </div>
    </section>
  );
}

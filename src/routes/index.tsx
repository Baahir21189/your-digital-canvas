import { createFileRoute } from "@tanstack/react-router";

import heroOrb from "../assets/hero-orb.png";
import aboutPortrait from "../assets/about-portrait.png";
import workLumenBank from "../assets/work-lumen-bank.png";
import workKiloStudio from "../assets/work-kilo-studio.png";
import workPulseboard from "../assets/work-pulseboard.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NovaDrop — Creative Developer" },
      { name: "description", content: "Portfolio of NovaDrop, a solo creative developer designing and building digital products." },
      { property: "og:title", content: "NovaDrop — Creative Developer" },
      { property: "og:description", content: "Portfolio of NovaDrop, a solo creative developer designing and building digital products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-cream text-ink min-h-screen antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b-2 border-ink/10 bg-cream/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display text-2xl font-semibold tracking-tight text-ink">
            Nova<span className="text-candy">Drop</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-ink md:flex">
            <a href="#work" className="transition-colors hover:text-candy">Work</a>
            <a href="#about" className="transition-colors hover:text-candy">About</a>
            <a href="#experience" className="transition-colors hover:text-candy">Experience</a>
            <a href="#contact" className="transition-colors hover:text-candy">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border-2 border-ink bg-lime px-4 py-1.5 text-sm font-semibold text-ink shadow-block-sm transition-lift hover-lift"
          >
            Say hi
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        {/* Hero */}
        <section id="top" className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sky px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink">
              <span className="size-2 rounded-full bg-lime"></span> Available for freelance
            </div>
            <h1 className="font-display text-6xl font-semibold leading-[0.95] tracking-tight text-ink md:text-8xl">
              Design that <span className="chrometext">shines</span>,<br />
              code that <span className="italic">ships.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              I'm a solo creative developer building playful, glossy digital products — from first wireframe to final deploy.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="rounded-full border-2 border-ink bg-candy px-6 py-3 font-semibold text-primary-foreground shadow-block-sm transition-lift hover-lift"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="rounded-full border-2 border-ink px-6 py-3 font-semibold text-ink transition-colors hover:bg-cream"
              >
                Let's talk
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="gloss rounded-3xl border-2 border-ink p-6 shadow-block md:p-8">
              <img
                src={heroOrb}
                alt="Glossy chrome orb with candy reflections on a lilac gradient"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-2xl bg-lilac object-cover"
              />
              <div className="mt-4 flex items-center justify-between text-sm font-medium text-ink">
                <span>Nova Reyes</span>
                <span className="rounded-full bg-ink px-2 py-0.5 text-cream">Creative Dev</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Ticker */}
      <div className="border-y-2 border-ink bg-ink py-3 overflow-hidden">
        <div className="marquee-track flex w-max whitespace-nowrap">
          <div className="flex shrink-0 items-center font-display text-xl italic text-cream">
            <span className="mx-6">Design Systems</span>
            <span className="text-candy">✦</span>
            <span className="mx-6">Creative Coding</span>
            <span className="text-lime">✦</span>
            <span className="mx-6">Motion Design</span>
            <span className="text-sky">✦</span>
            <span className="mx-6">Frontend Engineering</span>
            <span className="text-candy">✦</span>
            <span className="mx-6">Brand Identity</span>
            <span className="text-lime">✦</span>
            <span className="mx-6">Prototyping</span>
            <span className="text-sky">✦</span>
          </div>
          <div className="flex shrink-0 items-center font-display text-xl italic text-cream" aria-hidden="true">
            <span className="mx-6">Design Systems</span>
            <span className="text-candy">✦</span>
            <span className="mx-6">Creative Coding</span>
            <span className="text-lime">✦</span>
            <span className="mx-6">Motion Design</span>
            <span className="text-sky">✦</span>
            <span className="mx-6">Frontend Engineering</span>
            <span className="text-candy">✦</span>
            <span className="mx-6">Brand Identity</span>
            <span className="text-lime">✦</span>
            <span className="mx-6">Prototyping</span>
            <span className="text-sky">✦</span>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-5">
        {/* About */}
        <section id="about" className="grid grid-cols-1 gap-10 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <img
              src={aboutPortrait}
              alt="Stylized 3D illustration of a creative developer at a neon-lit desk with a laptop"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl bg-sky/40 object-cover"
            />
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              A little about me
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
              I live in the gap between design and engineering. By day I craft interfaces and by night I stress-test the systems behind them. My work is a mix of pixel-perfect polish and the kind of front-end craft that survives real users.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/75">
              I care about the details most people scroll past — the easing on a hover, the rhythm of a grid, the way a page feels at 2am on a phone.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border-2 border-ink bg-lime p-4 text-center shadow-block-sm">
                <div className="font-display text-3xl font-semibold text-ink">8+</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink/70">Years shipping</div>
              </div>
              <div className="rounded-2xl border-2 border-ink bg-sky p-4 text-center shadow-block-sm">
                <div className="font-display text-3xl font-semibold text-ink">40</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink/70">Projects built</div>
              </div>
              <div className="rounded-2xl border-2 border-ink bg-candy p-4 text-center shadow-block-sm">
                <div className="font-display text-3xl font-semibold text-primary-foreground">∞</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-primary-foreground/80">Ideas brewing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-y-2 border-ink bg-ink py-20">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-cream md:text-5xl">
            Experience
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-3xl border-2 border-cream/20 bg-cream/5 p-6">
              <span className="inline-block rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">2022 — Now</span>
              <h3 className="mt-4 font-display text-2xl text-cream">Principal Creative Dev</h3>
              <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-widest text-sky">NovaDrop Studio</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">
                Running an independent practice building brand sites, product UI and interactive experiences for culture and tech clients.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-cream/20 bg-cream/5 p-6">
              <span className="inline-block rounded-full bg-sky px-3 py-1 text-xs font-semibold text-ink">2019 — 2022</span>
              <h3 className="mt-4 font-display text-2xl text-cream">Senior Frontend Engineer</h3>
              <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-widest text-candy">Meridian Labs</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">
                Shipped design systems, real-time data visualizations and fintech interfaces used by thousands of users daily.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-cream/20 bg-cream/5 p-6">
              <span className="inline-block rounded-full bg-candy px-3 py-1 text-xs font-semibold text-primary-foreground">2016 — 2019</span>
              <h3 className="mt-4 font-display text-2xl text-cream">Independent Developer</h3>
              <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-widest text-lime">Freelance</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">
                Concept-to-launch websites and prototypes for early-stage startups, galleries and independent musicians.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="py-20">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Featured work
            </h2>
            <a
              href="#contact"
              className="text-sm font-semibold text-ink underline decoration-candy decoration-2 underline-offset-4 transition-colors hover:text-candy"
            >
              View all
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <article className="group overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-block transition-lift hover-lift">
              <div className="overflow-hidden">
                <img
                  src={workLumenBank}
                  alt="Glossy neobank mobile banking app UI in candy colors"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full bg-lilac object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold text-ink">Lumen Bank</h3>
                  <span className="rounded-full bg-sky px-2 py-0.5 text-xs font-semibold text-ink">Fintech</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  A friendly neobank with playful motion and a design system that scales across web and iOS.
                </p>
              </div>
            </article>
            <article className="group overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-block transition-lift hover-lift">
              <div className="overflow-hidden">
                <img
                  src={workKiloStudio}
                  alt="3D product configurator interface with a glossy sneaker"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full bg-lime/40 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold text-ink">Kilo Studio</h3>
                  <span className="rounded-full bg-candy px-2 py-0.5 text-xs font-semibold text-primary-foreground">Commerce</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  A real-time 3D sneaker configurator that turns browsing into a tactile, shareable moment.
                </p>
              </div>
            </article>
            <article className="group overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-block transition-lift hover-lift">
              <div className="overflow-hidden">
                <img
                  src={workPulseboard}
                  alt="Dark analytics dashboard with glowing cyan data charts"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full bg-sky/30 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold text-ink">Pulseboard</h3>
                  <span className="rounded-full bg-lime px-2 py-0.5 text-xs font-semibold text-ink">SaaS</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  A live analytics suite with buttery data-viz and a component library built for speed.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <div className="overflow-hidden rounded-[2.5rem] border-2 border-ink bg-gradient-to-br from-sky via-lilac to-candy p-10 text-center shadow-block-lg md:p-16">
            <h2 className="font-display text-5xl font-semibold tracking-tight text-ink md:text-7xl">
              Let's build something <span className="chromeit">shiny</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-ink/70">
              Got a project, a wild idea, or just want to trade notes? My inbox is always open.
            </p>
            <a
              href="mailto:hello@novadrop.studio"
              className="mt-8 inline-block rounded-full border-2 border-ink bg-cream px-8 py-4 text-lg font-semibold text-ink shadow-block-sm transition-lift hover-lift"
            >
              hello@novadrop.studio
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-ink bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-ink/60 md:flex-row">
          <div className="font-display text-xl font-semibold text-ink">
            Nova<span className="text-candy">Drop</span>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-candy">GitHub</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-candy">Dribbble</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-candy">LinkedIn</a>
          </div>
          <div>© 2026 · Made with coffee & chrome</div>
        </div>
      </footer>
    </div>
  );
}

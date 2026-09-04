import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { Reveal } from "@/components/site/Reveal";
import { Typewriter } from "@/components/site/Typewriter";
import { Counter } from "@/components/site/Counter";
import { Marquee } from "@/components/site/Marquee";

import heroOrb from "../assets/hero-orb.png";
import aboutPortrait from "../assets/about-portrait.png";
import workLumenBank from "../assets/work-lumen-bank.png";
import workKiloStudio from "../assets/work-kilo-studio.png";
import workPulseboard from "../assets/work-pulseboard.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NovaDrop — Creative Developer Portfolio" },
      {
        name: "description",
        content:
          "NovaDrop is the portfolio of Nova Reyes, a solo creative developer designing and shipping playful, glossy digital products.",
      },
      { property: "og:title", content: "NovaDrop — Creative Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Selected work, experience and testimonials from Nova Reyes, a solo creative developer who designs and builds digital products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  "Design Systems",
  "✦",
  "Creative Coding",
  "✦",
  "Motion Design",
  "✦",
  "Frontend Engineering",
  "✦",
  "Brand Identity",
  "✦",
  "Prototyping",
  "✦",
];

const techStack = [
  "React",
  "•",
  "TypeScript",
  "•",
  "Tailwind CSS",
  "•",
  "Framer Motion",
  "•",
  "Three.js",
  "•",
  "Node.js",
  "•",
  "Figma",
  "•",
  "GSAP",
  "•",
  "Vite",
  "•",
  "Postgres",
  "•",
];

const projects = [
  {
    title: "Lumen Bank",
    tag: "Fintech",
    tagClass: "bg-sky text-ink",
    image: workLumenBank,
    alt: "Glossy neobank mobile banking app UI in candy colors",
    imageBg: "bg-lilac",
    copy: "A friendly neobank with playful motion and a design system that scales across web and iOS.",
  },
  {
    title: "Kilo Studio",
    tag: "Commerce",
    tagClass: "bg-candy text-primary-foreground",
    image: workKiloStudio,
    alt: "3D product configurator interface with a glossy sneaker",
    imageBg: "bg-lime/40",
    copy: "A real-time 3D sneaker configurator that turns browsing into a tactile, shareable moment.",
  },
  {
    title: "Pulseboard",
    tag: "SaaS",
    tagClass: "bg-lime text-ink",
    image: workPulseboard,
    alt: "Dark analytics dashboard with glowing cyan data charts",
    imageBg: "bg-sky/30",
    copy: "A live analytics suite with buttery data-viz and a component library built for speed.",
  },
];

const testimonials = [
  {
    quote:
      "Nova shipped in six weeks what our last agency scoped for six months — and it looked twice as good.",
    name: "Priya Raman",
    role: "Head of Product, Lumen Bank",
    accent: "bg-sky",
  },
  {
    quote:
      "The configurator became our best marketing asset. Customers share it before they even buy.",
    name: "Tomas Beckett",
    role: "Founder, Kilo Studio",
    accent: "bg-lime",
  },
  {
    quote:
      "Rare combo: a designer's eye and an engineer's discipline. Our design system finally holds up.",
    name: "Ada Nwosu",
    role: "VP Engineering, Pulseboard",
    accent: "bg-lilac",
  },
];

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
            <a href="#testimonials" className="transition-colors hover:text-candy">Praise</a>
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
        <section
          id="top"
          className="grid min-h-[calc(100svh-4rem)] grid-cols-1 items-center gap-10 py-14 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sky px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink"
            >
              <span className="size-2 rounded-full bg-lime"></span> Available for freelance
            </motion.div>
            <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-8xl">
              <Typewriter lines={["Design that shines,", "code that ships."]} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="mt-6 max-w-md text-lg leading-relaxed text-ink/70"
            >
              I'm a solo creative developer building playful, glossy digital products — from first
              wireframe to final deploy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className="rounded-full border-2 border-ink bg-candy px-6 py-3 font-semibold text-primary-foreground shadow-block-sm"
              >
                See the work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className="rounded-full border-2 border-ink px-6 py-3 font-semibold text-ink"
              >
                Let's talk
              </motion.a>
            </motion.div>
          </div>
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="gloss rounded-3xl border-2 border-ink p-6 shadow-block md:p-8"
            >
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
            </motion.div>
          </div>
        </section>
      </main>

      {/* Services ticker */}
      <Marquee
        items={services}
        className="border-y-2 border-ink bg-ink py-3"
        itemClassName="mx-6 font-display text-xl italic text-cream"
      />

      <main className="mx-auto max-w-6xl px-5">
        {/* Featured Work */}
        <section id="work" className="py-20">
          <Reveal className="flex items-end justify-between">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Featured work
            </h2>
            <a
              href="#contact"
              className="text-sm font-semibold text-ink underline decoration-candy decoration-2 underline-offset-4 transition-colors hover:text-candy"
            >
              View all
            </a>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.12}>
                <motion.article
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="group h-full overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-block hover:glow-candy"
                >
                  <div className="overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.alt}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105 ${p.imageBg}`}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl font-semibold text-ink">{p.title}</h3>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${p.tagClass}`}>
                        {p.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.copy}</p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      {/* Tech stack marquee */}
      <div className="border-y-2 border-ink bg-lilac/60 py-4">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink/60">
          Tech stack
        </p>
        <Marquee
          items={techStack}
          reverse
          itemClassName="mx-5 font-sans text-lg font-semibold text-ink"
        />
      </div>

      <main className="mx-auto max-w-6xl px-5">
        {/* About */}
        <section id="about" className="grid grid-cols-1 gap-10 py-20 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <img
              src={aboutPortrait}
              alt="Stylized 3D illustration of a creative developer at a neon-lit desk with a laptop"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl bg-sky/40 object-cover"
            />
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              A little about me
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
              I live in the gap between design and engineering. By day I craft interfaces and by
              night I stress-test the systems behind them. My work is a mix of pixel-perfect polish
              and the kind of front-end craft that survives real users.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/75">
              I care about the details most people scroll past — the easing on a hover, the rhythm of
              a grid, the way a page feels at 2am on a phone.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border-2 border-ink bg-lime p-4 text-center shadow-block-sm">
                <div className="font-display text-3xl font-semibold text-ink">
                  <Counter to={8} suffix="+" />
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink/70">
                  Years shipping
                </div>
              </div>
              <div className="rounded-2xl border-2 border-ink bg-sky p-4 text-center shadow-block-sm">
                <div className="font-display text-3xl font-semibold text-ink">
                  <Counter to={40} />
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink/70">
                  Projects built
                </div>
              </div>
              <div className="rounded-2xl border-2 border-ink bg-candy p-4 text-center shadow-block-sm">
                <div className="font-display text-3xl font-semibold text-primary-foreground">
                  <Counter to={100} suffix="%" />
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-primary-foreground/80">
                  Launched on time
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Experience */}
        <section id="experience" className="border-y-2 border-ink bg-ink py-20">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-cream md:text-5xl">
              Experience
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                period: "2022 — Now",
                chip: "bg-lime text-ink",
                role: "Principal Creative Dev",
                org: "NovaDrop Studio",
                orgClass: "text-sky",
                copy: "Running an independent practice building brand sites, product UI and interactive experiences for culture and tech clients.",
              },
              {
                period: "2019 — 2022",
                chip: "bg-sky text-ink",
                role: "Senior Frontend Engineer",
                org: "Meridian Labs",
                orgClass: "text-candy",
                copy: "Shipped design systems, real-time data visualizations and fintech interfaces used by thousands of users daily.",
              },
              {
                period: "2016 — 2019",
                chip: "bg-candy text-primary-foreground",
                role: "Independent Developer",
                org: "Freelance",
                orgClass: "text-lime",
                copy: "Concept-to-launch websites and prototypes for early-stage startups, galleries and independent musicians.",
              },
            ].map((job, i) => (
              <Reveal key={job.role} delay={i * 0.12}>
                <div className="h-full rounded-3xl border-2 border-cream/20 bg-cream/5 p-6">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${job.chip}`}>
                    {job.period}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-cream">{job.role}</h3>
                  <p className={`mt-1 font-sans text-xs font-semibold uppercase tracking-widest ${job.orgClass}`}>
                    {job.org}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">{job.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Kind words
            </h2>
            <p className="mt-3 max-w-md text-ink/70">
              A few notes from the people I've built with.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.12}>
                <motion.figure
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="flex h-full flex-col justify-between rounded-3xl border-2 border-ink bg-card p-6 shadow-block-sm"
                >
                  <blockquote className="font-display text-lg leading-snug text-ink">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      className={`flex size-10 items-center justify-center rounded-full border-2 border-ink font-display text-sm font-semibold text-ink ${t.accent}`}
                    >
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{t.name}</span>
                      <span className="block text-xs text-ink/60">{t.role}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] border-2 border-ink bg-gradient-to-br from-sky via-lilac to-candy p-10 text-center shadow-block-lg md:p-16">
              <h2 className="font-display text-5xl font-semibold tracking-tight text-ink md:text-7xl">
                Let's build something <span className="chromeit">shiny</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-lg text-ink/70">
                Got a project, a wild idea, or just want to trade notes? My inbox is always open.
              </p>
              <motion.a
                href="mailto:hello@novadrop.studio"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className="mt-8 inline-block rounded-full border-2 border-ink bg-cream px-8 py-4 text-lg font-semibold text-ink shadow-block-sm"
              >
                hello@novadrop.studio
              </motion.a>
            </div>
          </Reveal>
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

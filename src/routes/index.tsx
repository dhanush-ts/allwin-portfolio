import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Sparkles,
  Code2,
  Brain,
  Database,
  Trophy,
  GraduationCap,
  Briefcase,
  MapPin,
  ExternalLink,
  Cpu,
  LineChart,
  ShieldCheck,
  Newspaper,
  Users,
} from "lucide-react";
import profileAsset from "@/assets/profile.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Allwin Joseph — AI & ML Engineer | Portfolio" },
      { name: "description", content: "Allwin Joseph — AI & Data Science undergraduate, ML engineer and backend developer. Projects in NLP, security analytics and predictive systems." },
      { property: "og:title", content: "Allwin Joseph — AI & ML Engineer" },
      { property: "og:description", content: "Portfolio showcasing ML, NLP, GenAI and backend projects by Allwin Joseph." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Allwin Joseph",
          jobTitle: "AI & ML Engineer",
          email: "mailto:allwinjoseph.2605@gmail.com",
          url: "/",
          sameAs: [
            "https://github.com/AllwinJoseph-A",
            "https://www.linkedin.com/in/allwin-joseph-0b03ba291",
          ],
          alumniOf: "Rajalakshmi Engineering College",
        }),
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://github.com/AllwinJoseph-A", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/allwin-joseph-0b03ba291",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "mailto:allwinjoseph.2605@gmail.com", label: "Email", icon: Mail },
];

function Index() {
  return (
    <main id="main" className="relative min-h-screen overflow-x-hidden text-foreground">
      <BackgroundFX />
      <Nav />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}

/* ---------- Background ---------- */
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px]" />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a
          href="#top"
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
            scrolled ? "glass-panel" : ""
          }`}
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span className="tracking-tight">Allwin Joseph</span>
        </a>
        <nav className="hidden md:block">
          <ul className="glass-panel flex items-center gap-1 rounded-full px-2 py-1.5 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Let's Talk <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const reduce = useReducedMotion();
  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-center px-5 pt-32 pb-20">
      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]"
      >
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for SDE & ML roles · 2027
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            <span className="block text-muted-foreground/70 text-2xl sm:text-3xl mb-2 font-sans tracking-wide">
              Hi, I'm
            </span>
            <span className="text-gradient">Allwin Joseph</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
          >
            AI & Data Science undergraduate building intelligent systems
            machine learning, generative AI and scalable backends that turn ideas
            into measurable impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:scale-[1.03]"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#contact"
              className="glass-panel inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Get in Touch
            </a>
            <div className="ml-1 flex items-center gap-2">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass-panel grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted-foreground/70"
          >
            <span>Python</span><span>Machine Learning</span><span>NLP</span>
            <span>FastAPI</span><span>SQL</span><span>Data Analytics</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-accent/30 to-transparent blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-2">
            <img
              src={profileAsset}
              alt="Portrait of Allwin Joseph"
              width={840}
              height={840}
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] ring-1 ring-inset ring-white/10" />
          </div>
          <div className="glass-panel absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm shadow-[var(--shadow-elegant)]">
            <Brain className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">96.7% precision</p>
              <p className="text-xs text-muted-foreground">IDS on NSL-KDD</p>
            </div>
          </div>
          <div className="glass-panel absolute -top-4 -right-4 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm">
            <Trophy className="h-5 w-5 text-accent" />
            <div>
              <p className="font-medium">2× Hackathon Winner</p>
              <p className="text-xs text-muted-foreground">SIH Top 150 (internal)</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------- Reveal helper ---------- */
function Reveal({
  children,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-primary/80">{eyebrow}</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">
          <span className="text-gradient">{title}</span>
        </h2>
        {description && (
          <p className="mt-4 text-muted-foreground">{description}</p>
        )}
      </Reveal>
    </div>
  );
}

/* ---------- About ---------- */
function About() {
  const stats = [
    { value: "3+", label: "Featured Projects" },
    { value: "96.7%", label: "Best Model Precision" },
    { value: "2×", label: "Hackathon Wins" },
    { value: "Top 150", label: "SIH Nationwide" },
  ];
  return (
    <section id="about" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About"
          title="Engineer, builder, perpetual learner"
        />
        <div className="grid gap-8 ">
          <Reveal>
            <div className="glass-panel md:col-span-3 col-span-1 h-full p-8 md:p-10">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm an{" "}
                <span className="text-foreground">AI & Data Science undergraduate</span>{" "}
                at Rajalakshmi Engineering College, Chennai. My work lives at the
                intersection of{" "}
                <span className="text-foreground">machine learning, generative AI</span>{" "}
                and{" "}
                <span className="text-foreground">backend engineering</span>
                turning research-grade ideas into production-ready systems.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                I love hackathons, hard problems, and shipping things that move
                real metrics. Beyond the keyboard I lead teams, speak publicly,
                and translate complex models into clear, persuasive stories.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Problem Solver", "Team Lead", "Public Speaker", "Hackathon Winner"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="md:col-span-2 grid grid-cols-2 gap-4 h-full">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-panel flex flex-col justify-center p-6"
                >
                  <p className="text-3xl text-gradient">{s.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Education ---------- */
function Education() {
  return (
    <section id="education" className="relative px-5 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Education" title="Academic foundation" />
        <Reveal>
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
            <div className="relative">
              <span className="absolute -left-[2rem] md:-left-[2.5rem] grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)]">
                <GraduationCap className="h-3 w-3 text-primary-foreground" />
              </span>
              <div className="glass-panel p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary/80">
                      2023 — 2027 · Expected
                    </p>
                    <h3 className="mt-2 text-2xl tracking-wider">Rajalakshmi Engineering College</h3>
                    <p className="mt-1 text-muted-foreground">
                      B.Tech — Artificial Intelligence & Data Science
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" /> Chennai, Tamil Nadu
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["AI", "Data Science", "Deep Learning", "NLP", "Statistics"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */
function Experience() {
  return (
    <section id="experience" className="relative px-5 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've shipped"
          description="Real teams, real datasets, real outcomes."
        />
        <Reveal>
          <div className="glass-panel relative overflow-hidden p-8 md:p-10">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                  <Briefcase className="h-3.5 w-3.5" /> Internship
                </span>
                <h3 className="mt-4 text-2xl tracking-wider">Data Science Intern</h3>
                <p className="mt-1 text-muted-foreground">
                  Soil Steps · Student-led startup
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">
                  Contributed to data-driven initiatives across the analytics
                  pipeline — from raw data collection through model development
                  to executive-ready insight.
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Data collection & preprocessing",
                    "Exploratory data analysis (EDA)",
                    "ML model development",
                    "Business insight generation",
                    "Data visualization & reporting",
                  ].map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
const PROJECTS = [
  {
    title: "Network Anomaly Detection System",
    tag: "Security Analytics",
    date: "Feb 2026",
    icon: ShieldCheck,
    description:
      "Robust ML-based Intrusion Detection System achieving 96.7% precision on the NSL-KDD dataset, with live packet simulation via Scapy.",
    highlights: [
      "96.7% precision on NSL-KDD",
      "Feature engineering on network traffic",
      "Random Forest, XGBoost, Logistic Regression",
      "Reduced FP rate via tuning & CV",
    ],
    stack: ["Python", "Scikit-Learn", "XGBoost", "Pandas"],
  },
  {
    title: "Fake News Identification via Bi-LSTM",
    tag: "Natural Language Processing",
    date: "Nov 2025",
    icon: Newspaper,
    description:
      "Context-aware news classifier built on a Bidirectional LSTM with custom embeddings, trained over 20,000+ articles.",
    highlights: [
      "Bi-LSTM architecture for context",
      "20,000+ articles preprocessed with NLTK",
      "Custom embedding layers",
      "Factual / biased / satirical classification",
    ],
    stack: ["Python", "TensorFlow", "NLTK", "Keras"],
  },
  {
    title: "Student Performance & Risk Predictor",
    tag: "Ed-Tech Analytics",
    date: "Aug 2025",
    icon: LineChart,
    description:
      "Classification system identifying at-risk students, with actionable intervention strategies to improve retention.",
    highlights: [
      "At-risk student classification",
      "Preprocessing, encoding, normalization",
      "Intervention strategy generation",
      "Statistical performance visualizations",
    ],
    stack: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
  },
];

function Projects() {
  return (
    <section id="projects" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects & case studies"
          description="A short tour of recent builds across ML, NLP and analytics."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const Icon = project.icon;
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-card/40 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      </div>
      <div className="flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-foreground ring-1 ring-white/10">
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          {project.date}
        </span>
      </div>
      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary/80">
        {project.tag}
      </p>
      <h3 className="mt-2 text-xl leading-relaxed tracking-wider">{project.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
      <ul className="mt-5 space-y-2">
        {project.highlights.map((h) => (
          <li
            key={h}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent" />
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
        <a
          href="https://github.com/AllwinJoseph-A"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="h-4 w-4" /> Code
        </a>
        {/* <a
          href="https://github.com/AllwinJoseph-A"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-1.5 text-sm text-primary transition-transform hover:translate-x-0.5"
        >
          Case study <ExternalLink className="h-3.5 w-3.5" />
        </a> */}
      </div>
    </article>
  );
}

/* ---------- Skills ---------- */
const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Languages",
    items: [
      { name: "Python", level: 92 },
      { name: "SQL / MySQL", level: 85 },
      { name: "Java (Basic)", level: 55 },
    ],
  },
  {
    icon: Brain,
    title: "AI / ML",
    items: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 82 },
      { name: "NLP", level: 85 },
      { name: "Generative AI", level: 78 },
    ],
  },
  {
    icon: Cpu,
    title: "Backend",
    items: [
      { name: "FastAPI", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Auth Systems", level: 75 },
    ],
  },
  {
    icon: Database,
    title: "Tools & Data",
    items: [
      { name: "Pandas / NumPy", level: 90 },
      { name: "Scikit-Learn", level: 88 },
      { name: "Power BI", level: 78 },
      { name: "Docker / Git", level: 75 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills"
          title="Tooling & expertise"
          description="The stack I reach for to ship intelligent, reliable systems."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="glass-panel h-full p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-white/10">
                    <g.icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg tracking-wider">{g.title}</h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {g.items.map((s) => (
                    <li key={s.name}>
                      <div className="flex justify-between text-sm">
                        <span>{s.name}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Achievements ---------- */
const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "Winner — Conocithon",
    org: "Park Engineering College, Coimbatore",
    badge: "1st Place",
  },
  {
    icon: Trophy,
    title: "Winner — Codeathon",
    org: "Prathyusha Engineering College, Chennai",
    badge: "1st Place",
  },
  {
    icon: ShieldCheck,
    title: "Smart India Hackathon",
    org: "Top 150 Teams Shortlisted Nationwide",
    badge: "SIH 2024",
  },
  {
    icon: Users,
    title: "Team Leadership",
    org: "Led multi-disciplinary teams across hackathons & projects",
    badge: "Leadership",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Recognition"
          title="Achievements & wins"
          description="A few moments where ideas met execution under pressure."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="group glass-panel relative flex items-center gap-5 overflow-hidden p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-white/10">
                  <a.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="truncate text-lg tracking-wider">{a.title}</h3>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary">
                      {a.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{a.org}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="relative px-5 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something"
          description="Open to internships, collaborations and SDE / ML roles."
        />
        <Reveal>
          <div className="glass-panel relative overflow-hidden p-10 text-center">
            <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
            <p className="relative text-muted-foreground">
              Best way to get a reply is a quick line about what you're building.
            </p>
            <a
              href="mailto:allwinjoseph.2605@gmail.com"
              className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              <Mail className="h-4 w-4" /> allwinjoseph.2605@gmail.com
            </a>
            <div className="relative mt-8 flex justify-center gap-2">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass-panel grid h-11 w-11 place-items-center rounded-full transition-all hover:scale-110 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Allwin Joseph. Crafted with care.</p>
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

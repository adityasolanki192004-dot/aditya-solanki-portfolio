import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  Brain,
  Server,
  Code2,
  Database,
  Cloud,
  Boxes,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const techStack = {
  Programming: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  Frontend: ["HTML", "CSS", "Tailwind CSS", "React.js", "Next.js"],
  Backend: ["Python", "FastAPI", "Flask", "Node.js", "Express.js"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  "Machine Learning": ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "OpenCV", "NLP"],
  DevOps: ["Git", "GitHub", "Docker", "REST APIs"],
  Deployment: ["Vercel", "Render"],
};

const floatingTech = [
  "Python", "Java", "FastAPI", "Flask", "React", "Next.js",
  "Node.js", "Tailwind", "PostgreSQL", "Docker", "GitHub", "ML",
];

const timeline = [
  {
    year: "2023 — Present",
    place: "SRM Institute of Science and Technology",
    degree: "Bachelor of Technology · Computer Science Engineering",
    desc: "Currently pursuing B.Tech in Computer Science Engineering with specialization in AI, Machine Learning, Backend Engineering and Full Stack Development.",
    courses: [
      "Data Structures", "Algorithms", "Operating Systems", "DBMS",
      "Computer Networks", "Machine Learning", "Data Science", "NLP",
      "Software Engineering", "Compiler Design", "Project Management",
    ],
  },
  {
    year: "2022 — 2023",
    place: "Krishna Vidhya Niketan",
    degree: "Higher Secondary · Class XII",
    desc: "Completed Higher Secondary education with Computer Science. Built a strong academic foundation in Mathematics, Computer Science and logical problem solving.",
  },
  {
    year: "2020 — 2021",
    place: "Mount Carmel School",
    degree: "Secondary Education · Class X",
    desc: "Completed Secondary School education while developing a strong interest in computers, programming and technology.",
  },
];

const expertise = [
  {
    icon: Brain,
    title: "AI Engineering",
    desc: "Designing intelligent applications using Machine Learning, Computer Vision, Data Science and Natural Language Processing.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "NLP"],
  },
  {
    icon: Server,
    title: "Backend Architecture",
    desc: "Develop scalable REST APIs, secure authentication systems and high-performance backend services.",
    tags: ["Python", "FastAPI", "Flask", "Java", "Node.js", "Express.js", "JWT"],
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    desc: "Develop responsive and modern web interfaces using React, Next.js and Tailwind CSS.",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    icon: Database,
    title: "Database Systems",
    desc: "Design optimized relational and NoSQL databases for scalable applications.",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    icon: Boxes,
    title: "API Development",
    desc: "Develop secure APIs with authentication, validation, documentation and production-ready architecture.",
    tags: ["REST API", "FastAPI", "Flask", "JWT", "JSON"],
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    desc: "Deploy applications securely with version control, CI/CD and cloud platforms.",
    tags: ["Git", "GitHub", "Docker", "Render", "Vercel"],
  },
];

const projects = [
  {
    n: "01",
    title: "Women Safety AI",
    desc: "An AI-powered women safety application that detects distress gestures using MediaPipe and OpenCV. Automatically triggers emergency alerts, enhances personal safety and enables real-time monitoring.",
    tags: ["Python", "OpenCV", "MediaPipe", "Flask"],
    hasDemo: true,
  },
  {
    n: "02",
    title: "AI Code Review Assistant",
    desc: "An intelligent AI assistant that reviews source code, detects bugs, improves security, provides optimization suggestions and automates code quality analysis.",
    tags: ["Python", "FastAPI", "React", "LLM"],
    hasDemo: true,
  },
  {
    n: "03",
    title: "Healthy Virtual Herbal Garden",
    desc: "An AI-powered medicinal plant recognition system capable of identifying herbs, detecting diseases and providing medicinal information using Machine Learning.",
    tags: ["Python", "Flask", "OpenCV", "Machine Learning"],
    hasDemo: true,
  },
  {
    n: "04",
    title: "Smart Resume Analyzer",
    desc: "An ATS-friendly resume analyzer that evaluates resumes using AI, suggests improvements and calculates resume matching scores.",
    tags: ["React", "Tailwind", "FastAPI", "Python"],
    hasDemo: true,
  },
  {
    n: "05",
    title: "Student Success Analyzer",
    desc: "A Machine Learning application that predicts student academic performance based on historical educational data.",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    hasDemo: false,
  },
  {
    n: "06",
    title: "SafeRouteAI",
    desc: "An intelligent navigation system that recommends safer travel routes using AI and real-time analysis.",
    tags: ["Python", "FastAPI", "React"],
    hasDemo: false,
  },
  {
    n: "07",
    title: "Smart Canteen",
    desc: "A digital food ordering platform allowing students to pre-order meals with secure authentication and efficient order management.",
    tags: ["Flask", "Python", "SQLite"],
    hasDemo: false,
  },
];

const GITHUB = "https://github.com/adityasolanki192004-dot";
const LINKEDIN = "https://www.linkedin.com/in/aditya-solanki-565081207";
const EMAIL = "adityasolanki192004@gmail.com";
const PHONE = "+91 9999885055";

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Resume />
      <Expertise />
      <TechStack />
      <Work />
      <Projects />
      <GitHubCTA />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- Custom Cursor ---------------- */
function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-[100] hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%,-50%) scale(${hover ? 2.6 : 1})`,
        transition: "transform 240ms cubic-bezier(.2,.9,.2,1)",
        mixBlendMode: "difference",
      }}
    >
      <div className="w-3 h-3 rounded-full bg-white" />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "about"],
    ["Journey", "journey"],
    ["Expertise", "expertise"],
    ["Work", "work"],
    ["Contact", "contact"],
  ];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "w-[92%] md:w-auto" : "w-[92%] md:w-auto"
      }`}
    >
      <div className="glass rounded-full px-4 md:px-6 py-3 flex items-center gap-4 md:gap-8 shadow-soft">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold">AS</span>
          <span className="hidden sm:inline text-sm">Aditya Solanki</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {links.map(([l, id]) => (
            <a key={id} href={`#${id}`} className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <a
          href="#contact"
          className="ml-auto md:ml-0 rounded-full bg-foreground text-background px-4 py-2 text-xs font-medium hover:opacity-90 transition"
        >
          Let's Talk
        </a>
      </div>
    </motion.header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const title = "Aditya Solanki";
  return (
    <section ref={ref} id="top" className="relative pt-32 md:pt-40 pb-20 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Floating tech chips */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingTech.map((t, i) => {
          const positions = [
            "top-[15%] left-[6%]", "top-[22%] right-[8%]", "top-[38%] left-[3%]",
            "top-[45%] right-[5%]", "top-[62%] left-[8%]", "top-[70%] right-[10%]",
            "top-[18%] left-[42%]", "top-[80%] left-[35%]", "top-[10%] right-[30%]",
            "top-[55%] right-[28%]", "top-[75%] left-[55%]", "top-[30%] right-[45%]",
          ];
          return (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.05, duration: 0.6 }}
              className={`absolute ${positions[i]} hidden lg:block`}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
                className="glass rounded-full px-4 py-2 text-xs font-medium shadow-soft"
              >
                {t}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-8 shadow-soft"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for Opportunities
        </motion.div>

        <h1 className="font-display text-[15vw] md:text-[9vw] leading-[0.95] tracking-tight mb-6">
          {title.split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.03, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-block"
            >
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-2 mb-8 text-xs md:text-sm text-muted-foreground"
        >
          {["Python Developer", "Java Developer", "AI & ML Engineer", "Full Stack Developer"].map((r) => (
            <span key={r} className="px-3 py-1 rounded-full border border-border bg-white">{r}</span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-4"
        >
          Specialized in Python, Java, AI, Machine Learning, Scalable Systems and Full Stack Development.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground/80 mb-10"
        >
          Computer Science Engineering student passionate about building AI-powered software, scalable backend systems and modern web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <a
            href="#projects"
            className="group rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium flex items-center gap-2 hover:opacity-90 transition"
          >
            Explore Portfolio
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
        
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Story.</SectionLabel>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-10">
          <div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Turning complex problems into{" "}
              <span className="text-primary italic">elegant solutions</span>.
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>I'm Aditya Solanki, currently pursuing a Bachelor of Technology in Computer Science Engineering at SRM Institute of Science and Technology.</p>
            <p>I am passionate about Artificial Intelligence, Machine Learning, Backend Development and Full Stack Engineering. My primary focus is building intelligent software that solves practical problems through automation, scalable architecture and modern technologies.</p>
            <p>I enjoy designing REST APIs, backend systems, AI applications, data-driven solutions and responsive web applications. I believe software should be simple, scalable, secure and user-centric.</p>
            <div className="mt-8 card-soft p-6">
              <Sparkles className="w-5 h-5 text-primary mb-3" />
              <p className="font-display text-2xl text-foreground leading-snug">
                "Creating intelligent software where innovation meets engineering, logic and creativity."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Resume / Journey ---------------- */
function Resume() {
  return (
    <section id="journey" className="py-24 md:py-32 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Journey.</SectionLabel>
        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2" />
          <div className="space-y-14">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative md:grid md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                  <div className="text-xs uppercase tracking-widest text-primary font-medium mb-2">{t.year}</div>
                  <h3 className="font-display text-2xl md:text-3xl">{t.place}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t.degree}</p>
                </div>
                <div className={`pl-12 md:pl-0 mt-4 md:mt-0 ${i % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                  <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
                  {t.courses && (
                    <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "" : "md:justify-end"}`}>
                      {t.courses.map((c) => (
                        <span key={c} className="text-xs px-3 py-1 rounded-full bg-white border border-border">{c}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Expertise ---------------- */
function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Expertise.</SectionLabel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {expertise.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card-soft p-8 group hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-6">
                <e.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl mb-3">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{e.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Tech Stack ---------------- */
function TechStack() {
  return (
    <section className="py-20 md:py-28 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Toolkit.</SectionLabel>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {Object.entries(techStack).map(([cat, items]) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-soft p-6"
            >
              <div className="text-xs uppercase tracking-widest text-primary font-medium mb-4">{cat}</div>
              <div className="flex flex-wrap gap-2">
                {items.map((i) => (
                  <span key={i} className="text-sm px-3 py-1.5 rounded-full bg-secondary border border-border">{i}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Work CTA ---------------- */
function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Work.</SectionLabel>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 card-soft p-10 md:p-16 text-center"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Have a specific requirement?</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">
            I'm open to internships, freelance work, AI projects, backend development and full-stack{" "}
            <span className="text-primary italic">software engineering</span> opportunities.
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-10 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90"
          >
            Start A Conversation <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Selected Work.</SectionLabel>
        <div className="mt-14 space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.05 }}
              className="card-soft p-8 md:p-10 group hover:-translate-y-1 transition-all"
            >
              <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start">
                <div className="font-display text-4xl md:text-5xl text-muted-foreground/40">{p.n}</div>
                <div>
                  <h3 className="font-display text-2xl md:text-4xl mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary border border-border">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex md:flex-col gap-2">
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border bg-white px-4 py-2 text-xs font-medium flex items-center gap-1.5 hover:bg-secondary transition"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                  {p.hasDemo && (
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-foreground text-background px-4 py-2 text-xs font-medium flex items-center gap-1.5 hover:opacity-90"
                    >
                      Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GitHub CTA ---------------- */
function GitHubCTA() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[30px] bg-foreground text-background p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary blur-3xl" />
          </div>
          <div className="relative">
            <Github className="w-10 h-10 mx-auto mb-6 opacity-80" />
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-4">
              Exploring the Full Technical Archive?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Browse all my AI, Machine Learning, Python, Java, Backend and Full Stack projects available on GitHub.
            </p>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-6 py-3 text-sm font-medium hover:opacity-90"
            >
              View All Repositories <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const cards = [
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", value: "aditya-solanki", href: LINKEDIN },
    { icon: Github, label: "GitHub", value: "adityasolanki192004-dot", href: GITHUB },
  ];
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Contact.</SectionLabel>
        <div className="mt-10 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight mb-6">
              Let's build <span className="text-primary italic">digital excellence</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
              I'm always open to internships, freelance opportunities, software engineering roles, AI collaborations and innovative technology projects.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {cards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="card-soft p-5 flex items-center gap-3 hover:-translate-y-0.5 transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                    <c.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="text-sm truncate">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget as HTMLFormElement;
              const data = new FormData(f);
              const subject = encodeURIComponent(String(data.get("subject") || "Portfolio inquiry"));
              const body = encodeURIComponent(
                `From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`
              );
              window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
              setSent(true);
            }}
            className="card-soft p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Name" required />
              <Field name="email" label="Email" type="email" required />
            </div>
            <Field name="subject" label="Subject" required />
            <Field name="message" label="Message" as="textarea" required />
            <button
              type="submit"
              className="w-full rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              {sent ? "Message Ready" : "Transmit Message"} <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name, label, type = "text", as, required,
}: { name: string; label: string; type?: string; as?: "textarea"; required?: boolean }) {
  const cls = "w-full bg-secondary/60 border border-border rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition";
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold">AS</span>
              <div>
                <div className="font-display text-xl">Aditya Solanki</div>
                <div className="text-xs text-muted-foreground">Python · Java · AI · Full Stack</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Creating intelligent software where innovation meets engineering and scalable architecture.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open for Opportunities
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Roles</div>
            <ul className="space-y-2 text-sm">
              <li>Python Developer</li>
              <li>Java Developer</li>
              <li>AI Engineer</li>
              <li>ML Engineer</li>
              <li>Full Stack Developer</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li><a href={`mailto:${EMAIL}`} className="hover:text-primary break-all">{EMAIL}</a></li>
              <li>{PHONE}</li>
              <li className="flex items-center gap-1.5 text-muted-foreground"><MapPin className="w-3.5 h-3.5" /> India</li>
              <li className="flex gap-3 pt-2">
                <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="w-4 h-4" /></a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
                <a href={`mailto:${EMAIL}`} aria-label="Email"><Mail className="w-4 h-4" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© 2026 Aditya Solanki</div>
          <div>Built with React, TanStack Start, Tailwind CSS & Framer Motion.</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3"
    >
      <span className="w-8 h-px bg-foreground" />
      <span className="font-display text-2xl md:text-3xl">{children}</span>
    </motion.div>
  );
}

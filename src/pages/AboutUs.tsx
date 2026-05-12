import { Link } from "react-router-dom";
import HomeNavbar from "@/components/HomeNavbar";
import HomeFooter from "@/components/HomeFooter";
import {
  BookOpen, Users, Globe, Briefcase, MapPin, Target,
  Lightbulb, Rocket, Heart, CheckCircle2, ArrowRight, Sparkles,
} from "lucide-react";

/* ── shared primitives (mirrors Index.tsx) ── */

const MeshBg = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-50 blur-3xl"
      style={{ background: "radial-gradient(circle, rgba(196,181,253,0.55) 0%, rgba(255,255,255,0) 70%)" }} />
    <div className="absolute top-20 -right-32 w-[600px] h-[600px] rounded-full opacity-50 blur-3xl"
      style={{ background: "radial-gradient(circle, rgba(251,191,36,0.35) 0%, rgba(255,255,255,0) 70%)" }} />
    <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-40 blur-3xl"
      style={{ background: "radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(255,255,255,0) 70%)" }} />
    <div className="absolute inset-0 opacity-[0.04]"
      style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }} />
  </div>
);

const SectionEyebrow = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <div className="flex justify-center mb-5">
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-sm ${dark ? "bg-white/5 border-white/10" : "bg-gradient-to-r from-violet-50 via-fuchsia-50 to-amber-50 border-violet-100"}`}>
      <Sparkles className={`w-3 h-3 ${dark ? "text-violet-400" : "text-violet-500"}`} />
      <span className="text-[10px] font-black tracking-[0.22em] uppercase bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
        {children}
      </span>
    </div>
  </div>
);

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">{children}</span>
);

const GradientTextLight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">{children}</span>
);

/* ── sections ── */

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "50+", label: "Live Mentors" },
  { value: "2", label: "Languages" },
  { value: "95%", label: "Job Placement Rate" },
];

const offerings = [
  { icon: BookOpen, title: "Structured Roadmaps", description: "Clear, step-by-step learning paths for beginners — no guessing what to learn next." },
  { icon: Users, title: "Live Mentorship", description: "1:1 sessions with industry professionals who review your code and help you grow faster." },
  { icon: Briefcase, title: "Internship Opportunities", description: "Gain real-world experience through curated internship programs and project assignments." },
  { icon: Rocket, title: "Job-Ready Training", description: "Interview prep, portfolio building, and industry insights to make you stand out." },
  { icon: MapPin, title: "Community-Driven", description: "Join a thriving community of learners, collaborate on projects, and grow your network." },
  { icon: CheckCircle2, title: "Accessible for All", description: "Whether you're a complete beginner or switching careers, our curriculum adapts to you." },
];

const values = [
  { icon: Target, title: "Career-Focused", description: "Every course, project, and mentorship session is designed with one goal — helping you land your first tech job." },
  { icon: Lightbulb, title: "Practical Learning", description: "Forget passive tutorials. You build real projects from day one, gaining experience employers look for." },
  { icon: Globe, title: "Bilingual Platform", description: "Learn in Hindi or English — great education shouldn't have a language barrier." },
  { icon: Heart, title: "Guided Support", description: "Mentors walk alongside you through doubts and code reviews so you never feel stuck." },
];

/* ════════ SECTION 1 — Hero (LIGHT) ════════ */
const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white">
    <MeshBg />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border border-violet-200/80 bg-white/70 text-violet-700 shadow-[0_2px_12px_-4px_rgba(139,92,246,0.25)] backdrop-blur-md">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
          </span>
          Our Story
        </span>
      </div>
      <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl text-gray-900 leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto">
        We're on a mission to make{" "}
        <GradientText>coding accessible</GradientText>{" "}
        for everyone.
      </h1>
      <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
        Velocity Learning bridges the gap between learning and landing a job in tech — through structured roadmaps, live mentorship, and real-world projects.
      </p>
      <Link
        to="/outreach"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
      >
        Get Started <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

/* ════════ SECTION 2 — Stats (DARK) ════════ */
const StatsSection = () => (
  <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-[#08080f]">
    <div className="absolute -top-60 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-900/30 blur-[140px] pointer-events-none" />
    <div className="absolute -bottom-60 right-1/4 w-[600px] h-[600px] rounded-full bg-fuchsia-900/30 blur-[140px] pointer-events-none" />
    <div className="relative max-w-7xl mx-auto">
      <SectionEyebrow dark>By The Numbers</SectionEyebrow>
      <h2 className="text-center font-extrabold text-3xl sm:text-5xl text-white leading-tight tracking-tight mb-14">
        Real impact, <GradientTextLight>real students</GradientTextLight>
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 text-center hover:border-violet-500/30 transition-colors">
            <div className="font-extrabold text-4xl sm:text-5xl bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent mb-2">{s.value}</div>
            <div className="text-gray-400 text-sm font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ════════ SECTION 3 — Who We Are (LIGHT) ════════ */
const WhoWeAreSection = () => (
  <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white">
    <MeshBg />
    <div className="relative max-w-7xl mx-auto">
      <SectionEyebrow>Who We Are</SectionEyebrow>
      <h2 className="text-center font-extrabold text-3xl sm:text-5xl text-gray-900 leading-tight tracking-tight mb-14">
        Turning beginners into{" "}
        <GradientText>job-ready developers</GradientText>
      </h2>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed">
          <p>
            Velocity Learning was born from a simple observation — most coding platforms teach you to code, but very few prepare you for a <strong className="text-gray-900">career</strong>. We set out to change that.
          </p>
          <p>
            We combine structured roadmaps, live mentorship from working professionals, and real-world project experience to give you everything needed to confidently enter the tech industry.
          </p>
          <p>
            With courses available in both <strong className="text-gray-900">Hindi and English</strong>, we break down the language barrier that has kept so many talented learners from reaching their potential.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Our Vision", body: "A world where every aspiring developer, regardless of background or language, can build a meaningful career in technology." },
            { title: "Our Mission", body: "Affordable, practical, and mentor-supported coding education that bridges the gap between learning and industry readiness." },
            { title: "Our Approach", body: "Project-based learning, structured roadmaps, and continuous mentorship — not just pre-recorded videos." },
            { title: "Our Promise", body: "You won't just learn to code. You'll graduate job-ready, portfolio-equipped, and interview-confident." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(124,58,237,0.1)] p-5">
              <div className="text-xs font-black tracking-[0.15em] uppercase text-violet-600 mb-2">{item.title}</div>
              <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ════════ SECTION 4 — What We Offer (DARK) ════════ */
const OfferingsSection = () => (
  <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-[#08080f]">
    <div className="absolute -top-60 right-1/4 w-[600px] h-[600px] rounded-full bg-fuchsia-900/30 blur-[140px] pointer-events-none" />
    <div className="absolute -bottom-60 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-900/30 blur-[140px] pointer-events-none" />
    <div className="relative max-w-7xl mx-auto">
      <SectionEyebrow dark>What We Offer</SectionEyebrow>
      <h2 className="text-center font-extrabold text-3xl sm:text-5xl text-white leading-tight tracking-tight mb-14">
        Everything you need to{" "}
        <GradientTextLight>succeed in tech</GradientTextLight>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {offerings.map((o) => (
          <div key={o.title} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 hover:border-violet-500/30 hover:bg-white/8 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:from-violet-600/30 group-hover:to-fuchsia-600/30 transition-all">
              <o.icon className="w-5 h-5 text-violet-400" />
            </div>
            <div className="font-bold text-white text-base mb-2">{o.title}</div>
            <p className="text-gray-400 text-sm leading-relaxed">{o.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ════════ SECTION 5 — Values (LIGHT) ════════ */
const ValuesSection = () => (
  <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white">
    <MeshBg />
    <div className="relative max-w-7xl mx-auto">
      <SectionEyebrow>Our Values</SectionEyebrow>
      <h2 className="text-center font-extrabold text-3xl sm:text-5xl text-gray-900 leading-tight tracking-tight mb-14">
        Built on principles that{" "}
        <GradientText>actually matter</GradientText>
      </h2>
      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl sm:rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(124,58,237,0.1)] p-6 sm:p-8 flex gap-5 items-start hover:shadow-[0_8px_30px_-8px_rgba(124,58,237,0.2)] transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100 flex items-center justify-center shrink-0">
              <v.icon className="w-6 h-6 text-violet-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg mb-2">{v.title}</div>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">{v.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ════════ SECTION 6 — CTA (LIGHT wrapper + DARK card) ════════ */
const CtaSection = () => (
  <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-b from-white via-violet-50/30 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-600 to-purple-700 p-8 sm:p-14 text-center shadow-[0_40px_80px_-20px_rgba(124,58,237,0.5)]">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="relative">
          <h2 className="font-extrabold text-3xl sm:text-5xl text-white leading-tight tracking-tight mb-4">
            Ready to start your journey?
          </h2>
          <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Join hundreds of students already building their future in tech with Velocity Learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/outreach" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-violet-700 font-bold text-sm hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-lg">
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all">
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ════════ PAGE ════════ */
const AboutUs = () => (
  <div className="min-h-screen bg-white text-gray-900 antialiased selection:bg-violet-200 selection:text-violet-900">
    <HomeNavbar />
    <HeroSection />
    <StatsSection />
    <WhoWeAreSection />
    <OfferingsSection />
    <ValuesSection />
    <CtaSection />
    <HomeFooter />
  </div>
);

export default AboutUs;

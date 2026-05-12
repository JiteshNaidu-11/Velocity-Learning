import { Link } from "react-router-dom";
import HomeNavbar from "@/components/HomeNavbar";
import HomeFooter from "@/components/HomeFooter";
import { ArrowRight, Sparkles } from "lucide-react";

/* ── shared primitives ── */

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

/* ── data ── */

const struggles = [
  { num: "01", title: "Tutorial Overload", desc: "Too much random free content online with no structure or direction." },
  { num: "02", title: "No Clear Roadmap", desc: "Most learners don't know what to learn or what order to follow." },
  { num: "03", title: "Lack of Consistency", desc: "Starting strong but struggling to stay disciplined throughout." },
  { num: "04", title: "No Proper Guidance", desc: "Getting stuck on problems with no mentor or support to help." },
  { num: "05", title: "No Real Project Experience", desc: "Learning theory but struggling to build real-world projects." },
];

const reasons = [
  { num: "1", title: "Structured & Goal-Oriented Learning", desc: "Clear, focused, and organized learning paths designed to take you from zero to job-ready." },
  { num: "2", title: "Practical, Project-Based Training", desc: "Hands-on experience through real-world projects that employers actually care about." },
  { num: "3", title: "Expert Mentorship & Guidance", desc: "Continuous support, feedback, and guidance from industry professionals to accelerate your growth." },
  { num: "4", title: "Consistent Growth System", desc: "A disciplined, consistent, and productive system built to keep you on track every day." },
  { num: "5", title: "Career & Industry-Relevant Skills", desc: "Learn modern, relevant, and in-demand skills that align with what the industry needs right now." },
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
          About Us
        </span>
      </div>
      <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl text-gray-900 leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto">
        Making coding <GradientText>simple, accessible,</GradientText> and career-oriented.
      </h1>
      <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
        Velocity Learning is a modern coding education platform designed to help students learn through structured roadmaps, live mentorship, and practical project-based learning.
      </p>
      <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
        With learning available in both <span className="text-gray-600 font-semibold">Hindi and English</span>, we bridge the gap between learning and industry readiness — so you can confidently build your future in tech.
      </p>
      <Link
        to="/outreach"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
      >
        Start Learning <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

/* ════════ SECTION 2 — Why Most Learners Struggle (DARK) ════════ */
const StrugglesSection = () => (
  <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-[#08080f]">
    <div className="absolute -top-60 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-900/30 blur-[140px] pointer-events-none" />
    <div className="absolute -bottom-60 right-1/4 w-[600px] h-[600px] rounded-full bg-fuchsia-900/30 blur-[140px] pointer-events-none" />
    <div className="relative max-w-7xl mx-auto">
      <SectionEyebrow dark>The Problem</SectionEyebrow>
      <h2 className="text-center font-extrabold text-3xl sm:text-5xl text-white leading-tight tracking-tight mb-4">
        Why most learners <GradientTextLight>struggle?</GradientTextLight>
      </h2>
      <p className="text-center text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-14">
        Most people start learning to code but never finish. Here's why.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {struggles.map((s) => (
          <div key={s.num} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 hover:border-violet-500/30 hover:bg-white/[0.07] transition-all group">
            <div className="font-black text-4xl sm:text-5xl bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 bg-clip-text text-transparent mb-4 leading-none">{s.num}</div>
            <div className="font-bold text-white text-base sm:text-lg mb-2">{s.title}</div>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
        {/* filler card to balance 5-item grid */}
        <div className="hidden lg:flex rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02] p-7 items-center justify-center">
          <p className="text-center text-gray-600 text-sm font-medium leading-relaxed">
            Sound familiar?<br />
            <span className="text-violet-400 font-bold">Velocity Learning</span> was built to solve every one of these.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ════════ SECTION 3 — Why Choose Us (LIGHT) ════════ */
const WhyUsSection = () => (
  <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white">
    <MeshBg />
    <div className="relative max-w-7xl mx-auto">
      <SectionEyebrow>Why Choose Us</SectionEyebrow>
      <h2 className="text-center font-extrabold text-3xl sm:text-5xl text-gray-900 leading-tight tracking-tight mb-4">
        The <GradientText>Velocity</GradientText> difference
      </h2>
      <p className="text-center text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-14">
        We don't just teach coding — we build careers.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {reasons.map((r, i) => (
          <div
            key={r.num}
            className={`rounded-2xl sm:rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(124,58,237,0.1)] p-6 sm:p-8 hover:shadow-[0_8px_30px_-8px_rgba(124,58,237,0.2)] transition-shadow ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100 flex items-center justify-center mb-5">
              <span className="font-black text-sm text-violet-600">{r.num}</span>
            </div>
            <div className="font-bold text-gray-900 text-base sm:text-lg mb-2">{r.title}</div>
            <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ════════ SECTION 4 — CTA (LIGHT + DARK card) ════════ */
const CtaSection = () => (
  <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-b from-white via-violet-50/30 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-600 to-purple-700 p-8 sm:p-14 text-center shadow-[0_40px_80px_-20px_rgba(124,58,237,0.5)]">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-[11px] font-bold tracking-[0.18em] uppercase mb-6 backdrop-blur-md">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
            </span>
            Early Access
          </div>
          <h2 className="font-extrabold text-3xl sm:text-5xl text-white leading-tight tracking-tight mb-4">
            Start Your Learning Journey<br className="hidden sm:block" /> with Velocity Learning
          </h2>
          <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Join our early access community and get first access to industry-focused courses, expert mentorship, and exclusive launch opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/outreach" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-violet-700 font-bold text-sm hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-lg">
              Join Early Access <ArrowRight className="w-4 h-4" />
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
    <StrugglesSection />
    <WhyUsSection />
    <CtaSection />
    <HomeFooter />
  </div>
);

export default AboutUs;

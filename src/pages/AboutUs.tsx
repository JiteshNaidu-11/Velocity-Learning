import { Link } from "react-router-dom";
import HomeNavbar from "@/components/HomeNavbar";
import HomeFooter from "@/components/HomeFooter";
import { ArrowRight, ArrowUpRight, Sparkles, Users, Target, Globe, Zap, BookOpen } from "lucide-react";

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

const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L13.5 9L22.5 10.5L13.5 12L12 21L10.5 12L1.5 10.5L10.5 9L12 0Z" />
  </svg>
);

/* ════════ SECTION 1 — Hero (LIGHT) ════════ */
const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white">
    <MeshBg />

    {/* Decorative sparkles */}
    <Sparkle className="absolute top-28 left-[8%] w-6 h-6 text-amber-400 animate-[float_5s_ease-in-out_infinite]" />
    <Sparkle className="absolute top-1/2 right-[6%] w-4 h-4 text-violet-400 animate-[float_7s_ease-in-out_infinite]" />
    <Sparkle className="absolute bottom-24 left-[40%] w-5 h-5 text-fuchsia-400 animate-[float_6s_ease-in-out_infinite]" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 lg:pb-16 grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
      {/* LEFT — Text */}
      <div>
        <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border border-violet-200/80 bg-white/70 text-violet-700 shadow-[0_2px_12px_-4px_rgba(139,92,246,0.25)] backdrop-blur-md">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
          </span>
          About Us
        </span>

        <h1 className="mt-5 sm:mt-7 font-extrabold text-[2.4rem] sm:text-5xl lg:text-[4.5rem] leading-[0.95] tracking-tight text-gray-900">
          Making coding{" "}
          <span className="relative inline-block">
            <GradientText>simple,</GradientText>
            <svg className="absolute -bottom-2 left-0 w-full h-2.5" viewBox="0 0 300 12" preserveAspectRatio="none">
              <path d="M2 6 Q75 2, 150 5 T298 4" stroke="url(#au1)" strokeWidth="3" fill="none" strokeLinecap="round" />
              <defs>
                <linearGradient id="au1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
              </defs>
            </svg>
          </span>{" "}
          <br className="hidden sm:block" />
          <GradientText>accessible,</GradientText>{" "}
          and{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">career-oriented.</span>
            <Sparkle className="absolute -top-2 -right-8 w-7 h-7 text-amber-400 animate-[float_4s_ease-in-out_infinite]" />
          </span>
        </h1>

        <p className="mt-6 sm:mt-8 text-gray-600 text-base sm:text-lg max-w-lg leading-relaxed">
          A modern coding education platform designed to help students learn through{" "}
          <span className="text-gray-900 font-semibold">structured roadmaps</span>, live mentorship, and practical project-based learning.
        </p>
        <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-lg leading-relaxed">
          Available in both <span className="text-gray-900 font-semibold">Hindi and English</span> — bridging the gap between learning and industry readiness.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/outreach"
            className="group relative inline-flex items-center gap-2 pl-6 pr-5 py-3.5 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-violet-300/50 hover:shadow-2xl hover:shadow-violet-400/50 hover:-translate-y-0.5 transition-all"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Start Learning</span>
            <span className="relative w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 pl-6 pr-5 py-3.5 rounded-full bg-white border-2 border-gray-200 hover:border-violet-300 hover:bg-violet-50/50 text-gray-800 font-semibold text-sm transition-all"
          >
            <span>Talk to Us</span>
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-5 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium">Launching Soon</span>
          </div>
          <div className="h-4 w-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["from-violet-400 to-purple-500", "from-pink-400 to-rose-500", "from-amber-400 to-orange-500", "from-emerald-400 to-teal-500"].map((g, i) => (
                <div key={i} className={`w-7 h-7 rounded-full bg-gradient-to-br ${g} border-2 border-white shadow`} />
              ))}
            </div>
            <span className="text-xs text-gray-600"><span className="font-bold text-gray-900">2,500+</span> learners</span>
          </div>
        </div>
      </div>

      {/* RIGHT — Visual Composition */}
      <div className="relative h-[320px] sm:h-[440px] lg:h-[560px] flex items-center justify-center">
        {/* Glow base */}
        <div className="absolute inset-10 rounded-[40px] opacity-60 blur-3xl bg-gradient-to-br from-violet-300 via-fuchsia-200 to-amber-200" />

        {/* Animated rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] rounded-full border border-violet-200/70 animate-[spin-slow_30s_linear_infinite]" />
          <div className="absolute w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] lg:w-[280px] lg:h-[280px] rounded-full border border-fuchsia-200/50 animate-[spin-slow_40s_linear_infinite_reverse]" />
        </div>

        {/* Main gradient card */}
        <div className="relative z-10 w-[220px] sm:w-[300px] lg:w-[360px] max-w-full">
          <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600 opacity-30 blur-xl" />
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-950 via-violet-950 to-purple-950 p-6 sm:p-8 text-white shadow-[0_30px_60px_-20px_rgba(124,58,237,0.5)] border border-white/10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-600/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-600/20 rounded-full blur-3xl" />

            <div className="relative flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-500 opacity-70 blur-md" />
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600 flex items-center justify-center text-3xl font-black shadow-2xl">
                  V
                </div>
              </div>
              <div className="font-black text-xl">Velocity</div>
              <div className="text-violet-300 text-[10px] font-bold tracking-[0.25em] uppercase -mt-0.5">Learning</div>

              <div className="mt-5 grid grid-cols-2 gap-2 w-full">
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-lg font-black text-white">12+</div>
                  <div className="text-[10px] text-gray-400">Courses</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-lg font-black text-white">2.5K+</div>
                  <div className="text-[10px] text-gray-400">Learners</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating card — top right */}
        <div className="absolute top-4 right-0 sm:right-4 z-20 backdrop-blur-xl bg-white/80 border border-white/60 rounded-xl sm:rounded-2xl shadow-[0_20px_40px_-12px_rgba(124,58,237,0.25)] p-2.5 sm:p-3.5 flex items-center gap-2 sm:gap-3 animate-[float_5s_ease-in-out_infinite]">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-300/50 shrink-0">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-violet-500">Community</div>
            <div className="text-xs sm:text-sm font-bold text-gray-900">Growing Daily</div>
          </div>
        </div>

        {/* Floating — middle left */}
        <div className="hidden sm:block absolute top-1/2 -left-4 lg:-left-6 z-20 backdrop-blur-xl bg-white/80 border border-white/60 rounded-2xl shadow-[0_20px_40px_-12px_rgba(245,158,11,0.25)] p-3 sm:p-4 animate-[float_6s_ease-in-out_infinite]">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500" />
            <div className="text-[9px] font-bold uppercase tracking-wider text-amber-600">Mission</div>
          </div>
          <div className="text-2xl sm:text-3xl font-black bg-gradient-to-br from-amber-500 to-orange-600 bg-clip-text text-transparent leading-none">100%</div>
          <div className="text-[10px] text-gray-500 mt-1">Career Focused</div>
        </div>

        {/* Floating — bottom right */}
        <div className="absolute bottom-6 sm:bottom-10 right-0 sm:right-2 z-20 backdrop-blur-xl bg-white/80 border border-white/60 rounded-xl sm:rounded-2xl shadow-[0_20px_40px_-12px_rgba(236,72,153,0.25)] p-2.5 sm:p-4 animate-[float_5.5s_ease-in-out_infinite]">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-fuchsia-500" />
            <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-fuchsia-600">Bilingual</div>
          </div>
          <div className="text-2xl sm:text-3xl font-black bg-gradient-to-br from-fuchsia-500 to-pink-600 bg-clip-text text-transparent leading-none">Hin + Eng</div>
          <div className="text-[10px] text-gray-500 mt-0.5 sm:mt-1">Learning Content</div>
        </div>
      </div>
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

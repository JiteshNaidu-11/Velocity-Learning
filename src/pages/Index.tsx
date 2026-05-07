
import { ArrowRight, ArrowUpRight, Rocket, Brain, Code2, FolderOpen, Shield, Briefcase, Monitor, Users, Globe, Play, Map, Clock, HelpCircle, Linkedin, Twitter, Youtube, Instagram, Send, Sparkles, Star, Zap, CheckCircle2, BookOpen, Lightbulb, Target, GraduationCap, Award, Menu, X } from "lucide-react";
import { useState } from "react";

/* ════════════════════════════════════════════════════════
   SHARED PRIMITIVES
   ════════════════════════════════════════════════════════ */

const Pill = ({ children, accent = "violet" }: { children: React.ReactNode; accent?: "violet" | "amber" | "white" }) => {
  const styles = {
    violet: "border-violet-200/80 bg-white/70 text-violet-700 shadow-[0_2px_12px_-4px_rgba(139,92,246,0.25)]",
    amber: "border-amber-200/80 bg-white/70 text-amber-700 shadow-[0_2px_12px_-4px_rgba(245,158,11,0.25)]",
    white: "border-white/30 bg-white/10 text-white backdrop-blur-md",
  } as const;
  return (
    <span className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border backdrop-blur-md ${styles[accent]}`}>
      <span className="relative flex w-1.5 h-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-60 animate-ping" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
      </span>
      {children}
    </span>
  );
};

const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center mb-5">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-50 via-fuchsia-50 to-amber-50 border border-violet-100 shadow-sm">
      <Sparkles className="w-3 h-3 text-violet-500" />
      <span className="text-[10px] font-black tracking-[0.22em] uppercase bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
        {children}
      </span>
    </div>
  </div>
);

const GradientText = ({ children, from = "from-violet-600", via = "via-fuchsia-600", to = "to-amber-500" }: { children: React.ReactNode; from?: string; via?: string; to?: string }) => (
  <span className={`bg-gradient-to-r ${from} ${via} ${to} bg-clip-text text-transparent`}>{children}</span>
);

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

const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L13.5 9L22.5 10.5L13.5 12L12 21L10.5 12L1.5 10.5L10.5 9L12 0Z" />
  </svg>
);

/* ════════════════════════════════════════════════════════
   NAVBAR
   ════════════════════════════════════════════════════════ */

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[64px] sm:h-[68px] flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 shrink-0 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-purple-700 shadow-lg shadow-violet-300/40 group-hover:shadow-violet-400/50 transition-shadow" />
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
              <span className="text-white font-black text-base sm:text-lg italic">V</span>
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-30 blur-md transition-opacity -z-10" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-black tracking-tight text-gray-900">Velocity</div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-violet-500 uppercase -mt-0.5">Learning</div>
          </div>
        </a>

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-gray-50/80 border border-gray-100">
          {["Courses", "Roadmap", "Mentorship", "About Us", "FAQs"].map((l) => (
            <a key={l} href="#" className="px-3 lg:px-4 py-1.5 text-sm font-medium text-gray-600 rounded-full hover:bg-white hover:text-violet-600 hover:shadow-sm transition-all">
              {l}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button className="group relative inline-flex items-center gap-1.5 sm:gap-2 pl-4 sm:pl-5 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-full bg-gray-900 hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold transition-all">
            <span className="hidden xs:inline">Join </span>Waitlist
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-violet-500 group-hover:bg-violet-400 flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </span>
          </button>
          <button className="hidden sm:flex w-10 h-10 rounded-full border border-gray-200 hover:border-violet-300 hover:bg-violet-50 items-center justify-center text-gray-500 transition-all">
            <Sparkles className="w-4 h-4" />
          </button>
          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-full border border-gray-200 hover:border-violet-300 hover:bg-violet-50 flex items-center justify-center text-gray-500 transition-all"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl px-4 py-3 flex flex-col gap-1">
          {["Courses", "Roadmap", "Mentorship", "About Us", "FAQs"].map((l) => (
            <a key={l} href="#" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-violet-50 hover:text-violet-600 transition-all">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

/* ════════════════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════════════════ */

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white">
    <MeshBg />

    {/* Decorative sparkles */}
    <Sparkle className="absolute top-32 left-[8%] w-6 h-6 text-amber-400 animate-[float_5s_ease-in-out_infinite]" />
    <Sparkle className="absolute top-1/2 right-[6%] w-4 h-4 text-violet-400 animate-[float_7s_ease-in-out_infinite]" />
    <Sparkle className="absolute bottom-32 left-[42%] w-5 h-5 text-fuchsia-400 animate-[float_6s_ease-in-out_infinite]" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 lg:pb-16 grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
      {/* LEFT */}
      <div>
        <Pill>A new era of coding education</Pill>

        <h1 className="mt-5 sm:mt-7 font-extrabold text-[2.1rem] sm:text-5xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-gray-900">
          The Future of{" "}
          <span className="relative inline-block">
            <GradientText from="from-violet-600" via="via-fuchsia-500" to="to-purple-600">Coding</GradientText>
            <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 300 12" preserveAspectRatio="none">
              <path d="M2 6 Q75 2, 150 5 T298 4" stroke="url(#u1)" strokeWidth="3" fill="none" strokeLinecap="round" />
              <defs>
                <linearGradient id="u1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
              </defs>
            </svg>
          </span>{" "}
          <GradientText from="from-fuchsia-600" via="via-pink-500" to="to-purple-600">Education</GradientText>
          <br />is{" "}
          <span className="relative inline-block">
            <GradientText from="from-amber-500" via="via-orange-500" to="to-rose-500">Arriving.</GradientText>
            <Sparkle className="absolute -top-2 -right-8 w-7 h-7 text-amber-400 animate-[float_4s_ease-in-out_infinite]" />
          </span>
        </h1>

        <p className="mt-7 text-lg text-gray-600 max-w-xl leading-relaxed">
          Learn coding the right way with <span className="text-gray-900 font-semibold">structured roadmaps</span>, mentorship, projects, and career-focused learning.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <button className="group relative inline-flex items-center gap-2 pl-6 pr-5 py-3.5 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-violet-300/50 hover:shadow-2xl hover:shadow-violet-400/50 hover:-translate-y-0.5 transition-all">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Join Waitlist</span>
            <span className="relative w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
          <button className="group inline-flex items-center gap-2 pl-6 pr-5 py-3.5 rounded-full bg-white border-2 border-gray-200 hover:border-violet-300 hover:bg-violet-50/50 text-gray-800 font-semibold text-sm transition-all">
            <Play className="w-4 h-4 text-violet-600 fill-violet-600" />
            <span>Learn More</span>
          </button>
        </div>

        <div className="mt-9 flex items-center gap-5 flex-wrap">
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
            <span className="text-xs text-gray-600"><span className="font-bold text-gray-900">2,500+</span> on waitlist</span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative h-[300px] sm:h-[440px] lg:h-[620px] flex items-center justify-center">
        {/* Glow base */}
        <div className="absolute inset-10 rounded-[40px] opacity-60 blur-3xl bg-gradient-to-br from-violet-300 via-fuchsia-200 to-amber-200" />

        {/* Animated rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[220px] h-[220px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full border border-violet-200/70 animate-[spin-slow_30s_linear_infinite]" />
          <div className="absolute w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] rounded-full border border-fuchsia-200/50 animate-[spin-slow_40s_linear_infinite_reverse]" />
        </div>

        {/* Main hero image */}
        <div className="relative z-10 w-[200px] sm:w-[320px] lg:w-[420px] max-w-full">
          <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600 opacity-30 blur-xl" />
          <img
            src="/lappy.png"
            alt="Velocity Learning"
            className="relative w-full rounded-2xl lg:rounded-3xl shadow-[0_30px_60px_-20px_rgba(124,58,237,0.5),_0_15px_30px_-10px_rgba(0,0,0,0.3)] border border-white/10 object-cover"
          />
        </div>

        {/* Floating cards — top right */}
        <div className="absolute top-2 right-0 z-20 backdrop-blur-xl bg-white/80 border border-white/60 rounded-xl sm:rounded-2xl shadow-[0_20px_40px_-12px_rgba(124,58,237,0.25)] p-2.5 sm:p-3.5 flex items-center gap-2 sm:gap-3 animate-[float_5s_ease-in-out_infinite]">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-300/50 shrink-0">
            <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-violet-500">AI-Powered</div>
            <div className="text-xs sm:text-sm font-bold text-gray-900">Smart Learning</div>
          </div>
        </div>

        {/* Floating — middle right */}
        <div className="hidden sm:block absolute top-1/2 -right-4 lg:-right-6 z-20 backdrop-blur-xl bg-white/80 border border-white/60 rounded-2xl shadow-[0_20px_40px_-12px_rgba(245,158,11,0.25)] p-3 sm:p-4 animate-[float_6s_ease-in-out_infinite]">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500" />
            <div className="text-[9px] font-bold uppercase tracking-wider text-amber-600">Real Projects</div>
          </div>
          <div className="text-2xl sm:text-3xl font-black bg-gradient-to-br from-amber-500 to-orange-600 bg-clip-text text-transparent leading-none">20+</div>
          <div className="text-[10px] text-gray-500 mt-1">Hands-on builds</div>
        </div>

        {/* Floating — bottom left */}
        <div className="absolute bottom-10 sm:bottom-24 -left-2 sm:-left-4 z-20 backdrop-blur-xl bg-white/80 border border-white/60 rounded-xl sm:rounded-2xl shadow-[0_20px_40px_-12px_rgba(236,72,153,0.25)] p-2.5 sm:p-4 animate-[float_5.5s_ease-in-out_infinite]">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-fuchsia-500" />
            <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-fuchsia-600">Career Focused</div>
          </div>
          <div className="text-2xl sm:text-3xl font-black bg-gradient-to-br from-fuchsia-500 to-pink-600 bg-clip-text text-transparent leading-none">100%</div>
          <div className="text-[10px] text-gray-500 mt-0.5 sm:mt-1">Job-Oriented</div>
        </div>

        {/* Floating — bottom right */}
        <div className="hidden sm:flex absolute bottom-4 right-2 z-20 backdrop-blur-xl bg-white/80 border border-white/60 rounded-2xl shadow-[0_20px_40px_-12px_rgba(99,102,241,0.25)] p-3 sm:p-3.5 items-center gap-2 sm:gap-3 animate-[float_4.5s_ease-in-out_infinite]">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-300/50 shrink-0">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-indigo-500">Mentorship</div>
            <div className="text-xs sm:text-sm font-bold text-gray-900">1:1 Guidance</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   FEATURES STRIP
   ════════════════════════════════════════════════════════ */

const featuresData = [
  { icon: Users, title: "Beginner Friendly", sub: "Start from Zero", color: "from-violet-500 to-purple-600" },
  { icon: Monitor, title: "Live Mentorship", sub: "Learn with Experts", color: "from-pink-500 to-rose-600" },
  { icon: Code2, title: "Real Projects", sub: "Build Portfolio", color: "from-amber-500 to-orange-600" },
  { icon: Briefcase, title: "Career Focused", sub: "Job Ready Skills", color: "from-emerald-500 to-teal-600" },
  { icon: Globe, title: "Hindi + English", sub: "Your Language", color: "from-indigo-500 to-blue-600" },
];

const FeaturesStrip = () => (
  <section className="relative py-6 sm:py-10 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-gray-100 shadow-[0_20px_50px_-20px_rgba(124,58,237,0.15)] p-2">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1">
          {featuresData.map(({ icon: Icon, title, sub, color }, i) => (
            <div key={title} className={`group relative flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-violet-50/40 transition-all ${i !== featuresData.length - 1 ? "lg:border-r border-dashed border-gray-100" : ""}`}>
              <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                <Icon className="w-5 h-5 text-white" />
                <div className={`absolute -inset-1 rounded-xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-30 blur-md transition-opacity -z-10`} />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-gray-900 truncate">{title}</div>
                <div className="text-[11px] text-gray-500 truncate">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   PROBLEM (BENTO GRID)
   ════════════════════════════════════════════════════════ */

const problemCards = [
  { icon: Play, title: "Too much random free content", desc: "No structure, no clarity, no direction.", color: "violet" },
  { icon: Map, title: "No roadmap", desc: "Don't know what to learn and why.", color: "rose" },
  { icon: Clock, title: "No discipline", desc: "Start motivated, quit halfway.", color: "amber" },
  { icon: HelpCircle, title: "No guidance", desc: "Stuck on errors, no one to help.", color: "indigo" },
  { icon: FolderOpen, title: "No project direction", desc: "Learn but can't build real projects.", color: "emerald" },
];

const colorMap: Record<string, { bg: string; text: string; ring: string; iconBg: string }> = {
  violet: { bg: "from-violet-50 to-white", text: "text-violet-600", ring: "ring-violet-100", iconBg: "from-violet-500 to-purple-600" },
  rose: { bg: "from-rose-50 to-white", text: "text-rose-600", ring: "ring-rose-100", iconBg: "from-rose-500 to-pink-600" },
  amber: { bg: "from-amber-50 to-white", text: "text-amber-600", ring: "ring-amber-100", iconBg: "from-amber-500 to-orange-600" },
  indigo: { bg: "from-indigo-50 to-white", text: "text-indigo-600", ring: "ring-indigo-100", iconBg: "from-indigo-500 to-blue-600" },
  emerald: { bg: "from-emerald-50 to-white", text: "text-emerald-600", ring: "ring-emerald-100", iconBg: "from-emerald-500 to-teal-600" },
};

const ProblemSection = () => (
  <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
    <MeshBg />
    <div className="relative max-w-7xl mx-auto">
      <SectionEyebrow>The Problem</SectionEyebrow>
      <h2 className="text-center font-extrabold text-2xl sm:text-4xl lg:text-6xl text-gray-900 leading-[1.05] tracking-tight">
        Why Most Learners <GradientText from="from-rose-600" via="via-amber-500" to="to-violet-600">Struggle</GradientText>
      </h2>
      <p className="mt-4 sm:mt-5 text-center text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
        Endless tutorials. Zero direction. Sound familiar?
      </p>

      {/* Bento grid */}
      <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-auto md:auto-rows-[200px]">
        {problemCards.map((card, i) => {
          const c = colorMap[card.color];
          // First card spans 2 cols, others fit
          const span = i === 0 ? "md:col-span-2 md:row-span-2" : i === 1 ? "md:col-span-2" : i === 2 ? "md:col-span-2" : "md:col-span-3";
          return (
            <div key={card.title} className={`group relative ${span} rounded-3xl bg-gradient-to-br ${c.bg} border border-white ring-1 ${c.ring} shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(124,58,237,0.25)] hover:-translate-y-1 transition-all p-6 overflow-hidden`}>
              {/* Decorative number */}
              <div className="absolute top-3 right-5 text-7xl font-black text-gray-900/[0.04] group-hover:text-gray-900/[0.08] transition-colors leading-none">0{i + 1}</div>
              {/* Decorative blob */}
              <div className={`absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${c.iconBg} opacity-[0.04] group-hover:opacity-10 blur-2xl transition-opacity`} />

              <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${c.iconBg} flex items-center justify-center shadow-lg shadow-violet-200/50 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className={`relative font-bold ${i === 0 ? "text-xl" : "text-base"} text-gray-900 mb-2 leading-snug`}>{card.title}</h3>
              <p className="relative text-sm text-gray-500 leading-relaxed">{card.desc}</p>

              {i === 0 && (
                <div className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-violet-600">
                  <span>The result?</span>
                  <span className="font-black">Burnout & quitting.</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   SOLUTION
   ════════════════════════════════════════════════════════ */

const SolutionSection = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-12">
    <div className="max-w-7xl mx-auto">
      <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-violet-50 via-fuchsia-50 to-amber-50 border border-violet-100 px-5 py-12 sm:px-8 sm:py-20 text-center">
        {/* Animated mesh */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-violet-300 to-fuchsia-300 blur-3xl opacity-40 animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300 to-rose-300 blur-3xl opacity-40 animate-[float_10s_ease-in-out_infinite]" />
        </div>
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "16px 16px" }} />

        {/* Sparkles */}
        <Sparkle className="absolute top-12 left-[10%] w-5 h-5 text-violet-400 animate-[float_5s_ease-in-out_infinite]" />
        <Sparkle className="absolute bottom-16 right-[12%] w-6 h-6 text-amber-400 animate-[float_7s_ease-in-out_infinite]" />
        <Sparkle className="absolute top-1/2 right-[8%] w-4 h-4 text-fuchsia-400 animate-[float_4s_ease-in-out_infinite]" />

        <div className="relative">
          <SectionEyebrow>The Solution</SectionEyebrow>
          <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-7xl tracking-tight leading-none">
            <GradientText from="from-violet-600" via="via-fuchsia-600" to="to-purple-700">Velocity Learning</GradientText>
          </h2>
          <p className="mt-5 sm:mt-7 text-gray-700 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            <span className="font-bold text-gray-900">Structured. Guided. Practical. Career-Focused.</span>
            <br />
            Everything you need to go from beginner to job ready.
          </p>

          {/* Quick stats row */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              { icon: GraduationCap, label: "Structured roadmaps" },
              { icon: Users, label: "1:1 mentorship" },
              { icon: Code2, label: "Real-world projects" },
              { icon: Briefcase, label: "Job-ready skills" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-white shadow-sm">
                <Icon className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-semibold text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   COURSES
   ════════════════════════════════════════════════════════ */

const coursesData = [
  {
    name: "C Programming", level: "Foundation",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    blob1: "#1d4ed8", blob2: "#4f46e5",
    chipColor: "rgba(99,102,241,0.25)", chipText: "#a5b4fc",
  },
  {
    name: "C++", level: "Intermediate",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    blob1: "#6d28d9", blob2: "#9333ea",
    chipColor: "rgba(139,92,246,0.25)", chipText: "#c4b5fd",
  },
  {
    name: "Java", level: "Industry",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    blob1: "#c2410c", blob2: "#db2777",
    chipColor: "rgba(249,115,22,0.25)", chipText: "#fdba74",
  },
  {
    name: "Python", level: "Versatile",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    blob1: "#b45309", blob2: "#1d4ed8",
    chipColor: "rgba(234,179,8,0.25)", chipText: "#fde68a",
  },
  {
    name: "Web Dev", level: "Full-Stack",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    blob1: "#0e7490", blob2: "#047857",
    chipColor: "rgba(20,184,166,0.25)", chipText: "#5eead4",
  },
  {
    name: "Interview Prep", level: "Job-Ready",
    iconSrc: null as string | null,
    blob1: "#5b21b6", blob2: "#be185d",
    chipColor: "rgba(167,139,250,0.25)", chipText: "#c4b5fd",
  },
];

const CoursesSection = () => (
  <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-[#08080f]">
    {/* faint section-level ambient */}
    <div className="absolute -top-60 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-900/30 blur-[140px] pointer-events-none" />
    <div className="absolute -bottom-60 right-1/4 w-[600px] h-[600px] rounded-full bg-fuchsia-900/30 blur-[140px] pointer-events-none" />

    <div className="relative max-w-7xl mx-auto">
      <SectionEyebrow>Our Courses</SectionEyebrow>
      <h2 className="text-center font-extrabold text-2xl sm:text-4xl lg:text-6xl text-white leading-[1.05] tracking-tight">
        Courses <GradientText from="from-violet-400" via="via-fuchsia-400" to="to-amber-400">Launching Soon</GradientText>
      </h2>
      <p className="mt-4 sm:mt-5 text-center text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
        Hand-crafted curriculum. Industry-grade quality. Built for results.
      </p>

      <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
        {coursesData.map(({ name, iconSrc, level, blob1, blob2, chipColor, chipText }) => (
          <div
            key={name}
            className="group relative rounded-[28px] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3"
            style={{ minHeight: "252px", background: "#0c0c1a" }}
          >
            {/* ── BLOB 1 – primary color, fills upper-left ── */}
            <div
              className="absolute transition-all duration-700 group-hover:scale-110"
              style={{
                width: "190px", height: "160px",
                top: "-30px", left: "-40px",
                background: blob1,
                borderRadius: "50%",
                filter: "blur(32px)",
                opacity: 0.9,
              }}
            />
            {/* ── BLOB 2 – accent color, upper-right ── */}
            <div
              className="absolute transition-all duration-700 group-hover:scale-110"
              style={{
                width: "150px", height: "130px",
                top: "10px", right: "-35px",
                background: blob2,
                borderRadius: "50%",
                filter: "blur(28px)",
                opacity: 0.8,
              }}
            />
            {/* ── BLOB 3 – small mid-blend ── */}
            <div
              className="absolute"
              style={{
                width: "100px", height: "80px",
                top: "50px", left: "30%",
                background: blob1,
                borderRadius: "50%",
                filter: "blur(24px)",
                opacity: 0.4,
              }}
            />

            {/* ── FROSTED GLASS PANEL (sits on top of blobs) ── */}
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(6, 6, 18, 0.48)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
              }}
            />

            {/* ── BORDER ── */}
            <div
              className="absolute inset-0 rounded-[28px] pointer-events-none"
              style={{ border: "1px solid rgba(255,255,255,0.10)" }}
            />

            {/* top specular highlight */}
            <div
              className="absolute top-0 left-8 right-8 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)" }}
            />
            {/* left edge micro-highlight */}
            <div
              className="absolute top-8 bottom-8 left-0 w-px pointer-events-none"
              style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.12), transparent)" }}
            />

            {/* ── CONTENT (above glass) ── */}
            <div className="relative z-10 flex flex-col items-center text-center p-5 h-full" style={{ minHeight: "252px" }}>

              {/* icon */}
              <div
                className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center p-2 mt-1 mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 20px rgba(0,0,0,0.35)",
                }}
              >
                {iconSrc ? (
                  <img src={iconSrc} alt={name} className="w-9 h-9 object-contain" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }} />
                ) : (
                  <Brain className="w-9 h-9" style={{ color: "#c4b5fd" }} />
                )}
              </div>

              {/* level chip */}
              <div
                className="text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-0.5 rounded-full mb-1.5"
                style={{ background: chipColor, color: chipText, border: `1px solid ${chipText}40` }}
              >
                {level}
              </div>

              {/* name */}
              <div className="font-bold text-sm leading-tight" style={{ color: "rgba(255,255,255,0.92)" }}>{name}</div>

              {/* launching soon */}
              <div className="mt-auto pt-4 w-full" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: chipText }} />
                  Launching Soon
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   JOURNEY
   ════════════════════════════════════════════════════════ */

const journeySteps = [
  { icon: Rocket, num: "01", title: "Beginner", desc: "Start from zero. We make it simple.", color: "from-violet-500 to-purple-600" },
  { icon: Brain, num: "02", title: "Logic Building", desc: "Build strong programming logic.", color: "from-fuchsia-500 to-pink-600" },
  { icon: Code2, num: "03", title: "Coding Skills", desc: "Learn concepts the right way.", color: "from-rose-500 to-orange-500" },
  { icon: FolderOpen, num: "04", title: "Projects", desc: "Build real-world projects.", color: "from-amber-500 to-yellow-500" },
  { icon: Shield, num: "05", title: "Confidence", desc: "Problem-solving becomes easy.", color: "from-emerald-500 to-teal-500" },
  { icon: Briefcase, num: "06", title: "Job Ready", desc: "Get hired. Build your dream career.", color: "from-indigo-500 to-blue-600" },
];

const JourneySection = () => (
  <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white">
    <MeshBg />
    <div className="relative max-w-7xl mx-auto">
      <SectionEyebrow>Your Journey</SectionEyebrow>
      <h2 className="text-center font-extrabold text-2xl sm:text-4xl lg:text-6xl text-gray-900 leading-[1.05] tracking-tight">
        From Beginner to <GradientText from="from-violet-600" via="via-fuchsia-600" to="to-amber-500">Job Ready</GradientText>
      </h2>
      <p className="mt-4 sm:mt-5 text-center text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
        Six precise stages. One clear destination.
      </p>

      {/* Curved SVG timeline */}
      <div className="relative mt-20">
        <svg className="hidden lg:block absolute top-12 left-0 w-full h-24 -z-10" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="journey-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <path d="M 50 50 Q 250 0, 450 50 T 850 50 T 1150 50" stroke="url(#journey-grad)" strokeWidth="2" strokeDasharray="6 6" fill="none" />
        </svg>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 sm:gap-y-10 gap-x-4">
          {journeySteps.map(({ icon: Icon, num, title, desc, color }, i) => (
            <div key={num} className="relative flex flex-col items-center text-center group">
              {/* Node */}
              <div className="relative mb-5">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} blur-xl opacity-30 group-hover:opacity-60 transition-opacity scale-150`} />
                <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-2xl shadow-violet-300/40 ring-4 ring-white group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                {/* Step number bubble */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-violet-200 shadow-md flex items-center justify-center">
                  <span className="text-[10px] font-black text-violet-600">{num}</span>
                </div>
              </div>
              <div className="font-black text-base text-gray-900 mb-1.5">{title}</div>
              <div className="text-xs text-gray-500 leading-relaxed max-w-[140px]">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   TEAM
   ════════════════════════════════════════════════════════ */

const teamMembers = [
  { initials: "SS", name: "Shubham S.", role: "DSA Expert", color: "from-blue-500 to-indigo-600", emoji: "💻" },
  { initials: "PK", name: "Priya K.", role: "Full Stack Dev", color: "from-pink-500 to-rose-600", emoji: "✨" },
  { initials: "AM", name: "Arjun M.", role: "System Design", color: "from-amber-500 to-orange-600", emoji: "🏗️" },
  { initials: "NR", name: "Neha R.", role: "Career Mentor", color: "from-emerald-500 to-teal-600", emoji: "🎯" },
];

const TeamSection = () => (
  <section className="bg-white py-16 sm:py-24 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <SectionEyebrow>Our Team</SectionEyebrow>
      <h2 className="text-center font-extrabold text-2xl sm:text-4xl lg:text-6xl text-gray-900 leading-[1.05] tracking-tight">
        Built by <GradientText from="from-violet-600" via="via-fuchsia-600" to="to-amber-500">Educators, Developers & Dreamers</GradientText>
      </h2>

      <div className="mt-10 sm:mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-4 sm:gap-5">
        {/* Founder card */}
        <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden bg-gradient-to-br from-gray-950 via-violet-950 to-purple-950 p-6 sm:p-8 lg:p-10 text-white shadow-[0_30px_60px_-20px_rgba(124,58,237,0.5)]">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

          {/* Floating sparkles */}
          <Sparkle className="absolute top-8 right-12 w-5 h-5 text-amber-300 animate-[float_5s_ease-in-out_infinite]" />
          <Sparkle className="absolute bottom-12 right-24 w-4 h-4 text-violet-300 animate-[float_6s_ease-in-out_infinite]" />

          <div className="relative h-full flex flex-col">
            {/* Top: badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[10px] font-black tracking-widest uppercase text-violet-200 self-start mb-6">
              <Sparkles className="w-3 h-3" /> Founder
            </div>

            {/* Profile */}
            <div className="flex gap-5 items-start">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-500 opacity-70 blur-md" />
                <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600 flex items-center justify-center text-3xl font-black shadow-2xl">
                  AS
                </div>
              </div>
              <div className="pt-2">
                <div className="font-black text-2xl">Ankit Singh</div>
                <div className="text-violet-300 text-sm font-semibold mt-0.5">Founder & CEO</div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-violet-200/80">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="ml-1">Loved by 2.5K+ learners</span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-gray-300 text-sm leading-relaxed">
              Ex-Software Engineer turned Educator. Passionate about making coding education <span className="text-white font-semibold">structured, practical, and accessible</span> to everyone.
            </p>

            {/* Bottom row */}
            <div className="mt-auto pt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {[Linkedin, Twitter, Globe].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 flex items-center justify-center transition-all hover:scale-110">
                    <Icon className="w-4 h-4 text-white" />
                  </button>
                ))}
              </div>
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-xl">
                <span className="text-white font-black text-xl italic">V</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other team members */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {teamMembers.map(({ initials, name, role, color, emoji }) => (
            <div key={name} className="group relative rounded-3xl bg-white border border-gray-100 p-6 hover:shadow-[0_20px_50px_-12px_rgba(124,58,237,0.25)] hover:-translate-y-1 transition-all overflow-hidden">
              {/* Corner glow */}
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${color} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity`} />

              <div className="relative flex flex-col items-center text-center gap-3">
                <div className="relative">
                  <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${color} opacity-30 blur-md`} />
                  <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${color} flex items-center justify-center text-xl font-black text-white shadow-xl group-hover:scale-110 transition-transform`}>
                    {initials}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-sm shadow-md">
                    {emoji}
                  </div>
                </div>
                <div>
                  <div className="font-black text-base text-gray-900">{name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   CTA
   ════════════════════════════════════════════════════════ */

const CtaSection = () => (
  <section className="px-4 sm:px-6 py-12 sm:py-16">
    <div className="max-w-7xl mx-auto">
      <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-600 to-purple-700 p-5 sm:p-10 lg:p-16 shadow-[0_40px_80px_-20px_rgba(124,58,237,0.5)]">
        {/* Mesh + grid bg */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-amber-400/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-fuchsia-500/40 rounded-full blur-3xl" />

        {/* Floating sparkles */}
        <Sparkle className="absolute top-10 left-[15%] w-5 h-5 text-amber-300 animate-[float_5s_ease-in-out_infinite]" />
        <Sparkle className="absolute top-1/2 right-[10%] w-7 h-7 text-white/60 animate-[float_6s_ease-in-out_infinite]" />
        <Sparkle className="absolute bottom-12 left-[40%] w-4 h-4 text-amber-200 animate-[float_4s_ease-in-out_infinite]" />

        <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-10 items-center">
          <div>
            <Pill accent="white">✦ Limited spots — early access</Pill>
            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
              Be Among the First Learners at{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">Velocity Learning</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M2 6 Q75 2, 150 5 T298 4" stroke="rgba(252,211,77,0.7)" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-6 text-violet-100 text-lg leading-relaxed max-w-lg">
              Join the waitlist and be the first to access our courses, mentorship, and exclusive launch benefits.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white hover:bg-gray-50 text-violet-700 font-black text-base shadow-2xl transition-all hover:-translate-y-1">
              <span>Join Waitlist Now</span>
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </span>
            </button>

            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex -space-x-2 shrink-0">
                {["from-violet-300 to-fuchsia-400", "from-pink-300 to-rose-400", "from-amber-300 to-orange-400", "from-emerald-300 to-teal-400"].map((g, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-white/80 shadow`} />
                ))}
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur border-2 border-white/80 flex items-center justify-center text-[10px] font-black text-white">
                  +
                </div>
              </div>
              <div>
                <div className="text-white font-black text-base leading-none">2,500+ learners</div>
                <div className="text-violet-100 text-xs mt-1">already on the waitlist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════════════════ */

const Footer = () => (
  <footer className="relative bg-gradient-to-b from-gray-950 to-black text-gray-400 pt-14 sm:pt-20 pb-8 px-4 sm:px-6 overflow-hidden">
    {/* Subtle grid */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-3xl" />

    <div className="relative max-w-7xl mx-auto">
      {/* Top */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-16 pb-12 border-b border-gray-800/50">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600 shadow-lg" />
              <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
                <span className="text-white font-black text-xl italic">V</span>
              </div>
            </div>
            <div>
              <div className="text-lg font-black text-white">Velocity</div>
              <div className="text-[10px] font-bold tracking-[0.25em] text-violet-400 uppercase -mt-1">Learning</div>
            </div>
          </div>
          <p className="text-gray-400 text-base leading-relaxed max-w-md mb-6">
            The future of coding education. Structured, guided, practical, and built for careers.
          </p>
          {/* Socials */}
          <div className="flex gap-2">
            {[Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
              <button key={i} className="group w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-600 border border-white/10 hover:border-transparent flex items-center justify-center transition-all">
                <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </button>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="lg:col-span-2 sm:col-span-1">
          <div className="text-xs font-black tracking-[0.2em] uppercase text-white mb-5">Quick Links</div>
          <ul className="space-y-3 text-sm">
            {["Courses", "Roadmap", "Mentorship", "About Us", "FAQs"].map((l) => (
              <li key={l}><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors inline-flex items-center gap-1.5 group">
                <span className="w-0 group-hover:w-2 h-px bg-violet-400 transition-all" />
                {l}
              </a></li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2 sm:col-span-1">
          <div className="text-xs font-black tracking-[0.2em] uppercase text-white mb-5">Legal</div>
          <ul className="space-y-3 text-sm">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
              <li key={l}><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors inline-flex items-center gap-1.5 group">
                <span className="w-0 group-hover:w-2 h-px bg-violet-400 transition-all" />
                {l}
              </a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="sm:col-span-2 lg:col-span-3">
          <div className="text-xs font-black tracking-[0.2em] uppercase text-white mb-5">Stay Updated</div>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">Get launch updates straight to your inbox.</p>
          <div className="relative">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full pl-4 pr-14 py-3.5 text-sm rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all"
            />
            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 flex items-center justify-center transition-all hover:scale-105">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] text-emerald-400">
            <CheckCircle2 className="w-3 h-3" />
            <span>No spam. Unsubscribe anytime.</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-gray-500">
          © 2025 <span className="text-white font-semibold">Velocity Learning</span>. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
);

/* ════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════ */

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased selection:bg-violet-200 selection:text-violet-900">
      <Navbar />
      <Hero />
      <FeaturesStrip />
      <ProblemSection />
      <SolutionSection />
      <CoursesSection />
      <JourneySection />
      <TeamSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

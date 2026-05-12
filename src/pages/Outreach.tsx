import { useState } from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "@/components/HomeNavbar";
import HomeFooter from "@/components/HomeFooter";
import { ArrowUpRight, Send, Twitter, Linkedin, Youtube, Instagram, CheckCircle2, Sparkles, Rocket, Users, Bell } from "lucide-react";

/* ── shared primitives ── */

const MeshBg = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-50 blur-3xl"
      style={{ background: "radial-gradient(circle, rgba(196,181,253,0.35) 0%, rgba(255,255,255,0) 70%)" }} />
    <div className="absolute top-20 -right-32 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
      style={{ background: "radial-gradient(circle, rgba(251,191,36,0.30) 0%, rgba(255,255,255,0) 70%)" }} />
    <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-35 blur-3xl"
      style={{ background: "radial-gradient(circle, rgba(236,72,153,0.30) 0%, rgba(255,255,255,0) 70%)" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-20 blur-3xl"
      style={{ background: "radial-gradient(ellipse at center, rgba(245,158,11,0.4) 0%, rgba(255,255,255,0) 70%)" }} />
    <div className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }} />
  </div>
);

const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L13.5 9L22.5 10.5L13.5 12L12 21L10.5 12L1.5 10.5L10.5 9L12 0Z" />
  </svg>
);

const GradientText = ({ children, from = "from-violet-400", via = "via-fuchsia-400", to = "to-amber-400" }: { children: React.ReactNode; from?: string; via?: string; to?: string }) => (
  <span className={`bg-gradient-to-r ${from} ${via} ${to} bg-clip-text text-transparent`}>{children}</span>
);

/* ── data ── */

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const benefits = [
  { icon: Rocket, text: "Early access to courses" },
  { icon: Users, text: "Exclusive community invites" },
  { icon: Bell, text: "Launch updates & announcements" },
];

/* ════════ PAGE ════════ */

const Outreach = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-[#08080f] text-white antialiased selection:bg-violet-500/30 selection:text-white">
      <HomeNavbar />

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 overflow-hidden">
        <MeshBg />

        {/* Sparkles */}
        <Sparkle className="absolute top-20 left-[10%] w-5 h-5 text-amber-400 animate-[float_5s_ease-in-out_infinite]" />
        <Sparkle className="absolute top-32 right-[12%] w-4 h-4 text-violet-400 animate-[float_7s_ease-in-out_infinite]" />
        <Sparkle className="absolute bottom-32 left-[18%] w-6 h-6 text-fuchsia-400 animate-[float_6s_ease-in-out_infinite]" />
        <Sparkle className="absolute bottom-20 right-[20%] w-4 h-4 text-amber-300 animate-[float_4.5s_ease-in-out_infinite]" />

        <div className="relative w-full max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm mb-6 sm:mb-8">
            <Sparkles className="w-3 h-3 text-violet-400" />
            <span className="text-[10px] font-black tracking-[0.22em] uppercase bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Waitlist
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-extrabold text-6xl sm:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight mb-4 sm:mb-6">
            Coming <GradientText>soon!</GradientText>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-lg lg:max-w-xl mx-auto leading-relaxed mb-10 sm:mb-14">
            We&apos;re building something special. Be the first to know when we launch.
          </p>

          {/* Glass Card */}
          <div className="relative w-full max-w-xl sm:max-w-2xl mx-auto">
            {/* Card glow */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-amber-500/20 blur-xl opacity-60" />

            <div className="relative rounded-[1.75rem] sm:rounded-[2rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-8 sm:p-12 lg:p-14 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.25)] overflow-hidden">
              {/* Inner ambient blobs */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-fuchsia-600/10 blur-3xl pointer-events-none" />

              <div className="relative">
                <h2 className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-white mb-2 sm:mb-3">
                  Join our <GradientText>waitlist!</GradientText>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-md lg:max-w-lg mx-auto leading-relaxed mb-6 sm:mb-8">
                  Sign up for our newsletter to receive the latest updates and insights straight to your inbox.
                </p>

                {submitted ? (
                  <div className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-300 text-sm font-semibold">You&apos;re on the list! We&apos;ll be in touch.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto">
                    <div className="flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-black/40 border border-white/10 focus-within:border-violet-500/40 transition-colors">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none min-w-0"
                      />
                      <button
                        type="submit"
                        className="group shrink-0 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-gray-900 font-bold text-sm hover:bg-gray-100 transition-all hover:shadow-lg hover:shadow-white/10"
                      >
                        <span>Join Waitlist</span>
                        <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </form>
                )}

                {/* Benefits row */}
                <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
                  {benefits.map(({ icon: Icon, text }) => (
                    <div key={text} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                      <Icon className="w-3.5 h-3.5 text-violet-400" />
                      <span className="text-[11px] sm:text-xs text-gray-400 font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="mt-10 sm:mt-12 flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-600 border border-white/10 hover:border-transparent flex items-center justify-center transition-all hover:scale-110"
              >
                <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* Bottom link back */}
          <Link
            to="/"
            className="mt-8 sm:mt-10 inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-violet-400 transition-colors"
          >
            <ArrowUpRight className="w-3.5 h-3.5 rotate-[-135deg]" />
            Back to home
          </Link>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default Outreach;

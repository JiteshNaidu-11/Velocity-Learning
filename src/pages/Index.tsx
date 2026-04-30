import { Link } from "react-router-dom";
import { ArrowRight, Upload, Search, Mail, CheckCircle2, XCircle, Sparkles, Briefcase, FileText, ShieldAlert, BarChart3, Star, Quote, Zap, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Blob, Sparkle, GridBg } from "@/components/Decor";
import heroStudent from "@/assets/hero-student.png";

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <GridBg />
        <Blob className="absolute -top-32 -left-32 w-[500px] h-[500px]" color="primary" />
        <Blob className="absolute top-40 right-1/3 w-72 h-72 opacity-60" color="warning" />

        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass shadow-sm text-xs font-medium mb-6">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              138+ students placed this year
            </div>
            <h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-[1.02] tracking-tight">
              Skip job portals.{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient">Get real replies.</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 300 14" preserveAspectRatio="none">
                  <path d="M2 8 Q75 2, 150 7 T298 6" stroke="hsl(var(--warning))" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Upload your resume. We find hiring managers, write personal emails,
              and help you get replies fast — no ATS, no ghosting.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/outreach">Start Outreach <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/internships">Explore Internships</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["from-primary to-primary-glow", "from-info to-primary", "from-warning to-danger", "from-success to-info"].map((g, i) => (
                    <div key={i} className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-card shadow-sm`} />
                  ))}
                </div>
                <span className="text-muted-foreground"><b className="text-foreground">138+</b> placed</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-warning text-warning" />)}
                <span className="ml-2 text-muted-foreground"><b className="text-foreground">95%</b> satisfaction</span>
              </div>
            </div>
          </div>

          <div className="relative h-[540px] lg:h-[640px]">
            {/* layered blobs */}
            <div className="absolute inset-8 gradient-mesh opacity-30 blur-3xl rounded-full animate-spin-slow" />
            <Blob className="absolute top-10 right-10 w-[440px] h-[480px]" color="primary" />
            <Blob className="absolute bottom-20 left-0 w-64 h-64 opacity-70" color="info" animated={false} />
            <Sparkle className="absolute top-8 right-4 w-12 h-12 text-warning animate-float" />
            <Sparkle className="absolute bottom-32 left-2 w-8 h-8 text-primary animate-float-slow" />
            <Sparkle className="absolute top-1/2 right-2 w-6 h-6 text-danger animate-float" />

            <img src={heroStudent} alt="Smiling student with laptop" className="relative z-10 w-full h-full object-contain drop-shadow-2xl" width={1024} height={1024} />

            {/* Floating cards */}
            <div className="absolute top-12 left-0 z-20 glass rounded-2xl shadow-elev p-4 flex items-center gap-3 animate-float">
              <div className="w-11 h-11 rounded-xl bg-success-soft text-success flex items-center justify-center animate-pulse-ring">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">New reply</div>
                <div className="font-semibold text-sm">Google · Recruiter</div>
              </div>
              <div className="ml-2 w-2 h-2 rounded-full bg-success" />
            </div>

            <div className="absolute top-1/3 right-0 z-20 glass rounded-2xl shadow-elev p-4 animate-float-slow min-w-[160px]">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-success" /> Reply rate
              </div>
              <div className="font-display font-extrabold text-3xl text-gradient">42%</div>
              <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full w-[42%] gradient-primary rounded-full" />
              </div>
              <div className="text-xs text-success mt-1.5">↑ 3.2× vs portals</div>
            </div>

            <div className="absolute bottom-8 left-4 z-20 glass rounded-2xl shadow-elev p-3 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-sm">12 hiring managers</div>
                <div className="text-muted-foreground">found in 4 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <section className="border-y border-border/60 bg-card/40 backdrop-blur py-8 overflow-hidden">
        <div className="container mb-5 text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Students placed at top companies
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex marquee-track gap-16 w-max">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-16 shrink-0">
                {["Google", "Stripe", "Razorpay", "Zepto", "Swiggy", "Notion", "Figma", "Linear", "Vercel", "Spotify"].map((n) => (
                  <div key={n} className="font-display font-bold text-2xl text-muted-foreground/70 hover:text-foreground transition-colors whitespace-nowrap">
                    {n}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container py-24 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> HOW IT WORKS
          </div>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl">Three steps. <span className="text-gradient">Real replies.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-20 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          {[
            { icon: Upload, color: "info", title: "Upload your resume", desc: "Drop your CV. We parse skills, role fit, and target companies in seconds." },
            { icon: Search, color: "primary", title: "We find hiring managers", desc: "Verified emails of decision-makers — not just HR portals or generic forms." },
            { icon: Mail, color: "success", title: "You get replies", desc: "Personalized outreach sent from your Gmail. Track opens and replies." },
          ].map((s, i) => (
            <div key={i} className="relative bg-card rounded-3xl p-8 shadow-card border border-border/50 hover:shadow-elev hover:-translate-y-1 transition-all group">
              <div className="absolute top-6 right-6 font-display font-extrabold text-5xl text-foreground/[0.04] group-hover:text-foreground/10 transition-colors">0{i + 1}</div>
              <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md ${
                s.color === "info" ? "bg-info-soft text-info" :
                s.color === "success" ? "bg-success-soft text-success" :
                "bg-accent text-accent-foreground"
              }`}>
                <s.icon className="w-7 h-7" />
                <div className="absolute -inset-1 rounded-2xl bg-current opacity-10 blur-md -z-10" />
              </div>
              <div className="text-xs font-bold text-muted-foreground mb-2 tracking-wider">STEP {i + 1}</div>
              <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OLD VS NEW */}
      <section className="container py-12">
        <div className="text-center mb-14">
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl">The old way isn't working.</h2>
          <p className="mt-4 text-muted-foreground text-lg">There's a better path to that first job.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-3xl p-8 border border-border shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-danger/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-danger bg-danger-soft px-3 py-1 rounded-full mb-4">
                <XCircle className="w-3.5 h-3.5" /> THE OLD WAY
              </div>
              <h3 className="font-display font-bold text-2xl mb-6 text-muted-foreground">Job portals</h3>
              <ul className="space-y-4">
                {["Apply to 100+ portals", "Resume lost in ATS filters", "Generic, copy-paste applications", "No replies for weeks", "Compete with 1000s of applicants"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-danger-soft flex items-center justify-center shrink-0 mt-0.5">
                      <XCircle className="w-3.5 h-3.5 text-danger" />
                    </div>
                    <span className="text-muted-foreground line-through decoration-danger/40">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="gradient-primary-deep rounded-3xl p-8 shadow-glow text-primary-foreground relative overflow-hidden">
            <Blob className="absolute -top-20 -right-20 w-80 h-80" color="warning" />
            <Blob className="absolute -bottom-20 -left-20 w-72 h-72 opacity-50" color="info" />
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold bg-primary-foreground/20 backdrop-blur px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5" /> THE STUDOJO WAY
              </div>
              <h3 className="font-display font-bold text-2xl mb-6">Direct outreach</h3>
              <ul className="space-y-4">
                {["Direct hiring manager emails", "Personalized outreach", "AI-written, human-approved", "Replies in days — not months", "Stand out, get interviews"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-foreground/25 backdrop-blur flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHT */}
      <section className="container py-24">
        <div className="gradient-primary-deep rounded-[2.5rem] p-10 lg:p-16 shadow-glow text-primary-foreground relative overflow-hidden">
          <Blob className="absolute top-10 right-10 w-96 h-96 opacity-50" color="warning" />
          <Blob className="absolute bottom-0 left-0 w-80 h-80 opacity-40" color="info" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(hsl(0 0% 100% / 0.3) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/15 backdrop-blur text-xs font-semibold mb-5">
                <Sparkles className="w-3.5 h-3.5" /> Featured product
              </div>
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl mb-4">Outreach Dojo</h2>
              <p className="text-lg opacity-90 mb-6">Your personal outreach engine — runs in the background while you study.</p>
              <ul className="space-y-3 mb-8">
                {["AI finds verified hiring managers", "Personalized emails in your tone", "Sent from your Gmail account", "Real-time reply tracking"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> {t}</li>
                ))}
              </ul>
              <Button asChild variant="dark" size="lg">
                <Link to="/outreach">Try Outreach Dojo <ArrowRight /></Link>
              </Button>
            </div>
            <div className="bg-card text-foreground rounded-2xl p-6 shadow-elev relative">
              <div className="absolute -top-3 -right-3 w-20 h-20 gradient-primary rounded-full blur-2xl opacity-60" />
              <div className="relative">
                <div className="flex items-center gap-2 pb-3 border-b border-border mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-danger" />
                  <div className="w-2.5 h-2.5 rounded-full bg-warning" />
                  <div className="w-2.5 h-2.5 rounded-full bg-success" />
                  <span className="ml-2 text-xs text-muted-foreground">draft.gmail</span>
                  <span className="ml-auto text-xs text-success font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" /> Live
                  </span>
                </div>
                <div className="text-sm space-y-2">
                  <div><span className="text-muted-foreground">To:</span> priya@stripe.com</div>
                  <div><span className="text-muted-foreground">Subject:</span> Loved your fraud detection talk</div>
                  <div className="pt-3 text-foreground/90 leading-relaxed">
                    Hi Priya,<br /><br />
                    I'm a CS student at IIT Delhi and your talk on adaptive fraud models inspired my recent project on…
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="hero" size="sm">Send</Button>
                  <Button variant="soft" size="sm">Edit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE TOOLS */}
      <section className="container py-12">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold tracking-wider mb-4">FREE TOOLS</div>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl">Everything you need.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Briefcase, title: "Internship Dojo", desc: "Curated internships with hiring contacts.", color: "success", to: "/internships" },
            { icon: FileText, title: "Resume Maker", desc: "ATS-ready, modern templates in minutes.", color: "info", to: "/dashboard" },
            { icon: ShieldAlert, title: "AI Risk Dojo", desc: "Is your role safe from automation? Find out.", color: "danger", to: "/blog" },
            { icon: BarChart3, title: "Reports", desc: "Industry insights & salary benchmarks.", color: "warning", to: "/blog" },
          ].map((t) => (
            <Link key={t.title} to={t.to} className="relative bg-card rounded-3xl p-6 border border-border/50 shadow-card hover:shadow-elev hover:-translate-y-2 transition-all group overflow-hidden">
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity ${
                t.color === "success" ? "bg-success" :
                t.color === "info" ? "bg-info" :
                t.color === "danger" ? "bg-danger" : "bg-warning"
              }`} />
              <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${
                t.color === "success" ? "bg-success-soft text-success" :
                t.color === "info" ? "bg-info-soft text-info" :
                t.color === "danger" ? "bg-danger-soft text-danger" :
                "bg-warning-soft text-warning"
              }`}>
                <t.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg mb-1">{t.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t.desc}</p>
              <span className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Open <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="container py-24">
        <div className="bg-card rounded-[2.5rem] p-10 lg:p-14 border border-border shadow-card relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] gradient-primary opacity-[0.06] blur-3xl rounded-full" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center">
            {[
              { n: "138+", l: "Students placed" },
              { n: "42%", l: "Reply rate" },
              { n: "3 days", l: "Avg first reply" },
              { n: "95%", l: "Satisfaction" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-extrabold text-4xl lg:text-6xl text-gradient">{s.n}</div>
                <div className="text-sm text-muted-foreground mt-2 font-medium">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="relative grid md:grid-cols-3 gap-5">
            {[
              { name: "Aarav Mehta", role: "Intern @ Razorpay", quote: "Got 4 replies in a week. Razorpay said yes. I'd been ghosted by 60+ portals before.", grad: "from-primary to-primary-glow" },
              { name: "Sara Khan", role: "PM Intern @ Zepto", quote: "The personalized email templates felt human. Recruiter literally said 'best cold email I've read'.", grad: "from-warning to-danger" },
              { name: "Rohan Das", role: "SDE Intern @ Swiggy", quote: "Velocity Learning replaced 3 months of doom-scrolling LinkedIn. Worth every rupee.", grad: "from-info to-success" },
            ].map((t) => (
              <div key={t.name} className="relative rounded-2xl border border-border p-6 bg-card hover:shadow-elev transition-shadow">
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-warning text-warning" />)}
                </div>
                <p className="text-sm text-foreground/80 mb-5 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.grad} shadow-sm`} />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container pb-24">
        <div className="gradient-primary-deep rounded-[2.5rem] p-12 lg:p-20 text-center text-primary-foreground shadow-glow relative overflow-hidden">
          <Blob className="absolute -top-20 -left-20 w-96 h-96 opacity-50" color="warning" />
          <Blob className="absolute -bottom-20 -right-20 w-96 h-96 opacity-50" color="info" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(hsl(0 0% 100% / 0.4) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="relative">
            <Sparkle className="w-10 h-10 text-warning mx-auto mb-6 animate-float" />
            <h2 className="font-display font-extrabold text-4xl lg:text-6xl mb-5 max-w-3xl mx-auto leading-[1.05]">
              2026 recruiting won't wait for you.
            </h2>
            <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
              Start sending real emails today. Land a role you actually want.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="dark" size="lg">
                <Link to="/outreach">Start Outreach</Link>
              </Button>
              <Button asChild variant="soft" size="lg">
                <Link to="/mentors">Join Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

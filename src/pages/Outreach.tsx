import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Mail, Search, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Blob } from "@/components/Decor";

const Outreach = () => (
  <Layout>
    <section className="relative gradient-hero overflow-hidden">
      <div className="container py-20 text-center relative">
        <Blob className="absolute top-10 left-1/4 w-72 h-72" color="primary" />
        <Blob className="absolute bottom-0 right-1/4 w-72 h-72" color="info" />
        <div className="relative">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-card border border-border text-xs font-semibold mb-6">
            ✨ Outreach Dojo
          </div>
          <h1 className="font-display font-extrabold text-5xl lg:text-7xl tracking-tight max-w-4xl mx-auto">
            Email hiring managers <span className="text-gradient">directly.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We find verified emails. AI writes the personal note. You hit send. That's it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="lg">Start Outreach <ArrowRight /></Button>
            <Button variant="outline" size="lg">See how it works</Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-10 text-center">
            {[{n:"138+",l:"Students placed"},{n:"95%",l:"Satisfaction"},{n:"3 days",l:"Avg reply time"}].map(s=>(
              <div key={s.l}>
                <div className="font-display font-extrabold text-3xl text-gradient">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="container py-24">
      <h2 className="font-display font-extrabold text-4xl text-center mb-12">How it works</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {icon:Search, title:"We research", desc:"AI scans LinkedIn & company sites for the right hiring manager.", c:"info"},
          {icon:Mail, title:"AI drafts", desc:"Personalized email referencing their work, your fit, your story.", c:"primary"},
          {icon:Send, title:"You send", desc:"From your Gmail. We track opens & replies in your dashboard.", c:"success"},
        ].map((s,i)=>(
          <div key={i} className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${s.c==="info"?"bg-info-soft text-info":s.c==="success"?"bg-success-soft text-success":"bg-accent text-accent-foreground"}`}>
              <s.icon className="w-7 h-7"/>
            </div>
            <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container pb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-sm font-semibold text-primary mb-3">EMAIL EXAMPLE</div>
          <h2 className="font-display font-extrabold text-4xl mb-4">Sounds like you. Not a bot.</h2>
          <p className="text-muted-foreground text-lg mb-6">
            Every email is grounded in your background, the company's recent news, and the person's actual work.
          </p>
          <ul className="space-y-3">
            {["References specific projects","Highlights mutual interests","Short, scannable, human","Always edit before sending"].map(t=>(
              <li key={t} className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-success mt-0.5"/> {t}</li>
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-3xl shadow-elev p-6 border border-border">
          <div className="flex items-center gap-2 pb-3 border-b border-border mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-danger"/>
            <div className="w-2.5 h-2.5 rounded-full bg-warning"/>
            <div className="w-2.5 h-2.5 rounded-full bg-success"/>
            <span className="ml-2 text-xs text-muted-foreground">Compose · Gmail</span>
          </div>
          <div className="text-sm space-y-2">
            <div className="flex gap-2"><span className="text-muted-foreground w-16">To:</span> arjun.k@razorpay.com</div>
            <div className="flex gap-2"><span className="text-muted-foreground w-16">Subject:</span> Your fintech blog + my UPI side project</div>
            <div className="pt-4 leading-relaxed text-foreground/85">
              Hi Arjun,<br/><br/>
              I read your post on UPI 2.0 last week — the bit on tokenization tradeoffs hit hard. I built a small UPI-mocking sandbox for my college fintech club and ran into the exact issue you flagged.<br/><br/>
              I'm a 3rd year CS student at BITS Pilani applying for SDE intern roles this summer. Would love 15 mins to ask how you'd approach scaling that.<br/><br/>
              Aarav
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            <Button variant="hero" size="sm">Send</Button>
            <Button variant="soft" size="sm">Edit</Button>
          </div>
        </div>
      </div>
    </section>

    <section className="container pb-24">
      <h2 className="font-display font-extrabold text-4xl text-center mb-3">Pricing built for students</h2>
      <p className="text-center text-muted-foreground mb-12">Cancel anytime. No credit card to start.</p>
      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {[
          {name:"Starter", price:"₹0", desc:"Try it out", feat:["10 outreach emails","Basic templates","Reply tracking"], cta:"Start free"},
          {name:"Growth", price:"₹999", desc:"Most popular", feat:["100 emails / month","AI personalization","Verified hiring managers","Priority support"], cta:"Get Growth", featured:true},
          {name:"Scale", price:"₹2,499", desc:"Serious job hunt", feat:["Unlimited emails","Multi-account","1:1 mentor session","Advanced analytics"], cta:"Go Scale"},
        ].map(p=>(
          <div key={p.name} className={`rounded-3xl p-8 ${p.featured?"gradient-primary text-primary-foreground shadow-glow scale-105":"bg-card border border-border shadow-card"}`}>
            {p.featured && <div className="text-xs font-bold mb-2 opacity-90">⭐ MOST POPULAR</div>}
            <div className="font-display font-bold text-lg">{p.name}</div>
            <div className={`text-sm mt-1 ${p.featured?"opacity-80":"text-muted-foreground"}`}>{p.desc}</div>
            <div className="font-display font-extrabold text-5xl mt-5">{p.price}<span className="text-base font-medium opacity-70">/mo</span></div>
            <ul className="my-7 space-y-3 text-sm">
              {p.feat.map(f=><li key={f} className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4"/>{f}</li>)}
            </ul>
            <Button variant={p.featured?"dark":"hero"} className="w-full">{p.cta}</Button>
          </div>
        ))}
      </div>
    </section>

    <section className="container pb-24">
      <div className="gradient-primary rounded-3xl p-12 text-center text-primary-foreground shadow-glow">
        <h2 className="font-display font-extrabold text-4xl lg:text-5xl mb-4">Ready to send your first email?</h2>
        <p className="opacity-90 mb-6">Takes 2 minutes. First one's free.</p>
        <Button asChild variant="dark" size="lg"><Link to="/dashboard">Start now</Link></Button>
      </div>
    </section>
  </Layout>
);

export default Outreach;

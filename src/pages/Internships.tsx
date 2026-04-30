import { Link } from "react-router-dom";
import { ArrowRight, Search, MapPin, IndianRupee, Clock, Sparkles, Filter } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Blob } from "@/components/Decor";
import internshipStudent from "@/assets/internship-student.png";

const internships = [
  { id: "1", role: "SDE Intern", company: "Razorpay", desc: "Build payment infra used by 50M+ Indians.", location: "Bangalore", duration: "6 mo", salary: "₹60k/mo", deadline: "May 30", badge: "High response" },
  { id: "2", role: "Product Intern", company: "Zepto", desc: "Help shape 10-min delivery experience.", location: "Mumbai · Remote", duration: "3 mo", salary: "₹45k/mo", deadline: "May 25", badge: "Direct hiring" },
  { id: "3", role: "Data Science Intern", company: "Swiggy", desc: "Forecast demand across 500+ cities.", location: "Bangalore", duration: "6 mo", salary: "₹70k/mo", deadline: "Jun 5" },
  { id: "4", role: "Design Intern", company: "Cred", desc: "Craft beautiful fintech experiences.", location: "Bangalore", duration: "4 mo", salary: "₹50k/mo", deadline: "May 28", badge: "High response" },
  { id: "5", role: "Growth Intern", company: "Zomato", desc: "Run experiments that move the needle.", location: "Gurugram", duration: "3 mo", salary: "₹40k/mo", deadline: "Jun 10" },
  { id: "6", role: "ML Intern", company: "Sarvam AI", desc: "Train Indic language models.", location: "Bangalore · Remote", duration: "6 mo", salary: "₹80k/mo", deadline: "Jun 1", badge: "Direct hiring" },
];

const Internships = () => (
  <Layout>
    <section className="relative gradient-hero overflow-hidden">
      <div className="container py-20 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="relative z-10">
          <h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-[1.05]">
            Find internships that <span className="text-gradient">actually reply.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Curated roles. Verified hiring managers. No portal black holes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="lg">Browse internships <ArrowRight/></Button>
            <Button variant="outline" size="lg">Get matched by AI</Button>
          </div>
        </div>
        <div className="relative h-[480px]">
          <Blob className="absolute top-10 right-10 w-96 h-96" color="success" />
          <img src={internshipStudent} alt="Student with notebook" className="relative z-10 w-full h-full object-contain" width={1024} height={1024} loading="lazy" />
        </div>
      </div>
    </section>

    <section className="container py-20">
      <h2 className="font-display font-extrabold text-4xl text-center mb-12">Why this is different</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {[
          {t:"No portals", d:"Skip the application black hole. We give you the email."},
          {t:"Direct access", d:"Talk to the actual hiring manager — not just HR."},
          {t:"Curated roles", d:"Hand-picked by us. Quality over quantity."},
        ].map(c=>(
          <div key={c.t} className="bg-card rounded-3xl p-8 border border-border/50 shadow-card">
            <div className="w-12 h-12 rounded-2xl gradient-primary mb-5"/>
            <h3 className="font-display font-bold text-xl mb-2">{c.t}</h3>
            <p className="text-muted-foreground text-sm">{c.d}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container pb-12">
      <div className="bg-card rounded-3xl p-6 border border-border shadow-card flex flex-col lg:flex-row gap-3">
        <div className="flex-1 flex items-center gap-3 px-4 bg-secondary rounded-full">
          <Search className="w-5 h-5 text-muted-foreground"/>
          <Input className="border-0 bg-transparent shadow-none focus-visible:ring-0 px-0" placeholder="Search role, company, skill..."/>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Remote","3-6 months","₹40k+","Tech","Design"].map(f=>(
            <button key={f} className="px-4 py-2 rounded-full text-sm border border-border bg-card hover:bg-accent">{f}</button>
          ))}
          <Button variant="hero"><Filter className="w-4 h-4"/> Filter</Button>
        </div>
      </div>
    </section>

    <section className="container pb-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {internships.map(i=>(
          <Link key={i.id} to={`/internships/${i.id}`} className="bg-card rounded-3xl p-6 border border-border/50 shadow-card hover:shadow-elev hover:-translate-y-1 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl gradient-soft flex items-center justify-center font-display font-extrabold text-primary text-lg">{i.company[0]}</div>
              {i.badge && <span className={`text-xs font-semibold px-3 py-1 rounded-full ${i.badge==="High response"?"bg-success-soft text-success":"bg-warning-soft text-warning"}`}>{i.badge}</span>}
            </div>
            <h3 className="font-display font-bold text-lg">{i.role}</h3>
            <div className="text-sm text-muted-foreground mb-3">{i.company}</div>
            <p className="text-sm text-foreground/80 mb-5">{i.desc}</p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground border-t border-border pt-4">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5"/>{i.location}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5"/>{i.duration}</span>
              <span className="flex items-center gap-1"><IndianRupee className="w-3.5 h-3.5"/>{i.salary.replace("₹","")}</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xs text-danger font-medium">Closes {i.deadline}</span>
              <span className="text-sm font-semibold text-primary">View →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <section className="container pb-24">
      <div className="gradient-primary rounded-3xl p-12 text-center text-primary-foreground shadow-glow">
        <Sparkles className="w-8 h-8 mx-auto mb-3"/>
        <h2 className="font-display font-extrabold text-4xl mb-4">Don't see your dream role?</h2>
        <p className="opacity-90 mb-6">Tell us what you want. We'll find the hiring manager.</p>
        <Button variant="dark" size="lg">Request a role</Button>
      </div>
    </section>
  </Layout>
);

export default Internships;

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const mentors = [
  { name: "Anika Sharma", role: "Sr SWE @ Google", expertise: "System design, FAANG prep" },
  { name: "Karthik Reddy", role: "PM @ Stripe", expertise: "Product interviews, frameworks" },
  { name: "Megha Iyer", role: "Design Lead @ Figma", expertise: "Portfolio reviews, UX career" },
  { name: "Vikram Singh", role: "Founder @ ex-Razorpay", expertise: "Startup careers, fundraising" },
  { name: "Priya Nair", role: "Data Scientist @ Netflix", expertise: "ML interviews, case studies" },
  { name: "Aditya Bose", role: "Eng Manager @ Atlassian", expertise: "Career growth, leadership" },
];

const Mentors = () => (
  <Layout>
    <section className="gradient-hero">
      <div className="container py-20 text-center">
        <h1 className="font-display font-extrabold text-5xl lg:text-7xl tracking-tight max-w-4xl mx-auto">
          Learn from people who've <span className="text-gradient">already done it.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          1:1 sessions with senior engineers, PMs, and designers from your dream companies.
        </p>
      </div>
    </section>

    <section className="container py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map(m => (
          <div key={m.name} className="bg-card rounded-3xl p-7 border border-border/50 shadow-card hover:shadow-elev transition-shadow">
            <div className="w-20 h-20 rounded-3xl gradient-primary mb-5 flex items-center justify-center text-primary-foreground font-display font-extrabold text-2xl">
              {m.name.split(" ").map(n=>n[0]).join("")}
            </div>
            <h3 className="font-display font-bold text-xl">{m.name}</h3>
            <div className="text-sm text-primary font-semibold mt-1">{m.role}</div>
            <p className="text-sm text-muted-foreground mt-3 mb-6">{m.expertise}</p>
            <div className="flex gap-2">
              <Button variant="hero" className="flex-1">Book session</Button>
              <Button variant="outline" size="icon"><Linkedin className="w-4 h-4"/></Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Mentors;

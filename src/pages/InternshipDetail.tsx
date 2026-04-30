import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, IndianRupee, CheckCircle2, ShieldCheck, Mail, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const InternshipDetail = () => {
  const { id } = useParams();
  return (
    <Layout>
      <section className="container pt-10">
        <Link to="/internships" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4"/> All internships
        </Link>
        <div className="flex flex-wrap items-start gap-6 mb-10">
          <div className="w-20 h-20 rounded-3xl gradient-soft flex items-center justify-center font-display font-extrabold text-primary text-3xl">R</div>
          <div className="flex-1">
            <div className="text-sm text-primary font-semibold">Razorpay</div>
            <h1 className="font-display font-extrabold text-4xl lg:text-5xl mt-1">SDE Intern · Payments Infra</h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> Bangalore</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> 6 months</span>
              <span className="flex items-center gap-1"><IndianRupee className="w-4 h-4"/> 60,000/mo</span>
              <span className="px-3 py-1 rounded-full bg-success-soft text-success text-xs font-semibold">High response</span>
            </div>
            <p className="mt-4 text-foreground/80 max-w-2xl">Help build the payment rails powering 50M+ Indians. Direct mentorship, real ownership, no coffee runs.</p>
          </div>
        </div>
      </section>

      <section className="container pb-24 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="font-display font-bold text-2xl mb-3">About the role</h2>
            <p className="text-foreground/80">Join the Payments Infra team building APIs that process millions of transactions per day. You'll write production Go code, design schemas, and ship features end-to-end alongside senior engineers.</p>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl mb-3">What you'll do</h2>
            <ul className="space-y-2">
              {["Ship real features to production","Own one micro-service end-to-end","Pair-program with senior engineers","Present demos in weekly engineering reviews"].map(t=>(
                <li key={t} className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5"/> {t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl mb-3">Why this matters</h2>
            <p className="text-foreground/80">Direct path to a PPO. Last 3 cohorts had 80%+ conversion. You'll work on systems used by Indians every day — not toy projects.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="text-xs font-bold text-primary mb-3">MUST HAVE</div>
              <ul className="space-y-2 text-sm">
                <li>· Strong DSA fundamentals</li>
                <li>· One backend language (Go/Java/Python)</li>
                <li>· Built & shipped a side project</li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="text-xs font-bold text-success mb-3">NICE TO HAVE</div>
              <ul className="space-y-2 text-sm">
                <li>· Distributed systems coursework</li>
                <li>· Open-source contributions</li>
                <li>· Fintech curiosity</li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 self-start">
          <div className="bg-card rounded-3xl p-7 border border-border shadow-elev">
            <div className="text-xs text-muted-foreground">Stipend</div>
            <div className="font-display font-extrabold text-3xl">₹60,000<span className="text-base text-muted-foreground font-medium">/mo</span></div>
            <div className="grid grid-cols-2 gap-3 my-5 text-sm">
              <div><div className="text-muted-foreground text-xs">Location</div><div className="font-semibold">Bangalore</div></div>
              <div><div className="text-muted-foreground text-xs">Duration</div><div className="font-semibold">6 months</div></div>
              <div><div className="text-muted-foreground text-xs">Type</div><div className="font-semibold">On-site</div></div>
              <div><div className="text-muted-foreground text-xs">Closes</div><div className="font-semibold text-danger">May 30</div></div>
            </div>
            <Button variant="hero" size="lg" className="w-full">
              <Mail className="w-4 h-4"/> Apply directly (no portal)
            </Button>
            <div className="mt-5 space-y-2 text-sm">
              <div className="flex gap-2 items-center"><ShieldCheck className="w-4 h-4 text-success"/> No ATS filtering</div>
              <div className="flex gap-2 items-center"><ShieldCheck className="w-4 h-4 text-success"/> Direct hiring manager access</div>
              <div className="flex gap-2 items-center"><ShieldCheck className="w-4 h-4 text-success"/> 80%+ PPO conversion</div>
            </div>
          </div>
        </aside>
      </section>
    </Layout>
  );
};

export default InternshipDetail;

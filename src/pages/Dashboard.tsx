import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, MailCheck, Bookmark, TrendingUp, Plus } from "lucide-react";

const Dashboard = () => (
  <Layout>
    <section className="container py-12">
      <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
        <div>
          <div className="text-sm text-muted-foreground">Welcome back,</div>
          <h1 className="font-display font-extrabold text-4xl mt-1">Aarav 👋</h1>
        </div>
        <Button variant="hero" size="lg"><Plus className="w-4 h-4"/> New outreach</Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {[
          {icon:Mail, label:"Emails sent", value:"42", c:"primary"},
          {icon:MailCheck, label:"Replies received", value:"18", c:"success"},
          {icon:Bookmark, label:"Saved internships", value:"7", c:"info"},
          {icon:TrendingUp, label:"Reply rate", value:"42%", c:"warning"},
        ].map(s=>(
          <div key={s.label} className="bg-card rounded-3xl p-6 border border-border/50 shadow-card">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${
              s.c==="primary"?"bg-accent text-primary":
              s.c==="success"?"bg-success-soft text-success":
              s.c==="info"?"bg-info-soft text-info":"bg-warning-soft text-warning"
            }`}>
              <s.icon className="w-5 h-5"/>
            </div>
            <div className="text-3xl font-display font-extrabold">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card rounded-3xl p-7 border border-border/50 shadow-card">
          <h2 className="font-display font-bold text-xl mb-5">Recent outreach</h2>
          <div className="space-y-3">
            {[
              {co:"Razorpay", name:"Arjun K · Eng Manager", status:"Replied", c:"success"},
              {co:"Stripe", name:"Priya M · Sr Eng", status:"Opened", c:"info"},
              {co:"Zepto", name:"Rahul S · PM", status:"Sent", c:"warning"},
              {co:"Cred", name:"Neha T · Design Lead", status:"Replied", c:"success"},
            ].map((r,i)=>(
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition">
                <div className="w-10 h-10 rounded-xl gradient-soft text-primary flex items-center justify-center font-bold">{r.co[0]}</div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{r.co}</div>
                  <div className="text-xs text-muted-foreground">{r.name}</div>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  r.c==="success"?"bg-success-soft text-success":
                  r.c==="info"?"bg-info-soft text-info":"bg-warning-soft text-warning"
                }`}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-3xl p-7 border border-border/50 shadow-card">
          <h2 className="font-display font-bold text-xl mb-2">Progress</h2>
          <p className="text-sm text-muted-foreground mb-6">Goal: 100 emails this month</p>
          <div className="relative w-40 h-40 mx-auto mb-6">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--secondary))" strokeWidth="3"/>
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="42, 100" strokeLinecap="round"/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="font-display font-extrabold text-3xl">42</div>
              <div className="text-xs text-muted-foreground">of 100</div>
            </div>
          </div>
          <Button variant="hero" className="w-full">Send 5 more today</Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Dashboard;

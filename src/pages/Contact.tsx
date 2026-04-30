import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="gradient-hero">
      <div className="container py-20 text-center">
        <h1 className="font-display font-extrabold text-5xl lg:text-7xl tracking-tight">
          Got questions? <span className="text-gradient">We've got answers.</span>
        </h1>
      </div>
    </section>

    <section className="container py-20 grid lg:grid-cols-2 gap-12">
      <form className="bg-card rounded-3xl p-8 border border-border shadow-card space-y-4">
        <div>
          <label className="text-sm font-semibold mb-2 block">Name</label>
          <Input placeholder="Your name"/>
        </div>
        <div>
          <label className="text-sm font-semibold mb-2 block">Email</label>
          <Input type="email" placeholder="you@college.edu"/>
        </div>
        <div>
          <label className="text-sm font-semibold mb-2 block">Message</label>
          <Textarea placeholder="How can we help?" rows={6}/>
        </div>
        <Button variant="hero" size="lg" className="w-full">Send message</Button>
      </form>

      <div className="space-y-6">
        {[
          {icon:Mail,t:"Email us", d:"hello@velocity-learning.in", c:"primary"},
          {icon:MapPin,t:"Based in", d:"Bangalore, India", c:"success"},
          {icon:Clock,t:"Response time", d:"We reply within 24 hours", c:"warning"},
        ].map(c=>(
          <div key={c.t} className="bg-card rounded-3xl p-7 border border-border/50 shadow-card flex gap-4 items-start">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${c.c==="primary"?"bg-accent text-primary":c.c==="success"?"bg-success-soft text-success":"bg-warning-soft text-warning"}`}>
              <c.icon className="w-6 h-6"/>
            </div>
            <div>
              <div className="font-display font-bold text-lg">{c.t}</div>
              <div className="text-muted-foreground">{c.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Contact;

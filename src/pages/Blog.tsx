import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const posts = [
  { id: "cold-email", cat: "Outreach", title: "How to write a cold email that actually gets replies", date: "Apr 22, 2026", read: "6 min", color: "primary" },
  { id: "ats", cat: "Resume", title: "Why ATS systems reject 75% of resumes (and how to beat them)", date: "Apr 15, 2026", read: "8 min", color: "info" },
  { id: "ai-jobs", cat: "AI Risk", title: "Which student jobs will survive AI by 2030?", date: "Apr 9, 2026", read: "10 min", color: "danger" },
  { id: "stipend", cat: "Reports", title: "India internship stipend report 2026", date: "Apr 2, 2026", read: "5 min", color: "warning" },
  { id: "linkedin", cat: "Outreach", title: "LinkedIn isn't enough. Here's what works.", date: "Mar 28, 2026", read: "7 min", color: "primary" },
  { id: "portfolio", cat: "Resume", title: "Build a portfolio recruiters actually open", date: "Mar 21, 2026", read: "9 min", color: "info" },
];

const Blog = () => (
  <Layout>
    <section className="gradient-hero">
      <div className="container py-16 text-center">
        <h1 className="font-display font-extrabold text-5xl lg:text-7xl tracking-tight">Blog</h1>
        <p className="mt-4 text-muted-foreground">Real stories. Real frameworks. No fluff.</p>
        <div className="max-w-md mx-auto mt-8 flex items-center gap-3 px-5 bg-card rounded-full border border-border shadow-sm">
          <Search className="w-5 h-5 text-muted-foreground"/>
          <Input className="border-0 shadow-none bg-transparent focus-visible:ring-0 px-0" placeholder="Search articles..."/>
        </div>
      </div>
    </section>

    <section className="container py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p => (
          <Link key={p.id} to={`/blog/${p.id}`} className="bg-card rounded-3xl border border-border/50 shadow-card hover:shadow-elev hover:-translate-y-1 transition-all overflow-hidden">
            <div className={`h-44 ${
              p.color==="primary"?"gradient-primary":
              p.color==="info"?"bg-info":
              p.color==="danger"?"bg-danger":"bg-warning"
            } relative`}>
              <div className="blob bg-card/30 w-32 h-32 absolute top-4 right-4 blur-xl"/>
            </div>
            <div className="p-6">
              <div className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                p.color==="primary"?"bg-accent text-accent-foreground":
                p.color==="info"?"bg-info-soft text-info":
                p.color==="danger"?"bg-danger-soft text-danger":"bg-warning-soft text-warning"
              }`}>{p.cat}</div>
              <h3 className="font-display font-bold text-lg leading-snug mb-3">{p.title}</h3>
              <div className="text-xs text-muted-foreground">{p.date} · {p.read} read</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;

import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  return (
    <Layout>
      <article className="container max-w-3xl py-16">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4"/> All posts
        </Link>
        <div className="text-xs font-semibold text-primary mb-3">OUTREACH · 6 MIN READ · APR 22, 2026</div>
        <h1 className="font-display font-extrabold text-4xl lg:text-5xl leading-tight mb-6">
          How to write a cold email that actually gets replies
        </h1>
        <div className="flex items-center gap-3 mb-10 text-sm text-muted-foreground">
          <div className="w-10 h-10 rounded-full gradient-primary"/>
          <div>By Aarav Mehta · Founder, Velocity Learning</div>
        </div>

        <div className="h-72 rounded-3xl gradient-primary mb-10 shadow-glow"/>

        <div className="space-y-6 text-foreground/85 leading-relaxed">
          <p>Most cold emails fail because they sound like cold emails. They're generic, long, and ask for too much. Here's the framework we use to get a 42% reply rate at Velocity Learning.</p>

          <h2 className="font-display font-bold text-2xl pt-6">1. Lead with their work, not yours</h2>
          <p>The first line should reference something specific the recipient did — a blog post, talk, or feature ship. This shows you actually care.</p>

          <div className="rounded-2xl bg-accent border-l-4 border-primary p-6 flex gap-3">
            <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-1"/>
            <div className="text-sm">
              <b>Tip:</b> Skip "I hope this email finds you well." Get to the point in line one.
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl pt-6">2. Show, don't tell</h2>
          <p>Instead of saying "I'm passionate about fintech," link to a project where you built something fintech-related. Proof beats claims every time.</p>

          <h2 className="font-display font-bold text-2xl pt-6">3. Make the ask tiny</h2>
          <p>Don't ask for a job. Ask for 15 minutes. Ask for one piece of advice. Lower the bar to a yes.</p>
        </div>

        <div className="gradient-primary rounded-3xl p-10 mt-14 text-center text-primary-foreground shadow-glow">
          <h3 className="font-display font-extrabold text-3xl mb-3">Ready to land your next role?</h3>
          <p className="opacity-90 mb-6">Let Velocity Learning write your first cold email — free.</p>
          <Button asChild variant="dark" size="lg"><Link to="/outreach">Try Outreach Dojo</Link></Button>
        </div>
      </article>
    </Layout>
  );
};

export default BlogDetail;

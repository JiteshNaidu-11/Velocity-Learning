import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-24">
    <div className="container py-16 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-1">
        <Logo />
        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
          Skip job portals. Reach hiring managers directly. Built for students.
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4">Product</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/outreach" className="hover:text-foreground">Outreach</Link></li>
          <li><Link to="/internships" className="hover:text-foreground">Internships</Link></li>
          <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4">Resources</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
          <li><Link to="/mentors" className="hover:text-foreground">Mentors</Link></li>
          <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
          <li>Careers</li>
          <li>Privacy</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
      © 2026 Velocity Learning. Built for students who want real replies.
    </div>
  </footer>
);

export default Footer;

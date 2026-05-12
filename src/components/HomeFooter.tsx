import { Link } from "react-router-dom";
import { Twitter, Linkedin, Youtube, Instagram, Send, CheckCircle2 } from "lucide-react";

const HomeFooter = () => (
  <footer className="relative bg-gradient-to-b from-gray-950 to-black text-gray-400 pt-14 sm:pt-20 pb-8 px-4 sm:px-6 overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-3xl" />

    <div className="relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-16 pb-12 border-b border-gray-800/50">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600 shadow-lg" />
              <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
                <span className="text-white font-black text-xl italic">V</span>
              </div>
            </div>
            <div>
              <div className="text-lg font-black text-white">Velocity</div>
              <div className="text-[10px] font-bold tracking-[0.25em] text-violet-400 uppercase -mt-1">Learning</div>
            </div>
          </div>
          <p className="text-gray-400 text-base leading-relaxed max-w-md mb-6">
            The future of coding education. Structured, guided, practical, and built for careers.
          </p>
          <div className="flex gap-2">
            {[Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
              <button key={i} className="group w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-600 border border-white/10 hover:border-transparent flex items-center justify-center transition-all">
                <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 sm:col-span-1">
          <div className="text-xs font-black tracking-[0.2em] uppercase text-white mb-5">Quick Links</div>
          <ul className="space-y-3 text-sm">
            {(["Courses", "Roadmap", "Mentorship", "FAQs"] as const).map((l) => (
              <li key={l}><a href={l === "FAQs" ? "/#faqs" : "#"} className="text-gray-400 hover:text-violet-400 transition-colors inline-flex items-center gap-1.5 group">
                <span className="w-0 group-hover:w-2 h-px bg-violet-400 transition-all" />
                {l}
              </a></li>
            ))}
            <li><Link to="/about" className="text-gray-400 hover:text-violet-400 transition-colors inline-flex items-center gap-1.5 group">
              <span className="w-0 group-hover:w-2 h-px bg-violet-400 transition-all" />
              About Us
            </Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="lg:col-span-2 sm:col-span-1">
          <div className="text-xs font-black tracking-[0.2em] uppercase text-white mb-5">Legal</div>
          <ul className="space-y-3 text-sm">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
              <li key={l}><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors inline-flex items-center gap-1.5 group">
                <span className="w-0 group-hover:w-2 h-px bg-violet-400 transition-all" />
                {l}
              </a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="sm:col-span-2 lg:col-span-3">
          <div className="text-xs font-black tracking-[0.2em] uppercase text-white mb-5">Stay Updated</div>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">Get launch updates straight to your inbox.</p>
          <div className="relative">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full pl-4 pr-14 py-3.5 text-sm rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all"
            />
            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 flex items-center justify-center transition-all hover:scale-105">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] text-emerald-400">
            <CheckCircle2 className="w-3 h-3" />
            <span>No spam. Unsubscribe anytime.</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-gray-500">
          © 2025 <span className="text-white font-semibold">Velocity Learning</span>. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
);

export default HomeFooter;

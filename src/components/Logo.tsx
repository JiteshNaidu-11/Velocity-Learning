import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-xl">
    <span className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shadow-glow">
      V
    </span>
    <span className="text-foreground">Velocity Learning</span>
  </Link>
);

export default Logo;

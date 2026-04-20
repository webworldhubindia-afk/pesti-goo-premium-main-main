import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Digital Services', path: '/digital-services' },
  { label: 'Team', path: '/team' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      <div className="container-custom flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Pestigo Pest Control" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <span className="text-lg font-bold text-primary tracking-tight">Pestigo</span>
            <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Pest Control</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-secondary font-semibold'
                  : 'text-foreground hover:text-secondary'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:9955562637"
            className="ml-3 px-5 py-2.5 cta-gradient text-primary-foreground rounded-lg text-sm font-semibold shadow-lg shadow-secondary/25 hover:shadow-secondary/40 transition-shadow active:scale-[0.97]"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="flex flex-col py-2 px-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-secondary bg-muted font-semibold'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:9955562637"
              className="mt-2 mb-2 px-5 py-3 cta-gradient text-primary-foreground rounded-lg text-sm font-semibold text-center"
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

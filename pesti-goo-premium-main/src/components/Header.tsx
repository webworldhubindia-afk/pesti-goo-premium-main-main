import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/new-logo.jpeg';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Contact', path: '/contact' },
];

const serviceItems = [
  { label: 'Cockroach Control', path: '/services/cockroach-control' },
  { label: 'Termite Control', path: '/services/termite-control' },
  { label: 'Bed Bug Control', path: '/services/bed-bug-control' },
  { label: 'Mosquito Control', path: '/services/mosquito-control' },
  { label: 'Rodent Control', path: '/services/rodent-control' },
  { label: 'General Pest Control', path: '/services/general-pest-control' },
  { label: 'Residential Pest Control', path: '/services/residential-pest-control' },
  { label: 'Commercial Pest Control', path: '/services/commercial-pest-control' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      <div className="container-custom flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Pestigo Pest Control" className="h-16 w-16 object-contain" />
          <div className="leading-tight">
            <span className="text-lg font-bold text-primary tracking-tight"></span>
            <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-medium"></span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            item.label === 'Services' ? (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    location.pathname.startsWith('/services')
                      ? 'text-secondary font-semibold'
                      : 'text-foreground hover:text-secondary'
                  }`}
                >
                  {item.label}
                  <ChevronDown size={16} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-xl border border-border py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm font-semibold text-secondary border-b border-border hover:bg-muted transition-colors"
                    >
                      All Services
                    </Link>
                    {serviceItems.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
            )
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
              item.label === 'Services' ? (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                      location.pathname.startsWith('/services')
                        ? 'text-secondary bg-muted font-semibold'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
                  <div className="ml-4 mt-1 space-y-1">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors rounded-md"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
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
              )
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

import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/new-logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Pestigo" className="h-14 w-14 object-contain brightness-200" />
            <span className="text-lg font-bold">Pestigo Pest Control</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed mb-4">
            Professional pest control services in Delhi NCR. Government registered and certified. Your trusted partner for a pest-free environment.
          </p>
          <div className="flex gap-3">
            <a href="https://wa.me/919955562637" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="WhatsApp">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://www.facebook.com/pestigopestcont" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Facebook">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/pestigopestcont/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Instagram">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.youtube.com/@pestigopestcont" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="YouTube">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://in.pinterest.com/pestigopestcont/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Pinterest">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.464-6.233 7.464-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/pestigopestcont/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="LinkedIn">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://x.com/Pestigopestcont" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Twitter">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'About', 'Services', 'Team', 'Certificates', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-base font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            {['Cockroach Control', 'Termite Control', 'Bed Bug Control', 'Mosquito Control', 'Rodent Control', 'General Pest Control'].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <div className="flex gap-2 items-start">
              <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
              <span className="opacity-80">Plot No. F/F 483 Ground Floor, Nearby Pracheen Shiv Mandir, Tughlaqabad, Delhi NCR, Delhi 110062</span>
            </div>
            <a href="tel:6205840761" className="flex gap-2 items-center opacity-80 hover:text-secondary transition-colors">
              <Phone size={16} className="text-secondary" /> +91 6205840761
            </a>
            <a href="tel:9955562637" className="flex gap-2 items-center opacity-80 hover:text-secondary transition-colors">
              <Phone size={16} className="text-secondary" /> +91 9955562637
            </a>
            <a href="mailto:pestigopestc@gmail.com" className="flex gap-2 items-center opacity-80 hover:text-secondary transition-colors">
              <Mail size={16} className="text-secondary" /> pestigopestc@gmail.com
            </a>
            <a href="mailto:Infio@pestigopestcontrol.co.in" className="flex gap-2 items-center opacity-80 hover:text-secondary transition-colors">
              <Mail size={16} className="text-secondary" /> Infio@pestigopestcontrol.co.in
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-4 px-4">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-2 text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} Pestigo Pest Control. All rights reserved.</p>
          <p>Shop Act Reg: 2026015834</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

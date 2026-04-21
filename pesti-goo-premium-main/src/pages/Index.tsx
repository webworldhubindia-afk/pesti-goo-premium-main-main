import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, CheckCircle, Star, ArrowRight, Bug, Rat, Zap } from 'lucide-react';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import heroImg from '@/assets/hero-1.jpg';
import whatsappImg1 from '@/assets/about-us.jpg';
import whatsappImg2 from '@/assets/team-group.jpg';
import certificate1 from '@/assets/certificate-1.jpeg';
import certificate2 from '@/assets/certificate-2.jpeg';
import pestControl1 from '@/assets/pest-control-1.jpg';
import pestControl2 from '@/assets/pest-control-2.jpg';
import pestControl3 from '@/assets/pest-control-3.jpg';
import whatsappBanner from '@/assets/whatsapp-banner.jpeg';

const stats = [
  { label: 'Happy Customers', value: 1200, suffix: '+' },
  { label: 'Projects Done', value: 3500, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Team Members', value: 15, suffix: '+' },
];

const services = [
  { icon: Bug, title: 'Cockroach Control', desc: 'Advanced gel and spray treatments to eliminate cockroach infestations completely.' },
  { icon: Bug, title: 'Termite Control', desc: 'Pre and post-construction anti-termite treatment for lasting protection.' },
  { icon: Bug, title: 'Bed Bug Control', desc: 'Chemical and heat treatments to eradicate bed bugs from your property.' },
  { icon: Zap, title: 'Mosquito Control', desc: 'Fogging and larvicide treatments to create a mosquito-free environment.' },
  { icon: Rat, title: 'Rodent Control', desc: 'Professional trapping and exclusion services for rat and mice problems.' },
  { icon: Shield, title: 'General Pest Control', desc: 'Comprehensive multi-pest treatment for homes and offices.' },
];

const testimonials = [
  { name: 'Rajesh Sharma', text: 'Excellent service! The team was professional and thorough. Our cockroach problem was solved in one visit.', rating: 5 },
  { name: 'Priya Gupta', text: 'Very reliable pest control company. They came on time and did a fantastic job with termite treatment.', rating: 5 },
  { name: 'Anil Verma', text: 'Highly recommend Pestigo for bed bug treatment. Affordable prices and great results.', rating: 5 },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.max(1, Math.floor(target / 60));
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 25);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref} className="text-3xl md:text-4xl font-bold text-secondary">{count}{suffix}</div>;
};

const Index = () => {
  useScrollReveal();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional pest control service" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-80" />
        </div>
        <div className="relative z-10 container-custom px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6 animate-count-up">
              Government Registered & Certified
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6" style={{ lineHeight: '1.1' }}>
              Protect Your Home From Unwanted Pests
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
              Professional pest control services in South Delhi. Safe, effective, and affordable solutions for your home and business.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:9955562637"
                className="px-8 py-4 cta-gradient text-primary-foreground rounded-xl font-semibold shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transition-all active:scale-[0.97]"
              >
                Call Now — 9955562637
              </a>
              <a
                href="https://wa.me/919955562637"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/20 transition-all active:scale-[0.97] backdrop-blur-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card py-12 -mt-12 relative z-10">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <CountUp target={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10">
        <div className="container-custom px-4">
          <div className="max-w-5xl mx-auto animate-reveal">
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800">
                <img 
                  src={whatsappBanner} 
                  alt="Pestigo Pest Control Professional Service" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-secondary/30 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/30 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-white dark:bg-gray-900 px-8 py-4 rounded-full shadow-xl border-2 border-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-800 dark:text-white">Professional Pest Control Services</span>
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-reveal-left">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Trusted Pest Control Experts in South Delhi</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pestigo Pest Control is a government-registered pest management company serving residential and commercial properties across South Delhi. With a team of trained technicians and eco-friendly solutions, we ensure complete pest elimination.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Licensed & Certified', 'Eco-Friendly Products', 'Trained Technicians', '24/7 Support'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={16} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
            <div className="animate-reveal-right">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={heroImg} alt="Pest control service" className="w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Service Gallery */}
      <section className="section-padding bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5">
        <div className="container-custom">
          <div className="text-center mb-12 animate-reveal">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Professional Pest Control in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">See our expert technicians delivering top-quality pest control services across South Delhi.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Large Featured Image */}
            <div className="lg:col-span-2 animate-reveal-left group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96 lg:h-[500px]">
                <img 
                  src={pestControl1} 
                  alt="Professional pest control technician at work" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-2">Expert Treatment</h3>
                    <p className="text-white/90 text-sm">Our trained professionals using advanced equipment</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 px-4 py-2 bg-secondary/90 backdrop-blur-sm rounded-full">
                  <span className="text-white text-xs font-bold">Featured</span>
                </div>
              </div>
            </div>

            {/* Side Images Stack */}
            <div className="flex flex-col gap-6">
              <div className="animate-reveal-right group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl h-48 lg:h-[240px]">
                  <img 
                    src={pestControl2} 
                    alt="Pest control worker with protective gear" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-semibold">Safety First Approach</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-reveal-right group" style={{ animationDelay: '0.2s' }}>
                <div className="relative overflow-hidden rounded-2xl shadow-xl h-48 lg:h-[240px]">
                  <img 
                    src={pestControl3} 
                    alt="Pest control service in residential area" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-semibold">Residential & Commercial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Overlay */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 animate-reveal">
            {[
              { number: '1200+', label: 'Happy Clients' },
              { number: '3500+', label: 'Projects Done' },
              { number: '5+', label: 'Years Experience' },
              { number: '100%', label: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-4 text-center shadow-md border border-border hover:shadow-lg transition-shadow">
                <p className="text-2xl md:text-3xl font-bold text-secondary mb-1">{stat.number}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-12 animate-reveal">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Professional Pest Control Solutions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="animate-reveal bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-border group">
                <div className="w-12 h-12 rounded-lg cta-gradient flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <service.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                <Link to="/services" className="text-secondary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-reveal">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Your Trusted Pest Control Partner</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Government Registered', desc: 'GST & Udyam certified company with proper licensing.' },
              { icon: Award, title: 'Experienced Team', desc: 'Skilled technicians with years of pest control expertise.' },
              { icon: Users, title: 'Customer First', desc: '1200+ happy customers trust us for their pest problems.' },
              { icon: CheckCircle, title: 'Guaranteed Results', desc: 'Effective treatments with follow-up service guarantee.' },
            ].map((item) => (
              <div key={item.title} className="animate-reveal text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Banner */}
      <section className="section-padding bg-gradient-to-br from-secondary/5 via-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="text-center mb-12 animate-reveal">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Certifications</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Government Registered & Certified</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our certifications demonstrate our commitment to professional standards and quality service delivery.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="animate-reveal-left group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-4 border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary"></div>
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={certificate1} 
                    alt="Government Certificate 1" 
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-secondary/10 rounded-full blur-xl group-hover:bg-secondary/20 transition-all"></div>
              </div>
            </div>
            <div className="animate-reveal-right group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-4 border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary"></div>
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={certificate2} 
                    alt="Government Certificate 2" 
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-secondary/10 rounded-full blur-xl group-hover:bg-secondary/20 transition-all"></div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 animate-reveal">
            <Link to="/certificates" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary-foreground rounded-xl font-semibold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl active:scale-[0.97]">
              View All Certificates <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding hero-gradient">
        <div className="container-custom">
          <div className="text-center mb-12 animate-reveal">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="animate-reveal bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-primary-foreground font-semibold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12 animate-reveal">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">See Our Professional Service in Action</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="animate-reveal-left group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={whatsappImg1} 
                  alt="Professional pest control service" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="animate-reveal-right group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={whatsappImg2} 
                  alt="Pest control treatment" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm cta-gradient">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 animate-reveal">
            Need Pest Control Service? Call Us Now!
          </h2>
          <p className="text-primary-foreground/80 mb-6 animate-reveal">Get a free inspection and quote today.</p>
          <div className="flex flex-wrap justify-center gap-4 animate-reveal">
            <a href="tel:9955562637" className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all active:scale-[0.97]">
              Call 9955562637
            </a>
            <Link to="/contact" className="px-8 py-3 bg-primary-foreground text-foreground rounded-xl font-semibold hover:bg-primary-foreground/90 transition-all active:scale-[0.97]">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

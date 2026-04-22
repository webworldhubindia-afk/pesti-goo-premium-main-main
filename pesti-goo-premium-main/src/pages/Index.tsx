import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, CheckCircle, Star, ArrowRight, Bug, Rat, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import whatsappImg1 from '@/assets/about-team.jpg';
import whatsappImg2 from '@/assets/team-group.jpg';
import trustedExperts from '@/assets/trusted-experts.png';
import heroBeautiful from '@/assets/hero-beautiful.png';
import certificate1 from '@/assets/certificate-1.jpeg';
import certificate2 from '@/assets/certificate-2.jpeg';
import certificate3 from '@/assets/certificate-3.jpeg';
import certificate4 from '@/assets/certificate-4.jpeg';
import certificate5 from '@/assets/certificate-5.jpeg';
import certificate6 from '@/assets/certificate-6.jpeg';
import pestControl1 from '@/assets/pest-control-1.jpg';
import pestControl2 from '@/assets/pest-control-2.jpg';
import pestControl3 from '@/assets/pest-control-3.jpg';
import whatsappBanner from '@/assets/whatsapp-banner.jpeg';
import geminiImage from '@/assets/gemini-generated-image.png';
import geminiImage1 from '@/assets/gemini-image-1.png';
import geminiImage2 from '@/assets/gemini-image-2.png';
import geminiImage3 from '@/assets/gemini-image-3.png';
import geminiService1 from '@/assets/gemini-service-1.png';
import geminiService2 from '@/assets/gemini-service-2.png';
import geminiService3 from '@/assets/gemini-service-3.png';

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

const Typewriter = ({ text, delay = 50, startDelay = 0 }: { text: string; delay?: number; startDelay?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, startDelay);
    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started || currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setCurrentText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text, started]);

  return <span>{currentText}</span>;
};

const Index = () => {
  useScrollReveal();
  const [currentCertSlide, setCurrentCertSlide] = useState(0);
  
  const certificates = [
    { src: certificate1, alt: 'Government Certificate 1' },
    { src: certificate2, alt: 'Government Certificate 2' },
    { src: certificate3, alt: 'Government Certificate 3' },
    { src: certificate4, alt: 'Government Certificate 4' },
    { src: certificate5, alt: 'Government Certificate 5' },
    { src: certificate6, alt: 'Government Certificate 6' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCertSlide((prev) => (prev + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [certificates.length]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img 
            src={heroBeautiful} 
            alt="Professional pest control service" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container-custom px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <div className="min-h-[28px] mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
                <Typewriter text="Government Registered & Certified" delay={40} startDelay={300} />
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 min-h-[120px] md:min-h-[140px]" style={{ lineHeight: '1.1' }}>
              <Typewriter text="Protect Your Home From Unwanted Pests" delay={50} startDelay={1500} />
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-lg min-h-[60px]">
              <Typewriter text="Professional pest control services in Delhi NCR. Safe, effective, and affordable solutions for your home and business." delay={35} startDelay={3500} />
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:9955562637"
                className="px-8 py-4 cta-gradient text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all active:scale-[0.97]"
              >
                Call Now 
              </a>
              <a
                href="https://wa.me/919955562637"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/40 text-white rounded-xl font-semibold hover:bg-white/30 transition-all active:scale-[0.97]"
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

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-reveal-left">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Trusted Pest Control Experts in Delhi NCR</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pestigo Pest Control is a government-registered pest management company serving residential and commercial properties across Delhi NCR. With a team of trained technicians and eco-friendly solutions, we ensure complete pest elimination.
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
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={trustedExperts} alt="Trusted pest control experts in Delhi NCR" className="w-full h-80 object-contain bg-gray-50" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-12 animate-reveal">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Professional Pest Control Solutions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '/temp-images/pest-icon-1.png', title: 'Cockroach Control', desc: 'Advanced gel and spray treatments to eliminate cockroach infestations completely.' },
              { icon: '/temp-images/pest-icon-2.png', title: 'Termite Control', desc: 'Pre and post-construction anti-termite treatment for lasting protection.' },
              { icon: '/temp-images/pest-icon-3.png', title: 'Bed Bug Control', desc: 'Chemical and heat treatments to eradicate bed bugs from your property.' },
              { icon: '/temp-images/pest-icon-4.png', title: 'Mosquito Control', desc: 'Fogging and larvicide treatments to create a mosquito-free environment.' },
              { icon: '/temp-images/pest-icon-5.png', title: 'Rodent Control', desc: 'Professional trapping and exclusion services for rat and mice problems.' },
              { icon: '/temp-images/pest-icon-6.png', title: 'General Pest Control', desc: 'Comprehensive multi-pest treatment for homes and offices.' },
            ].map((service, index) => (
              <div key={service.title} className="animate-reveal bg-card rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all border-2 border-primary/10 hover:border-primary/30 group hover:-translate-y-2">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-primary/20">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-12 h-12 object-contain" 
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-center">{service.desc}</p>
                <Link to="/services" className="text-primary text-sm font-semibold inline-flex items-center justify-center gap-1 hover:gap-2 transition-all w-full">
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

      {/* Featured Image Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container-custom px-4">
          <div className="max-w-6xl mx-auto animate-reveal">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Professional Excellence</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Committed to Quality Service</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Delivering exceptional pest control solutions with professionalism and care</p>
            </div>
            
            <div className="relative group">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                <img 
                  src={geminiImage} 
                  alt="Professional pest control service excellence" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/30 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-secondary/30 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-white px-10 py-5 rounded-full shadow-2xl border-2 border-primary/30">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-base font-bold text-gray-800">Trusted by 1200+ Happy Customers</span>
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Service Gallery */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom px-4">
          <div className="text-center mb-12 animate-reveal">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Excellence</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Professional Pest Control Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Delivering outstanding results with advanced techniques and eco-friendly solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Image 1 */}
            <div className="animate-reveal group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden">
                  <img 
                    src={geminiImage1} 
                    alt="Professional pest control service" 
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold text-lg">Expert Technicians</p>
                    <p className="text-white/90 text-sm">Trained professionals at your service</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <CheckCircle size={24} className="text-primary" />
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="animate-reveal group" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
                <div className="absolute -inset-2 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden">
                  <img 
                    src={geminiImage2} 
                    alt="Quality pest control treatment" 
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold text-lg">Advanced Solutions</p>
                    <p className="text-white/90 text-sm">Latest technology and methods</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <Award size={24} className="text-secondary" />
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="animate-reveal group" style={{ animationDelay: '0.4s' }}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden">
                  <img 
                    src={geminiImage3} 
                    alt="Complete pest management" 
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold text-lg">Guaranteed Results</p>
                    <p className="text-white/90 text-sm">100% satisfaction guaranteed</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <Shield size={24} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Slider Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        <div className="container-custom">
          <div className="text-center mb-12 animate-reveal">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Certifications</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Government Registered & Certified</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our certifications demonstrate our commitment to professional standards and quality service delivery.</p>
          </div>
          
          {/* Certificate Slider */}
          <div className="relative max-w-4xl mx-auto animate-reveal">
            {/* Main Slider Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-6 md:p-8 border-2 border-primary/20">
              {/* Top Gradient Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-primary"></div>
              
              {/* Slides Container */}
              <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentCertSlide
                        ? 'opacity-100 translate-x-0'
                        : index < currentCertSlide
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <div className="flex items-center justify-center h-full p-4">
                      <img
                        src={cert.src}
                        alt={cert.alt}
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                        style={{ maxHeight: '450px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Slide Counter */}
              <div className="absolute top-4 right-4 bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {currentCertSlide + 1} / {certificates.length}
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={() => setCurrentCertSlide((prev) => (prev - 1 + certificates.length) % certificates.length)}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border-2 border-primary/20"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={24} className="text-primary" />
              </button>
              
              {/* Dot Indicators */}
              <div className="flex gap-2">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCertSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentCertSlide
                        ? 'w-8 h-3 bg-primary'
                        : 'w-3 h-3 bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to certificate ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentCertSlide((prev) => (prev + 1) % certificates.length)}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border-2 border-primary/20"
                aria-label="Next certificate"
              >
                <ChevronRight size={24} className="text-primary" />
              </button>
            </div>
          </div>
          
          <div className="text-center mt-10 animate-reveal">
            <Link to="/certificates" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl active:scale-[0.97]">
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
      <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-reveal">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">See Our Professional Service in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Experience the quality and professionalism of our pest control services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="animate-reveal group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white border-2 border-primary/10">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden">
                  <img 
                    src={geminiService1} 
                    alt="Professional pest control service" 
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold text-lg">Professional Service</p>
                    <p className="text-white/90 text-sm">Expert pest control solutions</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <CheckCircle size={20} className="text-primary" />
                </div>
              </div>
            </div>
            <div className="animate-reveal group" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white border-2 border-secondary/10">
                <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden">
                  <img 
                    src={geminiService2} 
                    alt="Quality pest control treatment" 
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold text-lg">Quality Treatment</p>
                    <p className="text-white/90 text-sm">Advanced techniques & products</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <Award size={20} className="text-secondary" />
                </div>
              </div>
            </div>
            <div className="animate-reveal group" style={{ animationDelay: '0.4s' }}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white border-2 border-primary/10">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden">
                  <img 
                    src={geminiService3} 
                    alt="Complete pest management" 
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold text-lg">Complete Protection</p>
                    <p className="text-white/90 text-sm">Guaranteed pest-free results</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <Shield size={20} className="text-primary" />
                </div>
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

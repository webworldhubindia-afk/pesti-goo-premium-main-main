import { Globe, Search, Share2, Monitor, Megaphone, Image, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const digitalServices = [
  { icon: Globe, title: 'Dynamic Website Design', desc: 'Unlimited pages, mobile-responsive, fast-loading websites built with modern technology. Complete with domain, hosting, server setup, and professional email.' },
  { icon: Search, title: 'Basic SEO & SMO', desc: 'Search engine optimization and social media optimization to improve your online visibility, rankings, and organic traffic.' },
  { icon: Monitor, title: 'Google My Business Management', desc: 'Complete GMB profile setup, optimization, and management to help local customers find your business on Google Maps and Search.' },
  { icon: Share2, title: 'Social Media Creation & Management', desc: 'Professional profile creation and management across Facebook, Instagram, LinkedIn, Twitter, Pinterest, YouTube, and Skype.' },
  { icon: Megaphone, title: 'Google & Meta Ads Management', desc: 'Strategic paid advertising campaigns on Google Ads, Facebook Ads, and Instagram Ads to generate leads and grow your business.' },
  { icon: Image, title: 'Festival & Occasional Posts', desc: 'Creative, branded social media posts for festivals, holidays, and special occasions to keep your audience engaged year-round.' },
];

const DigitalServices = () => {
  useScrollReveal();

  return (
    <Layout>
      <section className="hero-gradient py-16 md:py-24 px-4">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Digital Services</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Grow your business online with our comprehensive digital marketing solutions.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalServices.map((service) => (
              <div key={service.title} className="animate-reveal bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-border group">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <service.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                <a href="tel:9955562637" className="text-secondary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Get Started <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm cta-gradient">
        <div className="container-custom text-center animate-reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Ready to Grow Your Business Online?</h2>
          <p className="text-primary-foreground/80 mb-6">Get a complete digital marketing package at affordable prices.</p>
          <a href="tel:9955562637" className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg active:scale-[0.97]">
            Call Us Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalServices;

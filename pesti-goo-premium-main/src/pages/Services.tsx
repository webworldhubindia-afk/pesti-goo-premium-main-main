import { Link } from 'react-router-dom';
import { Bug, Rat, Zap, Shield, Home, Building2, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  { icon: Bug, title: 'Cockroach Control', desc: 'Our advanced cockroach management combines gel baiting, residual spraying, and crack-and-crevice treatment to eliminate cockroaches at every life stage. We target breeding sites to prevent re-infestation and provide long-lasting results for homes and commercial kitchens.', color: 'bg-red-500' },
  { icon: Bug, title: 'Termite Control', desc: 'We offer both pre-construction and post-construction anti-termite treatments. Our chemical barrier and baiting systems protect your property\'s wooden structures, furniture, and foundations from destructive termite colonies.', color: 'bg-amber-600' },
  { icon: Bug, title: 'Bed Bug Control', desc: 'Our bed bug elimination program uses a combination of chemical treatment, steam cleaning, and targeted spraying to destroy bed bugs and their eggs. We treat mattresses, furniture, and all hiding spots for complete eradication.', color: 'bg-purple-600' },
  { icon: Zap, title: 'Mosquito Control', desc: 'Comprehensive mosquito control through fogging, larvicide application, and residual spraying. We target standing water sources and breeding areas to reduce mosquito populations and protect against dengue, malaria, and chikungunya.', color: 'bg-blue-500' },
  { icon: Rat, title: 'Rodent Control', desc: 'Professional rodent management using bait stations, traps, and exclusion techniques. We seal entry points, remove attractants, and deploy targeted solutions to eliminate rats and mice from your property.', color: 'bg-gray-600' },
  { icon: Shield, title: 'General Pest Control', desc: 'A comprehensive multi-pest treatment plan that covers cockroaches, ants, spiders, silverfish, and other common pests. Ideal for regular maintenance and seasonal pest prevention in any property.', color: 'bg-green-600' },
  { icon: Home, title: 'Residential Pest Control', desc: 'Tailored pest management solutions for homes, apartments, and villas. We use family-safe, odorless products to ensure your living space stays pest-free without disrupting your daily routine.', color: 'bg-teal-600' },
  { icon: Building2, title: 'Commercial Pest Control', desc: 'Specialized pest control for offices, restaurants, hotels, warehouses, and retail spaces. We provide AMC (Annual Maintenance Contracts) with regular inspections and treatments to meet hygiene standards.', color: 'bg-indigo-600' },
];

const Services = () => {
  useScrollReveal();

  return (
    <Layout>
      <section className="hero-gradient py-16 md:py-24 px-4">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Professional pest control solutions for every type of infestation.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="animate-reveal bg-card rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow border border-border group">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <service.icon size={28} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                    <a href="tel:9955562637" className="inline-flex items-center gap-2 px-5 py-2.5 cta-gradient text-primary-foreground rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all active:scale-[0.97]">
                      Book Now <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm cta-gradient">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 animate-reveal">Need a Custom Pest Control Plan?</h2>
          <p className="text-primary-foreground/80 mb-6 animate-reveal">Contact us for a free inspection and customized quote.</p>
          <Link to="/contact" className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg active:scale-[0.97] animate-reveal">
            Get Free Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

import { Link } from 'react-router-dom';
import { Bug, Rat, Zap, Shield, Home, Building2, ArrowRight, AlertTriangle, CheckCircle, IndianRupee } from 'lucide-react';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  { 
    icon: Bug, 
    title: 'Cockroach Control', 
    problem: 'Cockroaches spread diseases, contaminate food, cause allergies, and multiply rapidly in kitchens and bathrooms.',
    solution: 'Advanced gel baiting, residual spraying, and crack-and-crevice treatment to eliminate cockroaches at every life stage with long-lasting protection.',
    price: '₹1,499',
    color: 'from-red-500 to-red-600' 
  },
  { 
    icon: Bug, 
    title: 'Termite Control', 
    problem: 'Termites silently destroy wooden structures, furniture, and building foundations, causing lakhs of rupees in damage.',
    solution: 'Pre and post-construction chemical barrier and baiting systems that protect your property from destructive termite colonies.',
    price: '₹2,999',
    color: 'from-amber-500 to-amber-600' 
  },
  { 
    icon: Bug, 
    title: 'Bed Bug Control', 
    problem: 'Bed bugs cause itchy bites, sleepless nights, skin infections, and quickly spread through bedrooms and furniture.',
    solution: 'Combination of chemical treatment, steam cleaning, and targeted spraying to destroy bed bugs and their eggs completely.',
    price: '₹1,999',
    color: 'from-purple-500 to-purple-600' 
  },
  { 
    icon: Zap, 
    title: 'Mosquito Control', 
    problem: 'Mosquitoes spread deadly diseases like dengue, malaria, and chikungunya, putting your family at serious risk.',
    solution: 'Comprehensive fogging, larvicide application, and residual spraying to eliminate breeding areas and reduce mosquito populations.',
    price: '₹999',
    color: 'from-blue-500 to-blue-600' 
  },
  { 
    icon: Rat, 
    title: 'Rodent Control', 
    problem: 'Rats and mice damage property, contaminate food, spread diseases, and chew through electrical wires causing fire hazards.',
    solution: 'Professional bait stations, traps, and exclusion techniques with entry point sealing to eliminate rodents permanently.',
    price: '₹1,799',
    color: 'from-gray-500 to-gray-600' 
  },
  { 
    icon: Shield, 
    title: 'General Pest Control', 
    problem: 'Multiple pests like ants, spiders, silverfish, and cockroaches infest homes and offices, creating unhygienic conditions.',
    solution: 'Comprehensive multi-pest treatment plan covering all common pests with regular maintenance and seasonal prevention.',
    price: '₹1,299',
    color: 'from-green-500 to-green-600' 
  },
  { 
    icon: Home, 
    title: 'Residential Pest Control', 
    problem: 'Households face recurring pest problems that threaten family health, especially children and elderly members.',
    solution: 'Family-safe, odorless pest management solutions tailored for homes, apartments, and villas with minimal disruption.',
    price: '₹999',
    color: 'from-teal-500 to-teal-600' 
  },
  { 
    icon: Building2, 
    title: 'Commercial Pest Control', 
    problem: 'Businesses risk reputation damage, health code violations, and customer loss due to pest infestations.',
    solution: 'Specialized pest control with AMC contracts, regular inspections, and treatments to maintain hygiene standards.',
    price: '₹2,499',
    color: 'from-indigo-500 to-indigo-600' 
  },
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
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="animate-reveal bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border group hover:-translate-y-1">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 flex items-center gap-4 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                      <div className="flex items-center gap-2 text-white/90">
                        <IndianRupee size={16} />
                        <span className="text-sm font-semibold">Starting from {service.price}</span>
                      </div>
                    </div>
                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-5">
                    {/* Problem */}
                    <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-4 border-l-4 border-red-500">
                      <div className="flex items-start gap-3">
                        <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-red-900 dark:text-red-300 text-sm mb-1">Problem</h4>
                          <p className="text-red-800 dark:text-red-200 text-sm leading-relaxed">{service.problem}</p>
                        </div>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-4 border-l-4 border-green-500">
                      <div className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-900 dark:text-green-300 text-sm mb-1">Our Solution</h4>
                          <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">{service.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Price & Book Now */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <IndianRupee size={20} className="text-secondary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Starting from</p>
                          <p className="text-xl font-bold text-secondary">{service.price}</p>
                        </div>
                      </div>
                      <a 
                        href={`https://wa.me/919955562637?text=Hi, I want to book ${encodeURIComponent(service.title)} service. Please share more details.`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 cta-gradient text-primary-foreground rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all active:scale-[0.97]"
                      >
                        Book Now <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
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

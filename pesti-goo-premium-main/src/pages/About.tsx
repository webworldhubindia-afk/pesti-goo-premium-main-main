import { CheckCircle, Target, Eye } from 'lucide-react';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import aboutImg from '@/assets/about-us.jpg';

const About = () => {
  useScrollReveal();

  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient py-16 md:py-24 px-4">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Learn about our journey, mission, and commitment to pest-free living.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-reveal-left">
              <img src={aboutImg} alt="Pestigo office and equipment" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
            </div>
            <div className="animate-reveal-right">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">Pestigo Pest Control — Your Trusted Partner</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2026, Pestigo Pest Control is a government-registered pest management company based in South Delhi. Under the leadership of Vishwajeet Kumar, we have quickly grown to become one of the most trusted names in pest control services across Delhi NCR.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in residential and commercial pest control using advanced, eco-friendly treatments. Our team of trained professionals is committed to delivering safe, effective, and affordable pest management solutions. Every service is backed by our satisfaction guarantee.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['GST Registered', 'Udyam Certified', 'Trained Technicians', 'Eco-Friendly Methods', 'Affordable Pricing', '24/7 Support'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={16} className="text-accent shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-reveal bg-card rounded-xl p-8 shadow-md border border-border">
              <div className="w-14 h-14 rounded-lg hero-gradient flex items-center justify-center mb-4">
                <Target size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide safe, effective, and affordable pest control solutions that protect the health and property of our customers. We aim to be the most trusted pest control service provider in Delhi by delivering consistent quality and exceptional customer service.
              </p>
            </div>
            <div className="animate-reveal bg-card rounded-xl p-8 shadow-md border border-border">
              <div className="w-14 h-14 rounded-lg cta-gradient flex items-center justify-center mb-4">
                <Eye size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create pest-free environments across India using innovative, environmentally responsible methods. We envision a future where every home and business can enjoy a clean, hygienic, and pest-free space without harmful chemicals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

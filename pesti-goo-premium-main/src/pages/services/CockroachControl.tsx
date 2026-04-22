import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, CheckCircle, IndianRupee, SprayCan, ShieldCheck, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import cockroachLogo from '@/assets/cockroach-logo.png';

const CockroachControl = () => {
  useScrollReveal();

  return (
    <Layout>
      <section className="hero-gradient py-16 md:py-24 px-4">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Cockroach Control</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Professional cockroach elimination services for a pest-free home.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <img src={cockroachLogo} alt="Cockroach Control" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Cockroach Control Service</h2>
                <div className="flex items-center gap-2 text-white/90">
                  <IndianRupee size={16} />
                  <span className="text-sm font-semibold">Starting from ₹1,499</span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900 dark:text-red-300 text-sm mb-1">Problem</h4>
                    <p className="text-red-800 dark:text-red-200 text-sm leading-relaxed">
                      Cockroaches spread diseases, contaminate food, cause allergies, and multiply rapidly in kitchens and bathrooms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-4 border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-300 text-sm mb-1">Our Solution</h4>
                    <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
                      Advanced gel baiting, residual spraying, and crack-and-crevice treatment to eliminate cockroaches at every life stage with long-lasting protection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <SprayCan className="mx-auto mb-2 text-secondary" size={24} />
                    <p className="text-xs text-muted-foreground">Gel Baiting</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <ShieldCheck className="mx-auto mb-2 text-secondary" size={24} />
                    <p className="text-xs text-muted-foreground">Long Protection</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Clock className="mx-auto mb-2 text-secondary" size={24} />
                    <p className="text-xs text-muted-foreground">Quick Service</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/919955562637?text=Hi, I want to book Cockroach Control service. Please share more details." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 cta-gradient text-primary-foreground rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all active:scale-[0.97]"
                >
                  Book Now <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary-foreground rounded-xl font-semibold hover:bg-secondary/90 transition-colors">
              <ArrowRight size={16} className="rotate-180" /> Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CockroachControl;

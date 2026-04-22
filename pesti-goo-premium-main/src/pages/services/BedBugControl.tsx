import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, CheckCircle, IndianRupee, Bed, Moon, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import bedbugLogo from '@/assets/bedbug-logo.png';

const BedBugControl = () => {
  useScrollReveal();

  return (
    <Layout>
      <section className="hero-gradient py-16 md:py-24 px-4">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Bed Bug Control</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Eliminate bed bugs and restore peaceful sleep.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <img src={bedbugLogo} alt="Bed Bug Control" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Bed Bug Control Service</h2>
                <div className="flex items-center gap-2 text-white/90">
                  <IndianRupee size={16} />
                  <span className="text-sm font-semibold">Starting from ₹1,999</span>
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
                      Bed bugs cause itchy bites, sleepless nights, skin infections, and quickly spread through bedrooms and furniture.
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
                      Combination of chemical treatment, steam cleaning, and targeted spraying to destroy bed bugs and their eggs completely.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Bed className="mx-auto mb-2 text-secondary" size={24} />
                    <p className="text-xs text-muted-foreground">Bedroom Treatment</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Moon className="mx-auto mb-2 text-secondary" size={24} />
                    <p className="text-xs text-muted-foreground">Peaceful Sleep</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Sparkles className="mx-auto mb-2 text-secondary" size={24} />
                    <p className="text-xs text-muted-foreground">Deep Cleaning</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/919955562637?text=Hi, I want to book Bed Bug Control service. Please share more details." 
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

export default BedBugControl;

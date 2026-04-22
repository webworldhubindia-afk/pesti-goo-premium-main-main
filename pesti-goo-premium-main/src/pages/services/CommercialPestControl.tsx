import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, CheckCircle, IndianRupee, ClipboardCheck, FileText, Award } from 'lucide-react';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import commercialPestLogo from '@/assets/commercial-pest-logo.png';

const CommercialPestControl = () => {
  useScrollReveal();

  return (
    <Layout>
      <section className="hero-gradient py-16 md:py-24 px-4">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Commercial Pest Control</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Professional pest management for businesses and commercial spaces.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6 flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <img src={commercialPestLogo} alt="Commercial Pest Control" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Commercial Pest Control Service</h2>
                <div className="flex items-center gap-2 text-white/90">
                  <IndianRupee size={16} />
                  <span className="text-sm font-semibold">Starting from ₹2,499</span>
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
                      Businesses risk reputation damage, health code violations, and customer loss due to pest infestations.
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
                      Specialized pest control with AMC contracts, regular inspections, and treatments to maintain hygiene standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <ClipboardCheck className="mx-auto mb-2 text-secondary" size={24} />
                    <p className="text-xs text-muted-foreground">AMC Contracts</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <FileText className="mx-auto mb-2 text-secondary" size={24} />
                    <p className="text-xs text-muted-foreground">Regular Inspections</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Award className="mx-auto mb-2 text-secondary" size={24} />
                    <p className="text-xs text-muted-foreground">Certified Service</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/919955562637?text=Hi, I want to book Commercial Pest Control service. Please share more details." 
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

export default CommercialPestControl;

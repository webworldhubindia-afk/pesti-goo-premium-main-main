import { FileText, Download, Eye } from 'lucide-react';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const certificates = [
  { title: 'GST Certificate', number: '07LYBPK6093H1ZZ', desc: 'Goods and Services Tax Registration Certificate issued by the Government of India.', color: 'bg-blue-600' },
  { title: 'Udyam Certificate', number: 'UDYAM-DL-08-0121120', desc: 'Udyam Registration Certificate for Micro, Small, and Medium Enterprises (MSME).', color: 'bg-green-600' },
  { title: 'Shop Act Certificate', number: '2026015834', desc: 'Shop and Establishment Act Registration Certificate issued by the Delhi Government.', color: 'bg-amber-600' },
];

const Certificates = () => {
  useScrollReveal();

  return (
    <Layout>
      <section className="hero-gradient py-16 md:py-24 px-4">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Certificates</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Our government registrations and certifications that ensure quality and trust.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div key={cert.title} className="animate-reveal bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border">
                <div className={`${cert.color} p-8 flex items-center justify-center`}>
                  <FileText size={64} className="text-primary-foreground opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                  <p className="text-secondary font-mono text-sm mb-3">{cert.number}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cert.desc}</p>
                  <div className="flex gap-3">
                    <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors active:scale-[0.97]">
                      <Eye size={16} /> View
                    </button>
                    <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors active:scale-[0.97]">
                      <Download size={16} /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certificates;

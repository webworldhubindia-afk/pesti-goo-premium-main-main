import { FileText, Download, Eye, Award, Shield, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const certificates = [
  { 
    title: 'GST Certificate', 
    number: '07LYBPK6093H1ZZ', 
    desc: 'Goods and Services Tax Registration Certificate issued by the Government of India.', 
    icon: Shield,
    color: 'from-blue-500 to-blue-600',
    pdf: '/certificates/gst-certificate.pdf'
  },
  { 
    title: 'Udyam Registration Certificate 1', 
    number: 'UDYAM-DL-08-0121120', 
    desc: 'Udyam Registration Certificate for Micro, Small, and Medium Enterprises (MSME).', 
    icon: Award,
    color: 'from-green-500 to-green-600',
    pdf: '/certificates/udyam-1.pdf'
  },
  { 
    title: 'Udyam Registration Certificate 2', 
    number: 'UDYAM-DL-08-0121120', 
    desc: 'Additional Udyam Registration documentation and verification.', 
    icon: Award,
    color: 'from-emerald-500 to-emerald-600',
    pdf: '/certificates/udyam-2.pdf'
  },
  { 
    title: 'Shop Act Certificate', 
    number: '2026015834', 
    desc: 'Shop and Establishment Act Registration Certificate issued by the Delhi Government.', 
    icon: CheckCircle,
    color: 'from-amber-500 to-amber-600',
    pdf: '/certificates/shop-act.pdf'
  },
  { 
    title: 'Form C - S&E Registration', 
    number: 'S&E Registration', 
    desc: 'Shops and Establishment Registration Certificate for business operations.', 
    icon: FileText,
    color: 'from-purple-500 to-purple-600',
    pdf: '/certificates/form-c-registration.pdf'
  },
];

const CertificateModal = ({ pdf, title, onClose }: { pdf: string; title: string; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            ×
          </button>
        </div>
        <div className="w-full h-[calc(90vh-80px)]">
          <iframe 
            src={pdf} 
            className="w-full h-full border-0"
            title={title}
          />
        </div>
      </div>
    </div>
  );
};

const Certificates = () => {
  useScrollReveal();
  const [selectedPdf, setSelectedPdf] = useState<{pdf: string; title: string} | null>(null);

  const handleDownload = (pdfUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <section className="hero-gradient py-16 md:py-24 px-4">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Our Certificates</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Government registrations and certifications that ensure quality, trust, and compliance.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => {
              const Icon = cert.icon;
              return (
                <div key={cert.title} className="animate-reveal bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border group hover:-translate-y-1">
                  <div className={`bg-gradient-to-br ${cert.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Icon size={72} className="text-white opacity-90 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{cert.title}</h3>
                    <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full mb-3">
                      <p className="text-secondary font-mono text-sm font-semibold">{cert.number}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{cert.desc}</p>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => setSelectedPdf({ pdf: cert.pdf, title: cert.title })}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-secondary to-secondary/90 text-primary-foreground rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-secondary/30 transition-all active:scale-[0.97]"
                      >
                        <Eye size={16} /> View
                      </button>
                      <button 
                        onClick={() => handleDownload(cert.pdf, `${cert.title.replace(/\s+/g, '-').toLowerCase()}.pdf`)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-border text-foreground rounded-xl text-sm font-semibold hover:bg-muted hover:border-secondary/50 transition-all active:scale-[0.97]"
                      >
                        <Download size={16} /> Download
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Badge Section */}
          <div className="mt-16 text-center animate-reveal">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/10 rounded-full">
              <Shield size={24} className="text-secondary" />
              <span className="text-foreground font-semibold">100% Government Certified & Registered</span>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <CertificateModal 
          pdf={selectedPdf.pdf} 
          title={selectedPdf.title} 
          onClose={() => setSelectedPdf(null)} 
        />
      )}
    </Layout>
  );
};

export default Certificates;

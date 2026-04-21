import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  useScrollReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({ title: 'Please fill all fields', variant: 'destructive' });
      return;
    }
    toast({ title: 'Message Sent!', description: 'We will get back to you shortly.' });
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <Layout>
      <section className="hero-gradient py-16 md:py-24 px-4">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Get in touch with us for a free inspection and quote.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info & Map */}
            <div className="animate-reveal-left">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Address</p>
                    <p className="text-muted-foreground text-sm">Plot No. F/F 483 Ground Floor, Nearby Pracheen Shiv Mandir (Jalam Mohalla), Zalim Mohalla, Tughlaqabad Institutional Area, Mehrauli Badarpur Road, South Delhi, Delhi 110062</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg cta-gradient flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <a href="tel:6205840761" className="text-muted-foreground text-sm hover:text-secondary transition-colors block">6205840761</a>
                    <a href="tel:9955562637" className="text-muted-foreground text-sm hover:text-secondary transition-colors block mt-1">9955562637</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <a href="mailto:pestigopestc@gmail.com" className="text-muted-foreground text-sm hover:text-secondary transition-colors block">pestigopestc@gmail.com</a>
                    <a href="mailto:Infio@pestigopestcontrol.co.in" className="text-muted-foreground text-sm hover:text-secondary transition-colors block mt-1">Infio@pestigopestcontrol.co.in</a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden shadow-md border border-border">
                <iframe
                  title="Pestigo Pest Control Location"
                  src="https://www.google.com/maps?q=Pestigo+Pest+Control+Tughlaqabad+South+Delhi&output=embed&z=15"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3">
                <a 
                  href="https://share.google/tx2mTFAvdVNVtJaIL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary font-medium hover:underline text-sm"
                >
                  <MapPin size={16} /> View on Google Maps
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-reveal-right">
              <div className="bg-card rounded-xl p-8 shadow-md border border-border">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="Enter your name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="Enter your phone number"
                      maxLength={15}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                      placeholder="Describe your pest problem..."
                      maxLength={1000}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 cta-gradient text-primary-foreground rounded-lg font-semibold shadow-lg shadow-secondary/25 hover:shadow-secondary/40 transition-all active:scale-[0.97] flex items-center justify-center gap-2"
                  >
                    <Send size={18} /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

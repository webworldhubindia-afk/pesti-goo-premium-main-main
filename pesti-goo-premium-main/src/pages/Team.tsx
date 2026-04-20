import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const teamMembers = [
  { name: 'Vishwajeet Kumar', role: 'Founder & CEO', initials: 'VK', bg: 'bg-primary' },
  { name: 'Dhiraj', role: 'Senior Technician', initials: 'DK', bg: 'bg-blue-600' },
  { name: 'Hansraj', role: 'Pest Control Expert', initials: 'HR', bg: 'bg-teal-600' },
  { name: 'Amit', role: 'Field Technician', initials: 'AM', bg: 'bg-green-600' },
  { name: 'Kunal', role: 'Operations Manager', initials: 'KS', bg: 'bg-amber-600' },
  { name: 'Ravindra', role: 'Service Technician', initials: 'RV', bg: 'bg-red-600' },
];

const Team = () => {
  useScrollReveal();

  return (
    <Layout>
      <section className="hero-gradient py-16 md:py-24 px-4">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Our Team</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Meet the dedicated professionals behind Pestigo Pest Control.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="animate-reveal bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border group text-center">
                <div className={`${member.bg} h-48 flex items-center justify-center`}>
                  <span className="text-5xl font-bold text-primary-foreground opacity-90">{member.initials}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;

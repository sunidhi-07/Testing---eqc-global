
import React from 'react';
import { SectionId, SocialArea } from '../../types';

const focusAreas: SocialArea[] = [
  {
    title: 'Renewable Energy Transition',
    icon: '☀️',
    description: 'Shifting to clean, renewable energy sources for a sustainable future.',
    image: 'https://picsum.photos/600/400?random=40'
  },
  {
    title: 'Forest & Biodiversity',
    icon: '🌳',
    description: 'Designing initiatives to conserve forests, protect biodiversity, ensuring ecological balance & resilience.',
    image: 'https://picsum.photos/600/400?random=41'
  },
  {
    title: 'Water Security/Circularity',
    icon: '💧',
    description: 'Developing strategies for water conservation, circular usage to safeguard resources & promote sustainability.',
    image: 'https://picsum.photos/600/400?random=42'
  },
  {
    title: 'Climate-Smart Agriculture',
    icon: '🌾',
    description: 'Climate-resilient practices boosting productivity while reducing environmental impact.',
    image: 'https://picsum.photos/600/400?random=43'
  },
  {
    title: 'Clean Air & Mobility',
    icon: '🚲',
    description: 'Cleaner air and sustainable mobility solutions to reduce emissions and improve urban living.',
    image: 'https://picsum.photos/600/400?random=44'
  },
  {
    title: 'Coastal Resilience',
    icon: '🌊',
    description: 'Programs that strengthen coastal ecosystems and communities against climate risks and rising sea levels.',
    image: 'https://picsum.photos/600/400?random=45'
  }
];

const SocialImpact: React.FC = () => {
  return (
    <section id={SectionId.SocialImpact} className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/50 rounded-full blur-[100px] -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-secondary font-bold uppercase tracking-widest text-sm">Sustainability</h2>
          <h3 className="text-4xl lg:text-6xl font-serif font-bold">Global Social Impact</h3>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Aligning human capabilities with organizational and global sustainability goals for a healthier planet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-secondary transition-all duration-500">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                />
              </div>
              <div className="p-8 space-y-4 relative">
                <div className="absolute -top-10 left-8 w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center text-3xl shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
                  {area.icon}
                </div>
                <h4 className="text-2xl font-bold mt-6">{area.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {area.description}
                </p>
                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a href={`#${SectionId.Contact}`} className="text-secondary font-bold text-sm inline-flex items-center">
                    Learn about this project
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;


import React from 'react';
import { SectionId } from '../../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.About} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-secondary font-bold uppercase tracking-widest text-sm">About Us</h2>
              <h3 className="text-4xl lg:text-5xl font-serif text-primary leading-tight">Strengthening the Human Element</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                EQC Global is a performance-driven consultancy dedicated to empowering Corporates and NGOs through innovative, human-centric solutions in an era increasingly shaped by AI. While technology and processes are essential, they do not drive themselves—people do.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The success of any system, process, or technology depends on human adoption, engagement, and creativity. At EQC Global, we strengthen the human element because everything else is built for human consumption. We believe Emotional Intelligence (EQ) is the key to success in both personal and professional life, enabling individuals and organizations to thrive amidst change.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-primary">Our Subsidiaries</h4>
              <div className="flex flex-wrap gap-4">
                {['Beyond EQ', 'Beyond Processes', 'Beyond ECO'].map((sub) => (
                  <div key={sub} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-primary shadow-sm hover:border-secondary transition-colors">
                    {sub}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 rounded-3xl space-y-4 border border-slate-100 hover:border-secondary transition-colors group">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-2xl text-2xl group-hover:scale-110 transition-transform">🔭</div>
                <h4 className="font-extrabold text-primary text-xl">Vision</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  To unlock & elevate human potential as the core driver of sustainable performance & transformative processes across organizations.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl space-y-4 border border-slate-100 hover:border-secondary transition-colors group">
                <div className="w-12 h-12 bg-secondary text-white flex items-center justify-center rounded-2xl text-2xl group-hover:scale-110 transition-transform">🚀</div>
                <h4 className="font-extrabold text-primary text-xl">Mission</h4>
                <ul className="text-sm text-slate-500 space-y-2 list-disc pl-4">
                  <li>Design and deliver high-impact solutions that integrate emotional intelligence, innovation, & process excellence.</li>
                  <li>Empower individuals & teams through tailored training & strategic support.</li>
                  <li>Foster inclusive growth by aligning human capabilities with organizational goals.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute top-0 right-0 w-full h-full bg-primary/5 rounded-[4rem] -rotate-6 transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://picsum.photos/800/1000?random=11" 
              alt="EQC Global Leadership" 
              className="relative rounded-[4rem] shadow-2xl object-cover h-[600px] w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-10 rounded-[2rem] shadow-2xl border border-slate-100">
              <div className="text-center">
                <span className="block text-5xl font-extrabold text-primary">EQC</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Global Group</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

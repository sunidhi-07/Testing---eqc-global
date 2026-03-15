
import React from 'react';
import { SectionId } from '../../types';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.Home} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 -skew-x-12 origin-top transform translate-x-20 -z-0"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>PEOPLE • INNOVATION • TECHNOLOGY</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-extrabold text-primary leading-[1.1]">
              Unlocking <span className="text-secondary italic">Human</span> Potential through Innovation
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              EQC Global is a performance-driven consultancy dedicated to empowering Corporates and NGOs through innovative, human-centric solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={`#${SectionId.Contact}`}
                className="px-10 py-5 bg-primary text-white font-bold rounded-2xl shadow-xl hover:bg-slate-800 transform hover:-translate-y-1 transition-all text-center"
              >
                Start Transformation
              </a>
              <a 
                href={`#${SectionId.Services}`}
                className="px-10 py-5 bg-white text-primary border-2 border-slate-200 font-bold rounded-2xl hover:border-secondary hover:text-secondary transition-all text-center"
              >
                Explore Services
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-8 opacity-40 grayscale">
              <img src="https://picsum.photos/120/40?random=1" alt="Partner 1" className="h-6" />
              <img src="https://picsum.photos/120/40?random=2" alt="Partner 2" className="h-6" />
              <img src="https://picsum.photos/120/40?random=3" alt="Partner 3" className="h-6" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/30 to-primary/30 rounded-[3rem] blur-2xl opacity-50"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/800/1000?random=10" 
                alt="Collaborative workspace" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-8 left-8 right-8 glass p-8 rounded-3xl border border-white/20 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://picsum.photos/48/48?random=${i+20}`} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt="Testimonial" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-primary">500+ Organizations</p>
                    <p className="text-sm text-slate-500">Empowered across 12 countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

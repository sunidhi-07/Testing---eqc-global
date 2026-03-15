
import React, { useState } from 'react';
import { SectionId, ServiceDetail } from '../../types';

interface Subsidiary {
  id: string;
  name: string;
  tagline: string;
  color: string;
  icon: string;
  offerings: {
    title: string;
    description: string;
    items: string[];
  }[];
}

const subsidiaries: Subsidiary[] = [
  {
    id: 'beyond-eq',
    name: 'Beyond EQ',
    tagline: 'Emotional Intelligence & Human Potential',
    color: 'bg-blue-600',
    icon: '🧠',
    offerings: [
      {
        title: 'Workshops',
        description: 'Unique delivery model with 150+ activities.',
        items: ['Custom Workshops', 'Tailor made', 'Master-Class']
      },
      {
        title: 'Enterprise Solutions',
        description: 'Scalable frameworks for corporate resilience.',
        items: ['Custom Framework', 'CMM Mapping', 'ROI Model', 'Hybrid Workshops']
      },
      {
        title: 'Courses',
        description: '4 Levels of CMM aligned learning.',
        items: ['Beginner', 'Practitioner 1 & 2', 'Masters', 'Support Mechanism']
      },
      {
        title: 'Counselling',
        description: 'Professional behavior therapy.',
        items: ['REBT', 'CBT']
      },
      {
        title: 'Social Projects',
        description: 'Holistic learning initiatives.',
        items: ['Hybrid SEL', 'Art Based Learning']
      }
    ]
  },
  {
    id: 'beyond-processes',
    name: 'Beyond Processes',
    tagline: 'Operational Excellence & Innovation',
    color: 'bg-emerald-600',
    icon: '⚙️',
    offerings: [
      {
        title: 'Consulting',
        description: 'Strategic reengineering and research.',
        items: ['Strategy consulting', 'Program management', 'Assessments']
      },
      {
        title: 'Training',
        description: 'Technical and management excellence.',
        items: ['Technical Training', 'LSS and SixSigma', 'Project Management']
      },
      {
        title: 'Change Management',
        description: 'Organizational and leadership growth.',
        items: ['Organizational Development', 'Leadership Development', 'Team Management']
      },
      {
        title: 'Development',
        description: 'Human-centric technology solutions.',
        items: ['Software Development', 'iOS/Android Applications']
      }
    ]
  },
  {
    id: 'beyond-eco',
    name: 'Beyond ECO',
    tagline: 'Sustainability & Environmental Impact',
    color: 'bg-amber-600',
    icon: '🌱',
    offerings: [
      {
        title: 'Energy & Biodiversity',
        description: 'Renewable transition and conservation.',
        items: ['Renewable Energy Transition', 'Forest & Biodiversity']
      },
      {
        title: 'Resource Security',
        description: 'Safeguarding essential resources.',
        items: ['Water Security/Circularity', 'Climate-Smart Agriculture']
      },
      {
        title: 'Urban & Coastal',
        description: 'Resilient living and ecosystems.',
        items: ['Clean Air & Mobility', 'Coastal Resilience']
      }
    ]
  }
];

const Services: React.FC = () => {
  const [activeSub, setActiveSub] = useState(subsidiaries[0].id);

  return (
    <section id={SectionId.Services} className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-secondary font-bold uppercase tracking-widest text-sm">What We Offer</h2>
          <h3 className="text-4xl lg:text-5xl font-serif text-primary">Our Subsidiaries</h3>
          <p className="max-w-2xl mx-auto text-slate-500">
            EQC Global operates through specialized subsidiaries to deliver targeted impact across human potential, process excellence, and environmental sustainability.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {subsidiaries.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveSub(sub.id)}
              className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center space-x-3 border-2 ${
                activeSub === sub.id 
                ? `${sub.color} text-white border-transparent shadow-xl scale-105` 
                : 'bg-white text-slate-500 border-slate-100 hover:border-slate-200'
              }`}
            >
              <span className="text-xl">{sub.icon}</span>
              <span>{sub.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl shadow-slate-200 border border-white animate-in fade-in zoom-in duration-500">
          {subsidiaries.map(sub => sub.id === activeSub && (
            <div key={sub.id} className="space-y-12">
              <div className="text-center space-y-2">
                <h4 className="text-3xl font-serif font-bold text-primary">{sub.name}</h4>
                <p className="text-secondary font-bold uppercase tracking-widest text-xs">{sub.tagline}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sub.offerings.map((offering, idx) => (
                  <div key={idx} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-secondary transition-all group">
                    <h5 className="text-xl font-bold text-primary mb-2">{offering.title}</h5>
                    <p className="text-sm text-slate-500 mb-6 leading-relaxed">{offering.description}</p>
                    <ul className="space-y-3">
                      {offering.items.map((item, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm font-bold text-slate-700">
                          <div className={`w-1.5 h-1.5 rounded-full ${sub.color}`}></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="pt-8 text-center">
                <a 
                  href={`#${SectionId.Contact}`}
                  className={`inline-flex items-center px-10 py-5 ${sub.color} text-white font-bold rounded-2xl hover:opacity-90 transition-all shadow-lg`}
                >
                  Partner with {sub.name}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

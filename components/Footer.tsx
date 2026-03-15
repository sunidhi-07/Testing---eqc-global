
import React from 'react';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">E</div>
              <span className="text-2xl font-bold tracking-tight">EQC <span className="text-secondary">Global</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering potential by strengthening the human element in an AI-driven era. Everything else is built for human consumption.
            </p>
            <div className="flex space-x-4">
              {['FB', 'TW', 'LN', 'IG'].map(platform => (
                <a key={platform} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-secondary hover:text-white transition-all border border-white/5">
                  <span className="font-bold text-xs">{platform}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-8">Navigation</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href={`#${SectionId.About}`} className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href={`#${SectionId.Services}`} className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href={`#${SectionId.Courses}`} className="hover:text-secondary transition-colors">Courses</a></li>
              <li><a href={`#${SectionId.SocialImpact}`} className="hover:text-secondary transition-colors">Social Impact</a></li>
              <li><a href={`#${SectionId.Contact}`} className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-8">Subsidiaries</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href={`#${SectionId.Services}`} className="hover:text-secondary transition-colors">Beyond EQ</a></li>
              <li><a href={`#${SectionId.Services}`} className="hover:text-secondary transition-colors">Beyond Processes</a></li>
              <li><a href={`#${SectionId.Services}`} className="hover:text-secondary transition-colors">Beyond ECO</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="font-bold text-lg">Contact Us</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+91 8984291985</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info@beyondeq.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <p>© 2024 EQC Global. Human potential unlocked.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

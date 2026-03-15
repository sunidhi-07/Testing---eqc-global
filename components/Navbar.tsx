
import React, { useState } from 'react';
import { SectionId } from '../types';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: `#${SectionId.About}` },
    { name: 'Services', href: `#${SectionId.Services}` },
    { name: 'Courses', href: `#${SectionId.Courses}` },
    { name: 'Impact', href: `#${SectionId.SocialImpact}` },
    { name: 'EQ Studio', href: `#${SectionId.EQStudio}` },
    { name: 'Contact', href: `#${SectionId.Contact}` },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-xl font-bold text-xl group-hover:bg-secondary transition-colors">E</div>
            <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-primary' : 'text-primary'}`}>
              EQC <span className="text-secondary">Global</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-bold text-primary/80 hover:text-secondary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href={`#${SectionId.Contact}`}
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-md hover:shadow-xl"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-secondary transition-colors"
            >
              {isOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-slate-100 p-6 absolute top-full left-0 right-0 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-primary hover:text-secondary border-b border-slate-50 pb-2"
              >
                {item.name}
              </a>
            ))}
            <a
              href={`#${SectionId.Contact}`}
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white text-center py-4 rounded-xl font-bold"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

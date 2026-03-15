
import React from 'react';
import { SectionId } from '../../types';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.Contact} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</h2>
              <h3 className="text-4xl lg:text-5xl font-serif text-primary">Let's Discuss Your Growth Strategy</h3>
              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                Whether you're a corporate leader looking to elevate your team or an NGO seeking strategic innovation, our door is always open.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-secondary text-2xl border border-slate-100">📞</div>
                <div>
                  <h5 className="font-extrabold text-primary text-lg">Call Us</h5>
                  <p className="text-slate-500 font-medium">+91 8984291985</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-secondary text-2xl border border-slate-100">✉️</div>
                <div>
                  <h5 className="font-extrabold text-primary text-lg">Email Us</h5>
                  <p className="text-slate-500 font-medium">info@beyondeq.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-secondary text-2xl border border-slate-100">📍</div>
                <div>
                  <h5 className="font-extrabold text-primary text-lg">HQ Location</h5>
                  <p className="text-slate-500 font-medium">Bhubaneswar, Odisha, India</p>
                </div>
              </div>
            </div>

            <div className="h-72 rounded-[2.5rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.40932039237!2d85.75041285252538!3d20.301025526017424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2a5170aa5%3A0xfc580e2b67f33aa2!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-10 lg:p-14 rounded-[3.5rem] shadow-2xl shadow-slate-200 border border-slate-50">
            <h4 className="text-3xl font-bold text-primary mb-10">Send an Inquiry</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-secondary focus:bg-white focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="jane@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-secondary focus:bg-white focus:outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Service Interest</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-secondary focus:bg-white focus:outline-none transition-all appearance-none">
                  <option>Beyond EQ (Emotional Intelligence)</option>
                  <option>Beyond Processes (Operational Excellence)</option>
                  <option>Beyond ECO (Sustainability)</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your organizational goals..."
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-secondary focus:bg-white focus:outline-none transition-all"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-primary text-white font-bold rounded-2xl shadow-xl hover:bg-slate-800 transform hover:-translate-y-1 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

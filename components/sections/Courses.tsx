
import React, { useState } from 'react';
import { SectionId, Course } from '../../types';
import RazorpayPayment from '../RazorpayPayment';

const courses: Course[] = [
  {
    id: 'beginner',
    level: 'L1',
    name: 'Beginner',
    price: 4999,
    description: 'Foundational EQ and SEL principles for entry-level professionals.',
    features: ['EQ Assessment', 'Social Emotional Learning', 'Communication Basics', 'Certification']
  },
  {
    id: 'practitioner1',
    level: 'L2',
    name: 'Practitioner 1',
    price: 9999,
    description: 'Applying EQ in team management and leadership scenarios.',
    features: ['CBT Introduction', 'Team Dynamics', 'Emotional Regulation', 'Case Studies']
  },
  {
    id: 'practitioner2',
    level: 'L3',
    name: 'Practitioner 2',
    price: 19999,
    description: 'Advanced behavioral integration for strategy and change management.',
    features: ['REBT Certification', 'Process Reengineering', 'Advanced Leadership', '1-on-1 Mentorship']
  },
  {
    id: 'masters',
    level: 'L4',
    name: 'Masters',
    price: 49999,
    description: 'Elite capability maturity model (CMM) mapping for organizational development.',
    features: ['ROI Analysis', 'CMM Implementation', 'Enterprise Strategy', 'Lifetime Support']
  }
];

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <section id={SectionId.Courses} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm">Learning Path</h2>
            <h3 className="text-4xl lg:text-5xl font-serif text-primary">CMM-Based Hybrid Courses</h3>
            <p className="text-slate-500 text-lg">
              Our comprehensive 4-level structure is designed to guide you from foundational EQ awareness to master-level organizational impact.
            </p>
          </div>
          <div className="bg-primary text-white p-6 rounded-[2rem] shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">🎓</div>
              <div>
                <p className="text-xs uppercase font-bold text-slate-400">Next Cohort</p>
                <p className="font-bold">Starts Next Month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`p-8 rounded-[2.5rem] border-2 transition-all flex flex-col ${
                selectedCourse.id === course.id 
                ? 'bg-white border-secondary shadow-2xl scale-105 z-10' 
                : 'bg-slate-50 border-slate-100 hover:border-slate-200'
              }`}
            >
              <div className="mb-6 flex justify-between items-center">
                <span className={`text-xs font-black px-4 py-1.5 rounded-full ${
                  selectedCourse.id === course.id ? 'bg-secondary text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {course.level}
                </span>
                <span className="text-2xl font-black text-primary">₹{course.price.toLocaleString()}</span>
              </div>
              
              <h4 className="text-2xl font-bold text-primary mb-3">{course.name}</h4>
              <p className="text-sm text-slate-500 mb-8 flex-grow leading-relaxed">{course.description}</p>
              
              <ul className="space-y-4 mb-10">
                {course.features.map((f, i) => (
                  <li key={i} className="flex items-center text-sm font-semibold text-slate-700">
                    <span className="mr-3 text-secondary text-lg">✦</span> {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedCourse(course)}
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  selectedCourse.id === course.id 
                  ? 'bg-secondary text-white shadow-lg' 
                  : 'bg-white text-primary border border-slate-200 hover:border-secondary'
                }`}
              >
                {selectedCourse.id === course.id ? 'Selected Plan' : 'Select Level'}
              </button>
            </div>
          ))}
        </div>

        {/* Enrollment Summary with Payment */}
        <div className="mt-20 glass p-10 lg:p-16 rounded-[3.5rem] border border-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h4 className="text-4xl font-serif font-bold text-primary">Ready to Enroll?</h4>
              <p className="text-slate-600 text-lg">
                Complete your payment for the <span className="font-bold text-primary">{selectedCourse.name}</span> track and gain immediate access to our hybrid learning platform.
              </p>
              <div className="flex items-center space-x-6 text-slate-400">
                <div className="flex items-center space-x-2">
                  <span className="text-secondary text-xl">✔</span>
                  <span className="text-sm font-bold">SSL Secure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-secondary text-xl">✔</span>
                  <span className="text-sm font-bold">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-secondary text-xl">✔</span>
                  <span className="text-sm font-bold">Certification</span>
                </div>
              </div>
            </div>

            <div className="bg-primary p-10 rounded-[3rem] shadow-2xl">
              <div className="text-center mb-8 space-y-2">
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Enrollment Fee</p>
                <div className="text-5xl font-extrabold text-white">₹{selectedCourse.price.toLocaleString()}</div>
                <p className="text-secondary font-bold text-sm">Level: {selectedCourse.name}</p>
              </div>
              
              <div className="space-y-4">
                <RazorpayPayment 
                  amount={selectedCourse.price} 
                  courseName={selectedCourse.name}
                  courseLevel={selectedCourse.level}
                />
                <p className="text-[10px] text-slate-500 text-center">
                  Payments processed by Razorpay. By enrolling, you agree to our Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

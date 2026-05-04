import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import image from '../image/angkor.png';
const PROGRAM_CARDS = [
  { title: 'Kindergarten', age: 'Ages 3-5' },
  { title: 'Primary School', age: 'Ages 6-11' },
  { title: 'Middle School', age: 'Ages 12-14' },
  { title: 'High School', age: 'Ages 15-18' }
];

export const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[1050px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt="Khmer Heritage" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000F35]/90 to-transparent" />
        </div>
        
        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block bg-[#FFD700] text-[#002B7F] px-4 py-1 rounded-lg text-sm font-black mb-6 shadow-lg">
              The Academic Ambassador
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Forging Futures in <br />
              <span className="text-[#FFD700]">Excellence.</span>
            </h1>
            <p className="text-white/80 text-lg font-medium max-w-lg leading-relaxed">
              A curriculum designed to blend ancient Khmer heritage with contemporary American academic standards, nurturing the leaders of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Grid */}
      <section className="px-6 py-20 max-w-7xl mx-auto -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          {PROGRAM_CARDS.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#E9F0FF] rounded-[2rem] p-10 border-l-8 border-[#002B7F] shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-[#002B7F] text-3xl font-black mb-1">{card.title}</h3>
                  <p className="text-[#c02424] font-bold text-lg">{card.age}</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-bold group-hover:text-[#002B7F] transition-colors">
                    <CheckCircle2 className="text-[#FFD700]" size={20} />
                    Write Your Text Here
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#000F35] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 group-hover:bg-[#002B7F] transition-colors">
                Learn More <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="bg-[#E9F0FF] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop" 
              alt="Students" 
              className="w-full h-full object-cover min-h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
            <h2 className="text-[#002B7F] text-4xl md:text-5xl font-black mb-6 leading-tight">
              Global Accreditation, <br /> Local Heart.
            </h2>
            <p className="text-slate-600 font-medium text-lg leading-relaxed mb-10 italic">
              Every program at KAS is meticulously audited to ensure it meets rigorous Western educational standards while remaining deeply rooted in the cultural tapestry of Cambodia. Our graduates don't just succeed academically; they thrive as empathetic global citizens.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-md">
                <div className="text-3xl font-black text-[#002B7F] mb-1">100%</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Graduation Rate</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#002B7F] shadow-md">
                <div className="text-3xl font-black text-[#002B7F] mb-1">12:1</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Student Ratio</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

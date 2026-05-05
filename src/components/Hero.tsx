import React from "react";
import { motion } from "motion/react";
import logo from "../image/logo.png";
export const Hero = () => {
  return (
    <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-[#FFD700] text-[#002B7F] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-8 shadow-sm">
            Khmer Heritage + American Excellence = Global Education
          </div>
          <h2 className="text-[#001D4D] text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Excellence in <br />
            <span className="text-[#c02424]">Two Traditions</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg font-medium">
            Bridging the architectural wisdom of Angkor with the structured
            innovation of American pedagogical standards to nurture the next
            generation of global leaders.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#FFD700] text-[#002B7F] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Explored Programs
            </button>
            <button className="bg-[#002B7F] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Start Registration
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="bg-white p-4 rounded-3xl shadow-2xl  duration-500">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
              alt="School classroom"
              className="rounded-2xl w-full aspect-[4/3] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10  rounded-full p-1.5 shrink-0">
                <img src={logo} alt="KAS Logo" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-800 leading-none">
                  សាលាខ្មែរអាមេរិកាំង
                </h3>
                <p className="text-[10px] font-bold text-[#002B7F]">
                  KHMER AMERICAN SCHOOL
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-[#FFD700]/10 rounded-3xl blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

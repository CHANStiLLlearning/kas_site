import React from "react";
import classroomImg from "../icons/Classroom management.svg";
import examImg from "../icons/Exam.svg";
import paymentImg from "../icons/Payment.svg";
import settingImg from "../icons/Setting.svg";
import { motion } from "motion/react";

const CURRICULUM_DATA = [
  {
    image: classroomImg,
    label: "International Curriculum",
    sub: "US Common Core standards integrated with Khmer language and culture programs.",
  },
  {
    image: examImg,
    label: "American Standards",
    sub: "Aligned with national educational standards.",
  },
  {
    image: paymentImg,
    label: "Cultural Heritage",
    sub: "Emphasis on preserving and promoting local traditions.",
  },
  {
    image: settingImg,
    label: "Quality Assessment",
    sub: "Comprehensive evaluation methods to ensure learning outcomes.",
  },
];

export const CurriculumCards = () => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {CURRICULUM_DATA.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 pt-16 border border-slate-100 shadow-xl relative hover:shadow-2xl transition-shadow group"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white border-4 border-[#003DA5] rounded-full flex items-center justify-center text-[#003DA5] group-hover:bg-[#003DA5] group-hover:text-white transition-all transform group-hover:scale-110">
              <img src={card.image} alt={card.label} className="w-8 h-8" />
            </div>
            <h4 className="text-[#002B7F] text-2xl font-bold text-center mb-4 leading-tight">
              {card.label}
            </h4>
            <p className="text-slate-600 font-medium text-center text-sm leading-relaxed">
              {card.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

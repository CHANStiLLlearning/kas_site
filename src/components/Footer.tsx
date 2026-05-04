import React from 'react';
import { Facebook, Instagram, Send } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#000F35] text-white pt-20 pb-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h5 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#FFD700] rounded-full" />
              Contact Us :
            </h5>
            <div className="space-y-2 text-xl font-bold tracking-tight">
              <p className="hover:text-[#FFD700] transition-colors cursor-pointer">+855 12 398 223</p>
              <p className="hover:text-[#FFD700] transition-colors cursor-pointer">+855 12 586 680</p>
              <p className="hover:text-[#FFD700] transition-colors cursor-pointer">+855 70 32 42 42</p>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h5 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#FFD700] rounded-full" />
              Address :
            </h5>
            <div className="space-y-4 text-slate-300 font-medium leading-relaxed">
              <p className="text-base text-white/90">
                ទល់មុខរោងចក្រផ្លែក្រដុង ភូមិក្បាលជ្រោយ <br />
                សង្កាត់ព្រែកព្នៅ ខណ្ឌច្បារអំពៅ រាជធានីភ្នំពេញ។
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h5 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#FFD700] rounded-full" />
              Follow Us On:
            </h5>
            <div className="flex gap-4">
              {[
                { icon: Facebook, color: 'bg-blue-600' },
                { icon: Instagram, color: 'bg-pink-600' },
                { icon: Send, color: 'bg-sky-500' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform`}
                  aria-label={`Follow us on ${social.icon.name}`}
                >
                  <social.icon size={20} className="fill-white text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-semibold uppercase tracking-widest text-center md:text-left">
          <p>© 2024 Khmer American School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Search, Mail, ArrowRight, Clock } from 'lucide-react';

export const BlogPage = () => {
  const recentPosts = [
    {
      title: "The Vision of 2025: Bridging Global Tech with Khmer Tradition",
      description: "Explore how our new Innovation Wing integrates traditional architectural motifs with world-class STEM facilities for the next generation of leaders.",
      category: "Innovation",
    },
    {
      title: "Preserving the Royal Ballet: A Digital Initiative",
      description: "Our students are collaborating with the Ministry of Culture to archive traditional dance movements using motion-capture technology.",
      category: "Arts & Culture",
    },
    {
      title: "Sustainable Campus Projects: A Green Future for KAS",
      description: "Discover how our eco-friendly initiatives, from solar panels to community gardens, are shaping a sustainable future for our school and local community.",
      category: "Sustainability",
    },
  ]
  const subAcademic = [
    {
      title: "The Vision of 2025: Bridging Global Tech with Khmer Tradition",
      description: "Explore how our new Innovation Wing integrates traditional architectural motifs with world-class STEM facilities for the next generation of leaders.",
      category: "Innovation",
      time: "8 min read",
    },
    {
      title: "Preserving the Royal Ballet: A Digital Initiative",
      description: "Our students are collaborating with the Ministry of Culture to archive traditional dance movements using motion-capture technology.",
      category: "Arts & Culture",
      time: "8 min read",
    },
    
    
  ]
  
  return (
    <div className="bg-white">
      <section className="px-6 py-12 max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-[#002B7F] text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-2">
            The Academic
          </h1>
          <h1 className="text-[#c02424] text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6 italic">
            Ambassador
          </h1>
          <p className="text-slate-600 font-medium italic max-w-xl text-lg border-l-4 border-[#FFD700] pl-4">
            Chronicles of excellence, cultural heritage, and the evolving landscape of global education at Khmer American School.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Featured Post */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop" 
                alt="Main post" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000F35] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight group-hover:translate-x-2 transition-transform">
                  The Vision of 2025: Bridging <br /> Global Tech with Khmer Tradition
                </h2>
                <p className="text-slate-200 mb-6 max-w-xl font-medium leading-relaxed opacity-80">
                  Explore how our new Innovation Wing integrates traditional architectural motifs with world-class STEM facilities for the next generation of leaders.
                </p>
                <div className="flex items-center gap-6 text-sm text-white/70 font-semibold border-t border-white/20 pt-6">
                  <span className="flex items-center gap-2 decoration-[#FFD700] underline-offset-4 decoration-2 underline">
                    <Clock size={16} /> 8 min read
                  </span>
                  <span className="uppercase tracking-widest">Published May 02, 2026</span>
                </div>
              </div>
            </motion.div>

            {/* Grid Posts */}
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
                    alt="Article" 
                    className="w-full h-64 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-8 ">
                    <span className="text-[#c02424] font-bold text-sm uppercase tracking-widest mb-4 block">
                      {subAcademic[i - 1]?.category || "Uncategorized"}
                    </span>
                    <h3 className="text-[#002B7F] text-2xl font-bold mb-4">
                      {subAcademic[i - 1]?.title || "Write The Text Here For The Title Area"}
                    </h3>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                      {subAcademic[i - 1]?.description || "Write The Text Here For The Description Area"}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <span className="text-slate-400 text-xs font-bold block">
                        {subAcademic[i - 1]?.time || "8 min read"}
                      </span>
                      <a href="#" className="text-[#002B7F] font-bold text-sm flex items-center gap-2 group hover:gap-3 transition-all">
                        READ MORE <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-10">
            {/* Search Box */}
            <div className="bg-[#E9F0FF] p-8 rounded-[2rem] shadow-sm">
              <h4 className="text-[#002B7F] font-bold text-xl mb-6 flex items-center gap-3">
                <Search size={22} /> Find Insight
              </h4>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search Articles..." 
                  className="w-full p-4 rounded-xl border-none shadow-inner bg-white text-slate-800 placeholder:text-slate-300 font-medium focus:ring-2 focus:ring-[#002B7F]"
                />
              </div>
            </div>

            {/* Recent Updates */}
            <div>
              <h4 className="text-slate-900 font-bold text-xl mb-6 flex items-center gap-3">
                <Clock size={22} className="text-[#002B7F]" /> Recent Updates
              </h4>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-colors">
                    <img 
                      src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop" 
                      alt="Thumbnail" 
                      className="w-20 h-20 rounded-xl object-cover shadow-md group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[#c02424] text-[10px] font-black uppercase tracking-widest">{recentPosts[i - 1]?.category || "Uncategorized"}</span>
                      <h5 className="text-slate-800 font-bold text-sm leading-snug">{recentPosts[i - 1]?.title || "Write The Text Here For The Title Area"}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#000F35] p-10 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
              <Mail className="text-white opacity-10 absolute -right-4 -top-4 w-32 h-32 rotate-12" />
              <div className="relative z-10">
                <div className="bg-[#FFD700] w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                  <Mail className="text-[#000F35]" size={24} />
                </div>
                <h4 className="text-white text-3xl font-bold mb-3 leading-tight">
                  KAS Weekly Digest
                </h4>
                <p className="text-white/60 text-sm mb-8 font-medium">
                  Join 5,000+ parents and educators receiving our weekly dispatch on academic trends and cultural insights.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#FFD700] focus:bg-white/15 outline-none transition-all"
                  />
                  <button className="w-full bg-[#FFD700] text-[#000F35] p-4 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 uppercase tracking-wider">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Topics */}
            <div>
              <h4 className="text-slate-900 font-bold text-xl mb-6 flex items-center gap-3">
                Topics
              </h4>
              <div className="flex flex-wrap gap-3">
                {['Write Topic Here', 'Topic Here', 'Write Topic', 'Write Your Topic Here', 'Write Your Topic Here', 'Topic Here'].map((topic, idx) => (
                  <button key={idx} className="bg-[#E9F0FF] text-[#002B7F] px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#002B7F] hover:text-white transition-all shadow-sm">
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

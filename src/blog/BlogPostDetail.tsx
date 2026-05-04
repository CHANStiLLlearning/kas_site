import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Share2, Printer, Bookmark } from 'lucide-react';

const posts = [
  {
    id: '1',
    title: "The Vision of 2025: Bridging Global Tech with Khmer Tradition",
    category: "Innovation & Future",
    date: "May 02, 2026",
    readTime: "8 min read",
    author: "Dr. Somboon Pich",
    authorRole: "Director of Innovation",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
    content: `
      <p class="text-xl font-medium text-slate-700 leading-relaxed mb-8">
        At the heart of Phnom Penh, a new architectural marvel is rising. Not just a building of glass and steel, but a sanctuary where the golden era of Angkor meets the silicon age of Silicon Valley.
      </p>

      <h2 class="text-3xl font-bold text-[#002B7F] mt-12 mb-6">A Legacy of Innovation</h2>
      <p class="mb-6">
        Cambodia has always been a land of builders. From the hydraulic engineering of the West Baray to the celestial alignments of Angkor Wat, our ancestors were the innovators of their time. At Khmer American School, we believe that to move forward, we must understand the foundations that made us great.
      </p>

      <div class="my-12 bg-[#E9F0FF] p-8 rounded-3xl border-l-8 border-[#002B7F] italic text-lg text-slate-700">
        "Our curriculum isn't just about preparing students for jobs; it's about preparing them to build civilizations. We combine the critical thinking of American pedagogical standards with the cultural resilience of Khmer identity."
      </div>

      <h2 class="text-3xl font-bold text-[#002B7F] mt-12 mb-6">The 2025 Innovation Wing</h2>
      <p class="mb-6">
        Our upcoming Innovation Wing, scheduled for completion in late 2025, features state-of-the-art robotics labs, VR-immersion rooms for historical studies, and collaborative "Agora" spaces designed after traditional Khmer community pavilions. 
      </p>
      
      <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop" alt="Classroom" class="w-full h-100 object-cover rounded-4xl my-12 shadow-xl" referrerPolicy="no-referrer" />

      <h2 class="text-3xl font-bold text-[#002B7F] mt-12 mb-6">Global Standards, Local Heart</h2>
      <p class="mb-6">
        By integrating US Common Core standards with local language and arts programs, we ensure our graduates are "bi-lingual" in every sense—able to navigate the global economy while remaining anchored in their community.
      </p>

      <p class="mb-12">
        As we look toward the horizon of 2025, KAS remains committed to excellence in two traditions, ensuring that the flame of knowledge continues to burn bright for generations to come.
      </p>
    `
  },
  {
    id: '2',
    title: "Preserving the Royal Ballet: A Digital Initiative",
    category: "Arts & Culture",
    date: "April 28, 2026",
    readTime: "6 min read",
    author: "Ms. Nalini Khim",
    authorRole: "Arts & Culture Director",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop",
    content: `
      <p class="text-xl font-medium text-slate-700 leading-relaxed mb-8">
        Khmer American School students are working with traditional dancers and motion capture technology to preserve the Royal Ballet for future generations.
      </p>

      <h2 class="text-3xl font-bold text-[#002B7F] mt-12 mb-6">A Cultural Tech Initiative</h2>
      <p class="mb-6">
        This project blends Khmer heritage with digital tools, creating an archive that honors tradition while teaching new-age media skills.
      </p>

      <div class="my-12 bg-[#E9F0FF] p-8 rounded-3xl border-l-8 border-[#002B7F] italic text-lg text-slate-700">
        "Digital preservation allows our culture to travel farther without losing its soul."
      </div>

      <p class="mb-12">
        By 2027, the complete archive will be available to schools and cultural organizations across Cambodia and beyond.
      </p>
    `
  }
];

export const BlogPostDetail = () => {
  const { id } = useParams();
  const post = posts.find((item) => item.id === id) || posts[0];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-[#002B7F] font-bold mb-12 hover:-translate-x-2 transition-transform">
          <ArrowLeft size={20} /> Back to Ambassador
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-[#c02424] font-black uppercase tracking-[0.2em] text-sm mb-4 block">
            {post.category}
          </span>
          <h1 className="text-[#002B7F] text-4xl md:text-6xl font-black leading-tight mb-8">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-6 border-y border-slate-100 py-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#002B7F] rounded-full flex items-center justify-center text-white font-bold">
                SP
              </div>
              <div>
                <p className="font-bold text-slate-900">{post.author}</p>
                <p className="text-xs text-slate-500 font-medium">{post.authorRole}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-slate-400">
              <span className="flex items-center gap-2 text-sm font-bold">
                <Clock size={16} /> {post.readTime}
              </span>
              <div className="flex gap-4">
                <button className="hover:text-[#002B7F] transition-colors"><Share2 size={20} /></button>
                <button className="hover:text-[#002B7F] transition-colors"><Bookmark size={20} /></button>
                <button className="hover:text-[#002B7F] transition-colors"><Printer size={20} /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl h-112.5">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer info */}
        <div className="mt-20 p-12 bg-[#F8FAFC] rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-24 h-24 bg-[#002B7F] rounded-4xl flex items-center justify-center text-white text-3xl font-black shrink-0">
            KAS
          </div>
          <div>
            <h4 className="text-[#002B7F] text-2xl font-black mb-2 leading-none uppercase tracking-tighter">About The Academic Ambassador</h4>
            <p className="text-slate-500 font-medium italic">
              The official publication of Khmer American School, dedicated to documenting the intersection of modern education and timeless culture.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

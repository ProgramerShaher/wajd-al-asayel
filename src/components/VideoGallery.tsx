import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { VIDEO_ITEMS } from '../data/studioData';
import { Play, X } from 'lucide-react';

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleVideoClick = (videoUrl: string) => {
    setActiveVideo(videoUrl);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section id="video-gallery" className="py-24 relative overflow-hidden bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display-luxury text-[var(--text-primary)] mb-6">
              المعرض المرئي
            </h2>
            <p className="text-lg text-[var(--text-secondary)] font-sans-clean leading-relaxed">
              تغطية حية لأعمالنا تبرز دقة التفاصيل وجودة التنفيذ في مشاريعنا، لتعيش التجربة قبل البدء.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {VIDEO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl glass-card cursor-pointer ${item.colSpan}`}
              onClick={() => item.videoUrl && handleVideoClick(item.videoUrl)}
            >
              <div className="aspect-video relative overflow-hidden">
                <video
                  src={item.videoUrl}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 text-white transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col md:flex-row justify-between items-end">
                <div>
                  <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-white bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
                    {item.category}
                  </div>
                  <h3 className="text-xl md:text-2xl font-display-luxury text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 line-clamp-2 max-w-lg">
                    {item.curatorNotes}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20">
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}

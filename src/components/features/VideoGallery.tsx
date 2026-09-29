import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { VIDEO_ITEMS } from '@/data/studioData';
import { Play, X } from 'lucide-react';

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleVideoClick = (videoUrl: string) => {
    setActiveVideo(videoUrl);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const isYouTubeUrl = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <section id="video-gallery" className="py-10 sm:py-14 md:py-20 relative overflow-hidden bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-12 lg:px-16 relative z-10 text-right">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-display-luxury text-[var(--text-primary)] mb-3">
              المعرض المرئي
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] font-sans-clean leading-relaxed">
              تغطية حية لأعمالنا تبرز دقة التفاصيل وجودة التنفيذ في مشاريعنا، لتعيش التجربة قبل البدء.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {VIDEO_ITEMS.map((item, index) => {
            const isYouTube = item.videoUrl ? isYouTubeUrl(item.videoUrl) : false;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-2xl glass-card cursor-pointer"
                onClick={() => item.videoUrl && handleVideoClick(item.videoUrl)}
              >
                <div className="aspect-video relative overflow-hidden">
                  {isYouTube ? (
                    <img src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" loading="lazy" decoding="async" />
                  ) : (
                    <video
                      src={item.videoUrl}
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  )}
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 text-white transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-1" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>
                
                <div className="p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 mb-2 text-[10px] sm:text-xs font-semibold tracking-wider text-[#C19A6B] bg-[var(--bg-elevated)] border border-[#C19A6B]/30 rounded-full font-sans-clean">
                      {item.category}
                    </div>
                    <h3 className="text-base sm:text-xl font-display-luxury text-[var(--text-primary)] mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] line-clamp-2 font-sans-clean leading-relaxed">
                      {item.curatorNotes}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-3 sm:p-6"
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
            className="fixed top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.6)] flex items-center justify-center text-white backdrop-blur-md transition-all z-[100]"
            aria-label="إغلاق الفيديو"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <div 
            className={`w-full ${isYouTubeUrl(activeVideo) ? 'max-w-[400px] aspect-[9/16]' : 'max-w-5xl aspect-[9/16] md:aspect-video'} max-h-[88dvh] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 flex justify-center bg-black relative`}
            onClick={(e) => e.stopPropagation()}
          >
            {isYouTubeUrl(activeVideo) ? (
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1`}
                className="w-full md:w-3/4 h-full aspect-[9/16] md:aspect-video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}


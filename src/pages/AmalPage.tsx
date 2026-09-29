/**
 * pages/AmalPage.tsx — معرض الأعمال الكامل
 * URL: /amal | تستهدف: "أعمال ديكورات الدمام" / "معرض ديكورات"
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MapPin, X, Phone, MessageCircle } from 'lucide-react';
import { PORTFOLIO_ITEMS, VIDEO_ITEMS } from '@/data/studioData';

const ALL_CATEGORIES = ['الكل', ...Array.from(new Set(PORTFOLIO_ITEMS.map(p => p.category)))];

export default function AmalPage() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [modalItem, setModalItem] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);

  const filtered = activeCategory === 'الكل'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(p => p.category === activeCategory);

  useEffect(() => {
    const prev = document.title;
    document.title = 'معرض أعمال ديكورات الدمام | وجد الأصايل — أكثر من 200 مشروع منجز';
    setMeta('description', 'شاهد أعمالنا المنجزة في ديكورات الدمام والخبر: بديل الخشب، بديل الرخام، جبس بورد، أسقف معلقة. أكثر من 200 مشروع منجز بخبرة 30 عاماً.');
    setMeta('keywords', 'معرض ديكورات الدمام, أعمال ديكورات الدمام, صور ديكورات الدمام, ديكورات فلل الدمام');
    setCanonical('https://wajd-al-asayel.vercel.app/amal');
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && setModalItem(null);
    window.addEventListener('keydown', handleKey);
    return () => { document.title = prev; window.removeEventListener('keydown', handleKey); };
  }, []);

  return (
    <main id="amal-main" className="relative z-20 text-right" dir="rtl">

      {/* ══ HERO ══ */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-5 font-sans-clean">
            <Link to="/" className="hover:text-[#C19A6B] transition-colors">الرئيسية</Link>
            <span>/</span>
            <span className="text-[#C19A6B]">معرض الأعمال</span>
          </nav>
          <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-4 font-semibold font-sans-clean">
            <Sparkles size={13} />
            <span>أكثر من 200 مشروع منجز في المنطقة الشرقية</span>
          </div>
          <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--text-primary)] leading-tight mb-4">
            معرض <span className="text-[#C19A6B]">أعمالنا</span>
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans-clean">
            استعرض أحدث مشاريعنا المنفذة في الدمام والخبر والظهران — ديكورات، دهانات، عوازل، تشطيب متكامل.
          </p>
        </div>
      </section>

      {/* ══ فلتر الفئات ══ */}
      <div className="sticky top-[72px] z-30 bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--border-subtle)] py-3 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 pb-1 w-max">
            {ALL_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-sans-clean font-semibold transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#C19A6B] text-[#050505] border-[#C19A6B] shadow-[0_0_15px_rgba(193,154,107,0.4)]'
                    : 'bg-[var(--bg-surface)] border-[var(--border-light)] text-[var(--text-muted)] hover:border-[#C19A6B]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══ شبكة الصور ══ */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {filtered.map((item, idx) => (
                <motion.figure
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => setModalItem(item)}
                  className="relative rounded-xl overflow-hidden group cursor-pointer bg-[var(--bg-elevated)] aspect-square"
                  itemScope itemType="https://schema.org/ImageObject"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    itemProp="contentUrl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <figcaption className="absolute bottom-0 right-0 left-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs font-bold text-white font-sans-clean line-clamp-2" itemProp="name">{item.title}</p>
                    <p className="text-[10px] text-[#C19A6B] font-sans-clean flex items-center gap-1 mt-0.5">
                      <MapPin size={9} /> {item.location}
                    </p>
                  </figcaption>
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-0.5 rounded-full bg-[#050505]/80 backdrop-blur-md text-[9px] text-[#38BDF8] font-sans-clean">{item.category}</span>
                  </div>
                </motion.figure>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══ الفيديوهات ══ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-8 text-right">
            المعرض المرئي
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VIDEO_ITEMS.slice(0, 6).map((item, idx) => (
              <motion.a
                key={item.id}
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group rounded-2xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--border-light)] hover:border-[#C19A6B]/50 transition-all block"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#C19A6B]/90 backdrop-blur-md flex items-center justify-center text-[#050505] group-hover:scale-110 transition-transform">
                      ▶
                    </div>
                  </div>
                </div>
                <div className="p-4 text-right">
                  <span className="text-[10px] text-[#C19A6B] font-sans-clean font-semibold">{item.category}</span>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] font-sans-clean mt-1">{item.title}</h3>
                  <p className="text-[11px] text-[var(--text-secondary)] font-sans-clean mt-1 flex items-center gap-1">
                    <MapPin size={9} /> {item.location}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-primary)] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            أعجبتك أعمالنا؟ احجز معاينة مجانية
          </h2>
          <p className="text-sm text-[var(--text-secondary)] font-sans-clean mb-8">
            تواصل معنا الآن وسيصل فريقنا الفني للمعاينة في نفس اليوم — بدون أي التزام.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+966556557498" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C19A6B] text-[#050505] font-bold text-sm hover:bg-[#D4B07A] transition-all shadow-[0_0_25px_rgba(193,154,107,0.5)]">
              <Phone size={16} /> 0556557498
            </a>
            <a href="https://wa.me/966556557498" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#1eb958] transition-all">
              <MessageCircle size={16} /> واتساب
            </a>
          </div>
        </div>
      </section>

      {/* ══ Modal لعرض الصورة الكاملة ══ */}
      <AnimatePresence>
        {modalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setModalItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <img src={modalItem.imageUrl} alt={modalItem.title} className="w-full max-h-[80vh] object-contain" />
              <button
                onClick={() => setModalItem(null)}
                className="absolute top-3 left-3 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-0 right-0 left-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-base font-bold text-white font-sans-clean">{modalItem.title}</p>
                <p className="text-xs text-[#C19A6B] font-sans-clean mt-1">{modalItem.category} • {modalItem.location}</p>
                <p className="text-xs text-white/70 font-sans-clean mt-1">{modalItem.curatorNotes}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
  el.content = content;
}
function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) { el = document.createElement('link'); el.rel = 'canonical'; document.head.appendChild(el); }
  el.href = href;
}

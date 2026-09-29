/**
 * pages/DahanatPage.tsx — صفحة دهانات الدمام
 * تستهدف: "دهانات" / "دهانات الدمام" / "معلم دهانات"
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Phone, MessageCircle, Sun } from 'lucide-react';
import { SERVICES_DATA, SWATCH_FINISHES, STUDIO_METRICS, TESTIMONIALS } from '@/data/studioData';
import MaterialInspector from '@/components/features/MaterialInspector';
import ContactSection from '@/components/features/ContactSection';

// ── فلترة خدمات الدهانات فقط
const PAINT_SERVICES = SERVICES_DATA.filter(s =>
  ['دهانات وتشطيب', 'تأسيس وإنشاء', 'تشطيب متكامل'].includes(s.category)
);

const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'دهانات الدمام والخبر — مؤسسة وجد الأصايل',
      alternateName: ['دهانات', 'دهانات الدمام', 'معلم دهانات الدمام', 'دهانات جوتن الدمام', 'افضل دهانات الدمام'],
      description: 'أفضل معلم دهانات بالدمام والخبر: دهانات داخلية وخارجية فاخرة بأحدث الألوان والمواد. دهانات جوتن، الجزيرة، فاليو. خبرة 30 عاماً وضمان رسمي.',
      url: 'https://wajd-al-asayel.vercel.app/dakhanat',
      provider: {
        '@type': 'HomeAndConstructionBusiness',
        name: 'مؤسسة وجد الأصايل',
        telephone: '+966556557498',
        address: { '@type': 'PostalAddress', addressLocality: 'الدمام', addressCountry: 'SA' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '186', bestRating: '5' },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'كم تكلفة دهان غرفة بالدمام؟', acceptedAnswer: { '@type': 'Answer', text: 'تبدأ من 150 ريال للغرفة حسب المساحة. معاينة مجانية: 0556557498.' } },
        { '@type': 'Question', name: 'ما أفضل نوع دهان للمنازل بالدمام؟', acceptedAnswer: { '@type': 'Answer', text: 'دهانات جوتن وفاليو للداخل، والسيليكون للخارج لمقاومة حرارة الدمام.' } },
      ],
    },
  ],
};

export default function DahanatPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'دهانات الدمام والخبر | معلم دهانات متخصص — مؤسسة وجد الأصايل';
    setMeta('description', 'أفضل معلم دهانات بالدمام والخبر: دهانات داخلية وخارجية فاخرة بدهانات جوتن، الجزيرة، فاليو. خبرة 30 عاماً وضمان رسمي. اتصل: 0556557498');
    setMeta('keywords', 'دهانات الدمام, دهانات, معلم دهانات الدمام, دهانات جوتن, دهانات داخلية, دهانات خارجية الدمام, افضل دهانات الدمام');
    setCanonical('https://wajd-al-asayel.vercel.app/dakhanat');
    return () => { document.title = prev; };
  }, []);

  return (
    <main id="dakhanat-main" className="relative z-20 text-right" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />

      {/* ══ HERO ══ */}
      <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-end overflow-hidden bg-[var(--bg-primary)] pt-24 sm:pt-28">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/IMG-20260921-WA0004.webp"
            alt="دهانات الدمام — مؤسسة وجد الأصايل"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/55 to-[var(--bg-primary)]/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20 w-full">
          <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-4 font-sans-clean">
            <Link to="/" className="hover:text-[#C19A6B] transition-colors">الرئيسية</Link>
            <span>/</span>
            <span className="text-[#C19A6B]">دهانات الدمام</span>
          </nav>

          <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-4 font-semibold font-sans-clean">
            <Sparkles size={13} />
            <span>دهانات جوتن • الجزيرة • فاليو — المنطقة الشرقية</span>
          </div>

          <h1 className="font-serif-luxury text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--text-primary)] leading-tight mb-5"
            itemScope itemType="https://schema.org/Service" itemProp="name">
            دهانات<br />
            <span className="text-[#C19A6B]">الدمام</span>
          </h1>

          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-sans-clean mb-8">
            دهانات داخلية وخارجية احترافية للفلل والشقق والعمارات بالدمام والخبر والمنطقة الشرقية — بأجود دهانات جوتن والجزيرة وفاليو الأصلية مع معالجة كاملة للجدران وضمان رسمي.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="tel:+966556557498" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C19A6B] text-[#050505] font-bold text-sm hover:bg-[#D4B07A] transition-all shadow-[0_0_25px_rgba(193,154,107,0.5)]">
              <Phone size={16} /> اتصل الآن: 0556557498
            </a>
            <a href="https://wa.me/966556557498" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#1eb958] transition-all">
              <MessageCircle size={16} /> واتساب مباشر
            </a>
          </div>
        </div>
      </section>

      {/* ══ إحصائيات ══ */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-secondary)] border-t border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-right">
          {STUDIO_METRICS.map((metric, i) => (
            <motion.div key={metric.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <span className="font-display-luxury text-3xl sm:text-4xl text-[var(--text-primary)] font-bold block">{metric.value}</span>
              <span className="text-xs text-[#C19A6B] font-bold block font-sans-clean">{metric.label}</span>
              <span className="text-[11px] text-[var(--text-muted)] block font-sans-clean">{metric.sub}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ خدمات الدهانات ══ */}
      <section id="dakhanat-services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-right">
            <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-3 font-semibold font-sans-clean">
              <Sparkles size={13} />
              <span>خدمات الدهانات المتخصصة</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              خدمات الدهانات التي ننفذها
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--text-secondary)] font-sans-clean">
              نُنفِّذ جميع أعمال الدهانات بأجود المواد الأصلية ودهانات جوتن والجزيرة وفاليو المعتمدة رسمياً.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {PAINT_SERVICES.map((service, idx) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="group rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-light)] overflow-hidden hover:border-[#C19A6B]/60 hover:shadow-[0_8px_30px_rgba(193,154,107,0.15)] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-elevated)]">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#38BDF8]/30 text-[10px] text-[#38BDF8] font-sans-clean">{service.category}</span>
                </div>
                <div className="p-5 sm:p-6 text-right">
                  <h3 className="font-serif-luxury text-lg sm:text-xl text-[var(--text-primary)] font-bold mb-2 group-hover:text-[#C19A6B] transition-colors">{service.title}</h3>
                  <p className="text-xs text-[#C19A6B] italic mb-3 font-sans-clean">{service.tagline}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 font-sans-clean">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map(feat => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-sans-clean">
                        <CheckCircle2 size={11} className="text-[#C19A6B] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ معاينة خامات الدهانات (المكون الحالي) ══ */}
      <div className="border-t border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-8">
          <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-2 font-semibold font-sans-clean">
            <Sun size={13} />
            <span>جرِّب ألوان الدهانات وخاماتها قبل البدء</span>
          </div>
        </div>
        <MaterialInspector />
      </div>

      {/* ══ آراء العملاء ══ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-8 text-right">
            ماذا يقول عملاؤنا
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-light)] text-right">
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, si) => <span key={si} className="text-[#C19A6B] text-sm">★</span>)}
                </div>
                <blockquote className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans-clean mb-4">"{t.quote}"</blockquote>
                <p className="font-bold text-sm text-[var(--text-primary)] font-sans-clean">{t.author}</p>
                <p className="text-[11px] text-[#C19A6B] font-sans-clean">{t.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ التواصل ══ */}
      <ContactSection />
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

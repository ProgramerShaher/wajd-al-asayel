/**
 * pages/DikuratPage.tsx — صفحة ديكورات الدمام
 * تستهدف: "ديكورات" / "ديكورات الدمام" / "معلم ديكورات"
 * تعتمد على: SERVICES_DATA + PORTFOLIO_ITEMS + TESTIMONIALS من studioData
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowLeft, Star, MapPin, Phone, MessageCircle } from 'lucide-react';
import { SERVICES_DATA, PORTFOLIO_ITEMS, TESTIMONIALS, STUDIO_METRICS } from '@/data/studioData';
import ContactSection from '@/components/features/ContactSection';

// ── فلترة الخدمات المتعلقة بالديكورات
const DECOR_SERVICES = SERVICES_DATA.filter(s =>
  ['ديكورات إنارة راقية', 'ديكورات حديثة', 'أسقف ديكورية', 'تكسيات حديثة', 'تشطيب متكامل'].includes(s.category)
);

// ── فلترة أعمال الديكور من البورتفوليو
const DECOR_PORTFOLIO = PORTFOLIO_ITEMS.filter(p =>
  ['وحدات التلفاز والديكورات', 'أسقف جبس بورد', 'ديكورات إنارة فاخرة', 'بديل الرخام والتكسيات', 'بديل الخشب', 'تشطيب متكامل', 'ديكور غرف النوم'].includes(p.category)
).slice(0, 9);

// ── بيانات SEO لـ JSON-LD
const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'ديكورات الدمام والخبر',
      alternateName: ['ديكورات', 'ديكورات الدمام', 'معلم ديكورات الدمام', 'ديكور فلل الدمام'],
      description: 'أحدث الديكورات العصرية بالدمام والخبر: بديل الخشب، بديل الرخام، جبس بورد، بانوهات، أسقف معلقة. خبرة 30 عاماً.',
      url: 'https://wajd-al-asayel.vercel.app/dikurat',
      provider: {
        '@type': 'HomeAndConstructionBusiness',
        name: 'مؤسسة وجد الأصايل',
        telephone: '+966556557498',
        address: { '@type': 'PostalAddress', addressLocality: 'الدمام', addressCountry: 'SA' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '186', bestRating: '5' },
      },
      areaServed: ['الدمام', 'الخبر', 'الظهران', 'القطيف'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'ما أفضل ديكورات الدمام؟', acceptedAnswer: { '@type': 'Answer', text: 'وجد الأصايل الأفضل بخبرة 30 عاماً وأكثر من 200 مشروع.' } },
        { '@type': 'Question', name: 'كم تكلفة ديكورات صالة بالدمام؟', acceptedAnswer: { '@type': 'Answer', text: 'تبدأ من 2000 ريال حسب المساحة والمواد. معاينة مجانية: 0556557498.' } },
      ],
    },
  ],
};

export default function DikuratPage() {
  // ── تحديث meta tags
  useEffect(() => {
    const prev = document.title;
    document.title = 'ديكورات الدمام والخبر | معلم ديكورات متخصص — مؤسسة وجد الأصايل';
    setMeta('description', 'أحدث الديكورات العصرية في الدمام والخبر: بديل الخشب، بديل الرخام، جبس بورد، أسقف معلقة. خبرة 30 عاماً وضمان رسمي. اتصل: 0556557498');
    setMeta('keywords', 'ديكورات الدمام, ديكورات, معلم ديكورات الدمام, ديكورات فلل, جبس بورد, بديل الخشب, بديل الرخام, ديكورات الخبر');
    setCanonical('https://wajd-al-asayel.vercel.app/dikurat');
    return () => { document.title = prev; };
  }, []);

  return (
    <main id="dikurat-main" className="relative z-20 text-right" dir="rtl">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />

      {/* ══ HERO ══ */}
      <section
        id="dikurat-hero"
        className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-end overflow-hidden bg-[var(--bg-primary)] pt-24 sm:pt-28"
        itemScope itemType="https://schema.org/Service"
      >
        {/* خلفية: أول صورة ديكور حقيقية */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/IMG-20260921-WA0018.webp"
            alt="ديكورات الدمام — مؤسسة وجد الأصايل"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/60 to-[var(--bg-primary)]/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-4 font-sans-clean" aria-label="مسار التنقل">
            <Link to="/" className="hover:text-[#C19A6B] transition-colors">الرئيسية</Link>
            <span>/</span>
            <span className="text-[#C19A6B]">ديكورات الدمام</span>
          </nav>

          <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-4 font-semibold font-sans-clean">
            <Sparkles size={13} />
            <span>الدمام • الخبر • الظهران • المنطقة الشرقية</span>
          </div>

          <h1
            className="font-serif-luxury text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--text-primary)] leading-tight mb-5"
            itemProp="name"
          >
            ديكورات<br />
            <span className="text-[#C19A6B]">الدمام</span>
          </h1>

          <p
            className="max-w-2xl text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-sans-clean mb-8"
            itemProp="description"
          >
            تصميم وتنفيذ أرقى الديكورات العصرية للفلل والشقق والمجالس بالدمام والخبر — بديل الخشب، بديل الرخام، جبس بورد، بانوهات فاخرة، أسقف معلقة. بخبرة تفوق 30 عاماً وضمان رسمي.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+966556557498"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C19A6B] text-[#050505] font-bold text-sm hover:bg-[#D4B07A] transition-all shadow-[0_0_25px_rgba(193,154,107,0.5)]"
            >
              <Phone size={16} />
              اتصل الآن: 0556557498
            </a>
            <a
              href="https://wa.me/966556557498"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#1eb958] transition-all"
            >
              <MessageCircle size={16} />
              واتساب مباشر
            </a>
          </div>
        </div>
      </section>

      {/* ══ إحصائيات ══ */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-secondary)] border-t border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-right">
          {STUDIO_METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="font-display-luxury text-3xl sm:text-4xl text-[var(--text-primary)] font-bold block">{metric.value}</span>
              <span className="text-xs text-[#C19A6B] font-bold block font-sans-clean">{metric.label}</span>
              <span className="text-[11px] text-[var(--text-muted)] block font-sans-clean">{metric.sub}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ خدمات الديكور ══ */}
      <section id="dikurat-services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-right">
            <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-3 font-semibold font-sans-clean">
              <Sparkles size={13} />
              <span>خدمات الديكور المتخصصة</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              أنواع الديكورات التي ننفذها
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--text-secondary)] font-sans-clean">
              نتخصص في تنفيذ جميع أنواع الديكورات العصرية بأعلى معايير الجودة وأجود المواد المعتمدة.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {DECOR_SERVICES.map((service, idx) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="group rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-light)] overflow-hidden hover:border-[#C19A6B]/60 hover:shadow-[0_8px_30px_rgba(193,154,107,0.15)] transition-all duration-300"
                itemScope itemType="https://schema.org/Service"
              >
                {/* صورة حقيقية من المشروع */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-elevated)]">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    itemProp="image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#38BDF8]/30 text-[10px] text-[#38BDF8] font-sans-clean">
                    {service.category}
                  </span>
                  <span className="absolute bottom-3 right-3 font-display-luxury text-3xl text-[#38BDF8]/50 font-bold">
                    {service.number}
                  </span>
                </div>

                {/* محتوى البطاقة */}
                <div className="p-5 sm:p-6 text-right">
                  <h3 className="font-serif-luxury text-lg sm:text-xl text-[var(--text-primary)] font-bold mb-2 group-hover:text-[#C19A6B] transition-colors" itemProp="name">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#C19A6B] italic mb-3 font-sans-clean">{service.tagline}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 font-sans-clean" itemProp="description">
                    {service.description}
                  </p>
                  {/* المواد */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.materials.map(mat => (
                      <span key={mat} className="text-[10px] px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)] font-sans-clean">
                        {mat}
                      </span>
                    ))}
                  </div>
                  {/* الميزات */}
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

      {/* ══ معرض أعمال الديكور ══ */}
      <section id="dikurat-portfolio" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-right">
            <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-3 font-semibold font-sans-clean">
              <Sparkles size={13} />
              <span>أعمال منفذة في الدمام والخبر</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              معرض ديكوراتنا
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
            {DECOR_PORTFOLIO.map((item, idx) => (
              <motion.figure
                key={item.id}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <figcaption className="absolute bottom-0 right-0 left-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs font-bold text-white font-sans-clean">{item.title}</p>
                  <p className="text-[10px] text-[#C19A6B] font-sans-clean flex items-center gap-1 mt-0.5">
                    <MapPin size={9} /> {item.location}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/amal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C19A6B] text-[#C19A6B] font-bold text-sm hover:bg-[#C19A6B] hover:text-[#050505] transition-all font-sans-clean"
            >
              <ArrowLeft size={16} />
              عرض جميع الأعمال
            </Link>
          </div>
        </div>
      </section>

      {/* ══ آراء العملاء ══ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-8 text-right">
            ماذا يقول عملاؤنا
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-light)] text-right"
                itemScope itemType="https://schema.org/Review"
              >
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, si) => <Star key={si} size={13} className="text-[#C19A6B] fill-[#C19A6B]" />)}
                </div>
                <blockquote className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans-clean mb-4" itemProp="reviewBody">
                  "{t.quote}"
                </blockquote>
                <div>
                  <p className="font-bold text-sm text-[var(--text-primary)] font-sans-clean" itemProp="author">{t.author}</p>
                  <p className="text-[11px] text-[#C19A6B] font-sans-clean">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ قسم التواصل الكامل ══ */}
      <ContactSection />
    </main>
  );
}

// ── helpers
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

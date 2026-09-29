/**
 * pages/AwazelPage.tsx — صفحة عوازل الدمام
 * Primary Keyword: عوازل الدمام
 * Secondary: عزل أسطح الدمام، عوازل مائية الدمام، عوازل الخبر
 * Intent: Commercial
 */
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Phone, MessageCircle, Shield, HelpCircle, ArrowLeft } from 'lucide-react';
import { STUDIO_METRICS } from '@/data/studioData';
import ContactSection from '@/components/features/ContactSection';
import PageSEO from '@/components/seo/PageSEO';
import { AWAZEL_SEO, AWAZEL_JSONLD } from '@/data/seoData';

const AWAZEL_SERVICES = [
  {
    id: 'water-insulation',
    title: 'عزل مائي للأسطح',
    description: 'عزل أسطح مائي متكامل باستخدام أفضل المواد المعتمدة لمقاومة تسريبات الأمطار والرطوبة مع ضمان رسمي حتى 10 سنوات.',
    features: ['مقاومة تسريبات الأمطار', 'حماية من الرطوبة', 'ضمان 10 سنوات', 'مواد معتمدة'],
    imageUrl: '/images/roof-waterproofing-foam-insulation.webp',
    category: 'عزل مائي',
  },
  {
    id: 'foam-insulation',
    title: 'عزل فوم للأسطح',
    description: 'عزل فوم متطور يوفر حماية مزدوجة من الحرارة والرطوبة، يرفع كفاءة التكييف ويخفض فاتورة الكهرباء.',
    features: ['عزل حراري وصوتي', 'خفض استهلاك الكهرباء', 'متانة عالية', 'سهل التطبيق'],
    imageUrl: '/images/garden-pergolas-and-umbrellas.webp',
    category: 'عزل فوم',
  },
  {
    id: 'thermal-insulation',
    title: 'عزل حراري للجدران والأسقف',
    description: 'حلول عزل حراري للجدران والأسقف الداخلية لتوفير بيئة مريحة وتقليل تأثير حرارة الطقس في المنطقة الشرقية.',
    features: ['تقليل درجة حرارة الداخل', 'توفير الطاقة', 'راحة صوتية', 'مواد آمنة بيئياً'],
    imageUrl: '/images/cr-certificate.webp',
    category: 'عزل حراري',
  },
];

const FAQ_ITEMS_AWAZEL = [
  {
    q: 'ما هي أنواع العوازل التي تقدمها مؤسسة وجد الأصايل؟',
    a: 'نقدم العزل المائي للأسطح، عزل الفوم الحراري، والعزل الحراري للجدران والأسقف. جميع أعمالنا بمواد معتمدة وضمان رسمي يصل إلى 10 سنوات.',
  },
  {
    q: 'كم مدة ضمان أعمال عزل الأسطح؟',
    a: 'نقدم ضماناً رسمياً معتمداً يصل إلى 10 سنوات على أعمال العزل المائي للأسطح، مع التزام كامل بالجودة ومتابعة ما بعد التنفيذ.',
  },
  {
    q: 'هل تغطون منطقة الخبر والظهران أيضاً؟',
    a: 'نعم، نغطي الدمام والخبر والظهران والقطيف وسيهات والجبيل وجميع مدن المنطقة الشرقية لأعمال العزل.',
  },
  {
    q: 'هل تقدمون معاينة مجانية لأعمال العزل؟',
    a: 'نعم، نوفر معاينة ميدانية مجانية وعرض سعر تفصيلي بلا أي التزام. اتصل بنا: 0556557498',
  },
];

export default function AwazelPage() {
  return (
    <main id="awazel-main" className="relative z-20 text-right" dir="rtl">
      {/* SEO Component مركزي */}
      <PageSEO
        title={AWAZEL_SEO.title}
        description={AWAZEL_SEO.description}
        canonical={AWAZEL_SEO.canonical}
        ogTitle={AWAZEL_SEO.ogTitle}
        ogImage={AWAZEL_SEO.ogImage}
        jsonLd={AWAZEL_JSONLD}
      />

      {/* ══ HERO ══ */}
      <section
        className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-end overflow-hidden bg-[var(--bg-primary)] pt-24 sm:pt-28"
      >
        <div className="absolute inset-0 z-0">
          <img src="/images/roof-waterproofing-foam-insulation.webp"
            alt="عوازل أسطح بالدمام — مؤسسة وجد الأصايل"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high" decoding="sync" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/55 to-[var(--bg-primary)]/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20 w-full">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-4 font-sans-clean">
            <Link to="/" className="hover:text-[#C19A6B] transition-colors">الرئيسية</Link>
            <span>/</span>
            <span className="text-[#C19A6B]">عوازل الدمام</span>
          </nav>

          <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-4 font-semibold font-sans-clean">
            <Sparkles size={13} />
            <span>الدمام • الخبر • الظهران • المنطقة الشرقية</span>
          </div>

          <h1 className="font-serif-luxury text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--text-primary)] leading-tight mb-5">
            عوازل<br />
            <span className="text-[#C19A6B]">الدمام</span>
          </h1>

          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-sans-clean mb-8">
            خدمات عزل الأسطح المائية والحرارية بالدمام والخبر والمنطقة الشرقية — عزل فوم متطور، عوازل مائية معتمدة، وضمان رسمي يصل إلى 10 سنوات.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+966556557498"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C19A6B] text-[#050505] font-bold text-sm hover:bg-[#D4B07A] transition-all shadow-[0_0_25px_rgba(193,154,107,0.5)]"
            >
              <Phone size={16} /> اتصل الآن: 0556557498
            </a>
            <a
              href="https://wa.me/966556557498"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#1eb958] transition-all"
            >
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

      {/* ══ خدمات العوازل ══ */}
      <section id="awazel-services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-right">
            <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-3 font-semibold font-sans-clean">
              <Shield size={13} />
              <span>خدمات العزل المتخصصة</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              خدمات عوازل الأسطح التي ننفذها
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--text-secondary)] font-sans-clean">
              نُنفِّذ جميع أعمال العزل المائي والحراري بأجود المواد المعتمدة مع ضمان رسمي يصل إلى 10 سنوات.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {AWAZEL_SERVICES.map((service, idx) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-light)] overflow-hidden hover:border-[#C19A6B]/60 hover:shadow-[0_8px_30px_rgba(193,154,107,0.15)] transition-all duration-300"
                itemScope itemType="https://schema.org/Service"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-elevated)]">
                  <img src={service.imageUrl}
                    alt={`${service.title} بالدمام — وجد الأصايل`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    itemProp="image" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#38BDF8]/30 text-[10px] text-[#38BDF8] font-sans-clean">
                    {service.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6 text-right">
                  <h3 className="font-serif-luxury text-lg sm:text-xl text-[var(--text-primary)] font-bold mb-2 group-hover:text-[#C19A6B] transition-colors" itemProp="name">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 font-sans-clean" itemProp="description">
                    {service.description}
                  </p>
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

      {/* ══ الضمان ══ */}
      <section className="py-12 sm:py-14 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#C19A6B]/10 border border-[#C19A6B]/30 text-[#C19A6B] text-sm font-bold font-sans-clean mb-4">
            <Shield size={16} />
            ضمان رسمي معتمد حتى 10 سنوات
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            ضمانة الجودة والاستدامة
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans-clean max-w-2xl mx-auto mb-6">
            نقدم ضماناً رسمياً معتمداً يصل إلى 10 سنوات على جميع أعمال العزل المائي والحراري للأسطح بالدمام والخبر والمنطقة الشرقية.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/amal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C19A6B] text-[#C19A6B] font-bold text-sm hover:bg-[#C19A6B] hover:text-[#050505] transition-all font-sans-clean"
            >
              <ArrowLeft size={16} />
              شاهد أعمالنا
            </Link>
          </div>
        </div>
      </section>

      {/* ══ أسئلة شائعة ══ */}
      <section id="awazel-faq" className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-3 font-semibold font-sans-clean">
            <HelpCircle size={13} />
            <span>أسئلة يسألها عملاؤنا</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-8">
            أسئلة شائعة حول عوازل الدمام
          </h2>
          <dl className="space-y-5">
            {FAQ_ITEMS_AWAZEL.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-light)] p-5 sm:p-6"
              >
                <dt className="font-bold text-sm sm:text-base text-[var(--text-primary)] font-sans-clean mb-2">
                  {item.q}
                </dt>
                <dd className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans-clean">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ══ التواصل ══ */}
      <ContactSection />
    </main>
  );
}

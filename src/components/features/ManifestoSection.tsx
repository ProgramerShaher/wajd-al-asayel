import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import { STUDIO_METRICS } from '../data/studioData';

export default function ManifestoSection() {
  const [activeTab, setActiveTab] = useState<'quality' | 'warranty' | 'execution'>('quality');

  return (
    <section
      id="manifesto"
      className="relative w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-16 bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300"
    >
      {/* Background Accent Subtle Glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#C19A6B]/5 rounded-full blur-[100px] sm:blur-[140px]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 text-right">
          <div>
            <div className="flex items-center gap-2.5 text-xs text-[#C19A6B] mb-2 sm:mb-3 font-semibold font-sans-clean">
              <Sparkles size={13} />
              <span>خبرة تفوق ٣٠ سنة في المنطقة الشرقية</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] max-w-3xl leading-[1.2]">
              دقة في التنفيذ <span className="text-[#C19A6B]">وجودة تدوم</span> لسنوات
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans-clean">
            نحرص على التأسيس الصحيح والمعالجة الجذرية، واستخدام أجود الخامات في الدهانات والديكورات والعوازل المائية والسطحية والفرايش والأرضيات والأسقف والجدران التي تقاوم عوامل الرطوبة والحرارة بالشرقية.
          </p>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Visual & Certified Artisan Quote Card */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {/* Visual Architecture Showcase */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--border-light)] group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                alt="تنفيذ دهانات وديكورات داخلية حديثة بالدمام والخبر"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 right-4 left-4 sm:bottom-6 sm:right-6 sm:left-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="text-right">
                  <span className="text-xs text-[#38BDF8] block mb-1 font-semibold tracking-wide">
                    مشروع سكني • الخبر
                  </span>
                  <h3 className="font-serif-luxury text-lg sm:text-xl md:text-2xl text-[var(--text-primary)] font-bold">
                    تشطيب دهانات جوتن الحديثة مع بديل الخشب والرخام
                  </h3>
                </div>
                <div className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)]/90 backdrop-blur-md border border-[#38BDF8]/40 text-xs text-[var(--text-primary)] font-sans-clean shadow-sm shrink-0">
                  تنفيذ احترافي وضمان
                </div>
              </div>
            </div>

            {/* Certified Master Artisan Card (Cleanly placed below the image, perfectly balanced) */}
            <motion.div
              whileHover={{ y: -3 }}
              className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-light)] shadow-xl text-right transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-3 text-xs sm:text-sm text-[#C19A6B] font-semibold">
                <span className="flex items-center gap-2">
                  <Award size={16} className="text-[#C19A6B]" />
                  <span>معلم دهانات وديكورات معتمد</span>
                </span>
                <a
                  href="tel:0536402106"
                  className="font-mono text-xs sm:text-sm text-[var(--text-primary)] hover:text-[#38BDF8] transition-colors flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-[var(--border-subtle)]"
                >
                  0536402106
                </a>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-sans-clean mb-4">
                &ldquo;التأسيس الصحيح ومعالجة التشققات والرطوبة قبل الدهان هو سر استمرار لمعان ونقاء اللون لسنوات طويلة.&rdquo;
              </p>
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)] font-sans-clean">
                <span className="font-semibold text-[var(--text-primary)]">معلم وجد الأصايل</span>
                <span className="text-[#C19A6B] font-medium">الدمام والخبر • الشرقية</span>
              </div>
            </motion.div>

            {/* Official Certification Badge */}
            <motion.div
              whileHover={{ y: -3 }}
              className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[#C19A6B]/30 shadow-lg text-right flex items-center gap-4 transition-colors duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle size={16} className="text-[#38BDF8]" />
                  <span className="text-[#C19A6B] font-bold text-sm">مؤسسة رسمية معتمدة</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans-clean">
                  مؤسسة وجد الأصايل مسجلة رسمياً بسجل تجاري معتمد لمزاولة أعمال المقاولات والديكور والدهانات في المنطقة الشرقية.
                </p>
              </div>
              <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border border-[#C19A6B]/40 shrink-0 shadow-inner bg-[var(--bg-primary)]">
                <img 
                  src="/images/IMG-202609421-WA0002.jpg" 
                  alt="سجل تجاري مؤسسة وجد الأصايل مقاولات ديكور دهانات الدمام" 
                  loading="lazy" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Commitments & Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 lg:pr-4 text-right">
            <div className="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-light)] relative overflow-hidden transition-colors duration-300">
              <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-2 font-semibold font-sans-clean">
                <ShieldCheck size={14} />
                <span>معايير العمل لدى وجد الأصايل</span>
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[var(--text-primary)] font-bold leading-snug mb-3">
                التزام كامل بالمواعيد ودقة متناهية بالتسليم
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5 font-sans-clean">
                نعتمد على فريق عمل مدرب ومعدات حديثة لرش الدهانات وتثبيت الديكورات بدقة هندسية تضمن نظافة المكان وسلامة الأثاث.
              </p>

              {/* Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-full bg-[var(--bg-elevated)] border border-[#C19A6B]/30 mb-5 text-xs font-sans-clean">
                {(
                  [
                    { id: 'quality', label: 'المواد الأصلية' },
                    { id: 'warranty', label: 'الضمان والخبرة' },
                    { id: 'execution', label: 'سرعة الإنجاز' }
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 text-center rounded-full text-[11px] sm:text-xs font-semibold transition-all active:scale-95 truncate ${
                      activeTab === tab.id
                        ? 'gold-gradient-bg text-[#050505] shadow-[0_0_15px_rgba(193,154,107,0.4)]'
                        : 'btn-pill-inactive'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Content Display */}
              <div className="min-h-[90px] text-xs text-[var(--text-primary)] leading-relaxed bg-[var(--bg-elevated)] p-4 rounded-xl border border-[var(--border-subtle)] font-sans-clean transition-colors duration-300">
                {activeTab === 'quality' && (
                  <div>
                    <span className="text-[#C19A6B] font-bold block mb-1">استخدام دهانات جوتن والجزيرة الأصلية</span>
                    نحرص على استخدام أجود أنواع المعجون والأساس المقاوم للرطوبة، وبويات بدون رائحة قابلة للغسيل والمسح، مع أجود بدائل الرخام والخشب المستورد المقاوم للماء والحرارة.
                  </div>
                )}
                {activeTab === 'warranty' && (
                  <div>
                    <span className="text-[#C19A6B] font-bold block mb-1">خبرة أكثر من ثلاثين سنة</span>
                    معرفة تامة بكافة أساليب التأسيس والدهان الديكوري المناسب لمناخ الشرقية ورطوبتها، مع تقديم ضمان على ثبات الألوان وعدم تقشرها.
                  </div>
                )}
                {activeTab === 'execution' && (
                  <div>
                    <span className="text-[#C19A6B] font-bold block mb-1">تسليم على الوقت ونظافة كاملة</span>
                    تغطية وحماية الأرضيات والأثاث بالكامل قبل البدء، وتسليم المكان نظيفاً وجاهزاً للسكن في الوقت المتفق عليه دون تأخير.
                  </div>
                )}
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-light)] flex items-center justify-between gap-4 transition-colors duration-300">
              <div>
                <span className="text-[11px] text-[#C19A6B] font-semibold block mb-0.5">جاهزون للمعاينة الفورية</span>
                <span className="text-sm font-bold text-[var(--text-primary)] block">اتصل الآن لتحديد موعد المعاينة</span>
              </div>
              <a
                href="tel:0536402106"
                className="px-4 py-2.5 rounded-full gold-gradient-bg text-[#050505] text-xs font-bold font-sans-clean whitespace-nowrap active:scale-95 transition-transform shadow-md"
              >
                0536402106
              </a>
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-[var(--border-subtle)] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-right">
          {STUDIO_METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <span className="font-display-luxury text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] font-bold mb-1">
                {metric.value}
              </span>
              <span className="text-xs text-[#C19A6B] font-bold mb-0.5 font-sans-clean">
                {metric.label}
              </span>
              <span className="text-[11px] text-[var(--text-muted)] font-sans-clean">
                {metric.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

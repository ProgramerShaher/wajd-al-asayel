import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import { STUDIO_METRICS } from '../data/studioData';

export default function ManifestoSection() {
  const [activeTab, setActiveTab] = useState<'quality' | 'warranty' | 'execution'>('quality');

  return (
    <section
      id="manifesto"
      className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-16 bg-[#050505] overflow-hidden border-t border-white/10"
    >
      {/* Background Soft Gold Ambient Light */}
      <div className="pointer-events-none absolute top-1/2 right-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#C19A6B]/5 rounded-full blur-[100px] sm:blur-[140px]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-8 mb-12 sm:mb-16 text-right">
          <div>
            <div className="flex items-center gap-2.5 text-xs text-[#C19A6B] mb-2 sm:mb-3 font-semibold font-sans-clean">
              <Sparkles size={13} />
              <span>خبرة تفوق ٣٠ سنة في المنطقة الشرقية</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold text-[#EDE8DF] max-w-3xl leading-[1.2]">
              دقة في التنفيذ <span className="text-[#C19A6B]">وجودة تدوم</span> لسنوات
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#BDB7AB] leading-relaxed font-sans-clean">
            نحرص على تأسيس الأسطح ومعالجتها باحترافية، واستخدام أجود أنواع البويات والديكورات التي تقاوم عوامل الرطوبة والحرارة بالشرقية.
          </p>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Visual with Overlapping Badge */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                alt="تنفيذ دهانات وديكورات داخلية حديثة بالدمام والخبر"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 right-4 left-4 sm:bottom-6 sm:right-6 sm:left-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-[11px] text-[#C19A6B] block mb-1 font-semibold">
                    مشروع سكني • الخبر
                  </span>
                  <h3 className="font-serif-luxury text-lg sm:text-xl md:text-2xl text-[#EDE8DF] font-bold">
                    تشطيب دهانات جوتن الحديثة مع بديل الخشب والرخام
                  </h3>
                </div>
                <div className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-[#1A1612] border border-[#C19A6B]/40 text-xs text-[#EDE8DF] font-sans-clean shadow-sm">
                  تنفيذ احترافي وضمان
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative lg:absolute -bottom-6 lg:left-6 max-w-sm mt-4 lg:mt-0 p-4 sm:p-5 rounded-xl bg-[#14110E] shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-[#C19A6B]/40 text-right"
            >
              <div className="flex items-center justify-between mb-2 text-xs text-[#C19A6B] font-semibold">
                <span className="flex items-center gap-1.5">
                  <Award size={14} />
                  معلم دهانات وديكورات معتمد
                </span>
                <span className="font-mono text-[11px] text-[#EDE8DF]">0536402106</span>
              </div>
              <p className="text-xs sm:text-sm text-[#EDE8DF] leading-snug font-sans-clean">
                &ldquo;التأسيس الصحيح ومعالجة التشققات والرطوبة قبل الدهان هو سر استمرار لمعان ونقاء اللون لسنوات طويلة.&rdquo;
              </p>
              <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-[#8C867D] font-sans-clean">
                <span>معلم وجد الأصايل</span>
                <span className="text-[#C19A6B]">الدمام والخبر</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Commitments & Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 lg:pr-4 text-right">
            <div className="p-5 sm:p-7 rounded-2xl bg-[#110E0C] border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-2 font-semibold font-sans-clean">
                <ShieldCheck size={14} />
                <span>معايير العمل لدى وجد الأصايل</span>
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#EDE8DF] font-bold leading-snug mb-3">
                التزام كامل بالمواعيد ودقة متناهية بالتسليم
              </h3>
              <p className="text-xs sm:text-sm text-[#BDB7AB] leading-relaxed mb-5 font-sans-clean">
                نعتمد على فريق عمل مدرب ومعدات حديثة لرش الدهانات وتثبيت الديكورات بدقة هندسية تضمن نظافة المكان وسلامة الأثاث.
              </p>

              {/* Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-full bg-[#181512] border border-[#C19A6B]/30 mb-5 text-xs font-sans-clean">
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
              <div className="min-h-[90px] text-xs text-[#EDE8DF] leading-relaxed bg-[#181512] p-4 rounded-xl border border-white/5 font-sans-clean">
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
            <div className="p-5 rounded-2xl bg-[#110E0C] border border-[#C19A6B]/30 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-[#C19A6B] font-semibold block mb-0.5">جاهزون للمعاينة الفورية</span>
                <span className="text-sm font-bold text-[#EDE8DF] block">اتصل الآن لتحديد موعد المعاينة</span>
              </div>
              <a
                href="tel:0536402106"
                className="px-4 py-2.5 rounded-full gold-gradient-bg text-[#050505] text-xs font-bold font-sans-clean whitespace-nowrap active:scale-95 transition-transform"
              >
                0536402106
              </a>
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-right">
          {STUDIO_METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <span className="font-display-luxury text-3xl sm:text-4xl md:text-5xl text-[#F5E6C8] font-bold mb-1">
                {metric.value}
              </span>
              <span className="text-xs text-[#C19A6B] font-bold mb-0.5 font-sans-clean">
                {metric.label}
              </span>
              <span className="text-[11px] text-[#8C867D] font-sans-clean">
                {metric.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

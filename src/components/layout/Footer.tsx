import { Phone, Mail, MessageCircle, ArrowUp, MapPin, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[var(--bg-secondary)] text-[var(--text-primary)] pt-8 sm:py-14 md:py-16 pb-6 sm:pb-10 px-3.5 sm:px-6 md:px-12 lg:px-16 border-t border-[var(--border-subtle)] overflow-hidden text-right transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Top Direct Contact Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 pb-8 sm:pb-14 border-b border-[var(--border-subtle)] text-xs font-sans-clean">
          <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-light)] shadow-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#C19A6B] font-semibold mb-1">
              <Phone size={15} />
              <span>الاتصال الهاتفي المباشر</span>
            </div>
            <a href="tel:0536402106" className="text-base sm:text-lg font-bold text-[var(--text-primary)] hover:text-[#38BDF8] transition-colors block font-mono" dir="ltr">
              0536402106
            </a>
            <span className="text-[11px] text-[var(--text-muted)] block mt-0.5 sm:mt-1">متاح طوال أيام الأسبوع للمعاينة</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-light)] shadow-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#25D366] font-semibold mb-1">
              <MessageCircle size={15} />
              <span>المراسلة الفورية واتساب</span>
            </div>
            <a href="https://wa.me/966536402106" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold text-[var(--text-primary)] hover:text-[#25D366] transition-colors block font-mono" dir="ltr">
              0536402106
            </a>
            <span className="text-[11px] text-[var(--text-muted)] block mt-0.5 sm:mt-1">إرسال الصور وطلب المقايسة سريعاً</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-light)] shadow-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#C19A6B] font-semibold mb-1">
              <Mail size={15} />
              <span>البريد الإلكتروني</span>
            </div>
            <a href="mailto:nabelnagy5050@gmail.com" className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:text-[#38BDF8] transition-colors block truncate" dir="ltr">
              nabelnagy5050@gmail.com
            </a>
            <span className="text-[11px] text-[var(--text-muted)] block mt-0.5 sm:mt-1">للمراسلات والعروض والمقاولات</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-light)] shadow-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#C19A6B] font-semibold mb-1">
              <MapPin size={15} />
              <span>مناطق التغطية والعمل</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] block">
              الدمام • الخبر • الظهران
            </span>
            <span className="text-[11px] text-[var(--text-muted)] block mt-0.5 sm:mt-1">وكافة مدن المنطقة الشرقية</span>
          </div>
        </div>

        {/* Central Colophon Branding & Quick Links */}
        <div className="py-8 sm:py-14 md:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-10 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C19A6B]/50 flex items-center justify-center bg-[#171412] shadow-sm flex-shrink-0">
                <span className="text-[#C19A6B] font-serif-luxury font-bold text-base sm:text-lg">وا</span>
              </div>
              <div>
                <h3 className="font-serif-luxury text-lg sm:text-2xl font-bold text-[#F5E6C8]">
                  وجد الأصايل
                </h3>
                <p className="text-[11px] sm:text-xs text-[#C19A6B] font-sans-clean">
                  دهانات وديكورات • عوازل صوتية ومائية • درايش وأرضيات • أسقف وجدران بالدمام والخبر
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#BDB7AB] font-sans-clean max-w-xl leading-relaxed">
              تنفيذ احترافي لخدمات الدهانات والديكورات والعوازل المائية والسطحية، وأعمال الفرايش والأرضيات، والأسقف والجدران، وتكسيات بديل الخشب والرخام والسواتر بخبرة أكثر من 30 عاماً.
            </p>
          </div>

          {/* Vibrant Prominent Social Media Accounts Showcase */}
          <div className="flex flex-col items-start lg:items-end gap-2.5 sm:gap-3 w-full lg:w-auto">
            <span className="text-xs text-[#C19A6B] font-semibold font-sans-clean">
              تابعنا وتواصل مباشرة عبر الحسابات الرسمية:
            </span>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/966536402106"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="واتساب"
                aria-label="تواصل عبر واتساب"
                title="واتساب: 0536402106"
                className="group relative w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 fill-current drop-shadow-sm transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* TikTok Icon */}
              <a
                href="https://vt.tiktok.com/ZSqwspsQj/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="تيك توك"
                aria-label="حساب تيك توك"
                title="تيك توك: @وجد الأصايل"
                className="group relative w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center bg-[#010101] border border-[#25F4EE]/40 text-white shadow-[0_8px_20px_rgba(254,44,85,0.3)] hover:shadow-[0_12px_30px_rgba(254,44,85,0.6)] hover:border-[#FE2C55] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 fill-current text-white drop-shadow-[0_0_8px_rgba(37,244,238,0.8)] transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.86-4.49V8.58a8.31 8.31 0 0 0 4.91 1.62V6.69z" />
                </svg>
              </a>



              {/* Direct Phone Call Icon 1 */}
              <a
                href="tel:0536402106"
                data-cursor="اتصال"
                aria-label="اتصال هاتفي مباشر"
                title="اتصال هاتفي مباشر: 0536402106"
                className="group relative w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center gold-gradient-bg text-[#050505] shadow-[0_8px_20px_rgba(193,154,107,0.4)] hover:shadow-[0_12px_30px_rgba(193,154,107,0.7)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Phone size={20} className="text-[#050505] transition-transform group-hover:rotate-12" />
              </a>

              {/* Direct Phone Call Icon 2 */}
              <a
                href="tel:0556557498"
                data-cursor="اتصال"
                aria-label="اتصال هاتفي مباشر 2"
                title="اتصال هاتفي مباشر: 0556557498"
                className="group relative w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center border border-[#C19A6B] bg-[#171412] text-[#C19A6B] shadow-[0_8px_20px_rgba(193,154,107,0.1)] hover:shadow-[0_12px_30px_rgba(193,154,107,0.3)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Phone size={20} className="text-[#C19A6B] transition-transform group-hover:rotate-12" />
              </a>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                data-cursor="للأعلى"
                className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl btn-pill-inactive flex items-center justify-center active:scale-95 shadow-sm hover:scale-105 transition-all"
                aria-label="العودة للأعلى"
                title="العودة لأعلى الصفحة"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Topical Semantic SEO Directory & Keyword Pillars */}
        <div className="py-6 sm:py-8 border-t border-[var(--border-subtle)] text-xs font-sans-clean">
          <div className="flex flex-col gap-3.5">
            <span className="text-[#C19A6B] font-bold text-xs sm:text-sm">
              دليل خدمات الديكورات والدهانات والعوازل — مؤسسة وجد الأصايل:
            </span>
            <div className="flex flex-wrap gap-2 sm:gap-2.5 text-[11px] sm:text-xs text-[var(--text-secondary)]">
              <a href="/dikurat" className="px-3 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C19A6B] hover:text-[#C19A6B] transition-colors">
                ديكورات الدمام
              </a>
              <a href="/dakhanat" className="px-3 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C19A6B] hover:text-[#C19A6B] transition-colors">
                دهانات الدمام والخبر
              </a>
              <a href="/dikurat" className="px-3 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C19A6B] hover:text-[#C19A6B] transition-colors">
                معلم ديكورات الدمام
              </a>
              <a href="/dakhanat" className="px-3 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C19A6B] hover:text-[#C19A6B] transition-colors">
                معلم دهانات الدمام
              </a>
              <a href="/dikurat" className="px-3 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C19A6B] hover:text-[#C19A6B] transition-colors">
                بديل الرخام وبديل الخشب الدمام
              </a>
              <a href="/awazel" className="px-3 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C19A6B] hover:text-[#C19A6B] transition-colors">
                عوازل مائية وعزل اسطح بالدمام
              </a>
              <a href="/dikurat" className="px-3 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C19A6B] hover:text-[#C19A6B] transition-colors">
                جبس بورد وأسقف معلقة بالخبر
              </a>
              <a href="/amal" className="px-3 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C19A6B] hover:text-[#C19A6B] transition-colors">
                بانوهات فوم وشاشات تلفزيون مودرن
              </a>
              <a href="/" className="px-3 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C19A6B] hover:text-[#C19A6B] transition-colors">
                مؤسسة وجد الأصايل للمقاولات
              </a>
              <a href="https://wa.me/966556557498" className="px-3 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C19A6B] hover:text-[#C19A6B] transition-colors">
                طلب معاينة ديكورات مجاناً
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Accreditations */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8C867D] font-sans-clean text-center md:text-right">
          <div>
            © {new Date().getFullYear()} وجد الأصايل للدهانات والديكورات بالدمام والخبر • جميع الحقوق محفوظة
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-4 text-[#EDE8DF]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-[#C19A6B]" />
              <span>خبرة تفوق ٣٠ سنة</span>
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>أفضل المواد الأصلية (جوتن والجزيرة)</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-[#C19A6B]">معاينة ورفع مقاسات مجاناً</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

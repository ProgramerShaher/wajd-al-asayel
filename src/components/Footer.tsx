import { Phone, Mail, MessageCircle, ArrowUp, MapPin, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[var(--bg-secondary)] text-[var(--text-primary)] pt-10 sm:py-16 pb-6 sm:pb-10 px-4 sm:px-6 md:px-16 border-t border-[var(--border-subtle)] overflow-hidden text-right transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Top Direct Contact Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-10 sm:pb-14 border-b border-[var(--border-subtle)] text-xs font-sans-clean">
          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-light)] shadow-sm">
            <div className="flex items-center gap-2 text-[#C19A6B] font-semibold mb-1">
              <Phone size={15} />
              <span>الاتصال الهاتفي المباشر</span>
            </div>
            <a href="tel:0536402106" className="text-base sm:text-lg font-bold text-[var(--text-primary)] hover:text-[#38BDF8] transition-colors block font-mono" dir="ltr">
              0536402106
            </a>
            <span className="text-[11px] text-[var(--text-muted)] block mt-1">متاح طوال أيام الأسبوع للمعاينة</span>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-light)] shadow-sm">
            <div className="flex items-center gap-2 text-[#25D366] font-semibold mb-1">
              <MessageCircle size={15} />
              <span>المراسلة الفورية واتساب</span>
            </div>
            <a href="https://wa.me/966536402106" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold text-[var(--text-primary)] hover:text-[#25D366] transition-colors block font-mono" dir="ltr">
              0536402106
            </a>
            <span className="text-[11px] text-[var(--text-muted)] block mt-1">إرسال الصور وطلب المقايسة سريعاً</span>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-light)] shadow-sm">
            <div className="flex items-center gap-2 text-[#C19A6B] font-semibold mb-1">
              <Mail size={15} />
              <span>البريد الإلكتروني</span>
            </div>
            <a href="mailto:nabelnagy5050@gmail.com" className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:text-[#38BDF8] transition-colors block truncate" dir="ltr">
              nabelnagy5050@gmail.com
            </a>
            <span className="text-[11px] text-[var(--text-muted)] block mt-1">للمراسلات والعروض والمقاولات</span>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-light)] shadow-sm">
            <div className="flex items-center gap-2 text-[#C19A6B] font-semibold mb-1">
              <MapPin size={15} />
              <span>مناطق التغطية والعمل</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] block">
              الدمام • الخبر • الظهران
            </span>
            <span className="text-[11px] text-[var(--text-muted)] block mt-1">وكافة مدن المنطقة الشرقية</span>
          </div>
        </div>

        {/* Central Colophon Branding & Quick Links */}
        <div className="py-10 sm:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full border border-[#C19A6B]/50 flex items-center justify-center bg-[#171412] shadow-sm">
                <span className="text-[#C19A6B] font-serif-luxury font-bold text-lg">وا</span>
              </div>
              <div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#F5E6C8]">
                  وجد الأصايل
                </h3>
                <p className="text-xs text-[#C19A6B] font-sans-clean">
                  دهانات وديكورات • عوازل مائية وسطحية • فرايش وأرضيات • أسقف وجدران بالدمام والخبر
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#BDB7AB] font-sans-clean max-w-xl leading-relaxed">
              تنفيذ احترافي لخدمات الدهانات والديكورات والعوازل المائية والسطحية، وأعمال الفرايش والأرضيات، والأسقف والجدران، وتكسيات بديل الخشب والرخام والسواتر بخبرة أكثر من 30 عاماً.
            </p>
          </div>

          {/* Vibrant Prominent Social Media Accounts Showcase */}
          <div className="flex flex-col items-start lg:items-end gap-3 w-full lg:w-auto">
            <span className="text-xs text-[#C19A6B] font-semibold font-sans-clean">
              تابعنا وتواصل مباشرة عبر الحسابات الرسمية:
            </span>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/966536402106"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="واتساب"
                aria-label="تواصل عبر واتساب"
                title="واتساب: 0536402106"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-sm transition-transform group-hover:scale-110" viewBox="0 0 24 24">
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
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-[#010101] border border-[#25F4EE]/40 text-white shadow-[0_8px_20px_rgba(254,44,85,0.3)] hover:shadow-[0_12px_30px_rgba(254,44,85,0.6)] hover:border-[#FE2C55] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-white drop-shadow-[0_0_8px_rgba(37,244,238,0.8)] transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.86-4.49V8.58a8.31 8.31 0 0 0 4.91 1.62V6.69z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="انستقرام"
                aria-label="حساب انستقرام"
                title="انستقرام"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white shadow-[0_8px_20px_rgba(225,48,108,0.35)] hover:shadow-[0_12px_30px_rgba(225,48,108,0.65)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-sm transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook Icon */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="فيسبوك"
                aria-label="صفحة فيسبوك"
                title="فيسبوك"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-gradient-to-tr from-[#1877F2] to-[#0D65D9] text-white shadow-[0_8px_20px_rgba(24,119,242,0.35)] hover:shadow-[0_12px_30px_rgba(24,119,242,0.65)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-sm transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Direct Phone Call Icon 1 */}
              <a
                href="tel:0536402106"
                data-cursor="اتصال"
                aria-label="اتصال هاتفي مباشر"
                title="اتصال هاتفي مباشر: 0536402106"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center gold-gradient-bg text-[#050505] shadow-[0_8px_20px_rgba(193,154,107,0.4)] hover:shadow-[0_12px_30px_rgba(193,154,107,0.7)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Phone size={22} className="text-[#050505] transition-transform group-hover:rotate-12" />
              </a>

              {/* Direct Phone Call Icon 2 */}
              <a
                href="tel:0556557498"
                data-cursor="اتصال"
                aria-label="اتصال هاتفي مباشر 2"
                title="اتصال هاتفي مباشر: 0556557498"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border border-[#C19A6B] bg-[#171412] text-[#C19A6B] shadow-[0_8px_20px_rgba(193,154,107,0.1)] hover:shadow-[0_12px_30px_rgba(193,154,107,0.3)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Phone size={22} className="text-[#C19A6B] transition-transform group-hover:rotate-12" />
              </a>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                data-cursor="للأعلى"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl btn-pill-inactive flex items-center justify-center active:scale-95 shadow-sm hover:scale-105 transition-all"
                aria-label="العودة للأعلى"
                title="العودة لأعلى الصفحة"
              >
                <ArrowUp size={18} />
              </button>
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

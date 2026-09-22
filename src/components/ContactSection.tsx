import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowLeft, ShieldCheck, Mail, MapPin, Phone, User, MessageSquare, Check } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectLocation: 'الدمام',
    projectScope: 'دهانات داخلية وخارجية',
    surfaceArea: 150,
    requestedSampleKit: true,
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scopeOptions = [
    'دهانات داخلية وخارجية',
    'بديل خشب وبديل رخام',
    'جبس بورد وأسقف معلقة',
    'إطارات فوم وبانوهات',
    'سواتر ومظلات وبرجولات',
    'تشطيب فيلا متكامل'
  ];

  const areaPresets = [50, 150, 300, 600];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const getWhatsAppLink = () => {
    const text = `السلام عليكم ورحمة الله،
الاسم: ${formData.name || 'عميل'}
الخدمة المطلوبة: ${formData.projectScope}
الموقع: ${formData.projectLocation}
المساحة التقريبية: ${formData.surfaceArea} م²
${formData.message ? `ملاحظات: ${formData.message}` : ''}
أرغب في حجز موعد للمعاينة وعرض السعر.`;
    return `https://wa.me/966536402106?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-16 bg-[#050505] border-t border-white/10 overflow-hidden text-right"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#C19A6B]/8 rounded-full blur-[120px] sm:blur-[180px]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          {/* Right Column in RTL: Contact details & quick contact */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-2 sm:mb-3 font-semibold font-sans-clean">
              <Sparkles size={13} />
              <span>معاينة فورية ورفع مقاسات مجاناً</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold text-[#EDE8DF] mb-4 sm:mb-6 leading-[1.15]">
              تواصل مع معلم وجد الأصايل
            </h2>
            <p className="text-xs sm:text-sm text-[#BDB7AB] leading-relaxed font-sans-clean mb-6 sm:mb-8">
              يسعدنا خدمتك في تنفيذ كافة أعمال الدهانات والديكورات الحديثة والجبس بورد والسواتر والمظلات بالدمام والخبر بأعلى دقة وأفضل الأسعار، مع ضمان الجودة وسرعة الإنجاز.
            </p>

            {/* Direct Quick Iconic Action Dock */}
            <div className="flex items-center gap-3.5 mb-8">
              {/* Phone Icon Button */}
              <a
                href="tel:0536402106"
                data-cursor="اتصال"
                aria-label="اتصال هاتفي مباشر"
                title="اتصال هاتفي: 0536402106"
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl gold-gradient-bg text-[#050505] flex items-center justify-center shadow-[0_4px_20px_rgba(193,154,107,0.4)] hover:shadow-[0_6px_30px_rgba(193,154,107,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Phone size={22} className="text-[#050505]" />
              </a>

              {/* WhatsApp Icon Button */}
              <a
                href="https://wa.me/966536402106"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="واتساب"
                aria-label="مراسلة واتساب"
                title="مراسلة واتساب"
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* TikTok Icon Button */}
              <a
                href="https://vt.tiktok.com/ZSqwspsQj/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="تيك توك"
                aria-label="حساب تيك توك"
                title="تيك توك"
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#0e0e10] border border-[#25F4EE]/40 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(254,44,85,0.3)] hover:shadow-[0_6px_30px_rgba(254,44,85,0.55)] hover:border-[#FE2C55] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.86-4.49V8.58a8.31 8.31 0 0 0 4.91 1.62V6.69z" />
                </svg>
              </a>
            </div>

            {/* Direct Contacts Info */}
            <div className="space-y-4 border-t border-white/10 pt-6 text-xs text-[#EDE8DF] font-sans-clean">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#1A1612] border border-[#C19A6B]/30 text-[#C19A6B]">
                  <Phone size={15} />
                </div>
                <div>
                  <span className="text-[11px] text-[#A0A0A5] block">
                    رقم الهاتف المباشر
                  </span>
                  <a href="tel:0536402106" className="text-sm font-bold text-[#EDE8DF] hover:text-[#C19A6B] transition-colors mt-0.5 block font-mono" dir="ltr">
                    0536402106
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#1A1612] border border-[#C19A6B]/30 text-[#C19A6B]">
                  <Mail size={15} />
                </div>
                <div>
                  <span className="text-[11px] text-[#A0A0A5] block">
                    البريد الإلكتروني
                  </span>
                  <a href="mailto:nabelnagy5050@gmail.com" className="text-sm text-[#EDE8DF] hover:text-[#C19A6B] transition-colors mt-0.5 block" dir="ltr">
                    nabelnagy5050@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#1A1612] border border-[#C19A6B]/30 text-[#C19A6B]">
                  <MapPin size={15} />
                </div>
                <div>
                  <span className="text-[11px] text-[#A0A0A5] block">
                    مناطق العمل والخدمة
                  </span>
                  <p className="text-sm font-medium text-[#EDE8DF] mt-0.5">
                    الدمام • الخبر • الظهران • سيهات • وكافة المنطقة الشرقية
                  </p>
                </div>
              </div>
            </div>

            {/* Guarantee Plaque */}
            <div className="mt-8 p-4 rounded-xl bg-[#141210] border border-[#C19A6B]/25 flex items-center gap-3">
              <ShieldCheck size={26} className="text-[#C19A6B] flex-shrink-0" />
              <div>
                <span className="text-xs text-[#EDE8DF] block font-bold">
                  ضمان على العمل واستخدام دهانات أصلية
                </span>
                <p className="text-[11px] text-[#A0A0A5] mt-0.5">
                  نستخدم دهانات جوتن والجزيرة الأصلية، مع التزام تام بالمواعيد ونظافة المكان.
                </p>
              </div>
            </div>
          </div>

          {/* Left Column in RTL: Enhanced Luxury Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#120F0D]/95 border border-[#C19A6B]/35 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative backdrop-blur-xl">
              {/* Form Title & Top Indicators */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 mb-6 gap-2">
                <div>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#F5E6C8]">
                    طلب معاينة وتسعير فوري
                  </h3>
                  <p className="text-xs text-[#A0A0A5] font-sans-clean mt-0.5">
                    أدخل بياناتك وسنتواصل معك فوراً لتحديد موعد المعاينة
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#C19A6B]/15 border border-[#C19A6B]/35 text-[11px] font-sans-clean text-[#C19A6B] font-semibold">
                    معاينة مجانية 100%
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 font-sans-clean">
                {/* Project Scope Selector */}
                <div>
                  <label className="text-xs text-[#C19A6B] block mb-2.5 font-bold">
                    ١. اختر نوع الخدمة المطلوبة:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {scopeOptions.map((scope) => {
                      const isSelected = formData.projectScope === scope;
                      return (
                        <button
                          type="button"
                          key={scope}
                          onClick={() => setFormData({ ...formData, projectScope: scope })}
                          data-cursor="اختيار"
                          className={`px-3 py-2.5 rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95 text-center ${
                            isSelected
                              ? 'gold-gradient-bg text-[#050505] font-bold shadow-[0_0_15px_rgba(193,154,107,0.35)] scale-[1.02]'
                              : 'btn-pill-inactive hover:scale-[1.01]'
                          }`}
                        >
                          {isSelected && <Check size={13} className="text-[#050505] flex-shrink-0" />}
                          <span className="truncate">{scope}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Surface Area Slider with Quick Presets */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#181512] border border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-[#EDE8DF] font-semibold">
                      ٢. المساحة التقديرية للعمل:
                    </span>
                    <span className="font-display-luxury text-xl sm:text-2xl text-[#C19A6B] font-bold">
                      {formData.surfaceArea} م²
                    </span>
                  </div>

                  <input
                    type="range"
                    min="20"
                    max="1000"
                    step="10"
                    value={formData.surfaceArea}
                    onChange={(e) => setFormData({ ...formData, surfaceArea: Number(e.target.value) })}
                    className="w-full accent-[#C19A6B] bg-[#2A241E] cursor-pointer h-2 rounded-lg"
                  />

                  {/* Area Presets */}
                  <div className="flex items-center justify-between gap-2 mt-3 pt-3 border-t border-white/5">
                    <span className="text-[11px] text-[#8C867D]">خيارات سريعة:</span>
                    <div className="flex items-center gap-1.5">
                      {areaPresets.map((preset) => (
                        <button
                          type="button"
                          key={preset}
                          onClick={() => setFormData({ ...formData, surfaceArea: preset })}
                          className={`px-2.5 py-1 rounded-lg text-[11px] transition-all ${
                            formData.surfaceArea === preset
                              ? 'bg-[#C19A6B] text-[#050505] font-bold'
                              : 'bg-[#25211D] text-[#EDE8DF] hover:bg-[#352E28] border border-white/5'
                          }`}
                        >
                          {preset} م²
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Name & Phone Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="relative">
                    <label htmlFor="client-name" className="text-xs text-[#EDE8DF] block mb-1.5 font-medium">
                      الاسم الكريم <span className="text-[#C19A6B]">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        required
                        id="client-name"
                        placeholder="مثال: أبو فهد"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#181512] border border-white/15 focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B]/50 rounded-xl pr-10 pl-4 py-3 text-sm text-[#EDE8DF] placeholder-[#666] outline-none transition-all text-right"
                      />
                      <User size={16} className="absolute right-3.5 text-[#C19A6B]/70 pointer-events-none" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label htmlFor="client-phone" className="text-xs text-[#EDE8DF] block mb-1.5 font-medium">
                      رقم الجوال للتواصل <span className="text-[#C19A6B]">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="tel"
                        required
                        id="client-phone"
                        placeholder="05XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#181512] border border-white/15 focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B]/50 rounded-xl pr-10 pl-4 py-3 text-sm text-[#EDE8DF] placeholder-[#666] outline-none transition-all text-right font-mono"
                        dir="ltr"
                      />
                      <Phone size={16} className="absolute right-3.5 text-[#C19A6B]/70 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="relative">
                  <label htmlFor="client-location" className="text-xs text-[#EDE8DF] block mb-1.5 font-medium">
                    المدينة والحي بالمنطقة الشرقية <span className="text-[#C19A6B]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      required
                      id="client-location"
                      placeholder="مثال: الدمام - حي الشاطئ / الخبر - حي العزيزية"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      className="w-full bg-[#181512] border border-white/15 focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B]/50 rounded-xl pr-10 pl-4 py-3 text-sm text-[#EDE8DF] placeholder-[#666] outline-none transition-all text-right"
                    />
                    <MapPin size={16} className="absolute right-3.5 text-[#C19A6B]/70 pointer-events-none" />
                  </div>
                </div>

                {/* Message / Notes */}
                <div className="relative">
                  <label htmlFor="client-message" className="text-xs text-[#EDE8DF] block mb-1.5 font-medium">
                    ملاحظات إضافية أو تفاصيل العمل (اختياري):
                  </label>
                  <div className="relative">
                    <textarea
                      rows={2}
                      id="client-message"
                      placeholder="اكتب هنا أي تفاصيل تود توضيحها أو الوقت المفضل للمعاينة..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#181512] border border-white/15 focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B]/50 rounded-xl pr-10 pl-4 py-3 text-sm text-[#EDE8DF] placeholder-[#666] outline-none transition-all text-right resize-none"
                    />
                    <MessageSquare size={16} className="absolute right-3.5 top-3.5 text-[#C19A6B]/70 pointer-events-none" />
                  </div>
                </div>

                {/* Checkbox for Free Measurement */}
                <label className="flex items-center gap-3 cursor-pointer group select-none py-1">
                  <input
                    type="checkbox"
                    checked={formData.requestedSampleKit}
                    onChange={(e) => setFormData({ ...formData, requestedSampleKit: e.target.checked })}
                    className="w-4 h-4 accent-[#C19A6B] rounded cursor-pointer"
                  />
                  <span className="text-xs text-[#EDE8DF] group-hover:text-[#C19A6B] transition-colors">
                    أرغب في زيارة ميدانية للمعاينة ورفع المقاسات الدقيقة وعرض كتالوج الألوان مجاناً
                  </span>
                </label>

                {/* Dual Submit Actions: Main Submit & Fast-track WhatsApp */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {/* Primary Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="إرسال"
                    className="flex-1 relative group py-3.5 sm:py-4 px-6 rounded-xl gold-gradient-bg text-[#050505] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-[0_4px_25px_rgba(193,154,107,0.35)] hover:shadow-[0_6px_35px_rgba(193,154,107,0.55)] active:scale-98"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <span>جاري إرسال الطلب...</span>
                      ) : (
                        <>
                          <span>إرسال طلب المعاينة وعرض السعر</span>
                          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>

                  {/* Fast-track Direct WhatsApp Submission */}
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="واتساب"
                    className="flex items-center justify-center gap-2 py-3.5 sm:py-4 px-5 rounded-xl bg-[#1B2921] border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-[#050505] text-xs sm:text-sm font-bold transition-all duration-300 shadow-md active:scale-98"
                    title="إرسال التفاصيل مباشرة عبر واتساب"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>إرسال عبر واتساب</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CONFIRMATION BESPOKE MODAL */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-[#14110E] border border-[#C19A6B] text-center shadow-2xl"
            >
              <div className="w-14 h-14 rounded-full border border-[#C19A6B] mx-auto mb-4 flex items-center justify-center text-[#C19A6B] shadow-[0_0_25px_rgba(193,154,107,0.3)]">
                <CheckCircle2 size={28} />
              </div>

              <span className="text-xs text-[#C19A6B] block mb-1 font-semibold">
                تم استلام طلبكم بنجاح
              </span>
              <h3 className="font-serif-luxury text-2xl text-[#EDE8DF] font-bold mb-2">
                مؤسسة وجد الأصايل
              </h3>
              <p className="text-xs text-[#BDB7AB] leading-relaxed mb-6 font-sans-clean">
                شكراً لك يا {formData.name || 'عزيزنا العميل'}. تم تسجيل طلبك لـ {formData.projectScope} في {formData.projectLocation}. سنتواصل معك مباشرة على الرقم {formData.phone || 'المسجل'} لتنسيق المعاينة وعرض السعر المناسب في أسرع وقت.
              </p>

              <div className="flex flex-col gap-2">
                <a
                  href={`https://wa.me/966536402106?text=${encodeURIComponent(`السلام عليكم، أنا ${formData.name} أرسلت طلب معاينة لـ ${formData.projectScope} في ${formData.projectLocation}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full gold-gradient-bg text-[#050505] text-xs font-bold font-sans-clean"
                >
                  متابعة الطلب فوراً عبر واتساب
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-2.5 rounded-full btn-pill-inactive text-xs font-sans-clean font-medium transition-all"
                >
                  إغلاق
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

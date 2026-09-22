import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowLeft, ShieldCheck, Mail, MapPin, Phone, User, MessageSquare, Check, CalendarCheck } from 'lucide-react';

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
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const scopeOptions = [
    'دهانات وتشطيب',
    'بديل خشب ورخام',
    'جبس بورد وأسقف',
    'إطارات وبانوهات',
    'سواتر ومظلات',
    'تشطيب متكامل'
  ];

  const areaPresets = [50, 150, 300, 600];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const getWhatsAppLink = () => {
    const text = `السلام عليكم،
الاسم: ${formData.name || 'عميل'}
الخدمة المطلوبة: ${formData.projectScope}
الموقع: ${formData.projectLocation}
المساحة التقريبية: ${formData.surfaceArea} م²
${formData.message ? `ملاحظات: ${formData.message}` : ''}
أرغب في حجز موعد للمعاينة.`;
    return `https://wa.me/966536402106?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 md:py-28 px-4 sm:px-6 md:px-16 bg-[#030205] border-t border-white/[0.03] overflow-hidden text-right"
    >
      {/* Absolute Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-b from-[#C19A6B]/10 to-transparent rounded-full blur-[150px] opacity-70 mix-blend-screen" />
        <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-t from-[#C19A6B]/5 to-transparent rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120F0D] border border-[#C19A6B]/20 text-[#C19A6B] text-[11px] font-bold tracking-widest mb-4 uppercase"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>نحن في خدمتك دائماً</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent"
          >
            تواصل مع خبرائنا
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8C867D] text-sm md:text-base max-w-2xl mx-auto mt-4 font-sans-clean leading-relaxed"
          >
            دعنا نحول رؤيتك إلى واقع ملموس. احجز موعداً للمعاينة المجانية ورفع المقاسات، وسنقدم لك استشارة احترافية وتصميماً يليق بتطلعاتك.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Right Column: Premium Form (Col-Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative p-6 sm:p-10 rounded-[2rem] bg-gradient-to-br from-[#12100E]/90 to-[#0A0806]/90 border border-white/[0.04] backdrop-blur-3xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C19A6B]/30 to-transparent" />
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C19A6B]/20 to-transparent border border-[#C19A6B]/30 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(193,154,107,0.2)]">
                      <CheckCircle2 size={40} className="text-[#C19A6B]" />
                    </div>
                    <h3 className="text-2xl font-serif-luxury font-bold text-white mb-2">تم استلام طلبك بنجاح</h3>
                    <p className="text-[#A0A0A5] text-sm max-w-sm font-sans-clean leading-relaxed">
                      شكراً لثقتك بـ "وجد الأصايل". سيقوم أحد خبرائنا بالتواصل معك قريباً جداً لتحديد موعد المعاينة.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 px-6 py-2.5 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm font-sans-clean"
                    >
                      إرسال طلب آخر
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-7 font-sans-clean"
                  >
                    {/* Project Scope Grid */}
                    <div>
                      <label className="text-xs text-[#C19A6B] block mb-3 font-bold uppercase tracking-widest">
                        ١. نوع الخدمة
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {scopeOptions.map((scope) => {
                          const isSelected = formData.projectScope === scope;
                          return (
                            <button
                              type="button"
                              key={scope}
                              onClick={() => setFormData({ ...formData, projectScope: scope })}
                              className={`px-4 py-3 rounded-xl text-xs sm:text-[13px] font-medium transition-all duration-300 flex items-center justify-center gap-2 border ${
                                isSelected
                                  ? 'bg-[#C19A6B]/10 border-[#C19A6B]/50 text-[#C19A6B] shadow-[0_0_20px_rgba(193,154,107,0.15)]'
                                  : 'bg-[#181512]/50 border-white/5 text-[#8C867D] hover:bg-[#181512] hover:text-white hover:border-white/10'
                              }`}
                            >
                              {isSelected && <Check size={14} />}
                              {scope}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent my-6" />

                    {/* Area Slider */}
                    <div>
                      <div className="flex justify-between items-end mb-4">
                        <label className="text-xs text-[#C19A6B] block font-bold uppercase tracking-widest">
                          ٢. المساحة التقريبية
                        </label>
                        <span className="font-display-luxury text-2xl text-white font-bold leading-none">
                          {formData.surfaceArea} <span className="text-sm text-white/40">م²</span>
                        </span>
                      </div>
                      
                      <div className="relative w-full h-1.5 bg-[#1F1B17] rounded-full overflow-hidden">
                        <div 
                          className="absolute top-0 right-0 h-full bg-gradient-to-l from-[#E6C280] to-[#C19A6B] rounded-full" 
                          style={{ width: `${(formData.surfaceArea / 1000) * 100}%` }}
                        />
                        <input
                          type="range"
                          min="20"
                          max="1000"
                          step="10"
                          value={formData.surfaceArea}
                          onChange={(e) => setFormData({ ...formData, surfaceArea: Number(e.target.value) })}
                          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </div>

                      <div className="flex items-center gap-2 mt-4">
                        {areaPresets.map((preset) => (
                          <button
                            type="button"
                            key={preset}
                            onClick={() => setFormData({ ...formData, surfaceArea: preset })}
                            className={`flex-1 py-1.5 rounded-md text-[11px] transition-all border ${
                              formData.surfaceArea === preset
                                ? 'bg-white/10 border-white/20 text-white'
                                : 'bg-transparent border-white/5 text-[#8C867D] hover:bg-white/5'
                            }`}
                          >
                            {preset} م²
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent my-6" />

                    {/* Input Fields */}
                    <div className="space-y-4">
                      <label className="text-xs text-[#C19A6B] block font-bold uppercase tracking-widest mb-1">
                        ٣. بيانات التواصل
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div 
                          className={`relative rounded-xl border transition-colors duration-300 ${focusedInput === 'name' ? 'bg-[#15120F] border-[#C19A6B]/50' : 'bg-[#181512]/50 border-white/5 hover:border-white/10'}`}
                        >
                          <User size={16} className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${focusedInput === 'name' ? 'text-[#C19A6B]' : 'text-white/20'}`} />
                          <input
                            type="text"
                            required
                            placeholder="الاسم الكريم"
                            value={formData.name}
                            onFocus={() => setFocusedInput('name')}
                            onBlur={() => setFocusedInput(null)}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-transparent outline-none py-3.5 pr-11 pl-4 text-sm text-white placeholder-white/30"
                          />
                        </div>

                        <div 
                          className={`relative rounded-xl border transition-colors duration-300 ${focusedInput === 'phone' ? 'bg-[#15120F] border-[#C19A6B]/50' : 'bg-[#181512]/50 border-white/5 hover:border-white/10'}`}
                        >
                          <Phone size={16} className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${focusedInput === 'phone' ? 'text-[#C19A6B]' : 'text-white/20'}`} />
                          <input
                            type="tel"
                            required
                            dir="ltr"
                            placeholder="05XXXXXXXX"
                            value={formData.phone}
                            onFocus={() => setFocusedInput('phone')}
                            onBlur={() => setFocusedInput(null)}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-transparent outline-none py-3.5 pl-4 pr-11 text-sm text-right text-white placeholder-white/30 font-mono"
                          />
                        </div>
                      </div>

                      <div 
                        className={`relative rounded-xl border transition-colors duration-300 ${focusedInput === 'location' ? 'bg-[#15120F] border-[#C19A6B]/50' : 'bg-[#181512]/50 border-white/5 hover:border-white/10'}`}
                      >
                        <MapPin size={16} className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${focusedInput === 'location' ? 'text-[#C19A6B]' : 'text-white/20'}`} />
                        <input
                          type="text"
                          required
                          placeholder="المدينة والحي (مثال: الدمام - حي الشاطئ)"
                          value={formData.projectLocation}
                          onFocus={() => setFocusedInput('location')}
                          onBlur={() => setFocusedInput(null)}
                          onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                          className="w-full bg-transparent outline-none py-3.5 pr-11 pl-4 text-sm text-white placeholder-white/30"
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-col gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative overflow-hidden w-full group py-4 rounded-xl gold-gradient-bg text-[#050505] text-sm font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(193,154,107,0.2)] hover:shadow-[0_0_30px_rgba(193,154,107,0.4)] active:scale-[0.98]"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative flex items-center justify-center gap-2">
                          {isSubmitting ? 'جاري المعالجة...' : 'تأكيد وحجز موعد المعاينة'}
                          {!isSubmitting && <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />}
                        </span>
                      </button>

                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#09150E] border border-[#25D366]/30 text-[#25D366] text-sm font-bold transition-all hover:bg-[#25D366] hover:text-[#050505] active:scale-[0.98]"
                      >
                        <MessageSquare size={16} />
                        إرسال الطلب سريعاً عبر واتساب
                      </a>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Left Column: Direct Contact Info (Col-Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-6"
          >
            {/* Premium Info Cards */}
            <div className="p-6 rounded-3xl bg-[#12100E]/50 border border-white/[0.03] backdrop-blur-md flex items-start gap-5 hover:bg-[#12100E] transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#C19A6B]/10 border border-[#C19A6B]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C19A6B] group-hover:text-[#050505] text-[#C19A6B] transition-all duration-300">
                <Phone size={22} />
              </div>
              <div>
                <span className="text-xs text-[#8C867D] block mb-1">خط التواصل المباشر</span>
                <a href="tel:0536402106" className="text-xl font-bold text-white tracking-wider font-mono hover:text-[#C19A6B] transition-colors" dir="ltr">
                  0536 402 106
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#12100E]/50 border border-white/[0.03] backdrop-blur-md flex items-start gap-5 hover:bg-[#12100E] transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#181512] border border-white/5 flex items-center justify-center flex-shrink-0 text-white/50 group-hover:text-white transition-colors duration-300">
                <CalendarCheck size={22} />
              </div>
              <div>
                <span className="text-xs text-[#8C867D] block mb-1">أوقات العمل والمعاينة</span>
                <p className="text-sm font-medium text-white/90 leading-relaxed">
                  نستقبل طلباتكم واستفساراتكم يومياً من الساعة 8 صباحاً حتى 10 مساءً. المعاينة الميدانية مجانية وتتم في الوقت المناسب لكم.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#12100E]/50 border border-white/[0.03] backdrop-blur-md flex items-start gap-5 hover:bg-[#12100E] transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#181512] border border-white/5 flex items-center justify-center flex-shrink-0 text-white/50 group-hover:text-white transition-colors duration-300">
                <ShieldCheck size={22} />
              </div>
              <div>
                <span className="text-xs text-[#8C867D] block mb-1">ضمان الجودة والأصالة</span>
                <p className="text-sm font-medium text-white/90 leading-relaxed">
                  نعتمد على مواد ودهانات أصلية 100% من جوتن والجزيرة، مع تنفيذ احترافي يضمن بقاء الجودة لسنوات طويلة بدون تشققات.
                </p>
              </div>
            </div>
            
            {/* Minimal Location Indicator */}
            <div className="pt-4 flex items-center gap-3 px-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C19A6B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C19A6B]"></span>
              </span>
              <span className="text-xs text-[#8C867D]">متواجدون حالياً لخدمة: الدمام، الخبر، والظهران</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowLeft, ShieldCheck, Mail, MapPin, Phone, User, MessageSquare, Check, CalendarCheck, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectLocation: 'الدمام',
    projectScope: 'دهانات وتشطيب',
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
    'عوازل مائية وسطحية',
    'فرايش وأرضيات',
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
      className="relative w-full py-12 md:py-20 px-4 sm:px-6 md:px-10 bg-[var(--bg-primary)] dark:bg-[#030205] border-t border-[var(--border-subtle)] dark:border-white/[0.03] overflow-hidden text-right transition-colors duration-300"
    >
      {/* Absolute Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-gradient-to-b from-[#C19A6B]/15 to-transparent rounded-full blur-[150px] opacity-70 dark:mix-blend-screen" />
        <div className="absolute bottom-[10%] -left-[10%] w-[400px] h-[400px] bg-gradient-to-t from-[#C19A6B]/10 to-transparent rounded-full blur-[120px] opacity-50 dark:mix-blend-screen" />
        <div className="hidden dark:block absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-elevated)] dark:bg-[#120F0D] border border-[#C19A6B]/30 dark:border-[#C19A6B]/20 text-[#C19A6B] text-[11px] font-bold tracking-widest mb-4 uppercase shadow-sm"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>نحن في خدمتك دائماً</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] dark:bg-gradient-to-b dark:from-white dark:via-white dark:to-white/60 dark:bg-clip-text dark:text-transparent"
          >
            تواصل مع خبرائنا
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] dark:text-[#8C867D] text-sm md:text-sm max-w-xl mx-auto mt-4 font-sans-clean leading-relaxed"
          >
            دعنا نحول رؤيتك إلى واقع ملموس. احجز موعداً للمعاينة المجانية ورفع المقاسات، وسنقدم لك استشارة احترافية وتصميماً يليق بتطلعاتك.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          
          {/* Right Column: Premium Form (Col-Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative p-5 sm:p-8 rounded-[1.5rem] bg-[var(--bg-surface)] dark:bg-gradient-to-br dark:from-[#12100E]/90 dark:to-[#0A0806]/90 border border-[var(--border-light)] dark:border-white/[0.04] shadow-[var(--card-shadow)] dark:shadow-2xl dark:backdrop-blur-3xl overflow-hidden transition-colors duration-300">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C19A6B]/30 to-transparent" />
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C19A6B]/20 to-transparent border border-[#C19A6B]/30 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(193,154,107,0.2)]">
                      <CheckCircle2 size={32} className="text-[#C19A6B]" />
                    </div>
                    <h3 className="text-xl font-serif-luxury font-bold text-[var(--text-primary)] dark:text-white mb-2">تم استلام طلبك بنجاح</h3>
                    <p className="text-[var(--text-secondary)] dark:text-[#A0A0A5] text-[13px] max-w-sm font-sans-clean leading-relaxed">
                      شكراً لثقتك بـ "جود الأصايل". سيقوم أحد خبرائنا بالتواصل معك قريباً جداً لتحديد موعد المعاينة.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-2 rounded-full border border-[var(--border-subtle)] dark:border-white/10 text-[var(--text-secondary)] dark:text-white/70 hover:text-[var(--text-primary)] dark:hover:text-white hover:bg-[var(--bg-elevated)] dark:hover:bg-white/5 transition-colors text-[13px] font-sans-clean"
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
                    className="space-y-6 font-sans-clean"
                  >
                    {/* Project Scope Grid */}
                    <div>
                      <label className="text-[11px] text-[#C19A6B] block mb-2 font-bold uppercase tracking-widest">
                        ١. نوع الخدمة
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {scopeOptions.map((scope) => {
                          const isSelected = formData.projectScope === scope;
                          return (
                            <button
                              type="button"
                              key={scope}
                              onClick={() => setFormData({ ...formData, projectScope: scope })}
                              className={`px-3 py-2.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all duration-300 flex items-center justify-center gap-1.5 border ${
                                isSelected
                                  ? 'bg-[#C19A6B]/10 border-[#C19A6B]/50 text-[#C19A6B] shadow-[0_0_20px_rgba(193,154,107,0.15)]'
                                  : 'bg-[var(--bg-elevated)] dark:bg-[#181512]/50 border-[var(--border-subtle)] dark:border-white/5 text-[var(--text-secondary)] dark:text-[#8C867D] hover:bg-[var(--bg-primary)] dark:hover:bg-[#181512] hover:text-[var(--text-primary)] dark:hover:text-white hover:border-[#C19A6B]/30 dark:hover:border-white/10'
                              }`}
                            >
                              {isSelected && <Check size={12} className="flex-shrink-0" />}
                              <span className="truncate">{scope}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] dark:via-white/5 to-transparent my-4" />

                    {/* Area Slider */}
                    <div>
                      <div className="flex justify-between items-end mb-3">
                        <label className="text-[11px] text-[#C19A6B] block font-bold uppercase tracking-widest">
                          ٢. المساحة التقريبية
                        </label>
                        <span className="font-display-luxury text-xl text-[var(--text-primary)] dark:text-white font-bold leading-none">
                          {formData.surfaceArea} <span className="text-xs text-[var(--text-muted)] dark:text-white/40">م²</span>
                        </span>
                      </div>
                      
                      <div className="relative w-full h-1.5 bg-[var(--bg-elevated)] dark:bg-[#1F1B17] rounded-full overflow-hidden border border-[var(--border-subtle)] dark:border-transparent">
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

                      <div className="flex items-center gap-2 mt-3">
                        {areaPresets.map((preset) => (
                          <button
                            type="button"
                            key={preset}
                            onClick={() => setFormData({ ...formData, surfaceArea: preset })}
                            className={`flex-1 py-1 rounded-md text-[10px] transition-all border ${
                              formData.surfaceArea === preset
                                ? 'bg-[var(--text-primary)] dark:bg-white/10 border-[var(--text-primary)] dark:border-white/20 text-[var(--bg-primary)] dark:text-white font-bold'
                                : 'bg-transparent border-[var(--border-subtle)] dark:border-white/5 text-[var(--text-secondary)] dark:text-[#8C867D] hover:bg-[var(--bg-elevated)] dark:hover:bg-white/5'
                            }`}
                          >
                            {preset} م²
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] dark:via-white/5 to-transparent my-4" />

                    {/* Input Fields */}
                    <div className="space-y-3">
                      <label className="text-[11px] text-[#C19A6B] block font-bold uppercase tracking-widest mb-1">
                        ٣. بيانات التواصل
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div 
                          className={`relative rounded-lg border transition-colors duration-300 ${focusedInput === 'name' ? 'bg-[var(--bg-primary)] dark:bg-[#15120F] border-[#C19A6B]/70 shadow-[0_0_10px_rgba(193,154,107,0.1)]' : 'bg-[var(--bg-elevated)] dark:bg-[#181512]/50 border-[var(--border-subtle)] dark:border-white/5 hover:border-[#C19A6B]/30 dark:hover:border-white/10'}`}
                        >
                          <User size={14} className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${focusedInput === 'name' ? 'text-[#C19A6B]' : 'text-[var(--text-muted)] dark:text-white/20'}`} />
                          <input
                            type="text"
                            required
                            placeholder="الاسم الكريم"
                            value={formData.name}
                            onFocus={() => setFocusedInput('name')}
                            onBlur={() => setFocusedInput(null)}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-transparent outline-none py-2.5 pr-9 pl-3 text-[13px] text-[var(--text-primary)] dark:text-white placeholder-[var(--text-muted)] dark:placeholder-white/30"
                          />
                        </div>

                        <div 
                          className={`relative rounded-lg border transition-colors duration-300 ${focusedInput === 'phone' ? 'bg-[var(--bg-primary)] dark:bg-[#15120F] border-[#C19A6B]/70 shadow-[0_0_10px_rgba(193,154,107,0.1)]' : 'bg-[var(--bg-elevated)] dark:bg-[#181512]/50 border-[var(--border-subtle)] dark:border-white/5 hover:border-[#C19A6B]/30 dark:hover:border-white/10'}`}
                        >
                          <Phone size={14} className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${focusedInput === 'phone' ? 'text-[#C19A6B]' : 'text-[var(--text-muted)] dark:text-white/20'}`} />
                          <input
                            type="tel"
                            required
                            dir="ltr"
                            placeholder="05XXXXXXXX"
                            value={formData.phone}
                            onFocus={() => setFocusedInput('phone')}
                            onBlur={() => setFocusedInput(null)}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-transparent outline-none py-2.5 pl-3 pr-9 text-[13px] text-right text-[var(--text-primary)] dark:text-white placeholder-[var(--text-muted)] dark:placeholder-white/30 font-mono"
                          />
                        </div>
                      </div>

                      <div 
                        className={`relative rounded-lg border transition-colors duration-300 ${focusedInput === 'location' ? 'bg-[var(--bg-primary)] dark:bg-[#15120F] border-[#C19A6B]/70 shadow-[0_0_10px_rgba(193,154,107,0.1)]' : 'bg-[var(--bg-elevated)] dark:bg-[#181512]/50 border-[var(--border-subtle)] dark:border-white/5 hover:border-[#C19A6B]/30 dark:hover:border-white/10'}`}
                      >
                        <MapPin size={14} className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${focusedInput === 'location' ? 'text-[#C19A6B]' : 'text-[var(--text-muted)] dark:text-white/20'}`} />
                        <input
                          type="text"
                          required
                          placeholder="المدينة والحي (مثال: الدمام - حي الشاطئ)"
                          value={formData.projectLocation}
                          onFocus={() => setFocusedInput('location')}
                          onBlur={() => setFocusedInput(null)}
                          onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                          className="w-full bg-transparent outline-none py-2.5 pr-9 pl-3 text-[13px] text-[var(--text-primary)] dark:text-white placeholder-[var(--text-muted)] dark:placeholder-white/30"
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-col gap-2.5">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative overflow-hidden w-full group py-3 rounded-lg gold-gradient-bg text-[#050505] text-[13px] font-bold tracking-wide transition-all shadow-[0_4px_15px_rgba(193,154,107,0.2)] hover:shadow-[0_6px_20px_rgba(193,154,107,0.3)] active:scale-[0.98]"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative flex items-center justify-center gap-1.5">
                          {isSubmitting ? 'جاري المعالجة...' : 'تأكيد وحجز موعد المعاينة'}
                          {!isSubmitting && <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />}
                        </span>
                      </button>

                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-3 rounded-lg bg-[var(--bg-elevated)] dark:bg-[#09150E] border border-[#25D366]/40 text-[#25D366] text-[13px] font-bold transition-all hover:bg-[#25D366] hover:text-white dark:hover:text-[#050505] active:scale-[0.98]"
                      >
                        <MessageSquare size={14} />
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
            className="lg:col-span-5 flex flex-col justify-center space-y-4"
          >
            {/* Premium Info Cards */}
            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] dark:bg-[#12100E]/50 border border-[var(--border-subtle)] dark:border-white/[0.03] shadow-sm dark:shadow-none dark:backdrop-blur-md flex items-start gap-4 hover:border-[#C19A6B]/30 dark:hover:border-[#C19A6B]/20 hover:bg-[var(--bg-elevated)] dark:hover:bg-[#12100E] transition-colors duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-[#C19A6B]/10 border border-[#C19A6B]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C19A6B] group-hover:text-[#050505] text-[#C19A6B] transition-all duration-300">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[11px] text-[var(--text-secondary)] dark:text-[#8C867D] block mb-0.5">خط التواصل المباشر</span>
                <a href="tel:0536402106" className="text-lg font-bold text-[var(--text-primary)] dark:text-white tracking-wider font-mono hover:text-[#C19A6B] transition-colors" dir="ltr">
                  0536402106 <br /> 0556557498
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] dark:bg-[#12100E]/50 border border-[var(--border-subtle)] dark:border-white/[0.03] shadow-sm dark:shadow-none dark:backdrop-blur-md flex items-start gap-4 hover:border-[#C19A6B]/30 dark:hover:border-[#C19A6B]/20 hover:bg-[var(--bg-elevated)] dark:hover:bg-[#12100E] transition-colors duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-elevated)] dark:bg-[#181512] border border-[var(--border-subtle)] dark:border-white/5 flex items-center justify-center flex-shrink-0 text-[var(--text-muted)] dark:text-white/50 group-hover:text-[#C19A6B] dark:group-hover:text-white transition-colors duration-300">
                <CalendarCheck size={18} />
              </div>
              <div className="w-full">
                <span className="text-[11px] text-[var(--text-secondary)] dark:text-[#8C867D] block mb-2">أوقات العمل والمعاينة</span>
                <div className="space-y-1 w-full">
                  <div className="flex items-center justify-between py-1.5 border-b border-[var(--border-subtle)] dark:border-white/5">
                    <span className="text-[12px] text-[var(--text-secondary)] dark:text-[#8C867D]">أيام العمل</span>
                    <span className="text-[11px] font-bold text-[#C19A6B] bg-[#C19A6B]/10 border border-[#C19A6B]/20 px-2 py-0.5 rounded-full">طوال أيام الأسبوع (يومياً)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[var(--border-subtle)] dark:border-white/5">
                    <span className="text-[12px] text-[var(--text-secondary)] dark:text-[#8C867D]">ساعات العمل</span>
                    <span className="text-[12px] font-medium text-[var(--text-primary)] dark:text-white/90" dir="ltr">08:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-[12px] text-[var(--text-secondary)] dark:text-[#8C867D]">المعاينة الميدانية</span>
                    <span className="text-[12px] font-medium text-[var(--text-primary)] dark:text-white/90">مجانية ومتاحة دائماً</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] dark:bg-[#12100E]/50 border border-[var(--border-subtle)] dark:border-white/[0.03] shadow-sm dark:shadow-none dark:backdrop-blur-md flex items-start gap-4 hover:border-[#C19A6B]/30 dark:hover:border-[#C19A6B]/20 hover:bg-[var(--bg-elevated)] dark:hover:bg-[#12100E] transition-colors duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-elevated)] dark:bg-[#181512] border border-[var(--border-subtle)] dark:border-white/5 flex items-center justify-center flex-shrink-0 text-[var(--text-muted)] dark:text-white/50 group-hover:text-[#C19A6B] dark:group-hover:text-white transition-colors duration-300">
                <ShieldCheck size={18} />
              </div>
              <div>
                <span className="text-[11px] text-[var(--text-secondary)] dark:text-[#8C867D] block mb-1">ضمان الجودة والأصالة</span>
                <p className="text-[13px] font-medium text-[var(--text-primary)] dark:text-white/90 leading-relaxed">
                  نعتمد على مواد ودهانات أصلية 100% من جوتن والجزيرة، مع تنفيذ احترافي يضمن بقاء الجودة لسنوات طويلة بدون تشققات.
                </p>
              </div>
            </div>
            
            {/* Minimal Location Indicator */}
            <div className="pt-2 flex items-center gap-2.5 px-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C19A6B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C19A6B]"></span>
              </span>
              <span className="text-[11px] text-[var(--text-secondary)] dark:text-[#8C867D]">متواجدون حالياً لخدمة: الدمام، الخبر، والظهران</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

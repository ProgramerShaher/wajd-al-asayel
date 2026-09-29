import React from 'react';

/**
 * SEOServicePage — صفحة خدمة مستقلة بمحتوى HTML ثابت عميق لتصدر البحث
 * 
 * هذه الصفحات تُولِّد محتوى ثابتاً قابلاً للفهرسة لكل كلمة مفتاحية مستهدفة:
 * /dakhanat, /dikurat, /awazel, /jadaren, /asquf, /badeel-khashab, /badeel-rakhum
 */

interface SEOServicePageProps {
  title: string;
  metaDescription: string;
  h1: string;
  h2Sections: {
    title: string;
    content: string;
    items?: string[];
  }[];
  faqs: { q: string; a: string }[];
  schema: object;
  pageId: string;
}

export default function SEOServicePage({
  title,
  metaDescription,
  h1,
  h2Sections,
  faqs,
  schema,
  pageId,
}: SEOServicePageProps) {
  return (
    <article
      id={pageId}
      className="relative w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-primary)] text-right transition-colors duration-300"
      aria-label={title}
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* JSON-LD للصفحة */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-5xl mx-auto">
        {/* H1 الرئيسي */}
        <header className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C19A6B]/10 border border-[#C19A6B]/30 text-[#C19A6B] text-xs font-bold tracking-wider mb-4">
            مؤسسة وجد الأصايل — الدمام والمنطقة الشرقية
          </div>
          <h1
            className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight mb-4"
            itemProp="name"
          >
            {h1}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl font-sans-clean" itemProp="description">
            {metaDescription}
          </p>

          {/* CTA مباشر */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a
              href="tel:+966556557498"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C19A6B] text-[#050505] font-bold text-sm hover:bg-[#D4B07A] transition-all shadow-[0_0_20px_rgba(193,154,107,0.4)]"
            >
              📞 اتصل الآن: 0556557498
            </a>
            <a
              href="https://wa.me/966556557498"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#1eb958] transition-all"
            >
              💬 واتساب مباشر
            </a>
          </div>
        </header>

        {/* أقسام المحتوى H2 */}
        <div className="space-y-10 sm:space-y-14">
          {h2Sections.map((section, idx) => (
            <section key={idx} className="prose-section">
              <h2 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4 text-[#C19A6B]">
                {section.title}
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans-clean mb-4">
                {section.content}
              </p>
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-[var(--text-secondary)] font-sans-clean">
                      <span className="text-[#C19A6B] mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* قسم FAQ */}
        {faqs.length > 0 && (
          <section
            className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-light)]"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            <h2 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">
              أسئلة شائعة
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  itemScope
                  itemType="https://schema.org/Question"
                  className="border-b border-[var(--border-subtle)] pb-5 last:border-0 last:pb-0"
                >
                  <h3 className="font-bold text-base sm:text-lg text-[var(--text-primary)] mb-2" itemProp="name">
                    {faq.q}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans-clean" itemProp="text">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* معلومات الاتصال مع Microdata */}
        <aside
          className="mt-10 sm:mt-14 p-5 sm:p-6 rounded-2xl border border-[#C19A6B]/30 bg-[#C19A6B]/5"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <h2 className="font-bold text-lg sm:text-xl text-[var(--text-primary)] mb-4">
            تواصل مع وجد الأصايل — {h1.split('—')[0].trim()}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans-clean">
            <div>
              <p className="text-[#C19A6B] font-semibold mb-1">📍 العنوان</p>
              <p
                className="text-[var(--text-secondary)]"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">طريق الملك فهد، حي الشاطئ</span>،{' '}
                <span itemProp="addressLocality">الدمام</span>،{' '}
                <span itemProp="addressRegion">المنطقة الشرقية</span>
              </p>
            </div>
            <div>
              <p className="text-[#C19A6B] font-semibold mb-1">📞 أرقام التواصل</p>
              <a href="tel:+966556557498" className="text-[var(--text-primary)] font-mono font-bold hover:text-[#C19A6B] block" itemProp="telephone">
                0556557498
              </a>
              <a href="tel:+966536402106" className="text-[var(--text-primary)] font-mono font-bold hover:text-[#C19A6B] block">
                0536402106
              </a>
            </div>
            <div>
              <p className="text-[#C19A6B] font-semibold mb-1">⏰ ساعات العمل</p>
              <p className="text-[var(--text-secondary)]">يومياً من 7 صباحاً حتى 11 مساءً</p>
            </div>
            <div>
              <p className="text-[#C19A6B] font-semibold mb-1">🏙️ مناطق الخدمة</p>
              <p className="text-[var(--text-secondary)]">الدمام • الخبر • الظهران • القطيف • سيهات • الجبيل</p>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

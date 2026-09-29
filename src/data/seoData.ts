/**
 * data/seoData.ts
 * بيانات SEO المركزية لكل صفحة — Keyword Mapping + JSON-LD Schemas
 * وجد الأصايل للديكورات والدهانات بالدمام والخبر
 *
 * ⚠️  لتغيير الدومين: عدّل SITE_URL في src/config/site.ts فقط
 */
import { SITE_URL, BUSINESS_ID } from '@/config/site';

const BASE_URL = SITE_URL; // alias للتوافق مع بقية الملف

// Business schema مشترك — يُدمج في schemas الصفحات
const businessRef = { '@id': BUSINESS_ID };

// ────────────────────────────────────────────────
// الصفحة الرئيسية — Home
// ────────────────────────────────────────────────
export const HOME_SEO = {
  title: 'ديكورات ودهانات الدمام',
  description:
    'مؤسسة وجد الأصايل — تنفيذ أرقى ديكورات الدمام والخبر: بديل الخشب والرخام، جبس بورد، دهانات جوتن، وعوازل أسطح بضمان رسمي. اتصل: 0556557498',
  canonical: `${BASE_URL}/`,
  ogTitle: 'ديكورات ودهانات الدمام والخبر | مؤسسة وجد الأصايل',
  ogImage: `${BASE_URL}/images/dammam-luxury-decor-main.webp`,
};

// ────────────────────────────────────────────────
// صفحة الديكورات — /dikurat
// ────────────────────────────────────────────────
export const DIKURAT_SEO = {
  title: 'ديكورات الدمام',
  description:
    'أحدث ديكورات الدمام والخبر: بديل الخشب الكوري، بديل الرخام، جبس بورد، أسقف معلقة، بانوهات فوم. خبرة +٣٠ سنة وضمان رسمي. اتصل: 0556557498',
  canonical: `${BASE_URL}/dikurat`,
  ogTitle: 'ديكورات الدمام | معلم ديكورات متخصص — وجد الأصايل',
  ogImage: `${BASE_URL}/images/crystal-panels-led-lighting-decor.webp`,
};

export const DIKURAT_JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/dikurat#service`,
    name: 'خدمات ديكورات الدمام والخبر',
    alternateName: ['ديكورات الدمام', 'معلم ديكورات الدمام', 'ديكورات فلل الدمام', 'ديكورات الخبر'],
    description:
      'تصميم وتنفيذ أرقى الديكورات العصرية بالدمام والخبر: بديل الخشب الكوري، بديل الرخام الفاخر، جبس بورد وأسقف معلقة، بانوهات فوم كلاسيكية، وحدات تلفاز حديثة. خبرة تجاوزت ٣٠ عاماً.',
    url: `${BASE_URL}/dikurat`,
    provider: businessRef,
    areaServed: [
      { '@type': 'City', name: 'الدمام' },
      { '@type': 'City', name: 'الخبر' },
      { '@type': 'City', name: 'الظهران' },
      { '@type': 'State', name: 'المنطقة الشرقية' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'خدمات الديكورات',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ديكورات بديل الخشب والرخام',
            description: 'تركيب تكسيات بديل الرخام والخشب الكوري للجدران والمداخل.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ديكورات جبس بورد وأسقف معلقة',
            description: 'تنفيذ قواطع جبسية وأسقف مستعارة مع إضاءة ليد مخفية.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ديكورات بانوهات فوم',
            description: 'تركيب بانوهات فوم كلاسيكية وأقواس لإضفاء الطابع الفاخر.',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${BASE_URL}/dikurat#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'ديكورات الدمام', item: `${BASE_URL}/dikurat` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}/dikurat#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'ما أنواع الديكورات التي تنفذها مؤسسة وجد الأصايل في الدمام؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'نتخصص في تنفيذ ديكورات بديل الخشب الكوري، بديل الرخام الفاخر، أسقف جبس بورد معلقة، بانوهات فوم كلاسيكية، وحدات تلفاز مودرن، وديكورات الإنارة المخفية. نخدم الدمام والخبر والظهران وكافة مدن المنطقة الشرقية.',
        },
      },
      {
        '@type': 'Question',
        name: 'كم تكلفة ديكورات صالة في الدمام؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'تبدأ أسعار ديكورات الصالة من ٢٠٠٠ ريال وتتفاوت حسب المساحة ونوع المواد. نوفر معاينة مجانية وعرض سعر بلا التزام. تواصل معنا: 0556557498',
        },
      },
      {
        '@type': 'Question',
        name: 'هل تقدمون ضماناً على أعمال الديكورات؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'نعم، نقدم ضماناً رسمياً على جميع أعمال الديكورات التي ننفذها، مع التزام كامل بالجودة والمواعيد.',
        },
      },
    ],
  },
];

// ────────────────────────────────────────────────
// صفحة الدهانات — /dakhanat
// ────────────────────────────────────────────────
export const DAKHANAT_SEO = {
  title: 'دهانات الدمام',
  description:
    'معلم دهانات متخصص بالدمام والخبر: دهانات داخلية وخارجية فاخرة بدهانات جوتن والجزيرة وفاليو. خبرة +٣٠ سنة وضمان رسمي. اتصل: 0556557498',
  canonical: `${BASE_URL}/dakhanat`,
  ogTitle: 'دهانات الدمام | معلم دهانات متخصص — وجد الأصايل',
  ogImage: `${BASE_URL}/images/joten-interior-painting-dammam.webp`,
};

export const DAKHANAT_JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/dakhanat#service`,
    name: 'خدمات دهانات الدمام والخبر',
    alternateName: [
      'دهانات الدمام',
      'معلم دهانات الدمام',
      'دهانات جوتن الدمام',
      'دهانات داخلية الدمام',
      'دهانات الخبر',
    ],
    description:
      'أفضل معلم دهانات بالدمام والخبر: دهانات داخلية وخارجية احترافية للفلل والشقق والعمارات بأجود دهانات جوتن والجزيرة وفاليو الأصلية. معالجة كاملة للجدران وضمان رسمي.',
    url: `${BASE_URL}/dakhanat`,
    provider: businessRef,
    areaServed: [
      { '@type': 'City', name: 'الدمام' },
      { '@type': 'City', name: 'الخبر' },
      { '@type': 'City', name: 'الظهران' },
      { '@type': 'State', name: 'المنطقة الشرقية' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'خدمات الدهانات',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'دهانات داخلية فاخرة',
            description: 'دهانات داخلية بجوتن والجزيرة للفلل والشقق.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'دهانات خارجية بالسيليكون',
            description: 'دهانات خارجية مقاومة للحرارة والعوامل الجوية.',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${BASE_URL}/dakhanat#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'دهانات الدمام', item: `${BASE_URL}/dakhanat` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}/dakhanat#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'كم تكلفة دهان غرفة في الدمام؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'تبدأ تكلفة دهان الغرفة من ١٥٠ ريال سعودي وتتفاوت حسب المساحة ونوع الدهان. نوفر معاينة مجانية: 0556557498',
        },
      },
      {
        '@type': 'Question',
        name: 'ما أفضل نوع دهان للمنازل في الدمام؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'نوصي بدهانات جوتن وفاليو للأسطح الداخلية لجودتها العالية ومقاومتها للرطوبة، ودهانات السيليكون للأسطح الخارجية لمقاومتها لحرارة المنطقة الشرقية.',
        },
      },
      {
        '@type': 'Question',
        name: 'هل تقدمون دهانات للفلل الكبيرة في الدمام والخبر؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'نعم، نتخصص في دهانات الفلل والقصور والعمارات والمباني التجارية بالدمام والخبر والمنطقة الشرقية كاملاً. اتصل للمعاينة المجانية: 0556557498',
        },
      },
    ],
  },
];

// ────────────────────────────────────────────────
// صفحة معرض الأعمال — /amal
// ────────────────────────────────────────────────
export const AMAL_SEO = {
  title: 'معرض أعمال الديكورات والدهانات',
  description:
    'استعرض أكثر من ٢٠٠ مشروع ديكور ودهان منفذ في الدمام والخبر والمنطقة الشرقية: بديل الخشب والرخام، جبس بورد، أسقف معلقة، دهانات فاخرة.',
  canonical: `${BASE_URL}/amal`,
  ogTitle: 'معرض أعمالنا | ديكورات ودهانات الدمام — وجد الأصايل',
  ogImage: `${BASE_URL}/images/wood-and-marble-alternative-panels.webp`,
};

export const AMAL_JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BASE_URL}/amal#page`,
    name: 'معرض أعمال ديكورات ودهانات الدمام — وجد الأصايل',
    description:
      'معرض مصوّر يضم أكثر من ٢٠٠ مشروع منفذ في الدمام والخبر والمنطقة الشرقية: ديكورات بديل الخشب والرخام، جبس بورد، أسقف معلقة، دهانات داخلية وخارجية فاخرة.',
    url: `${BASE_URL}/amal`,
    publisher: businessRef,
    about: {
      '@type': 'Service',
      name: 'ديكورات ودهانات الدمام',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${BASE_URL}/amal#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'معرض الأعمال', item: `${BASE_URL}/amal` },
    ],
  },
];

// ────────────────────────────────────────────────
// صفحة العوازل — /awazel (جديدة)
// ────────────────────────────────────────────────
export const AWAZEL_SEO = {
  title: 'عوازل الدمام',
  description:
    'خدمات عزل الأسطح المائية والحرارية بالدمام والخبر: عزل فوم، عوازل مائية معتمدة، ضمان حتى ١٠ سنوات. اتصل للمعاينة المجانية: 0556557498',
  canonical: `${BASE_URL}/awazel`,
  ogTitle: 'عوازل الدمام | عزل أسطح مائي وحراري — وجد الأصايل',
  ogImage: `${BASE_URL}/images/roof-waterproofing-foam-insulation.webp`,
};

export const AWAZEL_JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/awazel#service`,
    name: 'خدمات عوازل الأسطح بالدمام والخبر',
    alternateName: ['عوازل الدمام', 'عزل أسطح الدمام', 'عوازل مائية الدمام', 'عوازل الخبر', 'عزل فوم الدمام'],
    description:
      'تنفيذ أعمال العزل المائي والحراري للأسطح بالدمام والخبر والمنطقة الشرقية: عزل فوم متطور، عوازل مائية معتمدة ضد تسرب الأمطار والرطوبة، مع ضمان رسمي يصل إلى ١٠ سنوات.',
    url: `${BASE_URL}/awazel`,
    provider: businessRef,
    areaServed: [
      { '@type': 'City', name: 'الدمام' },
      { '@type': 'City', name: 'الخبر' },
      { '@type': 'State', name: 'المنطقة الشرقية' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${BASE_URL}/awazel#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'عوازل الدمام', item: `${BASE_URL}/awazel` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}/awazel#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'ما هي أنواع العوازل التي تقدمها مؤسسة وجد الأصايل في الدمام؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'نقدم عزل الأسطح المائي بالفوم، العوازل الحرارية، العوازل المائية ضد تسريب الأمطار، وعوازل الأسطح المعتمدة. جميع أعمالنا بضمان رسمي يصل إلى ١٠ سنوات.',
        },
      },
      {
        '@type': 'Question',
        name: 'هل تغطون الدمام والخبر في أعمال العزل؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'نعم، نخدم الدمام والخبر والظهران وجميع مدن المنطقة الشرقية. اتصل للمعاينة المجانية: 0556557498',
        },
      },
    ],
  },
];

import { ServiceItem, PortfolioItem, SwatchFinish, ArtisanStep, StudioMetric } from '../types';

export const STUDIO_METRICS: StudioMetric[] = [
  { value: '+٣٠', label: 'سنة خبرة مهنية', sub: 'في أعمال الدهانات والديكورات بالدمام والخبر' },
  { value: '+١٥٠٠', label: 'مشروع وفيلا منجزة', sub: 'تشطيب شقق وفلل وقصور ومحلات تجارية' },
  { value: '١٠٠٪', label: 'التزام بالمواعيد والجودة', sub: 'معاينة فورية وتسليم بالموعد المتفق عليه' },
  { value: 'أصلي', label: 'أفضل الدهانات المعتمدة', sub: 'دهانات جوتن والجزيرة ومواد عزل مضمونة' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'interior-exterior-paint',
    number: '٠١',
    title: 'دهانات داخلية وخارجية',
    category: 'دهانات وتشطيب',
    tagline: 'تنفيذ كافة أنواع الدهانات السادة والديكورية بمواد جوتن والجزيرة الأصلية.',
    description: 'تنفيذ دهانات الحوائط والأسقف الداخلية بلمسات مطفية ونصف لمعة، ودهانات البروفايل والرشة الخارجية المقاومة للشمس والرطوبة بالدمام والخبر.',
    materials: ['دهانات جوتن الأصلية', 'دهانات الجزيرة المعتمدة', 'معجون تأسيس مقاوم للرطوبة', 'عوازل مائية وحرارية'],
    features: ['تأسيس ومعالجة التشققات قبل الدهان', 'ألوان عصرية متناسقة وثابتة', 'مقاومة للعوامل الجوية والرطوبة', 'سرعة ونظافة تامة أثناء العمل'],
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'aspect-[4/5]',
    sampleCode: 'WA-PNT-01'
  },
  {
    id: 'wood-marble-alternatives',
    number: '٠٢',
    title: 'بديل الخشب وبديل الرخام',
    category: 'ديكورات جدارية حديثة',
    tagline: 'تكسيات جدارية عصرية تمنح المكان فخامة وأناقة بأقل تكلفة.',
    description: 'تركيب ألواح بديل الرخام (PVC) وتكسيات بديل الخشب (WPC) لخلفيات الشاشات، المداخل، والمجالس بتناسق مميز مع الإضاءات المخفية.',
    materials: ['ألواح بديل الرخام سماكة ممتازة', 'شرائح بديل الخشب المعالج', 'إستيل ذهبي وفضي مقاوم للصدأ', 'سيليكون وغراء ألماني قوي'],
    features: ['مقاومة تامة للماء والرطوبة وحشرات الخشب', 'سهولة التنظيف وعمر افتراضي طويل', 'تصاميم حديثة لخلفيات التلفزيون والمداخل', 'تركيب دقيق بدون فواصل ظاهرة'],
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'aspect-[4/5]',
    sampleCode: 'WA-DEC-02'
  },
  {
    id: 'gypsum-board',
    number: '٠٣',
    title: 'جبس بورد وأسقف معلقة',
    category: 'أسقف وقواطع',
    tagline: 'تصميم وتنفيذ أحدث ديكورات الأسقف المستعارة والقواطع الجدارية.',
    description: 'تركيب أسقف جبس بورد سادة ومودرن مع فتحات إنارة ليد مخفية وسبوت لايت، وقواطع عازلة للصوت للمكاتب والفلل والشقق.',
    materials: ['ألواح جبس بورد مقاومة للرطوبة', 'قطاعات حديد وصاج مجلفن سميك', 'شريط فايبر ومعجون جبس أصلي', 'مسامير وتثبيتات هندسية متينة'],
    features: ['استواء تام وتوزيع دقيق لفتحات الإضاءة', 'عزل حراري وصوتي ملحوظ', 'إمكانية تنفيذ مختلف الأشكال الهندسية', 'متانة وأمان عالي ضد التصدعات'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'aspect-[4/5]',
    sampleCode: 'WA-GYP-03'
  },
  {
    id: 'foam-mouldings',
    number: '٠٤',
    title: 'إطارات الفوم وبانوهات كلاسيك',
    category: 'ديكورات الفوم',
    tagline: 'إطارات جدارية راقية للمجالس والصالات تعطي طابعاً ملكياً أنيقاً.',
    description: 'تركيب براويز وبانوهات الفوم المعالج والكرانيش السقفية بنقشات ناعمة وتناسق متوازن مع ألوان الحوائط وأوراق الذهب.',
    materials: ['فوم كثيف عالي الجودة ومضغوط', 'غراء تثبيت فوم مخصص قوي', 'معجون زوايا مرن لمنع الشقوق', 'دهان حماية وتشطيب نهائي'],
    features: ['خفيف الوزن ومقاوم للرطوبة والحرارة', 'بديل ممتاز وأوفر من الجبس التقليدي', 'قابل للدهان بأي لون وملمس ناعم', 'يعطي مساحة وفخامة للجدران'],
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'aspect-[4/5]',
    sampleCode: 'WA-FOM-04'
  },
  {
    id: 'screens-and-shades',
    number: '٠٥',
    title: 'سواتر ومظلات وبرجولات',
    category: 'حداد ومظلات خارجية',
    tagline: 'حماية وخصوصية تامة للأحواش والأسطح ومواقف السيارات.',
    description: 'تفصيل وتركيب سواتر شرائح ومجدول، مظلات سيارات قماش PVC وكابولي، وتغطيات أسطح وحدائق مقاومة لرياح ورطوبة الشرقية.',
    materials: ['حديد مجلفن ودهان ضد الصدأ', 'قماش كوري وألماني عالي الكثافة (PVC)', 'شرائح بلاستيك مقوى معالج (WPC)', 'تيوبات وبليتات تثبيت متينة'],
    features: ['حجب الرؤية بنسبة ١٠٠٪ لتوفير الخصوصية', 'حماية قوية من حرارة الشمس والأمطار', 'أشكال عصرية وألوان تناسب واجهات المنازل', 'ثبات قوي وضمان على التركيب والأقمشة'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'aspect-[4/5]',
    sampleCode: 'WA-SHD-05'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'villa-shati-dammam',
    title: 'تشطيب فيلا سكنية متكاملة',
    category: 'فلل وقصور',
    location: 'حي الشاطئ، الدمام',
    year: '٢٠٢٥',
    technique: 'دهانات داخلية جوتن + بديل خشب ورخام للمدخل والمجلس',
    dimensions: 'مساحة المسطحات ٧٥٠ متراً مربعاً',
    curatorNotes: 'تنفيذ دهانات داخلية كاملة بألوان هادئة، مع جدارية تكسية بديل خشب مع بديل رخام عروق ذهبية خلف شاشة المجلس، وتركيب أسقف جبس بورد مع إنارة دافئة مخفية.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop',
    featured: true,
    accentColor: '#C19A6B',
    colSpan: 'md:col-span-8'
  },
  {
    id: 'majlis-khobar-belt',
    title: 'ديكورات مجلس وضيافة فاخرة',
    category: 'مجالس وصوالين',
    location: 'حي الحزام الذهبي، الخبر',
    year: '٢٠٢٥',
    technique: 'إطارات فوم كلاسيك مع إضاءات جدارية ودهان بيج ناعم',
    dimensions: 'مجلس رئيسي وصالة استقبال بمساحة ١٨٠ متراً مربعاً',
    curatorNotes: 'تركيب بانوهات فوم متناسقة هندسياً على كامل الجدران مع دهان جوتن فينوماستيك مطفي، وتركيب كرانيش سقفية ناعمة بتشطيب نظيف.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1600&auto=format&fit=crop',
    featured: false,
    accentColor: '#E6C280',
    colSpan: 'md:col-span-4'
  },
  {
    id: 'screens-roof-dammam',
    title: 'سواتر ومظلات لفيلا خاصة',
    category: 'سواتر ومظلات',
    location: 'حي الفاخرية، الدمام',
    year: '٢٠٢٤',
    technique: 'سواتر شرائح حديد مجلفن + مظلة سيارات كابولي قماش PVC',
    dimensions: 'سواتر بطول ٥٥ متراً ومظلة سيارتين',
    curatorNotes: 'تركيب سواتر شرائح بارتفاع مترين ونصف لتأمين الخصوصية التامة مع دهان فرن ناري مقاوم للصدأ، ومظلة سيارات بقماش كوري معالج مقاوم للحرارة.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1600&auto=format&fit=crop',
    featured: false,
    accentColor: '#C19A6B',
    colSpan: 'md:col-span-4'
  },
  {
    id: 'apartment-rakah-khobar',
    title: 'تجديد شقة دوبلكس عصرية',
    category: 'شقق وتجديد',
    location: 'حي الراكة، الخبر',
    year: '٢٠٢٥',
    technique: 'جبس بورد فلات + معالجة تشققات ودهانات حديثة',
    dimensions: 'دورين بمساحة ٣٢٠ متراً مربعاً',
    curatorNotes: 'إزالة الدهانات القديمة المتضررة وإعادة التأسيس بالمعجون المقاوم للرطوبة، وتنزيل أسقف جبس بورد ناعمة مع ديكور بديل خشب لمدخل الشقة.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
    featured: true,
    accentColor: '#9B784B',
    colSpan: 'md:col-span-8'
  },
  {
    id: 'exterior-facade-dammam',
    title: 'دهانات بروفايل خارجية لفيلا',
    category: 'واجهات خارجية',
    location: 'حي الضباب، الدمام',
    year: '٢٠٢٤',
    technique: 'بروفايل عسيب والجزيرة مقاوم للرطوبة وحرارة الشمس',
    dimensions: 'واجهة فيلا كاملة ٤٨٠ متراً مربعاً',
    curatorNotes: 'تطبيق برايمر مقاوم للرطوبة مع رشة بروفايل عالية الجودة بتناسق لونين، مما يوفر عزلاً وحماية جمالية طويلة الأمد لواجهة المنزل.',
    imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1600&auto=format&fit=crop',
    featured: false,
    accentColor: '#C19A6B',
    colSpan: 'md:col-span-6'
  },
  {
    id: 'commercial-dhahran',
    title: 'تشطيب صالة تجارية ومكتبية',
    category: 'محلات ومكاتب',
    location: 'حي الدانة، الظهران',
    year: '٢٠٢٥',
    technique: 'قواطع جبس بورد + بديل رخام للمكتب الرئيسي ودهانات مطفية',
    dimensions: 'مساحة ٢٤٠ متراً مربعاً',
    curatorNotes: 'سرعة في الإنجاز لتسليم الموقع خلال أسبوعين فقط، مع قواطع عازلة وأسقف مستعارة وتكسية مميزة لواجهة الاستقبال.',
    imageUrl: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    featured: false,
    accentColor: '#E6C280',
    colSpan: 'md:col-span-6'
  }
];

export const SWATCH_FINISHES: SwatchFinish[] = [
  {
    id: 'paint-offwhite',
    name: 'دهان جوتن أوف وايت ناعم',
    category: 'دهانات داخلية',
    tone: 'أوف وايت كريمي هادئ',
    sheen: 'مطفي ربع لمعة (قابل للغسيل)',
    description: 'دهان فينوماستيك ناعم يمنح الغرف اتساعاً وإضاءة طبيعية مريحة، مقاوم للبقع وسهل التنظيف.',
    composition: 'أكريليك نقي مائي، بدون رائحة نفاذة، تغطية عالية',
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    baseHex: '#F2EFEB',
    goldReflectance: 0.20
  },
  {
    id: 'wood-fluted-walnut',
    name: 'تكسيات بديل الخشب جوزي',
    category: 'بديل الخشب (WPC)',
    tone: 'بني جوزي طبيعي مضلع',
    sheen: 'ملمس خشبي واقعي بدون لمعة',
    description: 'شرائح بديل الخشب المقاومة للماء والرطوبة بتضليع متناسق يضفي دفئاً عصرياً على خلفيات الشاشات والمداخل.',
    composition: 'بوليمر خشبي معالج، مقاوم لحشرات الخشب والرطوبة',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    baseHex: '#5C4033',
    goldReflectance: 0.40
  },
  {
    id: 'marble-openbook-gold',
    name: 'بديل الرخام عروق ذهبية',
    category: 'بديل الرخام (PVC)',
    tone: 'أبيض ناصع مع عروق رمادية وذهبية',
    sheen: 'لمعان عالي كالمرآة (UV Coat)',
    description: 'ألواح بديل الرخام سهلة التركيب والتنظيف، تعطي فخامة الرخام الطبيعي بتكلفة مناسبة ووزن خفيف.',
    composition: 'طبقات PVC مقواة مع حماية UV ضد الخدش والبهتان',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
    baseHex: '#EFECE6',
    goldReflectance: 0.85
  },
  {
    id: 'foam-panelling',
    name: 'بانوهات فوم كلاسيك',
    category: 'إطارات فوم',
    tone: 'أبيض ناصع قابل للدهان',
    sheen: 'مخملي ناعم',
    description: 'إطارات جدارية كلاسيكية متناسقة للمجالس والممرات تعطي فخامة ملكية بدون أي تشققات.',
    composition: 'فوم بولي يوريثان عالي الكثافة مضغوط ومقاوم للرطوبة',
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop',
    baseHex: '#EAE6DF',
    goldReflectance: 0.25
  },
  {
    id: 'screens-louvers',
    name: 'سواتر شرائح مجلفنة',
    category: 'سواتر ومظلات',
    tone: 'بيج صحراوي / خشبي / أبيض',
    sheen: 'دهان حراري ناري مقاوم للشمس',
    description: 'سواتر حديد شرائح ومجدول تحجب الرؤية تماماً وتسمح بمرور الهواء، متينة ومثبتة بأعلى معايير الأمان.',
    composition: 'حديد مجلفن ضد الصدأ، دهان فرن حراري عالي الجودة',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    baseHex: '#D2B48C',
    goldReflectance: 0.30
  }
];

export const ARTISAN_STEPS: ArtisanStep[] = [
  {
    step: '١',
    name: 'المعاينة الميدانية ورفع المقاسات',
    duration: 'المرحلة الأولى — فورية بالدمام والخبر',
    description: 'زيارة موقع العمل ومطالعة المساحات وفحص حالة الجدران والأسقف مجاناً.',
    detail: 'نقوم بالاطلاع على متطلباتكم، عرض عينات الألوان والكتالوجات المناسبة للدهانات وبديل الخشب والرخام والجبس بورد أو السواتر، وتحديد التكلفة بدقة وبدون أي رسوم خفية.',
    materials: 'كتالوجات جوتن والجزيرة، عينات خشب ورخام وفوم، أجهزة ليزر دقيقة',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop'
  },
  {
    step: '٢',
    name: 'تجهيز وحماية الموقع وتأسيس الأسطح',
    duration: 'المرحلة الثانية — قبل بدء العمل',
    description: 'تغطية الأرضيات والأثاث بالكامل، وصنفرة الجدران ومعالجة الرطوبة والتشققات.',
    detail: 'نولي النظافة والتحضير أهمية قصوى؛ نغلق الفواصل بالمعجون المخصص ونعالج أي أثر للرطوبة أو التقشير لضمان تماسك الدهانات والديكورات لسنوات طويلة.',
    materials: 'نايلون حماية سميك، لصق ورق فواصل، معجون مقاوم للرطوبة، صنفرة آلية',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
  },
  {
    step: '٣',
    name: 'تنفيذ أعمال الدهان والديكور والجبس',
    duration: 'المرحلة الثالثة — مرحلة التنفيذ الفعلي',
    description: 'تطبيق طبقات الدهان المتتالية أو تركيب هياكل الجبس بورد وبديل الخشب والرخام.',
    detail: 'يعمل فنيون ذوو خبرة تزيد عن ٣٠ عاماً على تركيب القطاعات بدقة، وزن الزوايا بالليزر، وتوزيع طبقات الدهان بالتساوي بدون أي تموجات أو عيوب.',
    materials: 'أجهزة رش ورولات جوتن الأصلية، شاسيهات حديد، مسامير وغراء ألماني',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop'
  },
  {
    step: '٤',
    name: 'تركيب السواتر والمظلات وتوصيل الإضاءات',
    duration: 'المرحلة الرابعة — التثبيت واللمسات الجمالية',
    description: 'تثبيت السواتر والمظلات بأمان تام، وتشغيل شرائط الليد المخفية للجبس والديكورات.',
    detail: 'التأكد من متانة التثبيتات الخارجية لمقاومة الرياح الشديدة، واختبار عمل الإضاءات المخفية في الأسقف وخلفيات بديل الخشب لضمان توزيع إنارة جذاب ومتجانس.',
    materials: 'بليتات تثبيت حديد، تيوبات مجلفنة، أقمشة PVC، محولات وليدات دافئة',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop'
  },
  {
    step: '٥',
    name: 'المعاينة النهائية ونظافة الموقع والتسليم',
    duration: 'المرحلة الخامسة — التسليم والضمان',
    description: 'تسليم العمل كاملاً بعد تنظيف الموقع مع تقديم الضمان وخدمة المتابعة.',
    detail: 'يقوم العميل بفحص العمل والاطمئنان على كافة التفاصيل، مع تنظيف وتلميع المكان وترتيبه، والتأكيد على رضا العميل التام والتزامنا بالضمان.',
    materials: 'فحص جودة شامل، تنظيف مخلفات العمل، شهادة رضا وضمان العمل',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop'
  }
];

export const TESTIMONIALS = [
  {
    quote: "ما شاء الله تبارك الله، تم تنفيذ دهانات الفيلا بالكامل وديكورات بديل الخشب والرخام للشاشات. عمل متقن ومواعيد مضبوطة ونظافة بعد الانتهاء. أنصح بالتعامل معهم وبشدة.",
    author: "أبو فهد القحطاني",
    role: "صاحب فيلا خاصة",
    location: "حي الشاطئ، الدمام"
  },
  {
    quote: "الخبرة واضحة في كل لمسة، ركبوا لنا سواتر للحوش ومظلة للسيارات مع جبس بورد للصالة. دقة في المقاسات وسرعة في الإنجاز وسعرهم جداً ممتاز مقارنة بالسوق.",
    author: "م. خالد الدوسري",
    role: "مالك عقار",
    location: "حي الحزام الذهبي، الخبر"
  },
  {
    quote: "معلم متمكن وأمين وخبرته أكثر من 30 سنة تظهر في جودة الشغل. قام بتجديد شقتي بالكامل ومعالجة الرطوبة والدهان كأنه جديد تماماً.",
    author: "أبو راشد الغامدي",
    role: "حي الدانة",
    location: "الظهران"
  }
];


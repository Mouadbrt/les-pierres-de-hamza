const stoneContent = {
  en: {
    'pierre-de-taza-grise': {
      name: 'Grey Taza Stone', category: 'Taza Stone', collection: 'Taza Collection',
      shortDescription: 'A restrained, durable and timeless Moroccan stone for façades, floors and architectural spaces.',
      description: [
        'Grey Taza Stone is a Moroccan natural stone renowned for its strength, durability and elegance. Its understated modern grey tone makes it ideal for construction, cladding and both interior and exterior design projects.',
        'Highly valued for its quality and natural finish, it is suitable for façades, floors, staircases, decorative walls, terraces and gardens. Its robustness allows it to withstand changing weather conditions while preserving its appearance over time.',
      ],
      tagline: 'Grey Taza Stone: the perfect balance of quality, aesthetics and longevity.',
      applications: ['Façades', 'Floors', 'Staircases', 'Decorative walls', 'Terraces', 'Gardens'],
    },
    'pierre-de-taza-piege': {
      name: 'Taza Piège Stone', category: 'Taza Stone', collection: 'Taza Collection',
      shortDescription: 'Authentic texture and mineral character for durable walls, terraces and landscaping.',
      description: [
        'Taza Piège Stone is a Moroccan natural stone appreciated for its authentic appearance and outstanding resistance. With its distinctive texture and excellent durability, it is ideal for construction and decoration projects, both indoors and outdoors.',
        'It is often used for façades, walls, floors, terraces, gardens and landscaping. Its natural charm brings an elegant and timeless touch to every project while providing excellent resistance to weather and wear.',
      ],
      tagline: 'Taza Piège Stone: natural stone combining strength, aesthetics and quality.',
      applications: ['Façades', 'Walls', 'Floors', 'Terraces', 'Gardens', 'Landscaping'],
    },
    'travertin-volubilis': {
      name: 'Volubilis Travertine', category: 'Travertine', collection: 'Volubilis Collection',
      shortDescription: 'Warm tones and refined texture inspired by Moroccan heritage.',
      description: [
        'Volubilis Travertine is a Moroccan natural stone recognised for its elegance, strength and timeless charm. Inspired by the heritage of Volubilis, it stands out through natural tones and refined texture that bring warmth and authenticity to every space.',
        'Ideal for floors, walls, façades, terraces, staircases and outdoor landscaping, this travertine offers excellent resistance to wear and changing weather conditions. Its natural finish makes it a preferred choice for residential and professional projects.',
      ],
      tagline: 'Volubilis Travertine: natural elegance in service of your projects.',
      applications: ['Floors', 'Walls', 'Façades', 'Terraces', 'Staircases', 'Outdoors'],
    },
    granit: {
      name: 'Granite', category: 'Granite', collection: 'Mineral Collection',
      shortDescription: 'A material of character with exceptional resistance, designed for demanding uses.',
      description: [
        'Granite is a natural stone renowned for its exceptional strength, durability and elegance. Formed deep within the earth, it is one of the strongest materials used in construction and decoration.',
        'Thanks to its resistance to impact, scratches, heat and weather, granite is ideal for worktops, floors, staircases, façades, terraces and outdoor landscaping. Available in a wide range of colours and finishes, it brings a modern and refined touch to every project.',
      ],
      tagline: 'Granite: the perfect combination of strength, quality and elegance.',
      applications: ['Worktops', 'Floors', 'Staircases', 'Façades', 'Terraces', 'Outdoors'],
    },
    'ardoise-multicouleur': {
      name: 'Multicolor Slate', category: 'Slate', collection: 'Texture Collection',
      shortDescription: 'Unique mineral shades that add depth, warmth and personality to spaces.',
      description: [
        'Multicolor Slate is a natural stone distinguished by unique shades of grey, brown, rust, green and black. Each piece has an authentic appearance, creating an elegant and warm result for every design project.',
        'Thanks to its strong resistance to weather, moisture and wear, it is ideal for floors, walls, façades, terraces, gardens and outdoor spaces. Its natural character and varied colours add originality and refinement to every project.',
      ],
      tagline: 'Multicolor Slate: natural stone combining beauty, resistance and authenticity.',
      applications: ['Floors', 'Walls', 'Façades', 'Terraces', 'Gardens', 'Outdoors'],
    },
    marbre: {
      name: 'Marble', category: 'Marble', collection: 'Prestige Collection',
      shortDescription: 'A noble stone with unique veining for refined interiors and exceptional details.',
      description: [
        'Marble is an exceptional natural stone recognised for its elegance, finesse and luxurious appearance. Used for centuries in architecture and decoration, it brings a refined and timeless touch to every space.',
        'With its unique veining and wide variety of colours, marble is ideal for floors, staircases, walls, bathrooms, worktops and decorative features. Its natural beauty and premium finish make it a preferred choice for residential and professional projects.',
      ],
      tagline: 'Marble: the perfect alliance of elegance, quality and prestige.',
      applications: ['Floors', 'Staircases', 'Walls', 'Bathrooms', 'Worktops', 'Decoration'],
    },
  },
  ar: {
    'pierre-de-taza-grise': {
      name: 'حجر تازة الرمادي', category: 'حجر تازة', collection: 'مجموعة تازة',
      shortDescription: 'حجر مغربي هادئ ومتين وخالد للواجهات والأرضيات والمساحات المعمارية.',
      description: [
        'حجر تازة الرمادي هو حجر طبيعي مغربي معروف بصلابته ومتانته وأناقة مظهره. بفضل لونه الرمادي الهادئ والعصري، يندمج بشكل مثالي في مشاريع البناء والكسوة والتصميم الداخلي والخارجي.',
        'يتميز بجودته وتشطيبه الطبيعي، ويناسب الواجهات والأرضيات والسلالم والجدران الزخرفية والتراسات والحدائق. كما تسمح له متانته بمقاومة تغيرات المناخ مع الحفاظ على جماله بمرور الوقت.',
      ],
      tagline: 'حجر تازة الرمادي: التوازن المثالي بين الجودة والجمال وطول العمر.',
      applications: ['واجهات', 'أرضيات', 'سلالم', 'جدران زخرفية', 'تراسات', 'حدائق'],
    },
    'pierre-de-taza-piege': {
      name: 'حجر تازة Piège', category: 'حجر تازة', collection: 'مجموعة تازة',
      shortDescription: 'ملمس أصيل وطابع معدني للجدران والتراسات وتنسيق المساحات المتينة.',
      description: [
        'حجر تازة Piège هو حجر طبيعي مغربي يحظى بالتقدير لمظهره الأصيل ومقاومته العالية. بفضل ملمسه المميز ومتانته الممتازة، يعد مثالياً لمشاريع البناء والديكور في الداخل والخارج.',
        'يستخدم غالباً في الواجهات والجدران والأرضيات والتراسات والحدائق وتنسيق المناظر الطبيعية. يمنح سحره الطبيعي كل مشروع لمسة أنيقة وخالدة، مع مقاومة ممتازة للعوامل الجوية والتآكل.',
      ],
      tagline: 'حجر تازة Piège: حجر طبيعي يجمع بين الصلابة والجمال والجودة.',
      applications: ['واجهات', 'جدران', 'أرضيات', 'تراسات', 'حدائق', 'تنسيق المناظر'],
    },
    'travertin-volubilis': {
      name: 'ترافرتين وليلي', category: 'ترافرتين', collection: 'مجموعة وليلي',
      shortDescription: 'درجات دافئة وملمس راقٍ مستوحى من التراث المغربي.',
      description: [
        'ترافرتين وليلي حجر طبيعي مغربي معروف بأناقته وصلابته وسحره الخالد. مستوحى من تراث وليلي، ويتميز بدرجاته الطبيعية وملمسه الراقي الذي يضفي الدفء والأصالة على جميع المساحات.',
        'مثالي للأرضيات والجدران والواجهات والتراسات والسلالم والتنسيقات الخارجية، كما يوفر مقاومة ممتازة للتآكل وتغيرات المناخ. ويجعله تشطيبه الطبيعي خياراً مفضلاً للمشاريع السكنية والمهنية.',
      ],
      tagline: 'ترافرتين وليلي: الأناقة الطبيعية في خدمة مشاريعكم.',
      applications: ['أرضيات', 'جدران', 'واجهات', 'تراسات', 'سلالم', 'خارجية'],
    },
    granit: {
      name: 'الغرانيت', category: 'غرانيت', collection: 'المجموعة المعدنية',
      shortDescription: 'مادة ذات طابع قوي ومقاومة استثنائية للاستخدامات الأكثر تطلباً.',
      description: [
        'الغرانيت حجر طبيعي معروف بمقاومته الاستثنائية ومتانته وأناقة مظهره. يتكون في أعماق الأرض ويعد من أقوى المواد المستخدمة في البناء والديكور.',
        'بفضل مقاومته للصدمات والخدوش والحرارة والعوامل الجوية، يعد الغرانيت مثالياً لأسطح العمل والأرضيات والسلالم والواجهات والتراسات والتنسيقات الخارجية. ويتوفر بألوان وتشطيبات متعددة تضفي لمسة عصرية وراقية على كل مشروع.',
      ],
      tagline: 'الغرانيت: المزيج المثالي بين الصلابة والجودة والأناقة.',
      applications: ['أسطح العمل', 'أرضيات', 'سلالم', 'واجهات', 'تراسات', 'خارجية'],
    },
    'ardoise-multicouleur': {
      name: 'الأردواز متعدد الألوان', category: 'أردواز', collection: 'مجموعة الملمس',
      shortDescription: 'درجات معدنية فريدة تضيف العمق والدفء والشخصية إلى المساحات.',
      description: [
        'الأردواز متعدد الألوان حجر طبيعي يتميز بدرجات فريدة من الرمادي والبني والصدأ والأخضر والأسود. تتمتع كل قطعة بمظهر أصيل يمنح المشاريع نتيجة أنيقة ودافئة.',
        'بفضل مقاومته العالية للعوامل الجوية والرطوبة والتآكل، يعد مثالياً للأرضيات والجدران والواجهات والتراسات والحدائق والمساحات الخارجية. ويضفي طابعه الطبيعي وتنوع ألوانه لمسة من الأصالة والرقي على كل إنجاز.',
      ],
      tagline: 'الأردواز متعدد الألوان: حجر طبيعي يجمع بين الجمال والمقاومة والأصالة.',
      applications: ['أرضيات', 'جدران', 'واجهات', 'تراسات', 'حدائق', 'خارجية'],
    },
    marbre: {
      name: 'الرخام', category: 'رخام', collection: 'مجموعة الفخامة',
      shortDescription: 'حجر نبيل بعروق فريدة للديكورات الراقية والتفاصيل الاستثنائية.',
      description: [
        'الرخام حجر طبيعي استثنائي معروف بأناقته ودقته ومظهره الفاخر. استُخدم لقرون في العمارة والديكور ويمنح جميع المساحات لمسة راقية وخالدة.',
        'بفضل عروقه الفريدة وتنوع ألوانه، يعد الرخام مثالياً للأرضيات والسلالم والجدران والحمامات وأسطح العمل والعناصر الزخرفية. ويجعله جماله الطبيعي وتشطيبه الفاخر خياراً مفضلاً للمشاريع السكنية والمهنية.',
      ],
      tagline: 'الرخام: التحالف المثالي بين الأناقة والجودة والفخامة.',
      applications: ['أرضيات', 'سلالم', 'جدران', 'حمامات', 'أسطح العمل', 'ديكور'],
    },
  },
}

const projectContent = {
  en: {
    'habillage-facades-pierre-taza': { category: 'FAÇADES', title: 'Taza Stone Façade Cladding', shortDescription: 'Elegant and durable cladding for villas, buildings and architectural projects.', description: 'An architectural composition that highlights the understated quality of natural Taza stone, designed to protect the building envelope over time while giving it an elegant mineral identity.', material: 'Grey Taza Stone', origin: 'Taza, Morocco', usage: 'Exterior façades' },
    'escaliers-pierre-naturelle': { category: 'STAIRCASES', title: 'Natural Stone Staircases', shortDescription: 'Robust and refined staircases designed for interior and exterior spaces.', description: 'Precisely designed steps with carefully finished surfaces, created to combine comfort, durability and visual continuity between levels.', material: 'Natural stone', origin: 'Morocco', usage: 'Interior & exterior' },
    'amenagement-espaces-exterieurs': { category: 'EXTERIOR', title: 'Outdoor Space Landscaping', shortDescription: 'Terraces, gardens, walls and paving made with durable natural stones.', description: 'A coherent mineral language for terraces, circulation areas and gardens that age with character and blend naturally into their surroundings.', material: 'Travertine & Taza Stone', origin: 'Morocco', usage: 'Terraces, gardens, paving' },
    'murs-decoratifs-pierre-naturelle': { category: 'WALLS', title: 'Decorative Natural Stone Walls', shortDescription: 'Natural textures that bring depth, authenticity and character to spaces.', description: 'Characterful walls where natural variations in tone and texture become an architectural feature in their own right, indoors and outdoors.', material: 'Multicolor Slate', origin: 'Morocco', usage: 'Decorative walls' },
    'terrasse-travertin-volubilis': { category: 'TERRACES', title: 'Volubilis Travertine Terrace', shortDescription: 'A warm surface that naturally extends architecture towards the outdoors.', description: 'The soft texture and warm tones of travertine create a welcoming, graphic terrace suited to everyday use.', material: 'Volubilis Travertine', origin: 'Morocco', usage: 'Outdoor terrace' },
    'sol-interieur-marbre': { category: 'INTERIOR', title: 'Interior Marble Flooring', shortDescription: 'A luminous and noble finish for residential and professional spaces.', description: 'Unique veining and a refined surface give interior volumes a fluid, luminous and timeless expression.', material: 'Marble', origin: 'Morocco', usage: 'Interior floor' },
    'jardin-pierre-naturelle': { category: 'GARDENS', title: 'Natural Stone Mineral Garden', shortDescription: 'Borders, paths and low walls that structure the landscape naturally.', description: 'A discreet intervention where stone structures pathways and garden boundaries without breaking the balance with vegetation.', material: 'Taza Piège Stone', origin: 'Taza, Morocco', usage: 'Gardens & landscaping' },
    'facade-granit-contemporaine': { category: 'FAÇADES', title: 'Contemporary Granite Façade', shortDescription: 'Clean lines and a robust material for durable contemporary architecture.', description: 'Granite complements contemporary volumes through its visual density, precise cutting and strong resistance to exterior conditions.', material: 'Granite', origin: 'Morocco', usage: 'Exterior façade' },
  },
  ar: {
    'habillage-facades-pierre-taza': { category: 'واجهات', title: 'كسوة الواجهات بحجر تازة', shortDescription: 'كسوة أنيقة ومتينة للفلل والمباني والمشاريع المعمارية.', description: 'تركيبة معمارية تبرز هدوء الحجر الطبيعي من تازة، مصممة لحماية غلاف المبنى على المدى الطويل ومنحه هوية معدنية أنيقة.', material: 'حجر تازة الرمادي', origin: 'تازة، المغرب', usage: 'واجهات خارجية' },
    'escaliers-pierre-naturelle': { category: 'سلالم', title: 'سلالم من الحجر الطبيعي', shortDescription: 'سلالم قوية وراقية مصممة للمساحات الداخلية والخارجية.', description: 'درجات بتصميم دقيق وتشطيبات مدروسة تجمع بين راحة الاستخدام والمتانة والاستمرارية البصرية بين المستويات المختلفة.', material: 'حجر طبيعي', origin: 'المغرب', usage: 'داخلي وخارجي' },
    'amenagement-espaces-exterieurs': { category: 'خارجي', title: 'تنسيق المساحات الخارجية', shortDescription: 'تراسات وحدائق وجدران ورصف بأحجار طبيعية متينة.', description: 'لغة معدنية متناسقة لإنشاء تراسات ومسارات وحدائق تتقادم بجمال وتندمج طبيعياً مع محيطها.', material: 'ترافرتين وحجر تازة', origin: 'المغرب', usage: 'تراسات، حدائق، رصف' },
    'murs-decoratifs-pierre-naturelle': { category: 'جدران', title: 'جدران زخرفية من الحجر الطبيعي', shortDescription: 'ملامس طبيعية تضيف العمق والأصالة والشخصية للمساحات.', description: 'جدران ذات شخصية تصبح فيها الاختلافات الطبيعية في الألوان والملامس عنصراً معمارياً قائماً بذاته في الداخل والخارج.', material: 'أردواز متعدد الألوان', origin: 'المغرب', usage: 'جدران زخرفية' },
    'terrasse-travertin-volubilis': { category: 'تراسات', title: 'تراس بترافرتين وليلي', shortDescription: 'سطح دافئ يمد العمارة طبيعياً نحو الخارج.', description: 'الملمس الناعم والدرجات الدافئة للترافرتين تخلق تراساً مرحباً وعملياً مناسباً للاستخدام اليومي.', material: 'ترافرتين وليلي', origin: 'المغرب', usage: 'تراس خارجي' },
    'sol-interieur-marbre': { category: 'داخلي', title: 'أرضية داخلية من الرخام', shortDescription: 'تشطيب مضيء ونبيل للمساحات السكنية والمهنية.', description: 'عروق فريدة وسطح راقٍ يمنحان الأحجام الداخلية إحساساً سلساً ومضيئاً وخالداً.', material: 'الرخام', origin: 'المغرب', usage: 'أرضية داخلية' },
    'jardin-pierre-naturelle': { category: 'حدائق', title: 'حديقة معدنية بالحجر الطبيعي', shortDescription: 'حواف ومسارات وجدران منخفضة تنظم المشهد بشكل طبيعي.', description: 'تدخل هادئ ينظم فيه الحجر المسارات وحدود الحديقة دون الإخلال بالتوازن مع النباتات.', material: 'حجر تازة Piège', origin: 'تازة، المغرب', usage: 'حدائق وتنسيق المناظر' },
    'facade-granit-contemporaine': { category: 'واجهات', title: 'واجهة عصرية من الغرانيت', shortDescription: 'خطوط نظيفة ومادة قوية لعمارة عصرية تدوم.', description: 'يدعم الغرانيت الأحجام المعاصرة بكثافته البصرية ودقة قطعه ومقاومته العالية للظروف الخارجية.', material: 'الغرانيت', origin: 'المغرب', usage: 'واجهة خارجية' },
  },
}

export function localizeStone(stone, language) {
  if (language === 'fr') return stone
  return { ...stone, ...(stoneContent[language]?.[stone.slug] || {}) }
}

export function localizeProject(project, language) {
  if (language === 'fr') return project
  return { ...project, ...(projectContent[language]?.[project.slug] || {}) }
}

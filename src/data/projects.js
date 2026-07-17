const u = (id, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=84`

export const projects = [
  {
    slug: 'habillage-facades-pierre-taza',
    number: '01',
    category: 'FAÇADES',
    title: 'Habillage de façades en Pierre de Taza',
    shortDescription: 'Revêtement élégant et durable pour villas, bâtiments et projets architecturaux.',
    description:
      'Une composition architecturale qui met en valeur la sobriété de la pierre naturelle de Taza, pensée pour protéger durablement l’enveloppe du bâtiment tout en lui donnant une identité minérale élégante.',
    material: 'Pierre de Taza Grise',
    origin: 'Taza, Maroc',
    usage: 'Façades extérieures',
    image: '/images/stones/pierre-NOIR-ECLATE-taza-beige.jpg',
  },
  {
    slug: 'escaliers-pierre-naturelle',
    number: '02',
    category: 'ESCALIERS',
    title: 'Escaliers en pierre naturelle',
    shortDescription: 'Des escaliers robustes et raffinés conçus pour les espaces intérieurs et extérieurs.',
    description:
      'Des marches au dessin précis et aux finitions soignées, conçues pour conjuguer confort d’usage, durabilité et continuité visuelle entre les différents niveaux.',
    material: 'Pierre naturelle',
    origin: 'Maroc',
    usage: 'Intérieur & extérieur',
    image: '/images/stones/Escaliers en pierre naturelle.jpg',
  },
  {
    slug: 'amenagement-espaces-exterieurs',
    number: '03',
    category: 'EXTÉRIEUR',
    title: 'Aménagement des espaces extérieurs',
    shortDescription: 'Terrasses, jardins, murs et dallages réalisés avec des pierres naturelles résistantes.',
    description:
      'Un langage minéral cohérent pour créer des terrasses, circulations et jardins qui vieillissent avec caractère et s’intègrent naturellement à leur environnement.',
    material: 'Travertin & Pierre de Taza',
    origin: 'Maroc',
    usage: 'Terrasses, jardins, dallages',
    image: u('photo-1600566753086-00f18fb6b3ea'),
  },
  {
    slug: 'murs-decoratifs-pierre-naturelle',
    number: '04',
    category: 'MURS',
    title: 'Murs décoratifs en pierre naturelle',
    shortDescription: 'Des textures naturelles apportant profondeur, authenticité et caractère aux espaces.',
    description:
      'Des murs de caractère où la variation naturelle des teintes et des textures devient un élément architectural à part entière, à l’intérieur comme à l’extérieur.',
    material: 'Ardoise Multicouleur',
    origin: 'Maroc',
    usage: 'Murs décoratifs',
    image: '/images/stones/PIERRE-GRISE-DE-TAZA.jpg',
  },
  {
    slug: 'terrasse-travertin-volubilis',
    number: '05',
    category: 'TERRASSES',
    title: 'Terrasse en Travertin Volubilis',
    shortDescription: 'Une surface chaleureuse qui prolonge naturellement l’architecture vers l’extérieur.',
    description:
      'La texture douce et les nuances chaleureuses du travertin créent une terrasse accueillante, graphique et adaptée aux usages quotidiens.',
    material: 'Travertin Volubilis',
    origin: 'Maroc',
    usage: 'Terrasse extérieure',
    image: '/images/stones/Terrasse en Travertin Volubilis.jpg',
  },
  {
    slug: 'sol-interieur-marbre',
    number: '06',
    category: 'INTÉRIEUR',
    filters: ['SOLS'],
    title: 'Sol intérieur en marbre',
    shortDescription: 'Une finition lumineuse et noble pour les espaces résidentiels et professionnels.',
    description:
      'Des veinures uniques et une surface raffinée pour donner aux volumes intérieurs une lecture fluide, lumineuse et intemporelle.',
    material: 'Marbre',
    origin: 'Maroc',
    usage: 'Sol intérieur',
    image: '/images/stones/Interior Marble Flooring.jpg',
  },
  {
    slug: 'jardin-pierre-naturelle',
    number: '07',
    category: 'JARDINS',
    title: 'Jardin minéral en pierre naturelle',
    shortDescription: 'Des bordures, chemins et murets qui structurent le paysage avec naturel.',
    description:
      'Une intervention discrète où la pierre structure les cheminements et les limites du jardin sans rompre l’équilibre avec le végétal.',
    material: 'Pierre de Taza Piège',
    origin: 'Taza, Maroc',
    usage: 'Jardins & paysage',
    image: '/images/stones/PIERRE-GRISE-POUR-DALLAGE-TAA.jpg',
  },
  {
    slug: 'facade-granit-contemporaine',
    number: '08',
    category: 'FAÇADES',
    title: 'Façade contemporaine en granit',
    shortDescription: 'Des lignes nettes et une matière robuste pour une architecture contemporaine durable.',
    description:
      'Le granit accompagne les volumes contemporains par sa densité visuelle, sa précision de coupe et sa forte résistance aux conditions extérieures.',
    material: 'Granit',
    origin: 'Maroc',
    usage: 'Façade extérieure',
    image: '/images/stones/Pierre-GRIS-TAZA.jpg',
  },
]

export const projectCategories = [
  'TOUS',
  'FAÇADES',
  'SOLS',
  'ESCALIERS',
  'TERRASSES',
  'JARDINS',
  'MURS',
  'INTÉRIEUR',
  'EXTÉRIEUR',
]

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)

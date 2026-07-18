const createImages = (slug) => [
  `/images/stones/${slug}-1.jpg`,

]

const categoryProfiles = {
  'Pierre Naturelle & Taza': {
    collection: 'Collection Pierre Naturelle & Taza',
    description:
      'Issue du patrimoine minéral marocain, cette pierre naturelle offre résistance, durabilité et authenticité pour les projets intérieurs comme extérieurs.',
    applications: [
      'Façades',
      'Sols',
      'Murs',
      'Escaliers',
      'Terrasses',
      'Jardins',
      'Aménagement intérieur',
      'Aménagement extérieur',
    ],
    advantages: [
      'Pierre naturelle marocaine',
      'Grande résistance',
      'Utilisation intérieure et extérieure',
      'Longue durée de vie',
    ],
  },

  'Marbre Local': {
    collection: 'Collection Marbre Local',
    description:
      'Ce marbre marocain se distingue par son identité minérale, sa résistance et son rendu décoratif élégant pour les projets résidentiels et professionnels.',
    applications: [
      'Sols',
      'Escaliers',
      'Murs',
      'Façades',
      'Plans de travail',
      'Décoration',
      'Aménagement intérieur',
      'Aménagement extérieur',
    ],
    advantages: [
      'Origine marocaine',
      'Aspect décoratif naturel',
      'Résistance remarquable',
      'Finition haut de gamme',
    ],
  },

  Granit: {
    collection: 'Collection Granit',
    description:
      'Le granit est une pierre naturelle particulièrement robuste, adaptée aux surfaces soumises aux chocs, aux rayures, à la chaleur et aux variations climatiques.',
    applications: [
      'Plans de travail',
      'Sols',
      'Escaliers',
      'Façades',
      'Terrasses',
      'Murs',
      'Aménagement intérieur',
      'Aménagement extérieur',
    ],
    advantages: [
      'Résistance aux chocs',
      'Résistance à la chaleur',
      'Faible entretien',
      'Excellente durabilité',
    ],
  },

  Ardoise: {
    collection: 'Collection Ardoise',
    description:
      'L’ardoise est une pierre naturelle à la texture fine et au caractère authentique, idéale pour les revêtements décoratifs et les espaces contemporains.',
    applications: [
      'Revêtements muraux',
      'Façades',
      'Sols',
      'Terrasses',
      'Jardins',
      'Décoration',
      'Aménagement intérieur',
      'Aménagement extérieur',
    ],
    advantages: [
      'Texture naturelle',
      'Résistance à l’humidité',
      'Nuances authentiques',
      'Utilisation polyvalente',
    ],
  },
}

const createStone = ({
  slug,
  name,
  category,
  finish,
  tone,
  shortDescription,
  description,
  tagline,
  applications,
  advantages,
}) => {
  const profile = categoryProfiles[category]

  const finalApplications =
    applications?.length > 0 ? applications : profile.applications

  const finalAdvantages =
    advantages?.length > 0 ? advantages : profile.advantages

  return {
    slug,
    name,
    category,
    categoryKey: category.toUpperCase(),
    collection: profile.collection,
    finish,
    tone,

    shortDescription,

    description: [
      description,
      `${name} convient particulièrement aux ${finalApplications
        .slice(0, 6)
        .join(', ')}. ${profile.description} Son aspect naturel permet de créer des réalisations élégantes, solides et adaptées aux exigences de l’architecture moderne.`,
    ],

    tagline:
      tagline ||
      `${name} : authenticité, résistance et élégance naturelle.`,

    applications: finalApplications,
    advantages: finalAdvantages,

    images: createImages(slug),

    seoTitle: `${name} | Les Pierres de Hamza`,

    seoDescription: `${shortDescription} Découvrez ${name}, disponible chez Les Pierres de Hamza à Taza, Maroc.`,
  }
}

export const stones = [
  // =====================================================
  // PIERRE NATURELLE & TAZA
  // =====================================================

  createStone({
    slug: 'beige-taza-boucharde',
    name: 'Beige Taza Bouchardé',
    category: 'Pierre Naturelle & Taza',
    finish: 'Bouchardée',
    tone: 'Beige naturel',
    shortDescription:
      'Une pierre beige texturée offrant adhérence, résistance et caractère naturel.',
    description:
      'Le Beige Taza Bouchardé est une pierre naturelle marocaine travaillée avec une finition bouchardée qui crée une surface légèrement rugueuse et régulière. Cette texture met en valeur la couleur beige naturelle de la pierre tout en améliorant son adhérence.',
    tagline:
      'Beige Taza Bouchardé : relief naturel, résistance et élégance.',
    applications: [
      'Façades',
      'Sols extérieurs',
      'Escaliers',
      'Terrasses',
      'Allées',
      'Contours de piscine',
    ],
    advantages: [
      'Surface antidérapante',
      'Grande résistance',
      'Aspect naturel',
      'Adaptée aux espaces extérieurs',
    ],
  }),

  createStone({
    slug: 'beige-taza-poli',
    name: 'Beige Taza Poli',
    category: 'Pierre Naturelle & Taza',
    finish: 'Polie',
    tone: 'Beige lumineux',
    shortDescription:
      'Une pierre beige polie au rendu lisse, lumineux et particulièrement élégant.',
    description:
      'Le Beige Taza Poli bénéficie d’une finition lisse qui révèle les nuances naturelles et les détails minéraux de la pierre. Son aspect raffiné apporte luminosité, douceur et élégance aux espaces intérieurs.',
    tagline:
      'Beige Taza Poli : une finition raffinée pour des espaces élégants.',
    applications: [
      'Sols intérieurs',
      'Murs décoratifs',
      'Escaliers',
      'Halls',
      'Salons',
      'Plans décoratifs',
    ],
    advantages: [
      'Surface lisse',
      'Aspect lumineux',
      'Entretien facile',
      'Finition élégante',
    ],
  }),

  createStone({
    slug: 'beige-taza-brut',
    name: 'Beige Taza Brut',
    category: 'Pierre Naturelle & Taza',
    finish: 'Brute',
    tone: 'Beige naturel',
    shortDescription:
      'Une pierre beige conservant son relief naturel et son aspect minéral authentique.',
    description:
      'Le Beige Taza Brut conserve l’apparence originale de la pierre après extraction. Sa surface irrégulière, ses variations de teinte et son caractère minéral en font un matériau particulièrement adapté aux réalisations authentiques.',
    tagline:
      'Beige Taza Brut : la pierre naturelle dans toute son authenticité.',
    applications: [
      'Façades',
      'Murs extérieurs',
      'Murs décoratifs',
      'Jardins',
      'Aménagements paysagers',
      'Décoration rustique',
    ],
    advantages: [
      'Aspect authentique',
      'Relief naturel',
      'Grande robustesse',
      'Chaque pièce est unique',
    ],
  }),

  createStone({
    slug: 'beige-taza-vieilli',
    name: 'Beige Taza Vieilli',
    category: 'Pierre Naturelle & Taza',
    finish: 'Vieillie',
    tone: 'Beige chaleureux',
    shortDescription:
      'Une finition vieillie au charme intemporel pour les projets traditionnels et contemporains.',
    description:
      'Le Beige Taza Vieilli est travaillé afin d’obtenir une surface douce, légèrement patinée et des bords naturellement irréguliers. Cette finition apporte à la pierre un aspect ancien et chaleureux.',
    tagline:
      'Beige Taza Vieilli : le charme du temps associé à la solidité de la pierre.',
    applications: [
      'Sols',
      'Terrasses',
      'Patios',
      'Escaliers',
      'Murs',
      'Maisons traditionnelles',
    ],
    advantages: [
      'Aspect ancien naturel',
      'Toucher agréable',
      'Style intemporel',
      'Grande durabilité',
    ],
  }),

  createStone({
    slug: 'beige-taza-strie',
    name: 'Beige Taza Strié',
    category: 'Pierre Naturelle & Taza',
    finish: 'Striée',
    tone: 'Beige naturel',
    shortDescription:
      'Une pierre beige structurée par des lignes régulières créant relief et mouvement.',
    description:
      'Le Beige Taza Strié possède une finition composée de lignes sculptées dans la surface de la pierre. Ces stries donnent du rythme au matériau et créent un effet décoratif architectural.',
    tagline:
      'Beige Taza Strié : texture, mouvement et élégance architecturale.',
    applications: [
      'Façades',
      'Murs décoratifs',
      'Entrées',
      'Colonnes',
      'Aménagement intérieur',
      'Aménagement extérieur',
    ],
    advantages: [
      'Relief décoratif',
      'Style contemporain',
      'Effet architectural',
      'Pierre résistante',
    ],
  }),

  createStone({
    slug: 'beige-taza-veinage',
    name: 'Beige Taza Veinage',
    category: 'Pierre Naturelle & Taza',
    finish: 'Veinée',
    tone: 'Beige nuancé',
    shortDescription:
      'Une pierre beige aux veinures naturelles qui rendent chaque élément unique.',
    description:
      'Le Beige Taza Veinage se caractérise par des lignes et variations minérales naturellement présentes dans la pierre. Son veinage apporte profondeur, personnalité et raffinement aux surfaces.',
    tagline:
      'Beige Taza Veinage : des nuances naturelles pour une décoration unique.',
    applications: [
      'Murs décoratifs',
      'Sols',
      'Escaliers',
      'Halls',
      'Salons',
      'Espaces professionnels',
    ],
    advantages: [
      'Veinage naturel',
      'Chaque dalle est unique',
      'Rendu élégant',
      'Nuances chaleureuses',
    ],
  }),

  createStone({
    slug: 'beige-taza-sable',
    name: 'Beige Taza Sablé',
    category: 'Pierre Naturelle & Taza',
    finish: 'Sablée',
    tone: 'Beige doux',
    shortDescription:
      'Une finition sablée homogène, douce et naturellement antidérapante.',
    description:
      'Le Beige Taza Sablé est obtenu par projection de sable sur la surface de la pierre. Ce traitement crée une texture fine et régulière tout en conservant la teinte beige naturelle.',
    tagline:
      'Beige Taza Sablé : douceur visuelle, adhérence et résistance.',
    applications: [
      'Façades',
      'Terrasses',
      'Sols extérieurs',
      'Escaliers',
      'Allées',
      'Contours de piscine',
    ],
    advantages: [
      'Surface homogène',
      'Bonne adhérence',
      'Résistance extérieure',
      'Aspect doux et naturel',
    ],
  }),

  createStone({
    slug: 'gris-taza-boucharde',
    name: 'Gris Taza Bouchardé',
    category: 'Pierre Naturelle & Taza',
    finish: 'Bouchardée',
    tone: 'Gris minéral',
    shortDescription:
      'Une pierre grise texturée offrant solidité, adhérence et caractère contemporain.',
    description:
      'Le Gris Taza Bouchardé possède une surface travaillée par percussion pour obtenir une texture régulière et antidérapante. Sa couleur grise sobre s’intègre parfaitement aux architectures modernes.',
    tagline:
      'Gris Taza Bouchardé : une finition robuste pour les espaces contemporains.',
    applications: [
      'Façades',
      'Sols extérieurs',
      'Terrasses',
      'Escaliers',
      'Allées',
      'Espaces publics',
    ],
    advantages: [
      'Excellente adhérence',
      'Résistance aux intempéries',
      'Aspect contemporain',
      'Entretien simple',
    ],
  }),

  createStone({
    slug: 'gris-taza-poli',
    name: 'Gris Taza Poli',
    category: 'Pierre Naturelle & Taza',
    finish: 'Polie',
    tone: 'Gris élégant',
    shortDescription:
      'Une pierre grise lisse et brillante pour des intérieurs modernes et raffinés.',
    description:
      'Le Gris Taza Poli révèle grâce au polissage une surface lisse et légèrement brillante. Cette finition souligne la profondeur de sa couleur grise et lui donne un aspect élégant.',
    tagline:
      'Gris Taza Poli : sobriété moderne et finition raffinée.',
    applications: [
      'Sols intérieurs',
      'Escaliers',
      'Murs',
      'Halls',
      'Bureaux',
      'Espaces commerciaux',
    ],
    advantages: [
      'Finition lisse',
      'Style moderne',
      'Nettoyage facile',
      'Élégance minérale',
    ],
  }),

  createStone({
    slug: 'gris-taza-brut',
    name: 'Gris Taza Brut',
    category: 'Pierre Naturelle & Taza',
    finish: 'Brute',
    tone: 'Gris naturel',
    shortDescription:
      'Une pierre grise brute au relief marqué pour les projets authentiques.',
    description:
      'Le Gris Taza Brut conserve son relief naturel, ses irrégularités et ses nuances minérales. Son caractère robuste permet de créer des murs, façades et aménagements extérieurs durables.',
    tagline:
      'Gris Taza Brut : force minérale et authenticité naturelle.',
    applications: [
      'Façades',
      'Murs',
      'Jardins',
      'Clôtures',
      'Aménagements paysagers',
      'Décoration extérieure',
    ],
    advantages: [
      'Relief naturel',
      'Grande solidité',
      'Aspect authentique',
      'Résistance climatique',
    ],
  }),

  createStone({
    slug: 'gris-taza-vieilli',
    name: 'Gris Taza Vieilli',
    category: 'Pierre Naturelle & Taza',
    finish: 'Vieillie',
    tone: 'Gris patiné',
    shortDescription:
      'Une pierre grise patinée offrant un rendu ancien, doux et intemporel.',
    description:
      'Le Gris Taza Vieilli est travaillé pour reproduire naturellement l’effet du temps. Ses bords adoucis et sa surface patinée donnent aux projets un aspect ancien et élégant.',
    tagline:
      'Gris Taza Vieilli : l’élégance du temps dans une pierre durable.',
    applications: [
      'Sols',
      'Patios',
      'Terrasses',
      'Escaliers',
      'Murs',
      'Maisons traditionnelles',
    ],
    advantages: [
      'Aspect patiné',
      'Style intemporel',
      'Surface agréable',
      'Grande longévité',
    ],
  }),

  createStone({
    slug: 'gris-taza-veinage',
    name: 'Gris Taza Veinage',
    category: 'Pierre Naturelle & Taza',
    finish: 'Veinée',
    tone: 'Gris nuancé',
    shortDescription:
      'Une pierre grise aux veinures naturelles élégantes et distinctives.',
    description:
      'Le Gris Taza Veinage présente des variations de teinte et des lignes naturelles formées dans la matière. Ces caractéristiques donnent à chaque élément une identité unique.',
    tagline:
      'Gris Taza Veinage : une identité minérale unique pour chaque espace.',
    applications: [
      'Sols',
      'Murs décoratifs',
      'Escaliers',
      'Halls',
      'Façades',
      'Décoration intérieure',
    ],
    advantages: [
      'Veinures naturelles',
      'Aspect unique',
      'Style raffiné',
      'Pierre polyvalente',
    ],
  }),

  createStone({
    slug: 'gris-taza-strie',
    name: 'Gris Taza Strié',
    category: 'Pierre Naturelle & Taza',
    finish: 'Striée',
    tone: 'Gris contemporain',
    shortDescription:
      'Une surface grise structurée par des lignes décoratives modernes.',
    description:
      'Le Gris Taza Strié est travaillé avec des rainures régulières qui renforcent son caractère architectural. Sa couleur grise et son relief créent un rendu moderne et dynamique.',
    tagline:
      'Gris Taza Strié : relief contemporain et caractère architectural.',
    applications: [
      'Façades',
      'Murs décoratifs',
      'Entrées',
      'Colonnes',
      'Espaces commerciaux',
      'Décoration extérieure',
    ],
    advantages: [
      'Relief graphique',
      'Style moderne',
      'Rendu architectural',
      'Bonne résistance',
    ],
  }),

  createStone({
    slug: 'gris-taza-sable',
    name: 'Gris Taza Sablé',
    category: 'Pierre Naturelle & Taza',
    finish: 'Sablée',
    tone: 'Gris doux',
    shortDescription:
      'Une pierre grise à texture sablée fine, homogène et antidérapante.',
    description:
      'Le Gris Taza Sablé possède une surface mate obtenue par sablage. Cette finition régulière adoucit la couleur grise tout en offrant une bonne adhérence.',
    tagline:
      'Gris Taza Sablé : sobriété, adhérence et finition naturelle.',
    applications: [
      'Façades',
      'Terrasses',
      'Sols extérieurs',
      'Escaliers',
      'Allées',
      'Contours de piscine',
    ],
    advantages: [
      'Surface mate',
      'Bonne adhérence',
      'Résistance extérieure',
      'Aspect homogène',
    ],
  }),

  createStone({
    slug: 'pierre-volcanique',
    name: 'Pierre Volcanique',
    category: 'Pierre Naturelle & Taza',
    finish: 'Naturelle',
    tone: 'Gris volcanique',
    shortDescription:
      'Une pierre de caractère à la texture volcanique naturellement robuste.',
    description:
      'La Pierre Volcanique se distingue par sa structure minérale, sa texture irrégulière et sa grande résistance. Elle apporte une présence forte et authentique aux projets architecturaux.',
    tagline:
      'Pierre Volcanique : caractère minéral, authenticité et résistance.',
    applications: [
      'Façades',
      'Murs',
      'Jardins',
      'Terrasses',
      'Cheminées',
      'Aménagement paysager',
    ],
    advantages: [
      'Texture volcanique',
      'Résistance élevée',
      'Aspect naturel',
      'Forte personnalité',
    ],
  }),

  createStone({
    slug: 'pierre-volcanique-noire',
    name: 'Pierre Volcanique Noire',
    category: 'Pierre Naturelle & Taza',
    finish: 'Naturelle',
    tone: 'Noir volcanique',
    shortDescription:
      'Une pierre volcanique noire aux nuances profondes et au caractère architectural puissant.',
    description:
      'La Pierre Volcanique Noire associe une couleur sombre profonde à une texture minérale naturellement irrégulière. Elle permet de créer des contrastes élégants et contemporains.',
    tagline:
      'Pierre Volcanique Noire : profondeur, contraste et force naturelle.',
    applications: [
      'Façades',
      'Murs décoratifs',
      'Cheminées',
      'Jardins',
      'Terrasses',
      'Décoration contemporaine',
    ],
    advantages: [
      'Couleur noire profonde',
      'Texture naturelle',
      'Excellente résistance',
      'Style contemporain',
    ],
  }),

  createStone({
    slug: 'volubilis',
    name: 'Volubilis',
    category: 'Pierre Naturelle & Taza',
    finish: 'Naturelle',
    tone: 'Beige chaleureux',
    shortDescription:
      'Une pierre naturelle aux teintes chaleureuses inspirée du patrimoine marocain.',
    description:
      'La pierre Volubilis se caractérise par ses nuances naturelles, sa texture raffinée et son charme intemporel. Elle apporte chaleur et authenticité aux espaces résidentiels et professionnels.',
    tagline:
      'Volubilis : l’élégance naturelle inspirée du patrimoine marocain.',
    applications: [
      'Sols',
      'Murs',
      'Façades',
      'Terrasses',
      'Escaliers',
      'Aménagement extérieur',
    ],
    advantages: [
      'Teintes chaleureuses',
      'Charme intemporel',
      'Bonne durabilité',
      'Utilisation polyvalente',
    ],
  }),

  createStone({
    slug: 'pierre-naturelle',
    name: 'Pierre Naturelle',
    category: 'Pierre Naturelle & Taza',
    finish: 'Naturelle',
    tone: 'Nuances naturelles',
    shortDescription:
      'Une matière authentique et polyvalente adaptée à de nombreux projets.',
    description:
      'La Pierre Naturelle est un matériau durable sélectionné pour sa beauté, sa résistance et sa diversité. Ses nuances, textures et irrégularités donnent une identité unique à chaque réalisation.',
    tagline:
      'Pierre Naturelle : une matière authentique au service de vos projets.',
  }),

  createStone({
    slug: 'eclate-gris-taza',
    name: 'Éclaté Gris Taza',
    category: 'Pierre Naturelle & Taza',
    finish: 'Éclatée',
    tone: 'Gris minéral',
    shortDescription:
      'Une pierre grise éclatée offrant relief, profondeur et résistance.',
    description:
      'L’Éclaté Gris Taza révèle la structure naturelle de la pierre grâce à une finition irrégulière et texturée. Sa couleur grise crée un rendu sobre et puissant.',
    tagline:
      'Éclaté Gris Taza : texture minérale et élégance contemporaine.',
    applications: [
      'Façades',
      'Murs décoratifs',
      'Clôtures',
      'Cheminées',
      'Jardins',
      'Décoration extérieure',
    ],
    advantages: [
      'Relief naturel',
      'Couleur contemporaine',
      'Résistance climatique',
      'Aspect architectural',
    ],
  }),


  createStone({
    slug: 'eclate-volubilis',
    name: 'Éclaté Volubilis',
    category: 'Pierre Naturelle & Taza',
    finish: 'Éclatée',
    tone: 'Beige nuancé',
    shortDescription:
      'Une pierre Volubilis éclatée au relief chaleureux et authentique.',
    description:
      'L’Éclaté Volubilis combine les nuances chaleureuses de la pierre Volubilis à une surface fortement texturée. Il crée des murs décoratifs naturels et expressifs.',
    tagline:
      'Éclaté Volubilis : chaleur naturelle, texture et authenticité.',
    applications: [
      'Façades',
      'Murs décoratifs',
      'Cheminées',
      'Jardins',
      'Colonnes',
      'Entrées',
    ],
    advantages: [
      'Teintes chaleureuses',
      'Relief naturel',
      'Effet décoratif',
      'Grande longévité',
    ],
  }),

  createStone({
    slug: 'eclate-rouge-rose',
    name: 'Éclaté Rouge Rosé',
    category: 'Pierre Naturelle & Taza',
    finish: 'Éclatée',
    tone: 'Rouge rosé',
    shortDescription:
      'Une pierre éclatée aux nuances rouges et rosées pour des projets originaux.',
    description:
      'L’Éclaté Rouge Rosé se distingue par ses nuances chaudes et sa surface irrégulière. Il apporte couleur, relief et personnalité aux murs et aménagements extérieurs.',
    tagline:
      'Éclaté Rouge Rosé : couleur naturelle et caractère minéral.',
    applications: [
      'Façades',
      'Murs décoratifs',
      'Jardins',
      'Clôtures',
      'Cheminées',
      'Décoration extérieure',
    ],
    advantages: [
      'Couleurs chaleureuses',
      'Relief authentique',
      'Rendu original',
      'Résistance extérieure',
    ],
  }),

  createStone({
    slug: 'pierre-taza-beige-eclatee',
    name: 'Pierre Taza Beige Éclatée',
    category: 'Pierre Naturelle & Taza',
    finish: 'Éclatée',
    tone: 'Beige naturel',
    shortDescription:
      'Une pierre beige éclatée offrant texture, relief et profondeur.',
    description:
      'La Pierre Taza Beige Éclatée possède une surface brute révélant la structure naturelle de la matière. Sa teinte beige apporte chaleur et luminosité aux projets.',
    tagline:
      'Pierre Taza Beige Éclatée : authenticité et relief naturel.',
    applications: [
      'Façades',
      'Murs',
      'Colonnes',
      'Clôtures',
      'Jardins',
      'Décoration',
    ],
    advantages: [
      'Relief naturel',
      'Teinte lumineuse',
      'Grande résistance',
      'Aspect authentique',
    ],
  }),

  createStone({
    slug: 'pierre-taza-beige-30-10',
    name: 'Pierre Taza Beige 30/10 cm',
    category: 'Pierre Naturelle & Taza',
    finish: 'Naturelle',
    tone: 'Beige naturel',
    shortDescription:
      'Un format rectangulaire beige adapté aux murs et compositions décoratives.',
    description:
      'La Pierre Taza Beige 30/10 cm est proposée dans un format régulier facilitant la création de revêtements linéaires. Sa couleur beige naturelle s’adapte aux styles traditionnels et modernes.',
    tagline:
      'Pierre Taza Beige 30/10 cm : régularité, chaleur et polyvalence.',
    applications: [
      'Murs décoratifs',
      'Façades',
      'Soubassements',
      'Colonnes',
      'Entrées',
      'Aménagement intérieur',
    ],
    advantages: [
      'Format régulier',
      'Pose facilitée',
      'Teinte chaleureuse',
      'Utilisation polyvalente',
    ],
  }),

  createStone({
    slug: 'pierre-taza-grise-30-10',
    name: 'Pierre Taza Grise 30/10 cm',
    category: 'Pierre Naturelle & Taza',
    finish: 'Naturelle',
    tone: 'Gris minéral',
    shortDescription:
      'Une pierre grise au format 30/10 cm pour des compositions modernes.',
    description:
      'La Pierre Taza Grise 30/10 cm associe une couleur grise sobre à un format rectangulaire pratique. Elle permet de réaliser des surfaces régulières et contemporaines.',
    tagline:
      'Pierre Taza Grise 30/10 cm : sobriété moderne et qualité naturelle.',
    applications: [
      'Façades',
      'Murs décoratifs',
      'Soubassements',
      'Entrées',
      'Colonnes',
      'Espaces commerciaux',
    ],
    advantages: [
      'Format pratique',
      'Style contemporain',
      'Bonne résistance',
      'Pose régulière',
    ],
  }),

  createStone({
    slug: 'pierre-taza-grise-polie-20-20',
    name: 'Pierre Taza Grise (Polie, 20/20 cm)',
    category: 'Pierre Naturelle & Taza',
    finish: 'Polie',
    tone: 'Gris élégant',
    shortDescription:
      'Une pierre grise polie au format carré pour des surfaces régulières.',
    description:
      'La Pierre Taza Grise Polie 20/20 cm possède une surface lisse et un format carré adapté aux compositions géométriques. Sa teinte grise crée un rendu élégant et contemporain.',
    tagline:
      'Pierre Taza Grise Polie 20/20 cm : précision et élégance.',
    applications: [
      'Sols intérieurs',
      'Murs',
      'Escaliers',
      'Halls',
      'Salles de bains',
      'Décoration',
    ],
    advantages: [
      'Format carré',
      'Surface polie',
      'Entretien simple',
      'Style contemporain',
    ],
  }),

  createStone({
    slug: 'pierre-taza-beige-bouchardee-30-30',
    name: 'Pierre Taza Beige (Bouchardée, 30/30 cm)',
    category: 'Pierre Naturelle & Taza',
    finish: 'Bouchardée',
    tone: 'Beige naturel',
    shortDescription:
      'Une dalle beige bouchardée au format carré, résistante et antidérapante.',
    description:
      'La Pierre Taza Beige Bouchardée 30/30 cm offre un format régulier et une texture rugueuse. Elle représente une solution durable pour les surfaces nécessitant une bonne adhérence.',
    tagline:
      'Pierre Taza Beige Bouchardée 30/30 cm : adhérence et durabilité.',
    applications: [
      'Terrasses',
      'Sols extérieurs',
      'Escaliers',
      'Allées',
      'Patios',
      'Contours de piscine',
    ],
    advantages: [
      'Surface antidérapante',
      'Format régulier',
      'Résistance extérieure',
      'Pose facilitée',
    ],
  }),

  createStone({
    slug: 'pierre-taza-beige-polie-30-60',
    name: 'Pierre Taza Beige (Polie, 30/60 cm)',
    category: 'Pierre Naturelle & Taza',
    finish: 'Polie',
    tone: 'Beige lumineux',
    shortDescription:
      'Une grande dalle beige polie pour des espaces élégants et lumineux.',
    description:
      'La Pierre Taza Beige Polie 30/60 cm combine un grand format moderne avec une finition lisse. Elle réduit le nombre de joints et crée une impression d’espace et de continuité.',
    tagline:
      'Pierre Taza Beige Polie 30/60 cm : grand format et élégance naturelle.',
    applications: [
      'Sols intérieurs',
      'Murs',
      'Halls',
      'Salons',
      'Escaliers',
      'Espaces professionnels',
    ],
    advantages: [
      'Grand format',
      'Surface lisse',
      'Effet spacieux',
      'Finition élégante',
    ],
  }),

  createStone({
    slug: 'pierre-taza-brut',
    name: 'Pierre Taza Brut',
    category: 'Pierre Naturelle & Taza',
    finish: 'Brute',
    tone: 'Nuances naturelles',
    shortDescription:
      'Une pierre de Taza brute conservant toute son identité minérale.',
    description:
      'La Pierre Taza Brut est proposée avec une surface naturelle non transformée. Son relief, ses variations et ses irrégularités donnent une forte authenticité aux réalisations.',
    tagline:
      'Pierre Taza Brut : la force naturelle de la pierre marocaine.',
    applications: [
      'Façades',
      'Murs',
      'Clôtures',
      'Jardins',
      'Cheminées',
      'Aménagement paysager',
    ],
    advantages: [
      'Aspect brut',
      'Forte résistance',
      'Chaque pièce est unique',
      'Style naturel',
    ],
  }),

  createStone({
    slug: 'pierre-taza-beige-strie',
    name: 'Pierre Taza Beige Strié',
    category: 'Pierre Naturelle & Taza',
    finish: 'Striée',
    tone: 'Beige naturel',
    shortDescription:
      'Une pierre beige striée apportant structure et mouvement aux surfaces.',
    description:
      'La Pierre Taza Beige Strié est travaillée avec des rainures régulières qui structurent la surface. Son relief crée des effets d’ombre et renforce la dimension architecturale.',
    tagline:
      'Pierre Taza Beige Strié : lignes, relief et élégance contemporaine.',
    applications: [
      'Façades',
      'Murs décoratifs',
      'Entrées',
      'Colonnes',
      'Halls',
      'Décoration extérieure',
    ],
    advantages: [
      'Relief graphique',
      'Effet architectural',
      'Teinte chaleureuse',
      'Bonne résistance',
    ],
  }),

  createStone({
    slug: 'pierre-naturelle-beige-carthabon',
    name: 'Pierre Naturelle Beige Carthabon',
    category: 'Pierre Naturelle & Taza',
    finish: 'Naturelle',
    tone: 'Beige chaleureux',
    shortDescription:
      'Une pierre beige naturelle aux nuances douces et chaleureuses.',
    description:
      'La Pierre Naturelle Beige Carthabon se distingue par sa couleur claire, sa texture naturelle et sa polyvalence. Elle apporte luminosité et élégance aux projets intérieurs et extérieurs.',
    tagline:
      'Pierre Naturelle Beige Carthabon : chaleur, lumière et authenticité.',
    applications: [
      'Façades',
      'Sols',
      'Murs',
      'Escaliers',
      'Terrasses',
      'Décoration',
    ],
    advantages: [
      'Teinte lumineuse',
      'Utilisation polyvalente',
      'Aspect naturel',
      'Grande durabilité',
    ],
  }),

  // =====================================================
  // MARBRE LOCAL
  // =====================================================

  createStone({
    slug: 'zola-vieille',
    name: 'Zola Vieille',
    category: 'Marbre Local',
    finish: 'Naturelle',
    tone: 'Nuances vieillies',
    shortDescription:
      'Un marbre local au caractère authentique et aux nuances naturellement profondes.',
    description:
      'Le Zola Vieille est un marbre marocain apprécié pour ses variations de couleur, ses motifs minéraux et son aspect authentique. Il apporte personnalité et élégance aux surfaces.',
    tagline:
      'Zola Vieille : l’identité du marbre marocain dans un rendu intemporel.',
    applications: [
      'Sols',
      'Murs',
      'Escaliers',
      'Halls',
      'Plans décoratifs',
      'Façades',
    ],
    advantages: [
      'Marbre marocain',
      'Nuances uniques',
      'Aspect élégant',
      'Grande résistance',
    ],
  }),

  createStone({
    slug: 'bir-jdid',
    name: 'Bir Jdid',
    category: 'Marbre Local',
    finish: 'Naturelle ou polie',
    tone: 'Nuances minérales',
    shortDescription:
      'Un marbre marocain élégant et résistant pour les projets intérieurs et extérieurs.',
    description:
      'Le marbre Bir Jdid est une pierre locale reconnue pour sa solidité et son rendu décoratif. Ses nuances naturelles permettent de créer des espaces raffinés et durables.',
    tagline:
      'Bir Jdid : qualité marocaine, résistance et élégance naturelle.',
    applications: [
      'Sols',
      'Escaliers',
      'Murs',
      'Plans de travail',
      'Façades',
      'Décoration',
    ],
    advantages: [
      'Origine locale',
      'Bonne résistance',
      'Finition élégante',
      'Utilisation polyvalente',
    ],
  }),

  createStone({
    slug: 'eclate-noir-khenifra',
    name: 'Éclaté Noir Khénifra',
    category: 'Marbre Local',
    finish: 'Éclatée',
    tone: 'Noir profond',
    shortDescription:
      'Un marbre noir éclaté à fort relief pour des murs de caractère.',
    description:
      'L’Éclaté Noir Khénifra possède une surface brute révélant la structure interne de la pierre. Sa couleur sombre et son relief créent un résultat puissant et contemporain.',
    tagline:
      'Éclaté Noir Khénifra : profondeur, texture et caractère marocain.',
    applications: [
      'Façades',
      'Murs décoratifs',
      'Cheminées',
      'Colonnes',
      'Clôtures',
      'Entrées',
    ],
    advantages: [
      'Couleur noire',
      'Relief prononcé',
      'Forte personnalité',
      'Résistance extérieure',
    ],
  }),

  createStone({
    slug: 'eclate-noir-azilal',
    name: 'Éclaté Noir Azilal',
    category: 'Marbre Local',
    finish: 'Éclatée',
    tone: 'Noir minéral',
    shortDescription:
      'Une pierre noire locale éclatée pour créer des contrastes architecturaux.',
    description:
      'L’Éclaté Noir Azilal associe une couleur noire naturelle à une texture fortement irrégulière. Il met en valeur les façades, murs et éléments décoratifs.',
    tagline:
      'Éclaté Noir Azilal : contraste naturel et élégance minérale.',
    applications: [
      'Façades',
      'Murs',
      'Cheminées',
      'Jardins',
      'Colonnes',
      'Décoration extérieure',
    ],
    advantages: [
      'Contraste puissant',
      'Texture naturelle',
      'Bonne durabilité',
      'Rendu contemporain',
    ],
  }),

  // =====================================================
  // GRANIT
  // =====================================================

  createStone({
    slug: 'noir-khenifra',
    name: 'Noir Khénifra',
    category: 'Granit',
    finish: 'Polie, mate ou flammée',
    tone: 'Noir profond',
    shortDescription:
      'Un granit noir marocain robuste et élégant pour les projets exigeants.',
    description:
      'Le Noir Khénifra est un granit marocain à la couleur sombre et au caractère minéral marqué. Sa résistance en fait un choix adapté aux surfaces très sollicitées.',
    tagline:
      'Noir Khénifra : puissance minérale, résistance et élégance.',
    applications: [
      'Plans de travail',
      'Sols',
      'Escaliers',
      'Façades',
      'Terrasses',
      'Monuments',
    ],
    advantages: [
      'Résistance élevée',
      'Couleur profonde',
      'Faible entretien',
      'Finition prestigieuse',
    ],
  }),

  createStone({
    slug: 'gris-khenifra',
    name: 'Gris Khénifra',
    category: 'Granit',
    finish: 'Polie, mate ou flammée',
    tone: 'Gris minéral',
    shortDescription:
      'Un granit gris marocain aux nuances sobres et contemporaines.',
    description:
      'Le Gris Khénifra est apprécié pour sa couleur équilibrée, sa solidité et sa résistance aux usages intensifs. Il s’intègre facilement aux architectures modernes.',
    tagline:
      'Gris Khénifra : sobriété, solidité et polyvalence.',
    applications: [
      'Sols',
      'Plans de travail',
      'Escaliers',
      'Façades',
      'Terrasses',
      'Espaces publics',
    ],
    advantages: [
      'Style contemporain',
      'Résistance aux chocs',
      'Entretien facile',
      'Utilisation intensive',
    ],
  }),

  createStone({
    slug: 'gris-tiflet',
    name: 'Gris Tiflet',
    category: 'Granit',
    finish: 'Polie, mate ou bouchardée',
    tone: 'Gris clair',
    shortDescription:
      'Un granit gris durable et polyvalent pour les surfaces intérieures et extérieures.',
    description:
      'Le Gris Tiflet présente une teinte grise régulière et une structure résistante. Il convient aux grands projets nécessitant durabilité, homogénéité et facilité d’entretien.',
    tagline:
      'Gris Tiflet : une solution durable pour les projets modernes.',
    applications: [
      'Sols',
      'Escaliers',
      'Plans de travail',
      'Façades',
      'Terrasses',
      'Espaces professionnels',
    ],
    advantages: [
      'Teinte homogène',
      'Grande durabilité',
      'Faible entretien',
      'Usage polyvalent',
    ],
  }),

  createStone({
    slug: 'gris-benslimane',
    name: 'Gris Benslimane',
    category: 'Granit',
    finish: 'Polie, mate ou flammée',
    tone: 'Gris moyen',
    shortDescription:
      'Un granit marocain gris adapté aux réalisations sobres et résistantes.',
    description:
      'Le Gris Benslimane offre une couleur minérale équilibrée et une très bonne résistance mécanique. Il est adapté aux projets résidentiels, commerciaux et urbains.',
    tagline:
      'Gris Benslimane : équilibre minéral et performance durable.',
    applications: [
      'Sols',
      'Façades',
      'Terrasses',
      'Escaliers',
      'Plans de travail',
      'Voirie',
    ],
    advantages: [
      'Résistance mécanique',
      'Teinte sobre',
      'Adapté aux grands projets',
      'Entretien limité',
    ],
  }),

  createStone({
    slug: 'noir-azilal',
    name: 'Noir Azilal',
    category: 'Granit',
    finish: 'Polie ou mate',
    tone: 'Noir intense',
    shortDescription:
      'Un granit noir intense offrant prestige, solidité et élégance.',
    description:
      'Le Noir Azilal se distingue par sa couleur profonde et son rendu haut de gamme. Sa robustesse permet son utilisation sur les surfaces intérieures et extérieures.',
    tagline:
      'Noir Azilal : prestige naturel et résistance exceptionnelle.',
    applications: [
      'Plans de travail',
      'Sols',
      'Escaliers',
      'Murs',
      'Façades',
      'Décoration haut de gamme',
    ],
    advantages: [
      'Aspect prestigieux',
      'Grande résistance',
      'Couleur intense',
      'Entretien facile',
    ],
  }),

  createStone({
    slug: 'jaune-bejaad',
    name: 'Jaune Béjaâd',
    category: 'Granit',
    finish: 'Naturelle, polie ou flammée',
    tone: 'Jaune chaleureux',
    shortDescription:
      'Un granit aux nuances jaunes naturelles apportant chaleur et luminosité.',
    description:
      'Le Jaune Béjaâd est un granit marocain caractérisé par ses tons chaleureux et son identité minérale. Il apporte couleur et originalité aux espaces.',
    tagline:
      'Jaune Béjaâd : chaleur naturelle et résistance minérale.',
    applications: [
      'Sols',
      'Façades',
      'Terrasses',
      'Escaliers',
      'Jardins',
      'Espaces publics',
    ],
    advantages: [
      'Couleur chaleureuse',
      'Grande résistance',
      'Rendu original',
      'Usage extérieur',
    ],
  }),

  createStone({
    slug: 'rouge-agadir',
    name: 'Rouge Agadir',
    category: 'Granit',
    finish: 'Naturelle, polie ou flammée',
    tone: 'Rouge minéral',
    shortDescription:
      'Un granit rouge marocain au caractère fort et à la grande durabilité.',
    description:
      'Le Rouge Agadir offre des nuances rouges profondes et une structure particulièrement résistante. Il convient aux projets recherchant une couleur forte et distinctive.',
    tagline:
      'Rouge Agadir : caractère, couleur et robustesse naturelle.',
    applications: [
      'Sols',
      'Façades',
      'Terrasses',
      'Escaliers',
      'Monuments',
      'Aménagement urbain',
    ],
    advantages: [
      'Couleur distinctive',
      'Résistance élevée',
      'Forte personnalité',
      'Longue durée de vie',
    ],
  }),

  // =====================================================
  // ARDOISE
  // =====================================================

  createStone({
    slug: 'pierres-ardoise-vert-foret',
    name: 'Pierres Ardoise Vert Forêt',
    category: 'Ardoise',
    finish: 'Naturelle',
    tone: 'Vert forêt',
    shortDescription:
      'Une ardoise verte aux nuances naturelles profondes et élégantes.',
    description:
      'Les Pierres Ardoise Vert Forêt se distinguent par leurs variations de vert, leur texture feuilletée et leur rendu naturel. Elles s’intègrent parfaitement aux jardins et espaces contemporains.',
    tagline:
      'Ardoise Vert Forêt : la profondeur de la nature dans chaque surface.',
    applications: [
      'Murs',
      'Façades',
      'Jardins',
      'Terrasses',
      'Sols',
      'Aménagement paysager',
    ],
    advantages: [
      'Nuances vertes uniques',
      'Texture naturelle',
      'Bonne résistance',
      'Intégration paysagère',
    ],
  }),

  createStone({
    slug: 'ardoise-gris-beni-khirane',
    name: 'Ardoise Gris Béni Khirane',
    category: 'Ardoise',
    finish: 'Naturelle',
    tone: 'Gris naturel',
    shortDescription:
      'Une ardoise grise marocaine au rendu sobre et contemporain.',
    description:
      'L’Ardoise Gris Béni Khirane offre une texture naturelle, des nuances grises équilibrées et une bonne résistance aux conditions extérieures.',
    tagline:
      'Ardoise Gris Béni Khirane : sobriété marocaine et élégance naturelle.',
    applications: [
      'Façades',
      'Murs',
      'Sols',
      'Terrasses',
      'Jardins',
      'Décoration intérieure',
    ],
    advantages: [
      'Origine marocaine',
      'Teinte contemporaine',
      'Résistance extérieure',
      'Texture authentique',
    ],
  }),

  createStone({
    slug: 'ardoise-violet-fonce',
    name: 'Ardoise Violet Foncé',
    category: 'Ardoise',
    finish: 'Naturelle',
    tone: 'Violet foncé',
    shortDescription:
      'Une ardoise aux nuances violettes profondes pour des projets originaux.',
    description:
      'L’Ardoise Violet Foncé possède une couleur rare et une texture minérale naturellement feuilletée. Elle apporte profondeur et originalité aux surfaces.',
    tagline:
      'Ardoise Violet Foncé : couleur profonde et caractère naturel.',
    applications: [
      'Murs décoratifs',
      'Façades',
      'Sols',
      'Terrasses',
      'Jardins',
      'Décoration',
    ],
    advantages: [
      'Couleur originale',
      'Texture naturelle',
      'Résistance à l’humidité',
      'Rendu décoratif',
    ],
  }),

  createStone({
    slug: 'ardoise',
    name: 'Ardoise',
    category: 'Ardoise',
    finish: 'Naturelle',
    tone: 'Nuances minérales',
    shortDescription:
      'Une pierre fine, naturelle et résistante adaptée aux revêtements.',
    description:
      'L’Ardoise est une pierre naturelle feuilletée reconnue pour sa résistance, sa faible porosité et son caractère décoratif. Elle convient à de nombreuses utilisations.',
    tagline:
      'Ardoise : finesse naturelle, résistance et polyvalence.',
  }),

  createStone({
    slug: 'ardoise-noire',
    name: 'Ardoise Noire',
    category: 'Ardoise',
    finish: 'Naturelle',
    tone: 'Noir profond',
    shortDescription:
      'Une ardoise noire élégante pour des espaces modernes et contrastés.',
    description:
      'L’Ardoise Noire offre une couleur sombre, une texture fine et un rendu contemporain. Elle permet de créer des surfaces sobres et élégantes.',
    tagline:
      'Ardoise Noire : profondeur, sobriété et élégance contemporaine.',
    applications: [
      'Murs',
      'Façades',
      'Sols',
      'Salles de bains',
      'Terrasses',
      'Décoration',
    ],
    advantages: [
      'Couleur profonde',
      'Résistance à l’humidité',
      'Style moderne',
      'Entretien simple',
    ],
  }),

  createStone({
    slug: 'ardoise-verte',
    name: 'Ardoise Verte',
    category: 'Ardoise',
    finish: 'Naturelle',
    tone: 'Vert minéral',
    shortDescription:
      'Une ardoise verte naturelle pour les jardins et espaces décoratifs.',
    description:
      'L’Ardoise Verte présente des nuances végétales et minérales qui s’intègrent naturellement aux paysages. Sa texture apporte relief et authenticité.',
    tagline:
      'Ardoise Verte : harmonie naturelle et caractère minéral.',
    applications: [
      'Jardins',
      'Murs',
      'Façades',
      'Terrasses',
      'Sols',
      'Aménagement paysager',
    ],
    advantages: [
      'Nuances naturelles',
      'Intégration paysagère',
      'Bonne résistance',
      'Texture authentique',
    ],
  }),

  createStone({
    slug: 'plinta',
    name: 'Plinta',
    category: 'Ardoise',
    finish: 'Naturelle',
    tone: 'Nuances foncées',
    shortDescription:
      'Une référence minérale adaptée aux finitions et revêtements décoratifs.',
    description:
      'La Plinta est utilisée pour créer des finitions linéaires, des soubassements et des éléments décoratifs. Sa texture naturelle complète élégamment les revêtements en pierre.',
    tagline:
      'Plinta : une finition naturelle pour des détails architecturaux soignés.',
    applications: [
      'Plinthes',
      'Soubassements',
      'Murs',
      'Façades',
      'Finitions',
      'Décoration',
    ],
    advantages: [
      'Finition soignée',
      'Format pratique',
      'Bonne résistance',
      'Aspect naturel',
    ],
  }),

  createStone({
    slug: 'ardoise-noir-volcan',
    name: 'Ardoise Noir Volcan',
    category: 'Ardoise',
    finish: 'Naturelle',
    tone: 'Noir volcanique',
    shortDescription:
      'Une ardoise noire au caractère volcanique puissant et contemporain.',
    description:
      'L’Ardoise Noir Volcan associe une couleur sombre profonde à une texture minérale marquée. Elle convient aux projets recherchant contraste et personnalité.',
    tagline:
      'Ardoise Noir Volcan : puissance minérale et design contemporain.',
    applications: [
      'Façades',
      'Murs',
      'Sols',
      'Terrasses',
      'Cheminées',
      'Décoration moderne',
    ],
    advantages: [
      'Couleur noire profonde',
      'Forte personnalité',
      'Résistance naturelle',
      'Style contemporain',
    ],
  }),

  createStone({
    slug: 'ardoise-bronzee',
    name: 'Ardoise Bronzée',
    category: 'Ardoise',
    finish: 'Naturelle',
    tone: 'Bronze, brun et rouille',
    shortDescription:
      'Une ardoise aux nuances bronze et rouille offrant chaleur et originalité.',
    description:
      'L’Ardoise Bronzée présente un mélange naturel de tons bruns, dorés, bronze et rouille. Chaque pièce possède des variations uniques qui donnent vie aux surfaces.',
    tagline:
      'Ardoise Bronzée : nuances chaleureuses, texture et authenticité.',
    applications: [
      'Murs décoratifs',
      'Façades',
      'Terrasses',
      'Jardins',
      'Sols',
      'Décoration intérieure',
    ],
    advantages: [
      'Palette naturelle unique',
      'Nuances chaleureuses',
      'Texture authentique',
      'Résistance extérieure',
    ],
  }),
]

export const productCategories = [
  'Tous',
  'Pierre Naturelle & Taza',
  'Marbre Local',
  'Granit',
  'Ardoise',
]

export const stoneCategories = [
  'TOUS',
  'PIERRE NATURELLE & TAZA',
  'MARBRE LOCAL',
  'GRANIT',
  'ARDOISE',
]

export const getStoneBySlug = (slug) =>
  stones.find((stone) => stone.slug === slug)
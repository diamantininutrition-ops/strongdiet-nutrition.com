export type HeroBlock = {
  id: 1;
  kind: "hero";
  pretitle: string;
  line1: string;
  line2: string;
  lede: string;
  cta: string;
};

export type AxisItem = {
  label: string;
  icon: "scale" | "trophy" | "recovery" | "pill" | "gauge";
};

export const site = {
  name: "Strong Diet",
  title: "Strong Diet — Nutrition du sport",
  description:
    "Une approche nutritionnelle conçue pour la haute performance, auprès de combattants professionnels, d’athlètes olympiques et de sportifs de haut niveau.",
  bookingUrl:
    "https://www.doctolib.fr/dieteticien/metz/valentin-diamantini/booking/motives?specialityId=414&telehealth=false&placeId=practice-170936&motiveCategoryIds%5B%5D=468601&pid=practice-170936&source=profile&utm_campaign=gmb&utm_medium=organic&utm_source=google_appointment_redirect",
};

export const block1: HeroBlock = {
  id: 1,
  kind: "hero",
  pretitle: "Nutrition du sport",
  line1: "Construis ta stratégie.",
  line2: "Atteins tes objectifs.",
  lede: "Une approche nutritionnelle conçue pour la haute performance et utilisée auprès de combattants professionnels, d’athlètes olympiques et de sportifs de haut niveau. Pensée pour mieux performer, récupérer plus vite et obtenir des résultats à la hauteur de l’engagement.",
  cta: "Commencer ma préparation nutritionnelle",
};

export const block2: { id: 2; items: AxisItem[] } = {
  id: 2,
  items: [
    { label: "GESTION DU\nPOIDS", icon: "scale" },
    { label: "COMPÉTITION", icon: "trophy" },
    { label: "RÉCUPÉRATION", icon: "recovery" },
    { label: "COMPLÉMENTS\nALIMENTAIRES", icon: "pill" },
    { label: "OPTIMISATION\nDES PERFORMANCES", icon: "gauge" },
  ],
};

export const block3 = {
  id: 3 as const,
  title: "COMMENCER MON ACCOMPAGNEMENT",
  lede: "Analyse individualisée - Stratégie sur mesure - Suivi réactif",
  proofs: [
    {
      kicker: "Nutrition du sportif",
      label: "Combat, endurance et sports de force",
    },
    { kicker: "+ de 500", label: "Sportifs accompagnés" },
    { kicker: "8 ans", label: "D’expérience" },
    {
      kicker: "Athlètes professionnels",
      label: "Olympiques et de haut niveau",
    },
  ],
  intro: {
    lead: "Je suis Valentin Diamantini, diététicien-nutritionniste du sport.",
    paragraphs: [
      "Depuis plusieurs années, j’accompagne des sportifs amateurs, compétiteurs et athlètes de haut niveau dans leur préparation nutritionnelle.",
      "J’ai accompagné plusieurs centaines de sportifs, dont des athlètes olympiques et professionnels, et travaille avec des structures de haut niveau comme le CREPS, l’INSEP et des pôles France en boxe, tir à l’arc et judo. Ces années de terrain ont forgé une expertise technique et scientifique de la nutrition sportive, fondée sur l’analyse, la précision et l’individualisation des stratégies de performance.",
      "Mon objectif : mettre la rigueur, la précision et les exigences du haut niveau au service de chaque sportif déterminé à progresser.",
    ],
  },
};

export const block4 = {
  id: 4 as const,
  title: [
    { text: "Optimise tes performances", tone: "mustard" as const },
    { text: " au plus haut", tone: "fg" as const },
    { text: "niveau avec la ", tone: "fg" as const, breakBefore: true },
    { text: "biostratégie fonctionnelle", tone: "lime" as const },
    { text: ".", tone: "fg" as const },
  ],
  body: [
    {
      text: "La biostratégie fonctionnelle analyse le fonctionnement de ton corps pour ",
      bold: false,
    },
    {
      text: "construire la stratégie nutritionnelle la plus adaptée à ton profil",
      bold: true,
    },
    { text: ". Issue d’un ", bold: false },
    { text: "système utilisé auprès d’athlètes d’élite", bold: true },
    { text: ", elle transpose dans ton ", bold: false },
    { text: "accompagnement", bold: true },
    {
      text: " le degré de précision et d’ajustement exigé par le sport de haut niveau. Contrairement aux méthodes figées, elle évolue selon tes spécificités métaboliques, tes besoins nutritionnels et tes échéances sportives.",
      bold: false,
    },
  ],
};

export const block5 = {
  id: 5 as const,
  title: [
    { text: "Pourquoi " },
    { text: "les meilleurs", bold: true },
    { text: " construisent-ils " },
    { text: "leur propre ", bold: true },
    { text: "stratégie", bold: true, lime: true },
    { text: " ?" },
  ],
  body: [
    {
      text: "Au départ, beaucoup de méthodes semblent fonctionner uniquement parce que le corps compense les limites : ",
    },
    { text: "cet équilibre ", bold: true },
    { text: "ne dure pas", bold: true, ash: true },
    { text: ". Puis, insidieusement, les résultats ne suivent plus : les performances stagnent, la récupération se dégrade et ton poids devient plus difficile à maîtriser. La plupart des méthodes restent basées sur des protocoles génériques" },
    { text: ", peu adaptés aux exigences réelles de la performance." },
    {
      text: "Pour continuer à progresser, la nutrition doit se construire autrement.",
      breakBefore: true,
    },
  ],
  senseTitle: [
    { text: "C’est ici que la ", tone: "fg" as const },
    { text: "stratégie", tone: "lime" as const },
    { text: " prend tout son sens.", tone: "fg" as const },
  ],
  kicker: [
    { text: "La biostratégie fonctionnelle est un ", gold: false },
    { text: "avantage stratégique", gold: true },
    { text: ".", gold: false },
  ],
  senseLead: "Au plus haut niveau, les athlètes adaptent leurs apports avec précision.",
  senseBody: [
    {
      text: "Ils adaptent leur hydratation, leur nutrition et leurs protocoles selon les charges d’entraînement, leur récupération et leurs échéances. ",
      bold: false,
    },
    {
      text: "Chaque décision s’appuie sur les réponses de l’organisme et les résultats observés",
      semibold: true,
    },
    {
      text: " pour déterminer ce qui doit être conservé, affiné ou corrigé. Lorsque chaque détail compte, la différence ne se joue plus sur la discipline, elle se joue sur la ",
      bold: false,
    },
    { text: "précision stratégique de la méthode", bold: true },
    { text: ".", bold: false },
  ],
  senseClose: [
    { text: "Ce sont " },
    { text: "les petits détails", bold: true },
    { text: " qui font " },
    { text: "les ", bold: true },
    { text: "grands résultats", bold: true, lime: true },
    { text: "." },
  ],
};

export const block7: {
  id: 7;
  title: string;
  body: { text: string; bold?: boolean; lime?: boolean }[][];
  next: string;
} = {
  id: 7 as const,
  title: "Commençons ta stratégie nutritionnelle !",
  body: [
    [
      { text: "Tu stagnes", bold: true },
      { text: " malgré tes efforts ? " },
      { text: "Tu veux améliorer tes performances", bold: true },
      { text: " et " },
      { text: "tu en as assez des conseils contradictoires", bold: true },
      { text: " qui ralentissent ta progression ?" },
    ],
    [
      { text: "Débute dès maintenant ta ", bold: true },
      { text: "préparation nutritionnelle", bold: true, lime: true },
      {
        text: " adaptée à tes besoins, à ton fonctionnement et aux exigences de ta discipline, pour performer et atteindre tes objectifs.",
      },
    ],
  ],
  next: "Deux façons de commencer.",
};

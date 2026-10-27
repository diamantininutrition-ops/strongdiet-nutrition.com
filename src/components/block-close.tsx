import { useState } from "react";

const questions = [
  {
    q: "Quelle nutrition pour le sport ?",
    a: [
      <>
        La <strong className="font-bold text-fg">nutrition du sport</strong> consiste à adapter
        l’alimentation aux exigences de la pratique et aux objectifs du sportif. Il ne s’agit pas
        d’un régime standard ni d’un simple calcul de calories. Une{" "}
        <strong className="font-bold text-fg">nutrition du sportif</strong> efficace repose sur
        l’analyse de son fonctionnement, de sa discipline, de sa charge d’entraînement et de sa
        récupération.
      </>,
      "Chez StrongDiet, la nutrition du sport est construite comme une stratégie. Elle tient compte de la digestion, de l’hydratation, de l’énergie disponible et de la composition corporelle. L’objectif est d’optimiser la performance durablement, sans protocoles génériques ni approches identiques pour tous.",
      "Chaque sportif a des besoins différents. La nutrition du sportif doit donc s’ajuster à son profil, à ses contraintes et à ses échéances. C’est cette individualisation qui permet de transformer l’alimentation en outil de progression réel.",
    ],
  },
  {
    q: "Quels sont les besoins nutritionnels du sportif ?",
    a: [
      "Les besoins nutritionnels du sportif varient selon sa discipline, son volume d’entraînement, sa composition corporelle et ses objectifs. Ils ne se limitent pas aux calories ou aux macronutriments. Une nutrition du sport adaptée doit couvrir l’énergie disponible, les protéines, les glucides, les lipides, l’hydratation et les minéraux, tout en tenant compte de la digestion et de la récupération.",
      "La nutrition du sportif efficace s’ajuste à la charge réelle, aux échéances et au fonctionnement individuel. Ce qui convient à un sportif de force ne correspond pas forcément à un pratiquant de sports de combat ou d’efforts hybrides. Les besoins évoluent aussi avec la progression, les compétitions et les phases de récupération.",
      "Chez StrongDiet, ces besoins sont analysés pour construire une stratégie nutritionnelle personnalisée, et non un protocole standard. L’objectif est de soutenir la performance durablement, en évitant les approches génériques qui ignorent les contraintes propres à chaque sportif.",
    ],
  },
  {
    q: "Quelle est la meilleure nutrition sportive ?",
    a: [
      <>
        Il n’existe pas de <strong className="font-bold text-fg">meilleure nutrition sportive</strong>{" "}
        universelle. Ce qui fonctionne pour un sportif peut limiter un autre. La{" "}
        <strong className="font-bold text-fg">nutrition du sport</strong> la plus efficace est celle
        qui s’adapte au fonctionnement réel de la personne, à sa discipline, à sa charge
        d’entraînement et à ses objectifs.
      </>,
      <>
        Une <strong className="font-bold text-fg">nutrition du sportif</strong> performante ne
        repose pas sur un modèle unique de calories ou de macros. Elle prend en compte le profil de
        l'athlète et sa réponse à l'effort. Sont pris en compte l’hydratation, la
        récupération, l’énergie disponible et la composition corporelle. Elle évolue avec la
        progression et les échéances, au lieu de rester figée.
      </>,
      <>
        Chez StrongDiet, la meilleure nutrition sportive est celle qui se construit comme une{" "}
        <strong className="font-bold text-fg">stratégie individualisée</strong>. Elle permet
        d’optimiser la performance durablement, sans protocoles génériques ni approches identiques
        pour tous les sportifs. La précision vient de l’analyse, pas d’un plan standard.
      </>,
    ],
  },
  {
    q: "Comment adapter sa nutrition à sa discipline sportive ?",
    a: [
      <>
        Adapter sa nutrition à sa <strong className="font-bold text-fg">discipline sportive</strong>{" "}
        commence par analyser les exigences spécifiques de la pratique : force, puissance,
        endurance, catégorie de poids ou efforts hybrides. La{" "}
        <strong className="font-bold text-fg">nutrition du sport</strong> ne peut pas être la même
        pour un powerlifter, un combattant ou un pratiquant de CrossFit, et pourtant, beaucoup de
        "méthodes miracles" sont proposées sans s'adapter. Et pourquoi ces méthodes
        ne fonctionnent pas ? Chaque discipline impose des contraintes différentes sur l’énergie, la
        récupération, la réponse à la nutrition et la composition corporelle.
      </>,
      <>
        La <strong className="font-bold text-fg">nutrition du sportif</strong> s’ajuste ensuite au
        volume d’entraînement, aux échéances et au fonctionnement individuel. Les glucides, les
        protéines, l’hydratation et le timing des apports doivent correspondre à la réalité des
        séances, pas à un modèle général. L’objectif est de soutenir la performance sans créer de
        déséquilibres.
      </>,
      <>
        Chez StrongDiet, cette adaptation se construit comme une{" "}
        <strong className="font-bold text-fg">stratégie personnalisée</strong>. Elle évolue avec la
        progression et les contraintes du sportif, pour que l’alimentation serve réellement les
        exigences de sa discipline.
      </>,
    ],
  },
  {
    q: "Faut-il un plan alimentaire pour progresser en sport ?",
    a: [
      <>
        Un <strong className="font-bold text-fg">plan alimentaire</strong> peut aider à structurer
        les apports, mais il ne suffit pas à lui seul pour progresser. La{" "}
        <strong className="font-bold text-fg">nutrition du sport</strong> devient réellement
        efficace lorsqu’elle s’inscrit dans une stratégie adaptée au fonctionnement du sportif, à
        sa discipline et à ses objectifs. Un plan figé ignore souvent l’évolution de la charge, de
        la récupération et des contraintes individuelles.
      </>,
      "Le plan alimentaire en nutrition du sport doit pouvoir s’ajuster. Les retours du sportif, ou sportive, ses sensations, les performances, le poids et la récupération sont des pivots à cette adaptation.",
      <>
        Chez StrongDiet, le plan alimentaire n’est que la traduction concrète d’une{" "}
        <strong className="font-bold text-fg">stratégie nutritionnelle</strong> qui s'est
        affinée au fil de l'accompagnement. Il sert de support, pas de solution unique. Cette
        approche permet d’optimiser la performance durablement, en adaptant l’alimentation au fur et
        à mesure de la progression.
      </>,
    ],
  },
  {
    q: "Comment optimiser sa nutrition pour la performance sportive ?",
    a: [
      <>
        Optimiser sa nutrition pour la <strong className="font-bold text-fg">performance sportive</strong>{" "}
        repose sur une adaptation précise aux charges, à la récupération et aux échéances. Au haut
        niveau, les athlètes ajustent leurs apports, leur hydratation et leurs protocoles selon les
        réponses de leur organisme et les résultats observés. La{" "}
        <strong className="font-bold text-fg">nutrition du sport</strong> ne se résume pas à un
        volume de calories ou de protéines. Elle vise à soutenir l’énergie disponible, la
        composition corporelle et la capacité à enchaîner les efforts.
      </>,
      <>
        La <strong className="font-bold text-fg">nutrition du sportif</strong> gagne en efficacité
        lorsqu’elle est construite à partir du fonctionnement réel, et non d’un modèle standard.
        Cette précision stratégique fait la différence lorsque chaque détail compte.
      </>,
      <>
        Chez StrongDiet, cette approche se traduit par deux formats. La{" "}
        <strong className="font-bold text-fg">consultation individuelle</strong> permet de traiter
        un objectif précis et de poser des consignes personnalisées. La{" "}
        <strong className="font-bold text-fg">Préparation nutritionnelle A2P®</strong> construit un
        suivi planifié et renforcé, avec des protocoles adaptés au projet sportif, que le sportif
        conserve après l’accompagnement.
      </>,
    ],
  },
];

export function BlockClose() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section data-block="10" className="bg-ink px-5 py-16 text-fg sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-center font-display text-5xl font-bold tracking-tight sm:text-7xl">FAQ</p>
        <div className="mt-12 border-t border-white/20">
          {questions.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="border-b border-white/20">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold sm:text-2xl"
                  >
                    {item.q}
                    <span className="shrink-0 text-2xl font-light text-mustard" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen ? (
                  <div className="flex flex-col gap-4 pb-6">
                    {item.a.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex} className="text-base leading-relaxed text-white/80">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { site } from "@/lib/site-content";

function Check({ children, light }: { children: string; light?: boolean }) {
  return (
    <p className="flex items-start gap-3">
      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-field text-snow">
        <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true">
          <path
            d="M5 12.5 9.2 17 19 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={light ? "text-fg/90" : "text-muted"}>{children}</span>
    </p>
  );
}

export function BlockOffers() {
  return (
    <div className="mx-auto mt-[2.45rem] grid max-w-6xl gap-6 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:items-stretch lg:gap-8">
      <article className="flex flex-col rounded-[1.4rem] border border-ink/8 bg-snow p-6 shadow-[0_16px_40px_rgb(10_10_10_/_0.06)] sm:p-8 lg:p-10">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full border border-gold text-gold">
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
              <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
              <path
                d="M5.5 19.2c.8-3.2 3.2-4.8 6.5-4.8s5.7 1.6 6.5 4.8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <p className="font-display text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Suivi personnalisé
          </p>
        </div>
        <h4 className="text-balance mt-6 font-display text-2xl font-semibold leading-tight tracking-tight text-ink-fg sm:text-4xl">
          Consultation individuelle
        </h4>
        <p className="mt-3 text-base italic text-muted sm:text-xl">
          Une stratégie adaptée. Un suivi à ton rythme.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Un suivi de plusieurs consultations d’une heure pour travailler précisément
          sur un besoin : performance, énergie, récupération, digestion, gestion du
          poids ou problématique spécifique à ta discipline.
        </p>
        <div className="my-6 h-px bg-gold" aria-hidden="true" />
        <p className="font-display text-base font-semibold text-ink-fg sm:text-lg">
          Pendant la consultation :
        </p>
        <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed sm:text-base">
          <Check>Analyse de ton profil sportif et de tes objectifs</Check>
          <Check>Conseils nutritionnels individualisés</Check>
          <Check>Ajustements adaptés à ta pratique sportive</Check>
          <Check>Documents et protocoles spécifiques selon tes besoins</Check>
        </div>
        <div className="my-6 h-px bg-gold" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-ink-fg sm:text-base">
          On programme le suivi après consultation, à ton rythme, selon tes objectifs.
        </p>
        <div className="mt-auto pt-8">
          <div className="flex items-center gap-4 rounded-2xl bg-paper px-5 py-4">
            <svg viewBox="0 0 24 24" className="size-7 shrink-0 text-field" aria-hidden="true">
              <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
              <path d="M12 8v4.2l2.6 1.6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <p className="font-display text-lg text-ink-fg sm:text-xl">
              1 heure — <span className="text-2xl font-semibold sm:text-3xl">79 €</span>
            </p>
          </div>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex h-14 items-center justify-center gap-2 rounded-xl bg-forest text-base font-semibold text-fg hover:bg-forest-hover"
          >
            Réserver ma consultation
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>

      <article className="flex flex-col rounded-[1.4rem] bg-ink p-6 text-fg shadow-[0_16px_40px_rgb(10_10_10_/_0.18)] sm:p-8 lg:p-10">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-gold text-ink">
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
              <path
                d="m12 3.2 2.1 4.6 5 .6-3.7 3.4.9 5-4.3-2.4-4.3 2.4.9-5L4.9 8.4l5-.6L12 3.2Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <p className="font-display text-xs font-medium uppercase tracking-[0.16em] text-gold">
            Offre signature
          </p>
        </div>
        <h4 className="text-balance mt-6 font-display text-xl font-semibold leading-tight tracking-tight sm:text-4xl xl:whitespace-nowrap">
          Préparation Nutritionnelle <span className="text-gold">A2P</span>
        </h4>
        <p className="mt-4 text-base font-medium italic leading-snug sm:text-xl">
          La préparation en nutrition du sport pour une optimisation durable.
        </p>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-fg/85 sm:text-base">
          <p>
            Ce programme est conçu pour atteindre tes objectifs et va plus loin : il
            construit une préparation nutritionnelle intégrale, où toute ta nutrition
            est pensée et planifiée, phase après phase, de l’entraînement jusqu’à
            l’échéance.
          </p>
          <p>
            L’accompagnement a une fin, mais tu repars avec plus : un programme
            nutritionnel sur mesure, des stratégies et des protocoles personnalisés,
            construits et éprouvés tout au long de ta préparation.
          </p>
        </div>
        <div className="my-6 h-px bg-gold" aria-hidden="true" />
        <p className="font-display text-base font-semibold text-gold sm:text-lg">
          Pendant ta préparation nutritionnelle :
        </p>
        <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed sm:text-base">
          <Check light>Diagnostic complet de ton projet sportif</Check>
          <Check light>Planification précise de toute ta préparation</Check>
          <Check light>Suivi renforcé, continu entre les rendez-vous</Check>
          <Check light>Élaboration de stratégies et protocoles nutritionnels</Check>
        </div>
        <div className="my-6 h-px bg-gold" aria-hidden="true" />
        <p className="text-sm font-medium leading-relaxed text-gold sm:text-base">
          Une nutrition optimisée, des stratégies et protocoles acquis à vie.
        </p>
        <div className="mt-auto pt-8">
          <div className="flex items-center gap-4 rounded-2xl border border-gold px-5 py-4">
            <svg viewBox="0 0 24 24" className="size-7 shrink-0 text-gold" aria-hidden="true">
              <path
                d="M7 3.5h7l4 4V20a1.2 1.2 0 0 1-1.2 1.2H7A1.2 1.2 0 0 1 5.8 20V4.7A1.2 1.2 0 0 1 7 3.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path d="M14 3.8V8h4.1M8.2 12.2h7.6M8.2 15.6h7.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <p className="font-display text-lg sm:text-xl">
              Sur devis :{" "}
              <span className="font-semibold text-gold">À partir de 307 €</span>
            </p>
          </div>
          <a
            href="/preparation-a2p"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex h-14 items-center justify-center gap-2 rounded-xl bg-mustard text-base font-semibold text-ink hover:opacity-90"
          >
            Commencer ma préparation
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

function Mark({
  n,
  label,
  beside,
  className,
}: {
  n: string;
  label: string;
  beside?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-ink px-6 py-12 text-center text-fg lg:px-4",
        beside && "lg:flex-row lg:gap-8 lg:px-10",
        className,
      )}
    >
      <p className="font-display text-8xl font-semibold leading-none tracking-display lg:text-[9.5rem]">
        {n}
      </p>
      <div className={cn("flex flex-col items-center", beside && "lg:items-start")}>
        <p
          className={cn(
            "mt-3 font-display text-3xl font-semibold tracking-tight lg:text-5xl",
            beside && "lg:mt-0",
          )}
        >
          {label}
        </p>
        <div className="mt-4 h-0.5 w-full bg-gold" aria-hidden="true" />
      </div>
    </div>
  );
}

function Step({
  n,
  label,
  flip,
  edge,
  children,
  beside,
}: {
  n: string;
  label: string;
  flip?: boolean;
  beside?: boolean;
  edge?: "bottom" | "both" | "top";
  children: ReactNode;
}) {
  return (
    <article
      className={cn(
        "lg:grid lg:items-stretch",
        flip
          ? "lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]"
          : "lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)]",
        edge === "bottom" &&
          "lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_calc(100%-6.5rem))]",
        edge === "top" &&
          "lg:-mt-[6.5rem] lg:[clip-path:polygon(0_0,100%_6.5rem,100%_100%,0_100%)]",
      )}
    >
      <Mark n={n} label={label} beside={beside} className={cn(flip && "lg:order-2")} />
      <div
        className={cn(
          "bg-snow px-6 py-10 text-ink-fg sm:px-10 lg:px-14 lg:py-16",
          flip && "lg:order-1",
          edge === "bottom" && "lg:pb-40",
          edge === "top" && "lg:pt-32",
        )}
      >
        {children}
      </div>
    </article>
  );
}

function Check({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-start gap-3">
      <svg
        viewBox="0 0 24 24"
        className="mt-0.5 size-5 shrink-0 text-field lg:mt-1 lg:size-8"
        aria-hidden="true"
      >
        <path
          d="M5 12.5 9.2 17 19 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{children}</span>
    </p>
  );
}

export function BlockPillars() {
  return (
    <section data-block="6" className="bg-snow text-ink-fg">
      <div>
        <div className="hidden h-16 bg-paper lg:block" aria-hidden="true">
          <div className="h-full bg-ink [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
        </div>
        <div className="h-16 bg-ink sm:h-20" aria-hidden="true" />
      </div>

      <div className="bg-snow px-5 text-center">
        <h2 className="pt-14 font-display text-3xl font-semibold tracking-tight sm:pt-16 sm:text-4xl lg:text-5xl">
          Les <span className="text-gold">3 piliers</span> de la{" "}
          <span className="text-field">biostratégie fonctionnelle</span>
        </h2>
        <div
          className="mx-auto my-10 h-px w-48 bg-gold sm:my-12 sm:w-72 lg:w-96"
          aria-hidden="true"
        />
        <h3 className="text-pretty pb-14 font-display text-2xl font-semibold tracking-tight text-ink-fg sm:pb-16 sm:text-3xl lg:text-4xl">
          Comment se passe ton{" "}
          <span className="font-bold">accompagnement en nutrition du sport</span> ?
        </h3>
      </div>

      <div className="hidden bg-snow lg:block" aria-hidden="true">
        <div className="h-24 bg-ink [clip-path:polygon(0_15%,100%_100%,0_100%)]" />
        <div className="h-20 bg-ink" />
      </div>

      <Step n="1" label="ANALYSE">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-base leading-relaxed sm:text-xl">
          <h4 className="text-pretty font-display text-xl font-semibold leading-snug tracking-tight sm:text-3xl">
            Ta préparation nutritionnelle commence par une analyse précise de ton
            fonctionnement.
          </h4>
          <div className="mx-auto h-px w-48 self-center bg-gold lg:w-96" aria-hidden="true" />
          <p>
            On analyse ta disponibilité énergétique, ta capacité de récupération, ta
            réponse aux charges d’entraînement et la manière dont ton organisme
            s’adapte aux différentes intensités. L’évaluation de ces paramètres
            s’appuie sur l’observation croisée de tes données d’entraînement, de tes
            marqueurs de récupération et de l’évolution de tes performances dans le
            temps.
          </p>
          <p className="font-bold lg:text-center">
            Cette lecture précise permet{" "}
            <span className="text-field">
              d’identifier ce qui soutient réellement ta performance
            </span>{" "}
            et <span className="text-cendre">ce qui la limite</span>, à partir de
            données concrètes et mesurables.
          </p>
          <p>
            Tu obtiens ainsi une base solide qui te permettra de construire et
            affiner ta propre stratégie nutritionnelle.
          </p>
        </div>
      </Step>

      <div
        className="hidden h-32 bg-ink lg:-mt-[2px] lg:block [clip-path:polygon(0_0,35%_0,100%_40%,100%_100%,65%_100%,0_46%)]"
        aria-hidden="true"
      />

      <Step n="2" label="ADAPTATION" flip>
        <div className="mx-auto flex max-w-4xl flex-col gap-8 text-left">
          <h4 className="text-pretty text-center font-display text-[1.3125rem] font-semibold leading-snug tracking-tight sm:text-3xl">
            Un accompagnement stratégique en nutrition du sport.
          </h4>
          <div className="mx-auto h-px w-48 self-center bg-gold lg:w-96" aria-hidden="true" />
          <p className="text-center text-base font-semibold leading-snug sm:text-xl lg:font-display lg:text-2xl lg:tracking-tight">
            Ta <span className="text-field">préparation nutritionnelle</span>{" "}
            s’organise autour de plusieurs{" "}
            <span className="text-gold">consultations</span>, de{" "}
            <span className="text-gold">supports spécifiques</span> et d’un{" "}
            <span className="text-gold">suivi continu et réactif</span>.
          </p>
          <p className="text-base leading-relaxed sm:text-xl">
            Chaque étape est revue à partir de tes objectifs, de tes retours, de
            l’évolution de tes entraînements et de tes échéances sportives, en y{" "}
            <span className="font-semibold">intégrant tes contraintes réelles</span>.
            Ces éléments deviennent des données de pilotage qui permettent{" "}
            <span className="font-semibold">
              d’ajuster avec précision ta propre stratégie
            </span>{" "}
            en adaptant tes apports nutritionnels, l’organisation de tes repas et les
            protocoles de nutrition mis en place.
          </p>
          <p className="font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
            Un accompagnement{" "}
            <span className="text-field">au plus proche de ta pratique</span> pour une
            optimisation précise de tes performances.
          </p>
        </div>
      </Step>

      <div
        className="hidden h-32 bg-ink lg:-mt-[2px] lg:block [clip-path:polygon(100%_0,100%_46%,35%_100%,0_100%,0_40%,65%_0)]"
        aria-hidden="true"
      />

      <Step n="3" label="PERFORMANCE">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <h4 className="text-pretty text-xl font-semibold leading-snug sm:text-2xl lg:text-3xl">
            Tu obtiens une{" "}
            <span className="text-field">stratégie nutritionnelle</span> construite{" "}
            <span className="text-gold">pour performer.</span>
          </h4>
          <div className="flex flex-col gap-3 text-base leading-relaxed sm:text-lg lg:gap-4 lg:text-2xl">
            <Check>Une nutrition qui s’adapte et qui est anticipée</Check>
            <Check>Une nutrition alignée sur les exigences de ta discipline</Check>
            <Check>Une couverture complète de ta préparation sportive</Check>
            <Check>Une compréhension fine de ton fonctionnement</Check>
            <Check>Des performances sécurisées pour durer</Check>
          </div>
        </div>
      </Step>
    </section>
  );
}

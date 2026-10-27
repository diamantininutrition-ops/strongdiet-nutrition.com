import type { ComponentType } from "react";
import {
  IconGauge,
  IconPill,
  IconRecovery,
  IconScale,
  IconTrophy,
} from "@/components/axis-icons";
import { block2, block3, type AxisItem } from "@/lib/site-content";

const icons: Record<AxisItem["icon"], ComponentType> = {
  scale: IconScale,
  trophy: IconTrophy,
  recovery: IconRecovery,
  pill: IconPill,
  gauge: IconGauge,
};

function Bolt({ flip = false }: { flip?: boolean }) {
  return (
    <div className="hidden h-full items-center justify-center lg:flex">
      <img
        src="/bolt-ref.png"
        alt=""
        className="h-[69%] w-auto max-w-full object-contain"
        style={flip ? { transform: "scaleX(-1)" } : undefined}
      />
    </div>
  );
}

export function BlockAxis() {
  return (
    <section data-block="2" className="relative z-10">
      <div className="bg-snow text-ink-fg">
        <h2 className="sr-only">Valentin Diamantini, nutritionniste du sport</h2>
        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 pt-14 sm:px-8 sm:pt-16 lg:grid-cols-4 lg:gap-0 lg:px-10 lg:pt-20">
          {block3.proofs.map((item) => (
            <li
              key={item.kicker}
              className="relative text-center max-lg:[&:not(:last-child)]:after:absolute max-lg:[&:not(:last-child)]:after:left-1/4 max-lg:[&:not(:last-child)]:after:right-1/4 max-lg:[&:not(:last-child)]:after:bottom-0 max-lg:[&:not(:last-child)]:after:h-px max-lg:[&:not(:last-child)]:after:translate-y-5 max-lg:[&:not(:last-child)]:after:bg-ink lg:px-4 lg:[&:not(:last-child)]:after:absolute lg:[&:not(:last-child)]:after:top-1/2 lg:[&:not(:last-child)]:after:right-0 lg:[&:not(:last-child)]:after:h-14 lg:[&:not(:last-child)]:after:w-px lg:[&:not(:last-child)]:after:-translate-y-1/2 lg:[&:not(:last-child)]:after:bg-ink"
            >
              {item.kicker === "Nutrition du sportif" ? (
                <h3 className="text-pretty font-display text-xl font-bold tracking-tight text-ink-fg sm:text-2xl">
                  {item.kicker}
                </h3>
              ) : (
                <p className="font-display text-xl font-bold tracking-tight text-ink-fg sm:text-2xl">
                  {item.kicker}
                </p>
              )}
              <p className="mt-2 text-sm text-ink-fg sm:text-base">{item.label}</p>
            </li>
          ))}
        </ul>
        <div className="mx-auto max-w-3xl px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-16 lg:grid lg:max-w-none lg:grid-cols-[minmax(7rem,1fr)_minmax(0,52rem)_minmax(7rem,1fr)] lg:items-stretch lg:gap-10 lg:px-8 lg:pb-14 lg:pt-16">
          <Bolt />
          <div>
            <h3 className="text-pretty text-center font-display text-xl font-semibold leading-snug tracking-tight text-ink-fg sm:text-2xl lg:text-[1.7rem] lg:font-bold">
              {block3.intro.lead}
            </h3>
            <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-fg sm:text-base lg:mt-10 lg:space-y-7 lg:text-[1.05rem] lg:leading-relaxed">
              {block3.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Bolt flip />
        </div>
      </div>

      <div className="bg-ink px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-gold bg-snow px-3 py-4 sm:px-6 lg:rounded-[2.75rem] lg:px-4 lg:py-10">
          <ul className="grid grid-cols-1 lg:grid-cols-5">
            {block2.items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <li
                  key={item.label}
                  className="relative flex flex-col items-center gap-4 px-4 py-7 text-center lg:gap-6 lg:px-5 lg:py-4 [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:bg-gold max-lg:[&:not(:last-child)]:after:inset-x-10 max-lg:[&:not(:last-child)]:after:bottom-0 max-lg:[&:not(:last-child)]:after:h-px lg:[&:not(:last-child)]:after:inset-y-3 lg:[&:not(:last-child)]:after:right-0 lg:[&:not(:last-child)]:after:w-px"
                >
                  <Icon />
                  <h3 className="text-pretty whitespace-pre-line font-display text-xs font-semibold leading-tight tracking-wide text-ink sm:text-sm">
                    {item.label}
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

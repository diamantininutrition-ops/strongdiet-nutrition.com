import { BlockOffers } from "@/components/block-offers";
import { block7 } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function BlockStart() {
  return (
    <section data-block="7" id="produits" className="scroll-mt-20">
      <div className="bg-field px-3 pb-8 pt-8 text-center text-snow sm:px-8 sm:py-20 lg:py-24">
        <h2
          id="commencer"
          className="mx-auto max-w-6xl scroll-mt-16 font-display text-[2rem] font-bold leading-snug tracking-display sm:text-pair lg:text-[3.35rem]"
        >
          {block7.title}
        </h2>
        <div className="mx-auto mt-[1.4rem] h-px w-16 bg-snow sm:mt-10 lg:w-36" aria-hidden="true" />
        <h3 className="text-pretty mx-auto mt-[1.4rem] max-w-4xl font-display text-lg italic leading-snug sm:mt-10 sm:text-2xl lg:max-w-none lg:whitespace-nowrap lg:text-[clamp(1.75rem,3.1vw,2.25rem)]">
          Consultations individuelles et préparation nutritionnelle intégrée
        </h3>
      </div>
      <div className="relative -mt-px h-12 bg-snow sm:h-16 lg:h-20" aria-hidden="true">
        <div className="absolute inset-0 bg-lime [clip-path:polygon(0_0,100%_0,100%_88%,49%_38%,0_100%)]" />
        <div className="absolute inset-0 bg-field [clip-path:polygon(0_0,74%_0,0_100%)]" />
      </div>
      <div className="bg-snow px-5 pb-16 pt-8 text-ink-fg sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-base leading-relaxed sm:text-2xl lg:max-w-5xl lg:gap-8 lg:text-3xl">
          {block7.body.map((paragraph) => (
            <p key={paragraph[0].text}>
              {paragraph.map((part) => (
                <span
                  key={part.text}
                  className={cn(part.bold && "font-extrabold", part.lime && "text-field")}
                >
                  {part.text}
                </span>
              ))}
            </p>
          ))}
        </div>
        <div className="mx-auto mt-[1.75rem] h-px w-16 bg-gold sm:mt-12 lg:w-48" aria-hidden="true" />
        <p className="mt-[1.75rem] text-center font-display text-3xl font-semibold tracking-tight text-ink-fg sm:mt-12 sm:text-4xl lg:text-6xl">
          <span className="font-bold">Deux façons</span> de commencer.
        </p>
        <div className="mx-auto mt-[1.75rem] h-px w-16 bg-gold sm:mt-12 lg:w-48" aria-hidden="true" />
        <BlockOffers />
      </div>
    </section>
  );
}

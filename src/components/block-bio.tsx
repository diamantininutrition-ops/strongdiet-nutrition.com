import { block4 } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function BlockBio() {
  return (
    <section
      data-block="4"
      className="bg-ink px-4 pb-24 pt-5 text-fg sm:px-8 sm:pb-32 sm:pt-12 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-8 h-px w-12 bg-gold lg:mb-12" aria-hidden="true" />
        <img
          src="/logo.png"
          alt="Logo STRONGDIET, nutrition du sport"
          className="mx-auto mb-8 h-28 w-auto sm:h-36 lg:mb-14 lg:h-48"
        />
        <h2 className="-mx-1 text-center font-display text-xl font-semibold leading-snug tracking-display sm:mx-0 sm:text-pair lg:text-[3.35rem]">
          <span className="block whitespace-nowrap">
            <span className="text-mustard">Optimise tes performances</span>
            <span className="text-fg"> au plus haut </span>
          </span>
          <span className="block whitespace-nowrap">
            <span className="text-fg">niveau avec la </span>
            <span className="text-field">biostratégie fonctionnelle</span>
            <span className="text-fg">.</span>
          </span>
        </h2>
        <div className="mx-auto mt-8 h-px w-12 bg-fg" aria-hidden="true" />
        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-fg sm:text-2xl lg:max-w-none">
          {block4.body.map((part) => (
            <span key={part.text} className={cn(part.bold && "font-bold")}>
              {part.text}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

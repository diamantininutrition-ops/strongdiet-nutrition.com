import { block1 } from "@/lib/site-content";

export function BlockHero() {
  return (
    <section
      data-block="1"
      className="relative min-h-dvh overflow-hidden bg-ink text-fg"
    >
      <div className="mx-auto grid min-h-dvh max-w-7xl items-stretch lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 pb-6 pt-24 sm:px-8 lg:px-12 lg:py-16">
          <div className="flex w-full max-w-xl flex-col">
            <h1 className="font-display text-sm font-medium text-muted lg:text-2xl lg:font-bold lg:tracking-tight">
              {block1.pretitle}
            </h1>

            <p className="mt-5 font-display text-hero font-semibold leading-none tracking-display whitespace-nowrap text-gold">
              {block1.line1}
            </p>
            <p className="mt-2 font-display text-hero font-semibold leading-none tracking-display whitespace-nowrap text-fg">
              {block1.line2}
            </p>

            <p className="mt-7 text-base leading-relaxed text-muted">
              {block1.lede}
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="#commencer"
                className="inline-flex h-14 items-center justify-center whitespace-nowrap rounded-pill bg-forest px-5 text-sm font-bold text-fg hover:bg-forest-hover sm:h-16 sm:px-8 sm:text-base lg:px-10 lg:text-lg"
              >
                {block1.cta}
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-ink pb-10 pt-1 lg:min-h-dvh lg:items-center lg:pb-12 lg:pt-20">
          <img
            src="/portrait.png"
            alt="Valentin Diamantini, nutritionniste du sport"
            className="h-80 w-auto max-w-full object-contain object-top sm:h-88 lg:h-[36rem]"
          />
        </div>
      </div>
    </section>
  );
}
